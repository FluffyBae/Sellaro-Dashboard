import React, { useEffect, useState } from 'react';
import { useTranslation } from '../hooks/useTranslation.jsx';
import PaymentModal from "./PaymentModal";
import  LogoBlack  from '../../assets/logo-sellaro.svg'
import  LogoWhite  from '../../assets/logo-sellaro-white.svg'
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


    const handlePaymentSubmission = async formData => {
        const res = await fetch('https://api.mayar.id/hl/v1/payment/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${import.meta.env.VITE_PAYMENT_API_KEY}`
            },
            body: JSON.stringify({
                name: formData.name,
                email: formData.email,
                amount: 360000,
                mobile: formData.phone,
                redirectUrl: "https://sellaro.id/successful-payment?email=" + formData.email + "&password=admin123",
                description: "Pemabayaran Paket Sellaro.id, Nama: " + formData.name,
                expiredAt: new Date(Date.now() + 15 * 60 * 1000).toISOString()
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.statusCode === 200) {
                window.location.href = data.data.link;
            }
            else {
                setErrorModal(true);
            }
        })
        .catch(error => {
            setErrorModal(true);
        });
    }

    return (
        <section className="packages" id="packages">
            <div className="container">
                <h2 className="section-title text-center">
                    {t('packages-title')}
                </h2>
                <div className="package-container">
                    <div className="package-card featured">
                        <div className="package-badge">FEATURED</div>
                        <div className="package-header">
                            <h3 className="package-title">{t('package-title')}</h3>
                            <div className="package-price">
                                <span className="price-amount">Rp 360.000</span>
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
            <style jsx>{`
                .packages {
                    padding: var(--spacing-3xl) 0;
                    background: linear-gradient(135deg, var(--bg-color) 0%, rgba(4, 128, 254, 0.02) 100%);
                }

                .section-title {
                    font-size: var(--font-size-3xl);
                    margin-bottom: var(--spacing-2xl);
                    color: var(--text-color);
                }

                .package-container {
                    display: flex;
                    justify-content: center;
                }

                .package-card {
                    background: var(--card-bg);
                    border-radius: var(--radius-xl);
                    padding: var(--spacing-2xl);
                    border: 1px solid var(--border-color);
                    position: relative;
                    transition: all var(--transition-normal);
                    max-width: 500px;
                    width: 100%;
                }

                .package-card.featured {
                    border: 2px solid var(--primary-color);
                    box-shadow: 0 20px 60px rgba(4, 128, 254, 0.1);
                }

                .package-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 25px 70px rgba(4, 128, 254, 0.15);
                }

                .package-badge {
                    position: absolute;
                    top: -1px;
                    left: 50%;
                    transform: translateX(-50%);
                    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
                    color: white;
                    padding: var(--spacing-xs) var(--spacing-lg);
                    border-radius: 0 0 var(--radius-md) var(--radius-md);
                    font-size: var(--font-size-xs);
                    font-weight: 600;
                    letter-spacing: 0.5px;
                }

                .package-header {
                    text-align: center;
                    margin-bottom: var(--spacing-2xl);
                    padding-top: var(--spacing-lg);
                }

                .package-title {
                    font-size: var(--font-size-2xl);
                    margin-bottom: var(--spacing-lg);
                    color: var(--text-color);
                }

                .package-price {
                    display: flex;
                    align-items: baseline;
                    justify-content: center;
                    gap: var(--spacing-xs);
                }

                .price-amount {
                    font-size: var(--font-size-4xl);
                    font-weight: 600;
                    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                .price-period {
                    font-size: var(--font-size-lg);
                    color: rgba(var(--text-color), 0.7);
                }

                .package-features {
                    margin-bottom: var(--spacing-2xl);
                }

                .feature-item {
                    display: flex;
                    gap: var(--spacing-md);
                    margin-bottom: var(--spacing-lg);
                    padding: var(--spacing-md);
                    border-radius: var(--radius-md);
                    transition: background-color var(--transition-fast);
                }

                .feature-item:hover {
                    background: rgba(4, 128, 254, 0.05);
                }

                .feature-item:last-child {
                    margin-bottom: 0;
                }

                .feature-icon {
                    width: 40px;
                    height: 40px;
                    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
                    border-radius: var(--radius-md);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }

                .feature-icon i {
                    width: 20px;
                    height: 20px;
                    color: white;
                }

                .feature-content {
                    flex: 1;
                }

                .feature-name {
                    font-size: var(--font-size-lg);
                    margin-bottom: var(--spacing-xs);
                    color: var(--text-color);
                    font-weight: 600;
                }

                .feature-desc {
                    color: rgba(var(--text-color), 0.8);
                    line-height: 1.5;
                    margin: 0;
                    font-size: var(--font-size-sm);
                }

                .package-cta {
                    width: 100%;
                    font-size: var(--font-size-lg);
                    padding: var(--spacing-md) var(--spacing-xl);
                    border-radius: var(--radius-lg);
                    font-weight: 600;
                }
            `}</style>
        </section>
    );
}

export default Packages;