import React from 'react';
import { useTranslation } from '../hooks/useTranslation.jsx';
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
        <section className="hero" id="hero">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1 className="hero-title">
                            {t('hero-title')}
                        </h1>
                        <p className="hero-subtitle text-gradient">
                            {t('hero-subtitle')}
                        </p>
                        <p className="hero-description">
                            {t('hero-description')}
                        </p>
                        <div className="hero-buttons">
                            <button 
                                className="btn btn-primary hero-cta glass-card"
                                onClick={() => scrollToSection('packages')}
                            >
                                {t('cta-button')}
                                <i data-feather="arrow-right"></i>
                            </button>
                            <a 
                                href="https://youtu.be/HNMPATOZBlw"
                                className="btn btn-youtube glass-card"
                                aria-label={t('tutorial-text')}
                            >
                                <svg className="youtube-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                </svg>
                                <span className="tutorial-text">{t('tutorial-text')}</span>
                            </a>
                        </div>
                    </div>
                    <div className="hero-visual">
                        <div className="hero-card glass-card">
                            <div className="card-header">
                                <div className="card-dots">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                            <div className="card-content">
                                <img src={theme === 'light' ? FullWebWhite : FullWebDark} alt="Web Dashboard" style={{ width: '100%' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;