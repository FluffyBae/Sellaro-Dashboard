import React, { useState, useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation.jsx';

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
        <header className={`header ${isScrolled ? 'scrolled' : ''}`} id="header">
            <div className="container">
                <div className="header-content">
                    <div className="logo">
                        <img src="/assets/logo.svg" alt="Sellaro.id" className="logo-img" />
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
                        <div className="language-toggle">
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
                        <button className="theme-toggle" onClick={toggleTheme}>
                            <i data-feather="sun" className={`theme-icon ${theme === 'light' ? 'light-icon' : ''}`}></i>
                            <i data-feather="moon" className={`theme-icon ${theme === 'dark' ? 'dark-icon' : ''}`}></i>
                        </button>
                        
                        {/* Mobile Menu Button */}
                        <button 
                            className="mobile-menu-btn" 
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

            <style jsx>{`
                .header {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    background: rgba(247, 249, 252, 0.95);
                    backdrop-filter: blur(10px);
                    border-bottom: 1px solid var(--border-color);
                    z-index: var(--z-fixed);
                    transition: all var(--transition-normal);
                }

                .header.scrolled {
                    background: rgba(247, 249, 252, 0.98);
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
                }

                :root.dark-theme .header {
                    background: rgba(11, 15, 26, 0.95);
                }

                :root.dark-theme .header.scrolled {
                    background: rgba(11, 15, 26, 0.98);
                }

                .header-content {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: var(--spacing-md) 0;
                }

                .logo-img {
                    height: 40px;
                    width: auto;
                }

                .nav {
                    display: none;
                    align-items: center;
                    gap: var(--spacing-lg);
                }

                @media (min-width: 1024px) {
                    .nav {
                        display: flex;
                    }
                }

                .nav-link {
                    color: var(--text-color);
                    text-decoration: none;
                    font-weight: 500;
                    font-size: var(--font-size-sm);
                    transition: color var(--transition-fast);
                    cursor: pointer;
                }

                .nav-link:hover {
                    color: var(--primary-color);
                }

                .login-btn {
                    padding: var(--spacing-xs) var(--spacing-md);
                    border: 2px solid var(--primary-color);
                    border-radius: var(--radius-md);
                    color: var(--primary-color) !important;
                }

                .login-btn:hover {
                    background: var(--primary-color);
                    color: white !important;
                }

                .header-controls {
                    display: flex;
                    align-items: center;
                    gap: var(--spacing-md);
                }

                .language-toggle {
                    display: flex;
                    background: var(--card-bg);
                    border-radius: var(--radius-md);
                    padding: 4px;
                    border: 1px solid var(--border-color);
                }

                .lang-btn {
                    background: none;
                    border: none;
                    padding: var(--spacing-xs) var(--spacing-sm);
                    border-radius: calc(var(--radius-md) - 4px);
                    font-size: var(--font-size-xs);
                    font-weight: 500;
                    color: var(--text-color);
                    cursor: pointer;
                    transition: all var(--transition-fast);
                }

                .lang-btn.active {
                    background: var(--primary-color);
                    color: white;
                }

                .theme-toggle {
                    background: var(--card-bg);
                    border: 1px solid var(--border-color);
                    border-radius: var(--radius-md);
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all var(--transition-fast);
                    position: relative;
                }

                .theme-toggle:hover {
                    border-color: var(--primary-color);
                    transform: scale(1.05);
                }

                .theme-icon {
                    width: 18px;
                    height: 18px;
                    color: var(--text-color);
                    position: absolute;
                    transition: opacity var(--transition-fast);
                }

                .light-icon {
                    opacity: ${theme === 'light' ? '1' : '0'};
                }

                .dark-icon {
                    opacity: ${theme === 'dark' ? '1' : '0'};
                }

                .mobile-menu-btn {
                    background: var(--card-bg);
                    border: 1px solid var(--border-color);
                    border-radius: var(--radius-md);
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all var(--transition-fast);
                }

                @media (min-width: 1024px) {
                    .mobile-menu-btn {
                        display: none;
                    }
                }

                .mobile-menu-btn:hover {
                    border-color: var(--primary-color);
                }

                .mobile-nav {
                    display: flex;
                    flex-direction: column;
                    background: var(--card-bg);
                    border-top: 1px solid var(--border-color);
                    padding: var(--spacing-md) 0;
                    transform: translateY(-100%);
                    opacity: 0;
                    visibility: hidden;
                    transition: all var(--transition-normal);
                }

                .mobile-nav.active {
                    transform: translateY(0);
                    opacity: 1;
                    visibility: visible;
                }

                @media (min-width: 1024px) {
                    .mobile-nav {
                        display: none;
                    }
                }

                .mobile-nav-link {
                    color: var(--text-color);
                    text-decoration: none;
                    font-weight: 500;
                    padding: var(--spacing-sm) 0;
                    border-bottom: 1px solid var(--border-color);
                    transition: color var(--transition-fast);
                    cursor: pointer;
                }

                .mobile-nav-link:hover {
                    color: var(--primary-color);
                }

                .mobile-nav-link.login-btn {
                    border: 2px solid var(--primary-color);
                    border-radius: var(--radius-md);
                    text-align: center;
                    margin-top: var(--spacing-md);
                    color: var(--primary-color) !important;
                }
            `}</style>
        </header>
    );
}

export default Header;