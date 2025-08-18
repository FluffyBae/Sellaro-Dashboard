import React, { useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation.jsx';

function WhyChoose() {
    const { t } = useTranslation();

    useEffect(() => {
        if (window.feather) {
            window.feather.replace();
        }
    }, []);

    const features = [
        {
            icon: 'loader',
            title: t('feature1-title'),
            description: t('feature1-desc')
        },
        {
            icon: 'bar-chart-2',
            title: t('feature2-title'),
            description: t('feature2-desc')
        },
        {
            icon: 'settings',
            title: t('feature3-title'),
            description: t('feature3-desc')
        },
        {
            icon: 'layers',
            title: t('feature4-title'),
            description: t('feature4-desc')
        },
        {
            icon: 'trending-up',
            title: t('feature5-title'),
            description: t('feature5-desc')
        }
    ];

    return (
        <section className="why-choose" id="why-choose">
            <div className="container">
                <h2 className="section-title text-center">
                    {t('why-choose-title')}
                </h2>
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-icon">
                                <i data-feather={feature.icon}></i>
                            </div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .why-choose {
                    padding: var(--spacing-3xl) 0;
                    position: relative;
                    background: linear-gradient(180deg, 
                        transparent 0%,
                        rgba(45, 27, 105, 0.3) 20%,
                        rgba(139, 92, 246, 0.4) 40%,
                        rgba(45, 27, 105, 0.6) 60%,
                        rgba(26, 9, 51, 0.5) 80%,
                        rgba(11, 15, 26, 0.3) 100%
                    );
                }

                .why-choose::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: 
                        radial-gradient(circle at 30% 20%, rgba(4, 128, 254, 0.1) 0%, transparent 60%),
                        radial-gradient(circle at 70% 80%, rgba(11, 196, 238, 0.08) 0%, transparent 60%),
                        radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.06) 0%, transparent 70%);
                    pointer-events: none;
                    z-index: 0;
                }

                .why-choose .container {
                    position: relative;
                    z-index: 1;
                }

                .section-title {
                    font-size: var(--font-size-3xl);
                    margin-bottom: var(--spacing-2xl);
                    color: var(--text-color);
                }

                .features-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: var(--spacing-xl);
                }

                @media (min-width: 768px) {
                    .features-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media (min-width: 1024px) {
                    .features-grid {
                        grid-template-columns: repeat(3, 1fr);
                    }

                    .feature-card:nth-child(4) {
                        grid-column: 1 / 3;
                    }

                    .feature-card:nth-child(5) {
                        grid-column: 3;
                    }
                }

                .feature-card {
                    background: var(--card-bg);
                    border-radius: var(--radius-xl);
                    padding: var(--spacing-2xl);
                    text-align: center;
                    transition: all var(--transition-normal);
                    border: 1px solid var(--border-color);
                    position: relative;
                    overflow: hidden;
                }

                .feature-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 4px;
                    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
                    transform: scaleX(0);
                    transition: transform var(--transition-normal);
                    transform-origin: left;
                }

                .feature-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 15px 50px var(--card-shadow);
                }

                .feature-card:hover::before {
                    transform: scaleX(1);
                }

                .feature-icon {
                    width: 80px;
                    height: 80px;
                    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto var(--spacing-lg);
                    transition: transform var(--transition-normal);
                }

                .feature-card:hover .feature-icon {
                    transform: scale(1.1);
                }

                .feature-icon i {
                    width: 32px;
                    height: 32px;
                    color: white;
                }

                .feature-title {
                    font-size: var(--font-size-xl);
                    margin-bottom: var(--spacing-md);
                    color: var(--text-color);
                }

                .feature-description {
                    color: rgba(var(--text-color), 0.8);
                    line-height: 1.6;
                    margin: 0;
                }
            `}</style>
        </section>
    );
}

export default WhyChoose;