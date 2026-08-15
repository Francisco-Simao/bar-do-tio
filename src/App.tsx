import './App.css';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { IntroSection } from './components/IntroSection/IntroSection';
import { CategoryNavigation } from './components/CategoryNavigation/CategoryNavigation';
import { MenuSection } from './components/MenuSection/MenuSection';
import { StorySection } from './components/StorySection/StorySection';
import { Gallery } from './components/Gallery/Gallery';
import { HoursSection } from './components/HoursSection/HoursSection';
import { LocationSection } from './components/LocationSection/LocationSection';
import { InstagramSection } from './components/InstagramSection/InstagramSection';
import { Footer } from './components/Footer/Footer';
import { menu } from './data/menu';

function App() {
  return (
    <div className="app-shell">
      <Header />
      <main>
        <Hero />
        <IntroSection />
        <CategoryNavigation />
        {menu.map((cat) => (
          <MenuSection key={cat.id} category={cat} />
        ))}
        <StorySection />
        <Gallery />
        <HoursSection />
        <LocationSection />
        <InstagramSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
