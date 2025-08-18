import React, { useEffect } from 'react';
import { TranslationProvider } from './hooks/useTranslation.jsx';
import Header from './components/Header';
import Hero from './components/Hero';
import Clients from './components/Clients';
import WhyChoose from './components/WhyChoose';
import Services from './components/Services';
import Packages from './components/Packages';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import PaymentModal from './components/PaymentModal';
import DarkVeil from "./components/DarkVeil";

function App() {
  useEffect(() => {
    // Initialize Feather icons
    if (window.feather) {
      window.feather.replace();
    }
  }, []);

  return (
    <TranslationProvider>
      <div className="App">
        <Header />
        <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
          <DarkVeil hueShift={35} speed={0.5} scanlineFrequency={3.1} scanlineIntensity={0.3}  />
          <div className="new-hero-container">
            <Hero />
          </div>
        </div>
        <Clients />
        <WhyChoose />
        <Services />
        <Packages />
        <Footer />
        <ChatWidget />
        <PaymentModal />
      </div>
    </TranslationProvider>
  );
}

export default App;