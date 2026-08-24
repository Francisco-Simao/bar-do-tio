// =============================================================
// CARDÁPIO DIGITAL — BAR DO TIO
// -------------------------------------------------------------
// Estrutura de dados desacoplada do JSX.
// Imagens armazenadas em /public/images-produtos/
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
  // ===========================================================
  // CHOPP
  // ===========================================================
  {
    id: 'chopp',
    label: 'Chopp',
    tagline: 'Cerveja tirada na temperatura certa',
    items: [
      {
        id: 'chopp-01',
        category: 'chopp',
        name: 'Chopp Brahma',
        description: 'Chopp Brahma servido gelado, leve e refrescante.',
        price: 'R$ 19,90',
        image: '/images-produtos/chopps/chopp-brahma.png',
      },
      {
        id: 'chopp-02',
        category: 'chopp',
        name: 'Submarino 355 ml',
        description: 'Chopp especial servido com uma garrafa de cerveja dentro do copo.',
        price: 'R$ 38,90',
        image: '/images-produtos/chopps/Submarino-355ml.png',
      },
      {
        id: 'chopp-03',
        category: 'chopp',
        name: 'Submarino 1 Litro',
        description: 'Submarino servido em 1 litro, ideal para compartilhar.',
        price: 'R$ 48,90',
        image: '/images-produtos/chopps/Submarino-1Litro.png',
      },
    ],
  },

  // ===========================================================
  // DRINKS
  // ===========================================================
  {
    id: 'drinks',
    label: 'Drinks',
    tagline: 'Drinks autorais do bar',
    items: [
      {
        id: 'drinks-01',
        category: 'drinks',
        name: 'Moscow Mule',
        description: 'Xarope de gengibre caseiro, Vodka, limão, gelo e espuma molecular.',
        price: 'R$ 39,90',
        image: '/images-produtos/drinks/Moscow-Mule.png',
        highlight: true,
      },
      {
        id: 'drinks-02',
        category: 'drinks',
        name: 'Mojito',
        description: 'Run branco, hortelã, água com gás, açúcar, limão e gelo.',
        price: 'R$ 38,90',
        image: '/images-produtos/drinks/Mojito.png',
      },
      {
        id: 'drinks-03',
        category: 'drinks',
        name: 'Margarita de Corona',
        description: 'Tequila, cointreau, sal, açúcar, limão e uma longneck de ponta cabeça.',
        price: 'R$ 47,90',
        image: '/images-produtos/drinks/Margarita-de-Corona.png',
      },
      {
        id: 'drinks-04',
        category: 'drinks',
        name: 'Fitzgerald',
        description: 'Gin, suco de limão siciliano, angostura e licor Luxardo.',
        price: 'R$ 38,90',
        image: '/images-produtos/drinks/Fitzgerald.png',
      },
      {
        id: 'drinks-05',
        category: 'drinks',
        name: 'Gin Tônica',
        description: 'Gin, água tônica e especiarias. Opções: frutas vermelhas, frutas amarelas, limão siciliano e tradicional.',
        price: 'R$ 39,90',
        image: '/images-produtos/drinks/Gin-Tônica.png',
      },
      {
        id: 'drinks-06',
        category: 'drinks',
        name: 'Aperol Spritz',
        description: 'Champanhe prosecco, Aperol, água com gás, gelo e laranja.',
        price: 'R$ 39,90',
        image: '/images-produtos/drinks/Aperol-Spritz.png',
      },
      {
        id: 'drinks-07',
        category: 'drinks',
        name: 'Apple fresh',
        description: "Jack Daniel's maçã verde, xarope de açúcar, limão, água tônica e gelo.",
        price: 'R$ 39,90',
        image: '/images-produtos/drinks/Apple-fresh.png',
      },
      {
        id: 'drinks-08',
        category: 'drinks',
        name: 'Tennessee Mule',
        description: "Jack Daniel's tradicional, limão, espuma molecular, gelo e noz-moscada.",
        price: 'R$ 37,90',
        image: '/images-produtos/drinks/Tennessee-Mule.png',
      },
      {
        id: 'drinks-09',
        category: 'drinks',
        name: 'Ginger',
        description: 'Vodka, xarope de morango, gengibre, limão, gelo e angostura.',
        price: 'R$ 39,90',
        image: '/images-produtos/drinks/Ginger.png',
      },
      {
        id: 'drinks-10',
        category: 'drinks',
        name: 'Lemon Jack',
        description: "Jack Daniel's Honey, limão, xarope de açúcar e mel.",
        price: 'R$ 42,90',
        image: '/images-produtos/drinks/Lemon-Jack.png',
      },
      {
        id: 'drinks-11',
        category: 'drinks',
        name: 'Margarita Tradicional',
        description: 'Tequila, cointreau, sal, açúcar e limão.',
        price: 'R$ 39,90',
        image: '/images-produtos/drinks/Margarita-Tradicional.png',
      },
      {
        id: 'drinks-12',
        category: 'drinks',
        name: 'Blonde Citrus',
        description: 'Whisky Red Label, suco de limão, suco de laranja e um delicioso xarope caseiro.',
        price: 'R$ 39,90',
        image: '/images-produtos/drinks/Blonde-Citrus.png',
      },
    ],
  },

  // ===========================================================
  // DRINKS DEFUMADOS
  // ===========================================================
  {
    id: 'drinks-defumados',
    label: 'Drinks Defumados',
    tagline: 'Servidos com fumaça na taça',
    items: [
      {
        id: 'drinks-defumados-01',
        category: 'drinks-defumados',
        name: 'Negroni Smoke',
        description: 'Campari, gim e vermute tinto.',
        price: 'R$ 47,90',
        image: '/images-produtos/drikns-defumados/Negroni-Smoke.png',
      },
      {
        id: 'drinks-defumados-02',
        category: 'drinks-defumados',
        name: 'Palomita Smoke',
        description: 'Tequila, xarope de tangerina, angostura e gelo.',
        price: 'R$ 47,90',
        image: '/images-produtos/drikns-defumados/Palomita-Smoke.png',
      },
      {
        id: 'drinks-defumados-03',
        category: 'drinks-defumados',
        name: 'Cosmopolitan Smoke',
        description: 'Vodka, suco de cranberry, limão, licor de laranja e gelo.',
        price: 'R$ 49,90',
        image: '/images-produtos/drikns-defumados/Cosmopolitan-Smoke.png',
      },
    ],
  },

  // ===========================================================
  // CAIPIRINHAS
  // ===========================================================
  {
    id: 'caipirinhas',
    label: 'Caipirinhas',
    tagline: 'Clássicas e da casa',
    items: [
      {
        id: 'caipirinhas-01',
        category: 'caipirinhas',
        name: 'Vodka',
        description: 'Limão, limão siciliano, morango, frutas vermelhas, frutas amarelas, abacaxi, maracujá e kiwi. Frutas amarelas com acréscimo de R$ 4,00.',
        price: 'R$ 29,90',
        image: '/images-produtos/caipirinhas/Vodka.png',
      },
      {
        id: 'caipirinhas-02',
        category: 'caipirinhas',
        name: 'Sake',
        description: 'Limão, limão siciliano, morango, frutas vermelhas, frutas amarelas, abacaxi, maracujá e kiwi. Frutas amarelas com acréscimo de R$ 4,00.',
        price: 'R$ 29,90',
        image: '/images-produtos/caipirinhas/Sake.png',
      },
      {
        id: 'caipirinhas-03',
        category: 'caipirinhas',
        name: 'Cachaça',
        description: 'Limão, limão siciliano, morango, frutas vermelhas, frutas amarelas, abacaxi, maracujá e kiwi. Frutas amarelas com acréscimo de R$ 4,00.',
        price: 'R$ 29,90',
        image: '/images-produtos/caipirinhas/Cachaça.png',
      },
      {
        id: 'caipirinhas-04',
        category: 'caipirinhas',
        name: 'Tequila',
        description: 'Limão, limão siciliano, morango, frutas vermelhas, frutas amarelas, abacaxi, maracujá e kiwi. Frutas amarelas com acréscimo de R$ 4,00.',
        price: 'R$ 29,90',
        image: '/images-produtos/caipirinhas/Tequila.png',
      },
      {
        id: 'caipirinhas-05',
        category: 'caipirinhas',
        name: 'Steinhaeger',
        description: 'Limão, limão siciliano, morango, frutas vermelhas, frutas amarelas, abacaxi, maracujá e kiwi. Frutas amarelas com acréscimo de R$ 4,00.',
        price: 'R$ 29,90',
        image: '/images-produtos/caipirinhas/Steinhaeger.png',
      },
      {
        id: 'caipirinhas-06',
        category: 'caipirinhas',
        name: 'Yakult especial',
        description: 'Vodka ou sake com morango ou limão.',
        price: 'R$ 29,90',
        image: '/images-produtos/caipirinhas/Yakult-especial.png',
      },
    ],
  },

  // ===========================================================
  // CERVEJAS ESPECIAIS
  // ===========================================================
  {
    id: 'cervejas-especiais',
    label: 'Cervejas Especiais',
    tagline: 'Cervejas selecionadas',
    items: [
      {
        id: 'cervejas-especiais-01',
        category: 'cervejas-especiais',
        name: 'Leopoldina',
        description: 'APA, IPA, Red Ale, Weissbier e Witbier. Consulte os rótulos disponíveis.',
        price: 'R$ 43,90',
        image: '/images-produtos/cervejas-especiais/Leopoldina.png',
      },
      {
        id: 'cervejas-especiais-02',
        category: 'cervejas-especiais',
        name: 'Paulaner',
        description: 'Cerveja Paulaner, tradicional cerveja alemã.',
        price: 'R$ 44,90',
        image: '/images-produtos/cervejas-especiais/Paulaner.png',
      },
      {
        id: 'cervejas-especiais-03',
        category: 'cervejas-especiais',
        name: 'Corona (long neck)',
        description: 'Long Neck.',
        price: 'R$ 15,90',
        image: '/images-produtos/cervejas-especiais/Corona-(long-neck).png',
      },
      {
        id: 'cervejas-especiais-04',
        category: 'cervejas-especiais',
        name: 'Corona zero (long neck)',
        description: 'Long Neck sem álcool.',
        price: 'R$ 15,90',
        image: '/images-produtos/cervejas-especiais/Corona-zero(long-neck).png',
      },
      {
        id: 'cervejas-especiais-05',
        category: 'cervejas-especiais',
        name: 'Michelob (long neck)',
        description: 'Long Neck.',
        price: 'R$ 15,90',
        image: '/images-produtos/cervejas-especiais/Michelob-(long-neck).png',
      },
    ],
  },

  // ===========================================================
  // NÃO ALCOÓLICOS
  // ===========================================================
  {
    id: 'nao-alcoolicos',
    label: 'Não Alcoólicos',
    tagline: 'Opções refrescantes para todos',
    items: [
      {
        id: 'nao-alcoolicos-01',
        category: 'nao-alcoolicos',
        name: 'Fitzgerald sem álcool',
        description: 'Limão siciliano, xarope de açúcar, bitter angostura e gelo.',
        price: 'R$ 32,90',
        image: '/images-produtos/nao-alcolicos/Fitzgerald-sem-álcool.png',
      },
      {
        id: 'nao-alcoolicos-02',
        category: 'nao-alcoolicos',
        name: 'Drink do tio sem álcool',
        description: 'Limão, leite condensado, groselha e gelo.',
        price: 'R$ 29,90',
        image: '/images-produtos/nao-alcolicos/Drink-do-tio-sem-álcool.png',
      },
      {
        id: 'nao-alcoolicos-03',
        category: 'nao-alcoolicos',
        name: 'Água sem gás/com gás',
        description: 'Água mineral com ou sem gás.',
        price: 'R$ 8,90',
        image: '/images-produtos/nao-alcolicos/Água-sem-gás-com-gás.png',
      },
      {
        id: 'nao-alcoolicos-04',
        category: 'nao-alcoolicos',
        name: 'Refri lata 350ml (Coca-Cola e Guaraná)',
        description: 'Refrigerante em lata de 350ml. Consulte os sabores disponíveis.',
        price: 'R$ 9,90',
        image: '/images-produtos/nao-alcolicos/Refri-lata-350ml(Coca-Cola-e-Guaraná).png',
      },
      {
        id: 'nao-alcoolicos-05',
        category: 'nao-alcoolicos',
        name: 'Água Tônica',
        description: 'Água tônica gelada.',
        price: 'R$ 8,90',
        image: '/images-produtos/nao-alcolicos/Água-Tônica.png',
      },
    ],
  },

  // ===========================================================
  // ENTRADAS
  // ===========================================================
  {
    id: 'entradas',
    label: 'Entradas',
    tagline: 'Para começar a noite',
    items: [
      {
        id: 'entradas-01',
        category: 'entradas',
        name: 'Mix mercadão',
        description: '4 tipos de azeitonas, alcaparrones, alho espanhol, tremoço conservados em azeite 0,5 e torradinhas.',
        price: 'R$ 34,90',
        image: '/images-produtos/entradas/Mix-mercadão.png',
      },
      {
        id: 'entradas-02',
        category: 'entradas',
        name: 'Steak Tartare',
        description: 'Filé mignon in natura, cortado em cubos na ponta da faca, regado com azeite 0,2 chileno, parmesão 12 meses uruguaio, especiarias e servido com bolacha de arroz e fritas.',
        price: 'R$ 84,90',
        image: '/images-produtos/entradas/Steak-Tartare.png',
        highlight: true,
      },
      {
        id: 'entradas-03',
        category: 'entradas',
        name: 'Carpaccio',
        description: 'Finas fatias de carne crua, temperadas com azeite, sal, molho à base de mostarda e parmesão.',
        price: 'R$ 77,90',
        image: '/images-produtos/entradas/Carpaccio.png',
      },
      {
        id: 'entradas-04',
        category: 'entradas',
        name: 'Tábua de frios',
        description: 'Salame italiano, parmesão, gorgonzola, palmito, nozinho, presunto parma, provolone e azeite 0,5.',
        price: 'R$ 84,90',
        image: '/images-produtos/entradas/Tábua-de-frios.png',
      },
      {
        id: 'entradas-05',
        category: 'entradas',
        name: 'Presunto Parma',
        description: 'Presunto Parma com 14 meses de cura.',
        price: 'R$ 58,90',
        image: '/images-produtos/entradas/Presunto-Parma.png',
      },
      {
        id: 'entradas-06',
        category: 'entradas',
        name: 'Salame da casa',
        description: 'Salame, palmito e azeitona.',
        price: 'R$ 49,90',
        image: '/images-produtos/entradas/Salame-da-casa.png',
      },
      {
        id: 'entradas-07',
        category: 'entradas',
        name: 'Parmesão',
        description: 'Parmesão com 12 meses de cura.',
        price: 'R$ 28,90',
        image: '/images-produtos/entradas/Parmesão.png',
      },
      {
        id: 'entradas-08',
        category: 'entradas',
        name: 'Castanha de caju',
        description: 'Porção de castanhas de caju selecionadas.',
        price: 'R$ 16,90',
        image: '/images-produtos/entradas/Castanha-do-Caju.png',
      },
      {
        id: 'entradas-09',
        category: 'entradas',
        name: 'Nozinho',
        description: 'Porção de queijo nozinho.',
        price: 'R$ 8,90',
        image: '/images-produtos/entradas/Nozinho.png',
      },
      {
        id: 'entradas-10',
        category: 'entradas',
        name: 'Mista',
        description: 'Palmito, nozinho e azeitona.',
        price: 'R$ 36,90',
        image: '/images-produtos/entradas/Mista.png',
      },
      {
        id: 'entradas-11',
        category: 'entradas',
        name: 'Pão de alho',
        description: 'Pão de alho servido unitariamente.',
        price: 'R$ 11,90',
        image: '/images-produtos/entradas/Pão-de-alho.png',
      },
      {
        id: 'entradas-12',
        category: 'entradas',
        name: 'Bolinho de costela angus',
        description: 'Bolinho preparado com costela Angus, crocante por fora e suculento por dentro.',
        price: 'R$ 47,90',
        image: '/images-produtos/entradas/Bolinho-de-costela-angus.png',
      },
    ],
  },

  // ===========================================================
  // PETISCOS DA ÁGUA COMPRIDA
  // ===========================================================
  {
    id: 'petiscos-agua-comprida',
    label: 'Petiscos da Água Comprida',
    tagline: 'Tradição mineira servida na mesa',
    items: [
      {
        id: 'petiscos-01',
        category: 'petiscos-agua-comprida',
        name: 'Linguiça de costela angus',
        description: 'Linguiça artesanal preparada com costela Angus.',
        price: 'R$ 48,90',
        image: '/images-produtos/pesticos-da-agua-comprida/Linguiça-de-costela-angus.png',
      },
      {
        id: 'petiscos-02',
        category: 'petiscos-agua-comprida',
        name: 'Torresmo caipira',
        description: 'Torresmo crocante preparado ao estilo caipira.',
        price: 'R$ 25,90',
        image: '/images-produtos/pesticos-da-agua-comprida/Torresmo-caipira.png',
      },
      {
        id: 'petiscos-03',
        category: 'petiscos-agua-comprida',
        name: 'Torresmo panceta',
        description: 'Panceta suína preparada até ficar crocante e dourada.',
        price: 'R$ 28,90',
        image: '/images-produtos/pesticos-da-agua-comprida/Torresmo-panceta.png',
      },
      {
        id: 'petiscos-04',
        category: 'petiscos-agua-comprida',
        name: 'Linguiça artesanal',
        description: 'Linguiça artesanal disponível pura ou com tomate seco.',
        price: 'R$ 46,90',
        image: '/images-produtos/pesticos-da-agua-comprida/Linguiça-artesanal.png',
      },
      {
        id: 'petiscos-05',
        category: 'petiscos-agua-comprida',
        name: 'Tulipinha',
        description: 'Meio da asa temperada e frita até ficar crocante.',
        price: 'R$ 43,90',
        image: '/images-produtos/pesticos-da-agua-comprida/Tulipinha.png',
      },
    ],
  },

  // ===========================================================
  // BURGUERS ARTESANAIS
  // ===========================================================
  {
    id: 'burguers-artesanais',
    label: 'Burguers Artesanais',
    tagline: 'Pão brioche, blend da casa',
    items: [
      {
        id: 'burguers-01',
        category: 'burguers-artesanais',
        name: 'Burguer do Tio Picanha',
        description: 'Blend de picanha de 200g assado na parrilla à lenha, pão australiano, cheddar inglês, alface americano, maionese caseira, barbecue e batatas rústicas artesanal.',
        price: 'R$ 52,90',
        image: '/images-produtos/burguers-artesanais/Burguer-do-Tio-Picanha.png',
        highlight: true,
      },
      {
        id: 'burguers-02',
        category: 'burguers-artesanais',
        name: 'La Burgueton Acém/Peito',
        description: 'Blend de acém/peito de 200g assado na parrilla à lenha, pão de brioche, mussarela uruguaia, alface americano, maionese caseira e bacon extra do pernil assado na parrilla.',
        price: 'R$ 52,90',
        image: '/images-produtos/burguers-artesanais/La-Burgueton-Acém-Peito.png',
      },
      {
        id: 'burguers-03',
        category: 'burguers-artesanais',
        name: 'Sandwich Pulled Pork',
        description: 'Pão brioche selado com manteiga de garrafa na parrilla, vinagrete texano, copa/lombo suíno defumado na lenha de jabuticabeira por 14h, molho especial e fritas belga rústicas.',
        price: 'R$ 52,90',
        image: '/images-produtos/burguers-artesanais/Sandwich-Pulled-Pork.png',
      },
    ],
  },

  // ===========================================================
  // PIT SMOKER
  // ===========================================================
  {
    id: 'pit-smoker',
    label: 'Pit Smoker',
    tagline: 'Nossas carnes defumadas',
    items: [
      {
        id: 'pit-smoker-01',
        category: 'pit-smoker',
        name: 'Fritas Pulled Pork',
        description: 'Copa lombo suíno defumado por 14h na lenha de jabuticabeira, combinado com dry rub feito na casa, desfiado e servido generosamente sobre as fritas.',
        price: 'R$ 89,90',
        image: '/images-produtos/fritas/Fritas-Pulled-Pork.png',
      },
      {
        id: 'pit-smoker-02',
        category: 'pit-smoker',
        name: 'Fritas Brisket',
        description: 'Peito bovino defumado por 12h desfiado, sour cream, fritas belga e jalapeno.',
        price: 'R$ 98,90',
        image: '/images-produtos/fritas/Fritas-Brisket.png',
      },
      {
        id: 'pit-smoker-03',
        category: 'pit-smoker',
        name: 'Brisket',
        description: 'Peito bovino defumado por 12h acompanhado de uma porção de batata rústica e vinagrete texano.',
        price: 'R$ 159,90',
        image: '/images-produtos/pit-smoker/Brisket.png',
      },
      {
        id: 'pit-smoker-04',
        category: 'pit-smoker',
        name: 'Costelinha BBQ',
        description: 'Costelinha defumada por 6h, acompanhada de batata rústica e vinagrete texano.',
        price: 'R$ 159,90',
        image: '/images-produtos/pit-smoker/Costelinha-BBQ.png',
      },
      {
        id: 'pit-smoker-05',
        category: 'pit-smoker',
        name: 'Hump Steak (Cupim)',
        description: 'Cupim defumado por 12h, acompanhado de batata rústica e vinagrete texano.',
        price: 'R$ 159,90',
        image: '/images-produtos/pit-smoker/Hump-Steak(Cupim).png',
      },
    ],
  },

  // ===========================================================
  // CARNES ESPECIAIS
  // ===========================================================
  {
    id: 'carnes-especiais',
    label: 'Carnes Especiais',
    tagline: 'Cortes selecionados',
    items: [
      {
        id: 'carnes-especiais-01',
        category: 'carnes-especiais',
        name: 'Picanha Black Angus Certificado da casa',
        description: 'Meio kg de picanha Black Angus assada na parrilla à lenha, acompanhada de arroz, farofa artesanal, vinagrete do Tio e fritas belga. Opção de acrescentar Pulled Pork na batata.',
        price: 'R$ 218,90',
        image: '/images-produtos/carnes-especiais/Picanha-Black-Angus-Certificado-da-casa.png',
        highlight: true,
      },
      {
        id: 'carnes-especiais-02',
        category: 'carnes-especiais',
        name: 'Picanha Black Angus Certificado na chapa',
        description: 'Meio kg de picanha Black Angus assada na parrilla à lenha, acompanhada de palmito refogado na manteiga de garrafa, farofa e vinagrete do Tio.',
        price: 'R$ 218,90',
        image: '/images-produtos/carnes-especiais/Black-Angus-Certificado-na-chapa.png',
      },
      {
        id: 'carnes-especiais-03',
        category: 'carnes-especiais',
        name: 'Entrecôte Especial do Parrillero da casa',
        description: 'Meio kg de entrecôte Angus assado na parrilla à lenha, acompanhado de arroz, farofa artesanal, vinagrete do Tio e fritas belga.',
        price: 'R$ 198,90',
        image: '/images-produtos/carnes-especiais/Entrecôte-Especial-do-Parrillero-da-casa.png',
      },
      {
        id: 'carnes-especiais-04',
        category: 'carnes-especiais',
        name: 'Entrecôte Especial do Parrillero na chapa',
        description: 'Meio kg de carne assada na parrilla à lenha, acompanhada de palmito refogado na manteiga de garrafa, farofa e vinagrete do Tio.',
        price: 'R$ 198,90',
        image: '/images-produtos/carnes-especiais/Entrecôte-Especial-do-Parrillero-na-chapa.png',
      },
    ],
  },

  // ===========================================================
  // PONTOS DA NOSSA PARRILLA
  // ===========================================================
  {
    id: 'pontos-parrilla',
    label: 'Pontos da Nuestra Parrilla',
    tagline: 'Para a grelha rodar inteira',
    items: [
      {
        id: 'pontos-parrilla-01',
        category: 'pontos-parrilla',
        name: 'Pontos da Nossa Parrilla',
        description: 'Consulte nossa equipe para conhecer os cortes e opções disponíveis na parrilla.',
        price: 'Consultar',
        image: '/images-produtos/cames-especiais/Pontos-da-Nossa-Parrilla.png',
      },
    ],
  },

  // ===========================================================
  // PEIXES
  // ===========================================================
  {
    id: 'peixes',
    label: 'Peixes',
    tagline: 'Frescos e preparados na casa',
    items: [
      {
        id: 'peixes-01',
        category: 'peixes',
        name: 'Filé de tilápia tradicional',
        description: 'Filé de tilápia preparado de forma tradicional.',
        price: 'R$ 76,90',
        image: '/images-produtos/peixes/Filé-de-tilápia-tradicional.png',
      },
      {
        id: 'peixes-02',
        category: 'peixes',
        name: 'Filé de tilápia empanado no Doritos',
        description: 'Filé de tilápia empanado com Doritos, crocante e saboroso.',
        price: 'R$ 86,90',
        image: '/images-produtos/peixes/Filé-de-tilápia-empanado-no-Doritos.png',
      },
      {
        id: 'peixes-03',
        category: 'peixes',
        name: 'Bolinho de tilápia',
        description: 'Bolinho crocante preparado com tilápia.',
        price: 'R$ 44,90',
        image: '/images-produtos/peixes/Bolinho-de-tilápia.png',
      },
      {
        id: 'peixes-04',
        category: 'peixes',
        name: 'Bolinho de bacalhau',
        description: 'Tradicional bolinho de bacalhau crocante.',
        price: 'R$ 55,90',
        image: '/images-produtos/peixes/Bolinho-de-bacalhau.png',
      },
      {
        id: 'peixes-05',
        category: 'peixes',
        name: 'Camarão empanado Catupiry',
        description: 'Camarões empanados com recheio cremoso de Catupiry.',
        price: 'R$ 69,90',
        image: '/images-produtos/peixes/Camarão-empanado-Catupiry.png',
      },
    ],
  },

  // ===========================================================
  // FRITAS
  // ===========================================================
  {
    id: 'fritas',
    label: 'Fritas',
    tagline: 'Batatas e variações crocantes',
    items: [
      {
        id: 'fritas-01',
        category: 'fritas',
        name: 'Fritas da casa',
        description: 'Fritas belga, mussarela uruguaia, cream cheese, cheddar cremoso e bacon extra do pernil.',
        price: 'R$ 64,90',
        image: '/images-produtos/fritas/Fritas-da-casa.png',
        highlight: true,
      },
      {
        id: 'fritas-02',
        category: 'fritas',
        name: 'Torre de fritas',
        description: 'Fritas belga acompanhadas de bacon, calabresa frita e bastante mussarela uruguaia.',
        price: 'R$ 82,90',
        image: '/images-produtos/fritas/Torre-de-fritas.png',
      },
      {
        id: 'fritas-03',
        category: 'fritas',
        name: 'Fritas c/ queijo e bacon',
        description: 'Fritas belga com mussarela uruguaia e bacon extra.',
        price: 'R$ 52,90',
        image: '/images-produtos/fritas/Fritas-c-queijo-e-bacon.png',
      },
      {
        id: 'fritas-04',
        category: 'fritas',
        name: 'Trio Papas',
        description: 'Fritas rústicas belga, Fritas da casa e Fritas Pulled Pork. Acompanhado de molhos especiais.',
        price: 'R$ 89,90',
        image: '/images-produtos/fritas/Trio-Papas.png',
      },
      {
        id: 'fritas-05',
        category: 'fritas',
        name: 'Fritas Brisket',
        description: 'Peito bovino defumado por 12 horas desfiado, sour cream, fritas belga e jalapeno.',
        price: 'R$ 98,90',
        image: '/images-produtos/fritas/Fritas-Brisket.png',
      },
      {
        id: 'fritas-06',
        category: 'fritas',
        name: 'Fritas Pulled Pork',
        description: 'Copa lombo suíno defumado por 14h na lenha de jabuticabeira, dry rub da casa e carne desfiada sobre as fritas.',
        price: 'R$ 89,90',
        image: '/images-produtos/fritas/Fritas-Pulled-Pork.png',
      },
    ],
  },

  // ===========================================================
  // SALADA
  // ===========================================================
  {
    id: 'salada',
    label: 'Salada',
    tagline: 'Frescor para a mesa',
    items: [
      {
        id: 'salada-01',
        category: 'salada',
        name: 'Salada da casa',
        description: 'Alface americano, tomate, parmesão, palmito e tomate seco.',
        price: 'R$ 46,90',
        image: '/images-produtos/salada/Salada-da-casa.png',
      },
    ],
  },

  // ===========================================================
  // GUARNIÇÕES
  // ===========================================================
  {
    id: 'guarnicoes',
    label: 'Guarnições',
    tagline: 'Acompanhamentos para o prato',
    items: [
      {
        id: 'guarnicoes-01',
        category: 'guarnicoes',
        name: 'Arroz',
        description: 'Porção de arroz preparado na casa.',
        price: 'R$ 15,90',
        image: '/images-produtos/guarnicoes/Arroz.png',
      },
      {
        id: 'guarnicoes-02',
        category: 'guarnicoes',
        name: 'Feijão',
        description: 'Feijão preparado com tempero da casa.',
        price: 'R$ 18,90',
        image: '/images-produtos/guarnicoes/Feijão.png',
      },
      {
        id: 'guarnicoes-03',
        category: 'guarnicoes',
        name: 'Caldo de feijão',
        description: 'Caldo de feijão cremoso e bem temperado.',
        price: 'R$ 24,90',
        image: '/images-produtos/guarnicoes/Caldo-de-feijão.png',
      },
      {
        id: 'guarnicoes-04',
        category: 'guarnicoes',
        name: 'Tutu de feijão',
        description: 'Tradicional tutu de feijão ao estilo mineiro.',
        price: 'R$ 19,90',
        image: '/images-produtos/guarnicoes/Tutu-de-feijão.png',
      },
    ],
  },

  // ===========================================================
  // PRATO FEITO
  // ===========================================================
  {
    id: 'prato-feito',
    label: 'Prato Feito',
    tagline: 'Comida mineira de verdade',
    items: [
      {
        id: 'prato-feito-01',
        category: 'prato-feito',
        name: 'Prato feito do tio',
        description: 'Típico prato mineiro com uma suculenta carne de lata da casa, ovo caipira e couve. Acompanha arroz e tutu.',
        price: 'R$ 38,90',
        image: '/images-produtos/prato-feito/Prato-feito-do-tio.png',
        highlight: true,
      },
    ],
  },

  // ===========================================================
  // DOSES
  // ===========================================================
  {
    id: 'doses',
    label: 'Doses',
    tagline: 'Doses de destilados',
    items: [
      {
        id: 'doses-01',
        category: 'doses',
        name: 'Jägeimeister',
        description: 'Dose de Jägermeister servida gelada.',
        price: 'R$ 29,00',
        image: '/images-produtos/doses/Jägeimeister.png',
      },
      {
        id: 'doses-02',
        category: 'doses',
        name: 'Campari',
        description: 'Dose de Campari.',
        price: 'R$ 15,00',
        image: '/images-produtos/doses/Campari.png',
      },
      {
        id: 'doses-03',
        category: 'doses',
        name: 'Amarula',
        description: 'Dose de Amarula, licor cremoso e suave.',
        price: 'R$ 23,00',
        image: '/images-produtos/doses/Amarula.png',
      },
      {
        id: 'doses-04',
        category: 'doses',
        name: 'Absinthe Fairy 89,90 teor alcoolico',
        description: 'Absinto de alta graduação alcoólica. Consulte nossa equipe.',
        price: 'R$ 89,00',
        image: '/images-produtos/doses/Absinthe-Fairy-89,90-teor-alcoolico.png',
      },
    ],
  },

  // ===========================================================
  // TEQUILAS
  // ===========================================================
  {
    id: 'tequilas',
    label: 'Tequilas',
    tagline: 'Selecionadas para a mesa',
    items: [
      {
        id: 'tequilas-01',
        category: 'tequilas',
        name: 'Patrón',
        description: 'Tequila Patrón selecionada para apreciar pura ou em drinks.',
        price: 'R$ 59,00',
        image: '/images-produtos/tequilas/Patrón.png',
      },
      {
        id: 'tequilas-02',
        category: 'tequilas',
        name: 'José Cuervo Ouro/Prata',
        description: 'Opções José Cuervo Ouro ou Prata.',
        price: 'R$ 28,00',
        image: '/images-produtos/tequilas/José-Cuervo-Ouro-Prata.png',
      },
      {
        id: 'tequilas-03',
        category: 'tequilas',
        name: '1800 Espolôn',
        description: 'Tequila selecionada para apreciação em dose.',
        price: 'R$ 42,00',
        image: '/images-produtos/tequilas/1800-Espolôn.png',
      },
      {
        id: 'tequilas-04',
        category: 'tequilas',
        name: 'Escorpion Mezcal',
        description: 'Mezcal com perfil marcante e defumado.',
        price: 'R$ 48,00',
        image: '/images-produtos/tequilas/Escorpion-Mezcal.png',
      },
    ],
  },

  // ===========================================================
  // VINHOS
  // ===========================================================
  {
    id: 'vinhos',
    label: 'Vinhos',
    tagline: 'Taças e garrafas',
    items: [
      {
        id: 'vinhos-01',
        category: 'vinhos',
        name: 'Suave Serra Gaúcha',
        description: 'Vinho suave da Serra Gaúcha servido em taça de 350ml.',
        price: 'R$ 29,00',
        image: '/images-produtos/vinhos/Suave-Serra-Gaucha.png',
      },
      {
        id: 'vinhos-02',
        category: 'vinhos',
        name: 'Seco Chileno',
        description: 'Vinho seco chileno servido em taça de 350ml.',
        price: 'R$ 34,00',
        image: '/images-produtos/vinhos/Seco-Chileno.png',
      },
    ],
  },

  // ===========================================================
  // WHISKYS
  // ===========================================================
  {
    id: 'whiskys',
    label: 'Whiskys',
    tagline: 'Doses e garrafas premium',
    items: [
      {
        id: 'whiskys-01',
        category: 'whiskys',
        name: 'Blue Label',
        description: 'Blended Scotch Whisky premium.',
        price: 'R$ 189,00',
        image: '/images-produtos/whisky/Blue-Label.png',
      },
      {
        id: 'whiskys-02',
        category: 'whiskys',
        name: 'Glenfiddich 12 anos',
        description: 'Single Malt Scotch Whisky de 12 anos.',
        price: 'R$ 39,00',
        image: '/images-produtos/whisky/Glenfiddich-12-anos.png',
      },
      {
        id: 'whiskys-03',
        category: 'whiskys',
        name: 'Buffalo Trace',
        description: 'Bourbon americano.',
        price: 'R$ 47,00',
        image: '/images-produtos/whisky/Buffalo-Trace.png',
      },
      {
        id: 'whiskys-04',
        category: 'whiskys',
        name: 'Chivas 12 anos',
        description: 'Blended Scotch Whisky de 12 anos.',
        price: 'R$ 29,00',
        image: '/images-produtos/whisky/Chivas-12-anos.png',
      },
      {
        id: 'whiskys-05',
        category: 'whiskys',
        name: "Jack Daniel's",
        description: "Jack Daniel's disponível nas opções Tradicional, Honey, Fire e Apple.",
        price: 'R$ 27,00',
        image: "/images-produtos/whisky/Jack-Daniel's.png",
      },
    ],
  },

  // ===========================================================
  // VODKAS
  // ===========================================================
  {
    id: 'vodkas',
    label: 'Vodkas',
    tagline: 'Para drinks ou na dose',
    items: [
      {
        id: 'vodkas-01',
        category: 'vodkas',
        name: 'Smirnoff',
        description: 'Vodka Smirnoff servida na dose.',
        price: 'R$ 12,00',
        image: '/images-produtos/vodkas/Smirnoff.png',
      },
      {
        id: 'vodkas-02',
        category: 'vodkas',
        name: 'Ciroc',
        description: 'Vodka Ciroc servida na dose.',
        price: 'R$ 29,00',
        image: '/images-produtos/vodkas/Ciroc.png',
      },
      {
        id: 'vodkas-03',
        category: 'vodkas',
        name: 'Absolut',
        description: 'Vodka Absolut servida na dose.',
        price: 'R$ 24,00',
        image: '/images-produtos/vodkas/Absolut.png',
      },
    ],
  },

  // ===========================================================
  // SOBREMESAS
  // ===========================================================
  {
    id: 'sobremesas',
    label: 'Sobremesas',
    tagline: 'Para fechar com chave de ouro',
    items: [
      {
        id: 'sobremesas-01',
        category: 'sobremesas',
        name: 'Sobremesa do Tio',
        description: 'Ganache de chocolate importado, morango, sorvete de creme e calda.',
        price: 'R$ 38,90',
        image: '/images-produtos/sobremesas/Sobremesa-do-Tio.png',
        highlight: true,
      },
      {
        id: 'sobremesas-02',
        category: 'sobremesas',
        name: 'Panquequita',
        description: 'Panqueca recheada com doce de leite argentino, sorvete e um toque de caramelo.',
        price: 'R$ 38,90',
        image: '/images-produtos/sobremesas/Panquequita.png',
      },
      {
        id: 'sobremesas-03',
        category: 'sobremesas',
        name: 'TioBrownie',
        description: 'Brownie com sorvete de creme e fondue de chocolate com morangos.',
        price: 'R$ 39,90',
        image: '/images-produtos/sobremesas/TioBrownie.png',
      },
      {
        id: 'sobremesas-04',
        category: 'sobremesas',
        name: 'Sorvetes',
        description: 'Bola de sorvete. Consulte os sabores disponíveis.',
        price: 'R$ 16,90',
        image: '/images-produtos/sobremesas/Sorvetes.png',
      },
      {
        id: 'sobremesas-05',
        category: 'sobremesas',
        name: 'Petit Gateau',
        description: 'Petit gateau servido com acompanhamento.',
        price: 'R$ 29,90',
        image: '/images-produtos/sobremesas/Petit-Gateau.png',
      },
      {
        id: 'sobremesas-06',
        category: 'sobremesas',
        name: 'Chocolates Importados',
        description: 'Seleção de chocolates importados. Consulte sabores e preços.',
        price: 'Consultar',
        image: '/images-produtos/sobremesas/Chocolates-Importados.png',
      },
    ],
  },

  // ===========================================================
  // SUCOS
  // ===========================================================
  {
    id: 'sucos',
    label: 'Sucos',
    tagline: 'Naturais e da fruta',
    items: [
      {
        id: 'sucos-01',
        category: 'sucos',
        name: 'Laranja',
        description: 'Suco natural de laranja.',
        price: 'R$ 14,90',
        image: '/images-produtos/sucos/Laranja.png',
      },
      {
        id: 'sucos-02',
        category: 'sucos',
        name: 'Morango',
        description: 'Suco de morango preparado na casa.',
        price: 'R$ 14,90',
        image: '/images-produtos/sucos/Morango.png',
      },
      {
        id: 'sucos-03',
        category: 'sucos',
        name: 'Abacaxi',
        description: 'Suco refrescante de abacaxi.',
        price: 'R$ 14,90',
        image: '/images-produtos/sucos/Abacaxi.png',
      },
      {
        id: 'sucos-04',
        category: 'sucos',
        name: 'Frutas Vermelhas',
        description: 'Suco refrescante de frutas vermelhas.',
        price: 'R$ 14,90',
        image: '/images-produtos/sucos/Frutas-Vermelhas.png',
      },
      {
        id: 'sucos-05',
        category: 'sucos',
        name: 'Maracujá',
        description: 'Suco natural de maracujá.',
        price: 'R$ 14,90',
        image: '/images-produtos/sucos/Maracujá.png',
      },
      {
        id: 'sucos-06',
        category: 'sucos',
        name: 'Laranja com Morango',
        description: 'Combinação refrescante de laranja e morango.',
        price: 'R$ 17,90',
        image: '/images-produtos/sucos/Laranja-com-Morango.png',
      },
    ],
  },

  // ===========================================================
  // LIMONADAS ESPECIAIS
  // ===========================================================
  {
    id: 'limonadas-especiais',
    label: 'Limonadas Especiais',
    tagline: 'Da casa, refrescantes',
    items: [
      {
        id: 'limonadas-especiais-01',
        category: 'limonadas-especiais',
        name: 'Limonada Tradicional',
        description: 'Limonada clássica, refrescante e preparada na casa.',
        price: 'R$ 16,90',
        image: '/images-produtos/limonadas-especiais/Limonada-Tradicional.png',
      },
      {
        id: 'limonadas-especiais-02',
        category: 'limonadas-especiais',
        name: 'Limonada Siciliana',
        description: 'Limonada preparada com limão siciliano.',
        price: 'R$ 16,90',
        image: '/images-produtos/limonadas-especiais/Limonada-Siciliana.png',
      },
      {
        id: 'limonadas-especiais-03',
        category: 'limonadas-especiais',
        name: 'Limonada 3 Limões',
        description: 'Refrescante combinação de três tipos de limão.',
        price: 'R$ 16,90',
        image: '/images-produtos/limonadas-especiais/Limonada-3-Limões.png',
      },
      {
        id: 'limonadas-especiais-04',
        category: 'limonadas-especiais',
        name: 'Limonada Suiça',
        description: 'Tradicional limonada suíça cremosa e refrescante.',
        price: 'R$ 19,90',
        image: '/images-produtos/limonadas-especiais/Limonada-Suiça.png',
      },
    ],
  },

  // ===========================================================
  // CAFÉ EXPRESSO
  // ===========================================================
  {
    id: 'cafe-expresso',
    label: 'Café Expresso',
    tagline: 'Para encerrar a noite',
    items: [
      {
        id: 'cafe-expresso-01',
        category: 'cafe-expresso',
        name: 'Café Expresso',
        description: 'Café expresso preparado na hora. Consulte os tipos de grãos disponíveis.',
        price: 'R$ 9,90',
        image: '/images-produtos/cafe/Café-Expresso.png',
      },
    ],
  },
];

export const findCategory = (id: string) =>
  menu.find((c) => c.id === id);