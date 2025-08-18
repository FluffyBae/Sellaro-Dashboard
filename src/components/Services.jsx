import React, { useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation.jsx';
import DarkVeil from './DarkVeil';

function Services() {
    const { t } = useTranslation();

    useEffect(() => {
        if (window.feather) {
            window.feather.replace();
        }
    }, []);

    const services = [
        {
            icon: 'search',
            title: t('service1-title'),
            description: t('service1-desc')
        },
        {
            icon: 'edit-3',
            title: t('service2-title'),
            description: t('service2-desc')
        },
        {
            icon: 'feather',
            title: t('service3-title'),
            description: t('service3-desc')
        },
        {
            icon: 'camera',
            title: t('service4-title'),
            description: t('service4-desc')
        },
        {
            icon: 'target',
            title: t('service5-title'),
            description: t('service5-desc')
        },
        {
            icon: 'monitor',
            title: t('service6-title'),
            description: t('service6-desc')
        }
    ];

    return (
        <section className="services" id="services" style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
                <DarkVeil 
                    speed={0.6}
                    hueShift={240}
                    noiseIntensity={0.05}
                    scanlineIntensity={0.02}
                    warpAmount={0.1}
                />
            </div>
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <h2 className="section-title text-center">
                    {t('services-title')}
                </h2>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-icon">
                                <i data-feather={service.icon}></i>
                            </div>
                            <div className="service-content">
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-description">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .services {
                    padding: var(--spacing-3xl) 0;
                    background: var(--bg-color);
                }

                .section-title {
                    font-size: var(--font-size-3xl);
                    margin-bottom: var(--spacing-2xl);
                    color: var(--text-color);
                }

                .services-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: var(--spacing-xl);
                }

                @media (min-width: 768px) {
                    .services-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media (min-width: 1024px) {
                    .services-grid {
                        grid-template-columns: repeat(3, 1fr);
                    }
                }

                .service-card {
                    background: var(--card-bg);
                    border-radius: var(--radius-xl);
                    padding: var(--spacing-xl);
                    transition: all var(--transition-normal);
                    border: 1px solid var(--border-color);
                    display: flex;
                    flex-direction: column;
                    gap: var(--spacing-lg);
                    position: relative;
                    overflow: hidden;
                }

                .service-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(135deg, rgba(4, 128, 254, 0.05), rgba(11, 196, 238, 0.05));
                    opacity: 0;
                    transition: opacity var(--transition-normal);
                }

                .service-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 12px 40px var(--card-shadow);
                    border-color: var(--primary-color);
                }

                .service-card:hover::before {
                    opacity: 1;
                }

                .service-icon {
                    width: 60px;
                    height: 60px;
                    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
                    border-radius: var(--radius-lg);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: transform var(--transition-normal);
                    position: relative;
                    z-index: 1;
                }

                .service-card:hover .service-icon {
                    transform: scale(1.1) rotate(5deg);
                }

                .service-icon i {
                    width: 24px;
                    height: 24px;
                    color: white;
                }

                .service-content {
                    position: relative;
                    z-index: 1;
                }

                .service-title {
                    font-size: var(--font-size-xl);
                    margin-bottom: var(--spacing-md);
                    color: var(--text-color);
                }

                .service-description {
                    color: rgba(var(--text-color), 0.8);
                    line-height: 1.6;
                    margin: 0;
                }
            `}</style>
        </section>
    );
}

export default Services;