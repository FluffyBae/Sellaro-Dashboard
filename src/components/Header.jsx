import React, { useState, useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation.jsx';
import LogoBlack from '../../assets/logo-sellaro.svg';
import LogoWhite from '../../assets/logo-sellaro-white.svg';

function Header() {
    const { t, language, setLanguage, theme, toggleTheme } = useTranslation();
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
        // Update Feather icons when component mounts or theme changes
        if (window.feather) {
            window.feather.replace();
        }
    }, [theme]);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <header className={`glass-header ${isScrolled ? 'scrolled' : ''}`} id="header">
            <div className="container">
                <div className="header-content">
                    <div className="logo">
                        <img src={theme === 'light' ? LogoBlack : LogoWhite} alt="Sellaro Logo" className="logo-img" />
                    </div>
                    
                    {/* Navigation */}
                    <nav className="nav">
                        <a href="#hero" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>
                            {t('nav-home')}
                        </a>
                        <a href="#clients" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('clients'); }}>
                            {t('nav-clients')}
                        </a>
                        <a href="#why-choose" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('why-choose'); }}>
                            {t('nav-why')}
                        </a>
                        <a href="#services" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>
                            {t('nav-services')}
                        </a>
                        <a href="#packages" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('packages'); }}>
                            {t('nav-packages')}
                        </a>
                        <a href="#footer" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('footer'); }}>
                            {t('nav-contact')}
                        </a>
                        <a href="#" className="nav-link login-btn">
                            {t('nav-login')}
                        </a>
                    </nav>
                    
                    <div className="header-controls">
                        {/* Language Toggle */}
                        <div className="language-toggle glass-card">
                            <button 
                                className={`lang-btn ${language === 'id' ? 'active' : ''}`} 
                                onClick={() => setLanguage('id')}
                            >
                                ID
                            </button>
                            <button 
                                className={`lang-btn ${language === 'en' ? 'active' : ''}`} 
                                onClick={() => setLanguage('en')}
                            >
                                EN
                            </button>
                        </div>
                        
                        {/* Theme Toggle */}
                        <button className="theme-toggle glass-card" onClick={toggleTheme}>
                            <i data-feather="sun" className={`theme-icon ${theme === 'light' ? 'light-icon' : ''}`}></i>
                            <i data-feather="moon" className={`theme-icon ${theme === 'dark' ? 'dark-icon' : ''}`}></i>
                        </button>
                        
                        {/* Mobile Menu Button */}
                        <button 
                            className="mobile-menu-btn glass-card" 
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <i data-feather="menu"></i>
                        </button>
                    </div>
                </div>
                
                {/* Mobile Navigation */}
                <nav className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>
                    <a href="#hero" className="mobile-nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>
                        {t('nav-home')}
                    </a>
                    <a href="#clients" className="mobile-nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('clients'); }}>
                        {t('nav-clients')}
                    </a>
                    <a href="#why-choose" className="mobile-nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('why-choose'); }}>
                        {t('nav-why')}
                    </a>
                    <a href="#services" className="mobile-nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>
                        {t('nav-services')}
                    </a>
                    <a href="#packages" className="mobile-nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('packages'); }}>
                        {t('nav-packages')}
                    </a>
                    <a href="#footer" className="mobile-nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('footer'); }}>
                        {t('nav-contact')}
                    </a>
                    <a href="#" className="mobile-nav-link login-btn">
                        {t('nav-login')}
                    </a>
                </nav>
            </div>
        </header>
    );
}

export default Header;