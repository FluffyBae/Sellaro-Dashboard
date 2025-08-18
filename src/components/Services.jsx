import React, { useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation.jsx';

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
        <section className="services" id="services">
            <div className="container">
                <h2 className="section-title text-center">
                    {t('services-title')}
                </h2>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card glass-card">
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
        </section>
    );
}

export default Services;