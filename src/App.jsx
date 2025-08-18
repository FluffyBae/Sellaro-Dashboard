import React, { useState, useEffect } from 'react';
import './index.css';

import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import PaymentModal from './components/PaymentModal.jsx';
import ErrorModal from './components/ErrorModal.jsx';
import { TranslationProvider } from './hooks/TranslationProvider.jsx';

function App() {
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
    const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        // Initialize Feather icons
        if (window.feather) {
            window.feather.replace();
        }
    }, []);

    // Global event listeners for modals
    useEffect(() => {
        const handleOpenPaymentModal = () => {
            setIsPaymentModalOpen(true);
        };

        const handleOpenErrorModal = (event) => {
            setErrorMessage(event.detail?.message || 'An error occurred');
            setIsErrorModalOpen(true);
        };

        window.addEventListener('openPaymentModal', handleOpenPaymentModal);
        window.addEventListener('openErrorModal', handleOpenErrorModal);

        return () => {
            window.removeEventListener('openPaymentModal', handleOpenPaymentModal);
            window.removeEventListener('openErrorModal', handleOpenErrorModal);
        };
    }, []);

    return (
        <TranslationProvider>
            <div className="min-h-screen bg-gradient-to-br from-dark-bg via-purple-900/10 to-dark-bg">
                {/* Background Effects */}
                <div className="fixed inset-0 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1)_0%,transparent_50%)]"></div>
                </div>

                <Header />
                <main className="relative z-10">
                    <Hero />
                    
                    {/* Temporary sections for layout */}
                    <section className="py-20 px-6">
                        <div className="max-w-7xl mx-auto text-center">
                            <h2 className="font-heading text-4xl font-bold text-white mb-8">Our Services</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {[1, 2, 3].map((item) => (
                                    <div key={item} className="glass-card p-8 rounded-24 hover:-translate-y-2 transition-all duration-300">
                                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-20 flex items-center justify-center mx-auto mb-6">
                                            <i data-feather="zap" className="w-8 h-8 text-white"></i>
                                        </div>
                                        <h3 className="font-heading text-xl font-semibold text-white mb-4">Service {item}</h3>
                                        <p className="text-white/70 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section id="packages" className="py-20 px-6">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="font-heading text-4xl font-bold text-white mb-12">Choose Your Package</h2>
                            <div className="glass-card p-12 rounded-32 max-w-md mx-auto">
                                <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-24 flex items-center justify-center mx-auto mb-8">
                                    <i data-feather="star" className="w-10 h-10 text-white"></i>
                                </div>
                                <h3 className="font-heading text-2xl font-bold text-white mb-4">AI Complete Package</h3>
                                <p className="text-white/70 mb-8">Get complete access to all our AI-powered tools and services.</p>
                                <div className="text-4xl font-bold text-white mb-8">
                                    <span className="text-gradient">Rp 299.000</span>
                                </div>
                                <button
                                    className="w-full bg-gradient-to-r from-primary to-secondary text-white font-heading font-semibold text-lg px-8 py-4 rounded-20 transition-all duration-300 shadow-button hover:shadow-button-hover hover:scale-105"
                                    onClick={() => setIsPaymentModalOpen(true)}
                                >
                                    Mulai Sekarang
                                </button>
                            </div>
                        </div>
                    </section>
                </main>

                <PaymentModal 
                    isOpen={isPaymentModalOpen}
                    setIsOpen={setIsPaymentModalOpen}
                />
                
                <ErrorModal 
                    isOpen={isErrorModalOpen}
                    setIsOpen={setIsErrorModalOpen}
                    errorMessage={errorMessage}
                />
            </div>
        </TranslationProvider>
    );
}

export default App;