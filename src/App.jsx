import Hero from './components/Hero';
import TransitionLayer from './components/TransitionLayer';
import ProductSection from './components/ProductSection';
import FeaturesSection from './components/FeaturesSection';
import CinematicShowcase from './components/CinematicShowcase';

function App() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <TransitionLayer />
      <ProductSection />
      <CinematicShowcase />
      <FeaturesSection />
    </main>
  );
}

export default App;
