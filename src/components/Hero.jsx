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
                        <button 
                            className="btn btn-primary hero-cta glass-card"
                            onClick={() => scrollToSection('packages')}
                        >
                            {t('cta-button')}
                            <i data-feather="arrow-right"></i>
                        </button>
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