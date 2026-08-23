-- Execute esta migração no SQL Editor do projeto Supabase.
-- Authentication > Providers > Anonymous Sign-Ins também deve estar habilitado.
create table if not exists public.products (
  id text primary key,
  likes_count integer not null default 0 check (likes_count >= 0),
  created_at timestamptz not null default now()
);
create table if not exists public.product_likes (
  product_id text not null references public.products(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (product_id, user_id)
);
alter table public.products enable row level security;
alter table public.product_likes enable row level security;
drop policy if exists "authenticated can read products" on public.products;
create policy "authenticated can read products" on public.products for select to authenticated using (true);
drop policy if exists "users can read their own likes" on public.product_likes;
create policy "users can read their own likes" on public.product_likes for select to authenticated using (user_id = auth.uid());
create or replace function public.get_product_like_snapshot(p_product_id text)
returns table (likes_count integer, liked_by_me boolean)
language plpgsql security definer set search_path = public as $$
begin
  if auth.uid() is null then raise exception 'authentication required'; end if;
  insert into products (id) values (p_product_id) on conflict (id) do nothing;
  return query select p.likes_count, exists (select 1 from product_likes l where l.product_id = p.id and l.user_id = auth.uid()) from products p where p.id = p_product_id;
end; $$;
create or replace function public.toggle_product_like(p_product_id text)
returns table (likes_count integer, liked_by_me boolean)
language plpgsql security definer set search_path = public as $$
declare did_like boolean;
begin
  if auth.uid() is null then raise exception 'authentication required'; end if;
  perform pg_advisory_xact_lock(hashtext(p_product_id || auth.uid()::text));
  insert into products (id) values (p_product_id) on conflict (id) do nothing;
  delete from product_likes where product_id = p_product_id and user_id = auth.uid();
  if found then
    update products set likes_count = greatest(0, likes_count - 1) where id = p_product_id;
    did_like := false;
  else
    insert into product_likes (product_id, user_id) values (p_product_id, auth.uid());
    update products set likes_count = likes_count + 1 where id = p_product_id;
    did_like := true;
  end if;
  return query select p.likes_count, did_like from products p where p.id = p_product_id;
end; $$;
revoke all on function public.get_product_like_snapshot(text) from public;
revoke all on function public.toggle_product_like(text) from public;
grant execute on function public.get_product_like_snapshot(text) to authenticated;
grant execute on function public.toggle_product_like(text) to authenticated;
