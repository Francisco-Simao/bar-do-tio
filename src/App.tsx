import { useEffect, useState } from 'react';
import './App.css';

import { Header } from './components/Header/Header';
import { BannerHero } from './components/BannerHero/BannerHero';
import { IntroSection } from './components/IntroSection/IntroSection';
import { CategoryNavigation } from './components/CategoryNavigation/CategoryNavigation';
import {
  MenuSection,
  type ProductLayout,
} from './components/MenuSection/MenuSection';
import { StorySection } from './components/StorySection/StorySection';
import { Gallery } from './components/Gallery/Gallery';
import { HoursSection } from './components/HoursSection/HoursSection';
import { LocationSection } from './components/LocationSection/LocationSection';
import { InstagramSection } from './components/InstagramSection/InstagramSection';
import { Footer } from './components/Footer/Footer';
import { BackToTop } from './components/BackToTop/BackToTop';
import {
  ProductLayoutSwitcher,
  loadProductLayout,
  saveProductLayout,
} from './components/ProductLayoutSwitcher/ProductLayoutSwitcher';

import { menu, type MenuItem } from './data/menu';
import { ProductDetailModal } from './components/ProductDetailModal/ProductDetailModal';

function App() {
  const [productLayout, setProductLayout] =
    useState<ProductLayout>('grid');
  const [selectedProduct, setSelectedProduct] = useState<MenuItem | null>(null);

  // Carrega a preferência salva do usuário ao montar
  useEffect(() => {
    setProductLayout(loadProductLayout());
  }, []);

  // Salva a preferência sempre que mudar
  const handleLayoutChange = (next: ProductLayout) => {
    setProductLayout(next);
    saveProductLayout(next);
  };

  return (
    <div className="app-shell">
      <Header />

      <main>
        {/* NOVO BANNER */}
        <BannerHero />

        {/* HERO ORIGINAL */}

        <IntroSection />

        {/* ÁREA COMPLETA DO CARDÁPIO */}
        <section id="cardapio">
          <CategoryNavigation />

          {/* Seletor de layout — fixo logo acima da primeira categoria */}
          <div className="px-4 md:px-10 pt-6 md:pt-8 pb-2 md:pb-3">
            <ProductLayoutSwitcher
              value={productLayout}
              onChange={handleLayoutChange}
            />
          </div>

          {menu.map((cat) => (
            <MenuSection
              key={cat.id}
              category={cat}
              layout={productLayout}
              onProductImageClick={setSelectedProduct}
            />
          ))}
        </section>

        <StorySection />

        <Gallery />

        <HoursSection />

        <LocationSection />

        <InstagramSection />
      </main>

      <Footer />

      {/* Botão voltar ao topo */}
      <BackToTop />
      <ProductDetailModal item={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  );
}

export default App;
