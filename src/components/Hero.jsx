import React from 'react';
import { useTranslation } from '../hooks/useTranslation.jsx';
import  FullWebWhite  from '../../assets/web-full.png'
import  FullWebDark  from '../../assets/web-full-dark.png'

function Hero() {
    const { t, language, setLanguage, theme, toggleTheme } = useTranslation();

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
                            className="btn btn-primary hero-cta"
                            onClick={() => scrollToSection('packages')}
                        >
                            {t('cta-button')}
                            <i data-feather="arrow-right"></i>
                        </button>
                    </div>
                    <div className="hero-visual">
                        <div className="hero-card">
                            <div className="card-header">
                                <div className="card-dots">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                            <div className="card-content">
                                <img src={theme === 'light' ? FullWebWhite : FullWebDark} style={{ width: '100%' }} />
                                {/*<div className="chart-container">*/}
                                {/*    <div className="chart-bar" style={{height: '60%'}}></div>*/}
                                {/*    <div className="chart-bar" style={{height: '80%'}}></div>*/}
                                {/*    <div className="chart-bar" style={{height: '100%'}}></div>*/}
                                {/*    <div className="chart-bar" style={{height: '75%'}}></div>*/}
                                {/*    <div className="chart-bar" style={{height: '90%'}}></div>*/}
                                {/*</div>*/}
                                {/*<div className="stats-grid">*/}
                                {/*    <div className="stat-item">*/}
                                {/*        <div className="stat-value">+150%</div>*/}
                                {/*        <div className="stat-label">Sales</div>*/}
                                {/*    </div>*/}
                                {/*    <div className="stat-item">*/}
                                {/*        <div className="stat-value">24/7</div>*/}
                                {/*        <div className="stat-label">AI Support</div>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .hero {
                    padding: 120px 0 80px;
                    background: linear-gradient(135deg, var(--bg-color) 0%, rgba(4, 128, 254, 0.05) 100%);
                    overflow: hidden;
                    position: relative;
                }

                .hero::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: radial-gradient(circle at 20% 50%, rgba(4, 128, 254, 0.1) 0%, transparent 50%),
                                radial-gradient(circle at 80% 20%, rgba(11, 196, 238, 0.1) 0%, transparent 50%);
                    pointer-events: none;
                }

                .hero-content {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: var(--spacing-3xl);
                    align-items: center;
                    position: relative;
                    z-index: 1;
                }

                @media (min-width: 1024px) {
                    .hero-content {
                        grid-template-columns: 1fr 1fr;
                    }
                }

                .hero-text {
                    text-align: center;
                }

                @media (min-width: 1024px) {
                    .hero-text {
                        text-align: left;
                    }
                }

                .hero-title {
                    font-size: var(--font-size-4xl);
                    margin-bottom: var(--spacing-md);
                    line-height: 1.1;
                }

                @media (min-width: 768px) {
                    .hero-title {
                        font-size: var(--font-size-5xl);
                    }
                }

                .hero-subtitle {
                    font-size: var(--font-size-xl);
                    font-weight: 600;
                    margin-bottom: var(--spacing-lg);
                }

                .hero-description {
                    font-size: var(--font-size-lg);
                    color: rgba(var(--text-color), 0.8);
                    margin-bottom: var(--spacing-xl);
                    line-height: 1.6;
                }

                .hero-cta {
                    font-size: var(--font-size-lg);
                    padding: var(--spacing-md) var(--spacing-xl);
                    border-radius: var(--radius-lg);
                }

                .hero-visual {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .hero-card {
                    background: var(--card-bg);
                    border-radius: var(--radius-xl);
                    padding: var(--spacing-md);
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
                    width: 100%;
                    max-width: 1000px;
                    position: relative;
                    transform: perspective(1000px) rotateY(-5deg) rotateX(5deg);
                    transition: transform var(--transition-slow);
                }

                .hero-card:hover {
                    transform: perspective(1000px) rotateY(0deg) rotateX(0deg);
                }

                .card-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: var(--spacing-lg);
                    padding-bottom: var(--spacing-md);
                    border-bottom: 1px solid var(--border-color);
                }

                .card-dots {
                    display: flex;
                    gap: var(--spacing-xs);
                }

                .card-dots span {
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                    background: var(--border-color);
                }

                .card-dots span:first-child {
                    background: #ff5f56;
                }

                .card-dots span:nth-child(2) {
                    background: #ffbd2e;
                }

                .card-dots span:last-child {
                    background: #27ca3f;
                }

                .chart-container {
                    display: flex;
                    align-items: flex-end;
                    gap: var(--spacing-sm);
                    height: 120px;
                    margin-bottom: var(--spacing-xl);
                    padding: var(--spacing-md);
                    background: rgba(4, 128, 254, 0.05);
                    border-radius: var(--radius-md);
                }

                .chart-bar {
                    flex: 1;
                    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
                    border-radius: 4px 4px 0 0;
                    transition: height var(--transition-slow);
                    animation: chartGrow 2s ease-out;
                }

                @keyframes chartGrow {
                    from {
                        height: 0 !important;
                    }
                }

                .stats-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: var(--spacing-lg);
                }

                .stat-item {
                    text-align: center;
                }

                .stat-value {
                    font-size: var(--font-size-2xl);
                    font-weight: 600;
                    color: var(--primary-color);
                    margin-bottom: var(--spacing-xs);
                }

                .stat-label {
                    font-size: var(--font-size-sm);
                    color: rgba(var(--text-color), 0.7);
                }
            `}</style>
        </section>
    );
}

export default Hero;