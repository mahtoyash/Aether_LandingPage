import Hero from './components/Hero';
import TransitionLayer from './components/TransitionLayer';
import ProductSection from './components/ProductSection';
import DifferencesSection from './components/DifferencesSection';
import HowItWorksSection from './components/HowItWorksSection';

function App() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <TransitionLayer />
      <ProductSection />
      <DifferencesSection />
      <HowItWorksSection />
    </main>
  );
}

export default App;
