import React from 'react';
import { useTranslation } from '../hooks/TranslationProvider.jsx';
import FullWebWhite from '../../assets/web-full.png';
import FullWebDark from '../../assets/web-full-dark.png';

function Hero() {
    const { t, theme } = useTranslation();

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-16 bg-gradient-to-br from-dark-bg via-purple-900/20 to-dark-bg" id="hero">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl"></div>
            </div>
            <div className="absolute inset-0 opacity-20">
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
            </div>
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center animate-fade-in">
                    <div className="text-center lg:text-left animate-slide-up">
                        <h1 className="font-heading font-extrabold text-white mb-6 leading-tight text-4xl sm:text-5xl lg:text-6xl xl:text-7xl drop-shadow-2xl">
                            {t('hero-title')}
                        </h1>
                        <p className="text-gradient font-heading text-xl sm:text-2xl lg:text-3xl font-semibold mb-8 animate-pulse-slow">
                            {t('hero-subtitle')}
                        </p>
                        <p className="text-lg text-white/85 mb-12 leading-relaxed max-w-2xl">
                            {t('hero-description')}
                        </p>
                        <button 
                            className="bg-gradient-to-r from-primary to-secondary text-white font-heading font-semibold text-lg px-8 py-4 rounded-full inline-flex items-center gap-3 transition-all duration-300 shadow-button hover:shadow-button-hover hover:scale-105 hover:-translate-y-1 relative overflow-hidden group"
                            onClick={() => scrollToSection('packages')}
                        >
                            <span className="relative z-10">{t('cta-button')}</span>
                            <i data-feather="arrow-right" className="w-5 h-5 relative z-10"></i>
                            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                        </button>
                    </div>
                    <div className="flex justify-center items-center animate-float">
                        <div className="glass-card max-w-2xl w-full p-6 transform perspective-1000 hover:scale-105 transition-all duration-500">
                            <div className="flex justify-start items-center mb-6 pb-4 border-b border-white/10">
                                <div className="flex gap-2">
                                    <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></span>
                                    <span className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse" style={{animationDelay: '0.3s'}}></span>
                                    <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse" style={{animationDelay: '0.6s'}}></span>
                                </div>
                            </div>
                            <div className="rounded-lg overflow-hidden shadow-2xl">
                                <img src={FullWebDark} alt="Web Dashboard" className="w-full h-auto drop-shadow-2xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;