import React, { useState, useEffect } from 'react';
import { useTranslation } from '../hooks/TranslationProvider.jsx';
import LogoBlack from '../../assets/logo-sellaro.svg';

function Header() {
    const { t, language, setLanguage } = useTranslation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        // Update Feather icons when component mounts
        if (window.feather) {
            window.feather.replace();
        }
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <header className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-6xl glass-header ${isScrolled ? 'scrolled' : ''} rounded-50 z-30 transition-all duration-300`} id="header">
            <div className="flex items-center justify-between px-8 py-3 relative z-10">
                <div className="logo">
                    <img src={LogoBlack} alt="Sellaro Logo" className="h-10 w-auto drop-shadow-sm" style={{filter: 'brightness(0) invert(1)'}} />
                </div>
                
                {/* Navigation */}
                <nav className="hidden lg:flex items-center gap-6">
                    <a href="#hero" className="text-white/90 no-underline font-medium text-sm transition-all duration-150 cursor-pointer px-3 py-2 rounded-xl hover:text-white hover:bg-white/10 hover:backdrop-blur-10" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>
                        {t('nav-home')}
                    </a>
                    <a href="#clients" className="text-white/90 no-underline font-medium text-sm transition-all duration-150 cursor-pointer px-3 py-2 rounded-xl hover:text-white hover:bg-white/10 hover:backdrop-blur-10" onClick={(e) => { e.preventDefault(); scrollToSection('clients'); }}>
                        {t('nav-clients')}
                    </a>
                    <a href="#why-choose" className="text-white/90 no-underline font-medium text-sm transition-all duration-150 cursor-pointer px-3 py-2 rounded-xl hover:text-white hover:bg-white/10 hover:backdrop-blur-10" onClick={(e) => { e.preventDefault(); scrollToSection('why-choose'); }}>
                        {t('nav-why')}
                    </a>
                    <a href="#services" className="text-white/90 no-underline font-medium text-sm transition-all duration-150 cursor-pointer px-3 py-2 rounded-xl hover:text-white hover:bg-white/10 hover:backdrop-blur-10" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>
                        {t('nav-services')}
                    </a>
                    <a href="#packages" className="text-white/90 no-underline font-medium text-sm transition-all duration-150 cursor-pointer px-3 py-2 rounded-xl hover:text-white hover:bg-white/10 hover:backdrop-blur-10" onClick={(e) => { e.preventDefault(); scrollToSection('packages'); }}>
                        {t('nav-packages')}
                    </a>
                    <a href="#footer" className="text-white/90 no-underline font-medium text-sm transition-all duration-150 cursor-pointer px-3 py-2 rounded-xl hover:text-white hover:bg-white/10 hover:backdrop-blur-10" onClick={(e) => { e.preventDefault(); scrollToSection('footer'); }}>
                        {t('nav-contact')}
                    </a>
                    <a href="#" className="bg-primary/10 backdrop-blur-10 border border-primary/30 text-primary px-4 py-2 rounded-xl transition-all duration-150 hover:bg-primary hover:text-white hover:border-primary">
                        {t('nav-login')}
                    </a>
                </nav>
                
                <div className="flex items-center gap-4">
                    {/* Language Toggle */}
                    <div className="bg-white/5 backdrop-blur-10 border border-white/10 rounded-xl p-1 transition-all duration-150 hover:bg-white/10 hover:-translate-y-1 hover:shadow-glass-hover hover:border-white/20">
                        <div className="flex gap-0.5">
                            <button 
                                className={`bg-none border-none px-3 py-1 rounded-lg text-xs font-medium cursor-pointer transition-all duration-150 min-w-8 ${
                                    language === 'id' 
                                        ? 'bg-primary text-white shadow-button' 
                                        : 'text-white/80'
                                }`}
                                onClick={() => setLanguage('id')}
                            >
                                ID
                            </button>
                            <button 
                                className={`bg-none border-none px-3 py-1 rounded-lg text-xs font-medium cursor-pointer transition-all duration-150 min-w-8 ${
                                    language === 'en' 
                                        ? 'bg-primary text-white shadow-button' 
                                        : 'text-white/80'
                                }`}
                                onClick={() => setLanguage('en')}
                            >
                                EN
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        className="flex items-center justify-center w-10 h-10 bg-white/5 backdrop-blur-10 border border-white/10 rounded-xl cursor-pointer lg:hidden transition-all duration-150 hover:bg-white/10 hover:-translate-y-1 hover:shadow-glass-hover hover:border-white/20" 
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <i data-feather="menu" className="w-5 h-5 text-white/70"></i>
                    </button>
                </div>
                
                {/* Mobile Navigation */}
                <nav className={`${isMobileMenuOpen ? 'flex' : 'hidden'} lg:hidden flex-col bg-white/5 backdrop-blur-20 border-t border-white/10 py-4 transform transition-all duration-300 ${isMobileMenuOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'}`}>
                    <a href="#hero" className="text-white no-underline font-medium py-3 px-4 border-b border-white/10 transition-all duration-150 cursor-pointer mx-4 rounded-xl hover:text-primary hover:bg-white/15" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>
                        {t('nav-home')}
                    </a>
                    <a href="#clients" className="text-white no-underline font-medium py-3 px-4 border-b border-white/10 transition-all duration-150 cursor-pointer mx-4 rounded-xl hover:text-primary hover:bg-white/15" onClick={(e) => { e.preventDefault(); scrollToSection('clients'); }}>
                        {t('nav-clients')}
                    </a>
                    <a href="#why-choose" className="text-white no-underline font-medium py-3 px-4 border-b border-white/10 transition-all duration-150 cursor-pointer mx-4 rounded-xl hover:text-primary hover:bg-white/15" onClick={(e) => { e.preventDefault(); scrollToSection('why-choose'); }}>
                        {t('nav-why')}
                    </a>
                    <a href="#services" className="text-white no-underline font-medium py-3 px-4 border-b border-white/10 transition-all duration-150 cursor-pointer mx-4 rounded-xl hover:text-primary hover:bg-white/15" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>
                        {t('nav-services')}
                    </a>
                    <a href="#packages" className="text-white no-underline font-medium py-3 px-4 border-b border-white/10 transition-all duration-150 cursor-pointer mx-4 rounded-xl hover:text-primary hover:bg-white/15" onClick={(e) => { e.preventDefault(); scrollToSection('packages'); }}>
                        {t('nav-packages')}
                    </a>
                    <a href="#footer" className="text-white no-underline font-medium py-3 px-4 border-b border-white/10 transition-all duration-150 cursor-pointer mx-4 rounded-xl hover:text-primary hover:bg-white/15" onClick={(e) => { e.preventDefault(); scrollToSection('footer'); }}>
                        {t('nav-contact')}
                    </a>
                    <a href="#" className="bg-primary/10 border border-primary/30 text-center mt-4 text-primary mx-4 py-3 px-4 rounded-xl transition-all duration-150 hover:bg-primary hover:text-white">
                        {t('nav-login')}
                    </a>
                </nav>
            </div>
        </header>
    );
}

export default Header;