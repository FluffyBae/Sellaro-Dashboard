import React, { useEffect, useState } from 'react';
import { useTranslation } from '../hooks/useTranslation.jsx';
import PaymentModal from "./PaymentModal";
import ErrorModal from "./ErrorModal";

function Packages() {
    const { t } = useTranslation();
    const [showPayment, setShowPayment] = useState(false);
    const [errorModal, setErrorModal] = useState(false);

    useEffect(() => {
        if (window.feather) {
            window.feather.replace();
        }
    }, []);

    const features = [
        {
            icon: 'image',
            title: t('feature-ai-image-title'),
            description: t('feature-ai-image-desc')
        },
        {
            icon: 'search',
            title: t('feature-seo-title'),
            description: t('feature-seo-desc')
        },
        {
            icon: 'zap',
            title: t('feature-ads-title'),
            description: t('feature-ads-desc')
        },
        {
            icon: 'bar-chart-2',
            title: t('feature-dashboard-title'),
            description: t('feature-dashboard-desc')
        },
        {
            icon: 'credit-card',
            title: t('feature-credit-title'),
            description: t('feature-credit-desc')
        }
    ];

    // const handlePaymentSubmission = async formData => {
    //     const res = await fetch('https://api.sellaro.id/make-payment', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             name: formData.name,
    //             email: formData.email,
    //             phone: formData.phone,
    //         })
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //         // if (data.statusCode === 200) {
    //         window.location.href = data.data.link;
    //         // }
    //         // else {
    //         //     setErrorModal(true);
    //         // }
    //     })
    //     .catch(error => {
    //         setErrorModal(true);
    //     });
    // }
    const handlePaymentSubmission = async formData => {
        try {
            const response = await fetch('https://api.sellaro.id/make-payment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                })
            });
            const data = await response.json();
            window.location.href = data.data.link;
        } catch (error) {
            setErrorModal(true);
        }
    }

    return (
        <section className="packages" id="packages">
            <div className="container">
                <h2 className="section-title text-center">
                    {t('packages-title')}
                </h2>
                <div className="package-container">
                    <div className="package-card featured glass-card">
                        <div className="package-badge">PRESALE</div>
                        <div className="package-header">
                            <h3 className="package-title">{t('package-title')}</h3>
                            <div className="package-price">
                                <span className="price-amount">Rp 1.200.000</span>
                                <span className="price-period">{t('package-period')}</span>
                            </div>
                        </div>
                        
                        <div className="package-features">
                            {features.map((feature, index) => (
                                <div key={index} className="feature-item">
                                    <div className="feature-icon">
                                        <i data-feather={feature.icon}></i>
                                    </div>
                                    <div className="feature-content">
                                        <h4 className="feature-name">{feature.title}</h4>
                                        <p className="feature-desc">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <button 
                            className="btn btn-primary package-cta"
                            onClick={() => setShowPayment(true)}
                        >
                            {t('package-cta')}
                            <i data-feather="arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>

            <PaymentModal isOpen={showPayment} setIsOpen={setShowPayment} onPaymentClick={handlePaymentSubmission} />
            <ErrorModal isOpen={errorModal} setIsOpen={setErrorModal} />
        </section>
    );
}

export default Packages;