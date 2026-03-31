import Hero from './components/Hero';
import TransitionLayer from './components/TransitionLayer';
import ProductSection from './components/ProductSection';
import DifferencesSection from './components/DifferencesSection';
import HowItWorksSection from './components/HowItWorksSection';

import Dashboard3D from './components/Dashboard3D';

function App() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <TransitionLayer />
      <ProductSection />
      <DifferencesSection />
      <HowItWorksSection />
      <Dashboard3D />
    </main>
  );
}

export default App;
