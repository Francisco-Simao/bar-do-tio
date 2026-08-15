import { motion } from 'motion/react';

// =============================================================
// HOURS SECTION
// Horários em placeholders — fácil de substituir.
// =============================================================

interface Day {
  label: string;
  hours: string;
}

const days: Day[] = [
  { label: 'Segunda', hours: '[HORÁRIO]' },
  { label: 'Terça', hours: '[HORÁRIO]' },
  { label: 'Quarta', hours: '[HORÁRIO]' },
  { label: 'Quinta', hours: '[HORÁRIO]' },
  { label: 'Sexta', hours: '[HORÁRIO]' },
  { label: 'Sábado', hours: '[HORÁRIO]' },
  { label: 'Domingo', hours: '[HORÁRIO]' },
];

export function HoursSection() {
  return (
    <section
      id="horarios"
      aria-labelledby="horarios-title"
      className="relative py-16 md:py-20 border-b border-cream-200/8"
    >
      <div className="mx-auto max-w-3xl px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-[10px] md:text-[11px] tracking-wider-3 uppercase text-ember-500 font-editorial">
            Horários
          </span>
          <h2
            id="horarios-title"
            className="mt-2 font-western text-cream-100 text-3xl md:text-4xl"
          >
            Quando a brasa acende
          </h2>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="divide-y divide-cream-200/8 border-y border-cream-200/8"
        >
          {days.map((d) => (
            <li
              key={d.label}
              className="flex items-center justify-between py-3.5"
            >
              <span className="font-editorial text-cream-100 text-lg">
                {d.label}
              </span>
              <span className="font-western text-cream-200/85 text-sm tracking-wide">
                {d.hours}
              </span>
            </li>
          ))}
        </motion.ul>

        <p className="mt-6 text-center text-xs tracking-wider-2 uppercase text-cream-200/45">
          Fechado em datas especiais — confirme pelas redes sociais.
        </p>
      </div>
    </section>
  );
}
