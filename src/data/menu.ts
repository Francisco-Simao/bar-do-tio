// =============================================================
// CARDÁPIO DIGITAL — BAR DO TIO
// -------------------------------------------------------------
// Estrutura de dados desacoplada do JSX.
// Substituir futuramente por API / banco / painel admin.
// =============================================================

export interface MenuItem {
  id: string;
  category: string;
  name: string;
  description: string;
  price: string;
  image?: string;
  highlight?: boolean;
}

export interface MenuCategory {
  id: string;
  label: string;
  shortLabel?: string;
  tagline?: string;
  items: MenuItem[];
}

// IDs alinhados com a navegação sticky.
export const CATEGORY_ORDER = [
  'chopp',
  'drinks',
  'drinks-defumados',
  'caipirinhas',
  'cervejas-especiais',
  'nao-alcoolicos',
  'entradas',
  'petiscos-agua-comprida',
  'burguers-artesanais',
  'pit-smoker',
  'carnes-especiais',
  'pontos-parrilla',
  'peixes',
  'fritas',
  'salada',
  'guarnicoes',
  'prato-feito',
  'doses',
  'tequilas',
  'vinhos',
  'whiskys',
  'vodkas',
  'sobremesas',
  'sucos',
  'limonadas-especiais',
  'cafe-expresso',
];

export const menu: MenuCategory[] = [
  // ============== BEBIDAS ==============
  {
    id: 'chopp',
    label: 'Chopp',
    tagline: 'Cerveja tirada na temperatura certa',
    items: [
      {
        id: 'chopp-01',
        category: 'chopp',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição breve do produto, volume e estilo da cerveja.]',
        price: 'R$ XX,XX',
      },
      {
        id: 'chopp-02',
        category: 'chopp',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição breve do produto, volume e estilo da cerveja.]',
        price: 'R$ XX,XX',
      },
      {
        id: 'chopp-03',
        category: 'chopp',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição breve do produto, volume e estilo da cerveja.]',
        price: 'R$ XX,XX',
      },
    ],
  },
  {
    id: 'drinks',
    label: 'Drinks',
    tagline: 'Drinks autorais do bar',
    items: [
      {
        id: 'drinks-01',
        category: 'drinks',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição breve do drink, base alcoólica e notas.]',
        price: 'R$ XX,XX',
        highlight: true,
      },
      {
        id: 'drinks-02',
        category: 'drinks',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição breve do drink, base alcoólica e notas.]',
        price: 'R$ XX,XX',
      },
      {
        id: 'drinks-03',
        category: 'drinks',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição breve do drink, base alcoólica e notas.]',
        price: 'R$ XX,XX',
      },
    ],
  },
  {
    id: 'drinks-defumados',
    label: 'Drinks Defumados',
    tagline: 'Servidos com fumaça na taça',
    items: [
      {
        id: 'drinks-defumados-01',
        category: 'drinks-defumados',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição do drink com defumação artesanal.]',
        price: 'R$ XX,XX',
      },
      {
        id: 'drinks-defumados-02',
        category: 'drinks-defumados',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição do drink com defumação artesanal.]',
        price: 'R$ XX,XX',
      },
      {
        id: 'drinks-defumados-03',
        category: 'drinks-defumados',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição do drink com defumação artesanal.]',
        price: 'R$ XX,XX',
      },
    ],
  },
  {
    id: 'caipirinhas',
    label: 'Caipirinhas',
    tagline: 'Clássicas e da casa',
    items: [
      {
        id: 'caipirinhas-01',
        category: 'caipirinhas',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição da caipirinha, fruta e cachaça utilizada.]',
        price: 'R$ XX,XX',
      },
      {
        id: 'caipirinhas-02',
        category: 'caipirinhas',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição da caipirinha, fruta e cachaça utilizada.]',
        price: 'R$ XX,XX',
      },
      {
        id: 'caipirinhas-03',
        category: 'caipirinhas',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição da caipirinha, fruta e cachaça utilizada.]',
        price: 'R$ XX,XX',
      },
    ],
  },
  {
    id: 'cervejas-especiais',
    label: 'Cervejas Especiais',
    tagline: 'Cervejas artesanais selecionadas',
    items: [
      {
        id: 'cervejas-especiais-01',
        category: 'cervejas-especiais',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição, estilo da cerveja e harmonização sugerida.]',
        price: 'R$ XX,XX',
      },
      {
        id: 'cervejas-especiais-02',
        category: 'cervejas-especiais',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição, estilo da cerveja e harmonização sugerida.]',
        price: 'R$ XX,XX',
      },
      {
        id: 'cervejas-especiais-03',
        category: 'cervejas-especiais',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição, estilo da cerveja e harmonização sugerida.]',
        price: 'R$ XX,XX',
      },
    ],
  },
  {
    id: 'nao-alcoolicos',
    label: 'Não Alcoólicos',
    tagline: 'Sabor de bar sem pressa',
    items: [
      {
        id: 'nao-alcoolicos-01',
        category: 'nao-alcoolicos',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição da bebida, ingredientes e apresentação.]',
        price: 'R$ XX,XX',
      },
      {
        id: 'nao-alcoolicos-02',
        category: 'nao-alcoolicos',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição da bebida, ingredientes e apresentação.]',
        price: 'R$ XX,XX',
      },
      {
        id: 'nao-alcoolicos-03',
        category: 'nao-alcoolicos',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição da bebida, ingredientes e apresentação.]',
        price: 'R$ XX,XX',
      },
    ],
  },

  // ============== ENTRADAS & PETISCOS ==============
  {
    id: 'entradas',
    label: 'Entradas',
    tagline: 'Para começar a noite',
    items: [
      {
        id: 'entradas-01',
        category: 'entradas',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição do prato de entrada e porção servida.]',
        price: 'R$ XX,XX',
      },
      {
        id: 'entradas-02',
        category: 'entradas',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição do prato de entrada e porção servida.]',
        price: 'R$ XX,XX',
      },
      {
        id: 'entradas-03',
        category: 'entradas',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição do prato de entrada e porção servida.]',
        price: 'R$ XX,XX',
      },
    ],
  },
  {
    id: 'petiscos-agua-comprida',
    label: 'Petiscos da Água Comprida',
    tagline: 'Tradição mineira servida na mesa',
    items: [
      {
        id: 'petiscos-01',
        category: 'petiscos-agua-comprida',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição do petisco mineiro e acompanhamento.]',
        price: 'R$ XX,XX',
      },
      {
        id: 'petiscos-02',
        category: 'petiscos-agua-comprida',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição do petisco mineiro e acompanhamento.]',
        price: 'R$ XX,XX',
      },
      {
        id: 'petiscos-03',
        category: 'petiscos-agua-comprida',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição do petisco mineiro e acompanhamento.]',
        price: 'R$ XX,XX',
      },
    ],
  },

  // ============== BURGUERS & CARNES ==============
  {
    id: 'burguers-artesanais',
    label: 'Burguers Artesanais',
    tagline: 'Pão brioche, blend da casa',
    items: [
      {
        id: 'burguers-01',
        category: 'burguers-artesanais',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição do burger, blend, queijos e acompanhamentos.]',
        price: 'R$ XX,XX',
        highlight: true,
      },
      {
        id: 'burguers-02',
        category: 'burguers-artesanais',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição do burger, blend, queijos e acompanhamentos.]',
        price: 'R$ XX,XX',
      },
      {
        id: 'burguers-03',
        category: 'burguers-artesanais',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição do burger, blend, queijos e acompanhamentos.]',
        price: 'R$ XX,XX',
      },
    ],
  },
  {
    id: 'pit-smoker',
    label: 'Pit Smoker',
    tagline: 'Nossas carnes defumadas',
    items: [
      {
        id: 'pit-smoker-01',
        category: 'pit-smoker',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição do corte, tipo de madeira e tempo de defumação.]',
        price: 'R$ XX,XX',
      },
      {
        id: 'pit-smoker-02',
        category: 'pit-smoker',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição do corte, tipo de madeira e tempo de defumação.]',
        price: 'R$ XX,XX',
      },
      {
        id: 'pit-smoker-03',
        category: 'pit-smoker',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição do corte, tipo de madeira e tempo de defumação.]',
        price: 'R$ XX,XX',
      },
    ],
  },
  {
    id: 'carnes-especiais',
    label: 'Carnes Especiais',
    tagline: 'Cortes selecionados',
    items: [
      {
        id: 'carnes-especiais-01',
        category: 'carnes-especiais',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição do corte, peso aproximado e acompanhamento.]',
        price: 'R$ XX,XX',
      },
      {
        id: 'carnes-especiais-02',
        category: 'carnes-especiais',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição do corte, peso aproximado e acompanhamento.]',
        price: 'R$ XX,XX',
      },
      {
        id: 'carnes-especiais-03',
        category: 'carnes-especiais',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição do corte, peso aproximado e acompanhamento.]',
        price: 'R$ XX,XX',
      },
    ],
  },
  {
    id: 'pontos-parrilla',
    label: 'Pontos da Nuestra Parrilla',
    tagline: 'Para a grelha rodar inteira',
    items: [
      {
        id: 'pontos-parrilla-01',
        category: 'pontos-parrilla',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição do corte assado na parrilla e molho sugerido.]',
        price: 'R$ XX,XX',
      },
      {
        id: 'pontos-parrilla-02',
        category: 'pontos-parrilla',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição do corte assado na parrilla e molho sugerido.]',
        price: 'R$ XX,XX',
      },
      {
        id: 'pontos-parrilla-03',
        category: 'pontos-parrilla',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição do corte assado na parrilla e molho sugerido.]',
        price: 'R$ XX,XX',
      },
    ],
  },

  // ============== ACOMPANHAMENTOS ==============
  {
    id: 'peixes',
    label: 'Peixes',
    tagline: 'Frescos do dia',
    items: [
      {
        id: 'peixes-01',
        category: 'peixes',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição do peixe, preparo e acompanhamento.]',
        price: 'R$ XX,XX',
      },
      {
        id: 'peixes-02',
        category: 'peixes',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição do peixe, preparo e acompanhamento.]',
        price: 'R$ XX,XX',
      },
      {
        id: 'peixes-03',
        category: 'peixes',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição do peixe, preparo e acompanhamento.]',
        price: 'R$ XX,XX',
      },
    ],
  },
  {
    id: 'fritas',
    label: 'Fritas',
    tagline: 'Batatas e variações crocantes',
    items: [
      {
        id: 'fritas-01',
        category: 'fritas',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição da porção de fritas e acompanhamentos.]',
        price: 'R$ XX,XX',
      },
      {
        id: 'fritas-02',
        category: 'fritas',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição da porção de fritas e acompanhamentos.]',
        price: 'R$ XX,XX',
      },
      {
        id: 'fritas-03',
        category: 'fritas',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição da porção de fritas e acompanhamentos.]',
        price: 'R$ XX,XX',
      },
    ],
  },
  {
    id: 'salada',
    label: 'Salada',
    tagline: 'Frescor para a mesa',
    items: [
      {
        id: 'salada-01',
        category: 'salada',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição da salada, folhas e molho da casa.]',
        price: 'R$ XX,XX',
      },
      {
        id: 'salada-02',
        category: 'salada',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição da salada, folhas e molho da casa.]',
        price: 'R$ XX,XX',
      },
      {
        id: 'salada-03',
        category: 'salada',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição da salada, folhas e molho da casa.]',
        price: 'R$ XX,XX',
      },
    ],
  },
  {
    id: 'guarnicoes',
    label: 'Guarnições',
    tagline: 'Acompanhamentos para o prato',
    items: [
      {
        id: 'guarnicoes-01',
        category: 'guarnicoes',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição da guarnição e porção servida.]',
        price: 'R$ XX,XX',
      },
      {
        id: 'guarnicoes-02',
        category: 'guarnicoes',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição da guarnição e porção servida.]',
        price: 'R$ XX,XX',
      },
      {
        id: 'guarnicoes-03',
        category: 'guarnicoes',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição da guarnição e porção servida.]',
        price: 'R$ XX,XX',
      },
    ],
  },
  {
    id: 'prato-feito',
    label: 'Prato Feito',
    tagline: 'Comida mineira de verdade',
    items: [
      {
        id: 'prato-feito-01',
        category: 'prato-feito',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição do prato, acompanhamentos e porção.]',
        price: 'R$ XX,XX',
      },
      {
        id: 'prato-feito-02',
        category: 'prato-feito',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição do prato, acompanhamentos e porção.]',
        price: 'R$ XX,XX',
      },
      {
        id: 'prato-feito-03',
        category: 'prato-feito',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição do prato, acompanhamentos e porção.]',
        price: 'R$ XX,XX',
      },
    ],
  },

  // ============== DESTILADAS ==============
  {
    id: 'doses',
    label: 'Doses',
    tagline: 'Doses de destilados',
    items: [
      {
        id: 'doses-01',
        category: 'doses',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição do destilado e volume da dose.]',
        price: 'R$ XX,XX',
      },
      {
        id: 'doses-02',
        category: 'doses',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição do destilado e volume da dose.]',
        price: 'R$ XX,XX',
      },
      {
        id: 'doses-03',
        category: 'doses',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição do destilado e volume da dose.]',
        price: 'R$ XX,XX',
      },
    ],
  },
  {
    id: 'tequilas',
    label: 'Tequilas',
    tagline: 'Selecionadas para a mesa',
    items: [
      {
        id: 'tequilas-01',
        category: 'tequilas',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição da tequila, tipo e notas de degustação.]',
        price: 'R$ XX,XX',
      },
      {
        id: 'tequilas-02',
        category: 'tequilas',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição da tequila, tipo e notas de degustação.]',
        price: 'R$ XX,XX',
      },
      {
        id: 'tequilas-03',
        category: 'tequilas',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição da tequila, tipo e notas de degustação.]',
        price: 'R$ XX,XX',
      },
    ],
  },
  {
    id: 'vinhos',
    label: 'Vinhos',
    tagline: 'Taças e garrafas',
    items: [
      {
        id: 'vinhos-01',
        category: 'vinhos',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição do vinho, país, uva e harmonização.]',
        price: 'R$ XX,XX',
      },
      {
        id: 'vinhos-02',
        category: 'vinhos',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição do vinho, país, uva e harmonização.]',
        price: 'R$ XX,XX',
      },
      {
        id: 'vinhos-03',
        category: 'vinhos',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição do vinho, país, uva e harmonização.]',
        price: 'R$ XX,XX',
      },
    ],
  },
  {
    id: 'whiskys',
    label: 'Whiskys',
    tagline: 'Doses e garrafas premium',
    items: [
      {
        id: 'whiskys-01',
        category: 'whiskys',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição do whisky, origem e notas.]',
        price: 'R$ XX,XX',
      },
      {
        id: 'whiskys-02',
        category: 'whiskys',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição do whisky, origem e notas.]',
        price: 'R$ XX,XX',
      },
      {
        id: 'whiskys-03',
        category: 'whiskys',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição do whisky, origem e notas.]',
        price: 'R$ XX,XX',
      },
    ],
  },
  {
    id: 'vodkas',
    label: 'Vodkas',
    tagline: 'Para drinks ou na dose',
    items: [
      {
        id: 'vodkas-01',
        category: 'vodkas',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição da vodka, origem e modo de servir.]',
        price: 'R$ XX,XX',
      },
      {
        id: 'vodkas-02',
        category: 'vodkas',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição da vodka, origem e modo de servir.]',
        price: 'R$ XX,XX',
      },
      {
        id: 'vodkas-03',
        category: 'vodkas',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição da vodka, origem e modo de servir.]',
        price: 'R$ XX,XX',
      },
    ],
  },

  // ============== SOBREMESAS & BEBIDAS QUENTES ==============
  {
    id: 'sobremesas',
    label: 'Sobremesas',
    tagline: 'Para fechar com chave de ouro',
    items: [
      {
        id: 'sobremesas-01',
        category: 'sobremesas',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição da sobremesa e acompanhamento.]',
        price: 'R$ XX,XX',
      },
      {
        id: 'sobremesas-02',
        category: 'sobremesas',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição da sobremesa e acompanhamento.]',
        price: 'R$ XX,XX',
      },
      {
        id: 'sobremesas-03',
        category: 'sobremesas',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição da sobremesa e acompanhamento.]',
        price: 'R$ XX,XX',
      },
    ],
  },
  {
    id: 'sucos',
    label: 'Sucos',
    tagline: 'Naturais e da fruta',
    items: [
      {
        id: 'sucos-01',
        category: 'sucos',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição do suco, fruta e volume.]',
        price: 'R$ XX,XX',
      },
      {
        id: 'sucos-02',
        category: 'sucos',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição do suco, fruta e volume.]',
        price: 'R$ XX,XX',
      },
      {
        id: 'sucos-03',
        category: 'sucos',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição do suco, fruta e volume.]',
        price: 'R$ XX,XX',
      },
    ],
  },
  {
    id: 'limonadas-especiais',
    label: 'Limonadas Especiais',
    tagline: 'Da casa, refrescantes',
    items: [
      {
        id: 'limonadas-especiais-01',
        category: 'limonadas-especiais',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição da limonada, frutas e finalização.]',
        price: 'R$ XX,XX',
      },
      {
        id: 'limonadas-especiais-02',
        category: 'limonadas-especiais',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição da limonada, frutas e finalização.]',
        price: 'R$ XX,XX',
      },
      {
        id: 'limonadas-especiais-03',
        category: 'limonadas-especiais',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição da limonada, frutas e finalização.]',
        price: 'R$ XX,XX',
      },
    ],
  },
  {
    id: 'cafe-expresso',
    label: 'Café Expresso',
    tagline: 'Para encerrar a noite',
    items: [
      {
        id: 'cafe-expresso-01',
        category: 'cafe-expresso',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição do café e volume.]',
        price: 'R$ XX,XX',
      },
      {
        id: 'cafe-expresso-02',
        category: 'cafe-expresso',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição do café e volume.]',
        price: 'R$ XX,XX',
      },
      {
        id: 'cafe-expresso-03',
        category: 'cafe-expresso',
        name: '[NOME DO PRODUTO]',
        description: '[Descrição do café e volume.]',
        price: 'R$ XX,XX',
      },
    ],
  },
];

export const findCategory = (id: string) => menu.find((c) => c.id === id);
