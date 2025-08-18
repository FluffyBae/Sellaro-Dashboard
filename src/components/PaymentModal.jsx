import React, { useState, useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation.jsx';

function PaymentModal({ isOpen, setIsOpen, onPaymentClick }) {
    const { t } = useTranslation();
    const [isDisabled, setIsDisabled] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });



    useEffect(() => {
        if (window.feather) {
            window.feather.replace();
        }
        // Disable body scroll when modal is open
        if (isOpen) {
            document.body.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
        }
        
        // Cleanup on unmount
        return () => {
            document.body.classList.remove('modal-open');
        };
    }, [isOpen]);

    // // Listen for payment modal events
    // useEffect(() => {
    //     const handlePaymentOpen = () => setIsOpen(true);
    //
    //     // Custom event listener for opening payment modal
    //     window.addEventListener('openPaymentModal', handlePaymentOpen);
    //
    //     return () => {
    //         window.removeEventListener('openPaymentModal', handlePaymentOpen);
    //     };
    // }, []);

    const handleInputChange = (e) => {
        if (!formData.name || !formData.email || !formData.phone) {
            setIsDisabled(true);
        } else {
            setIsDisabled(false);
        }
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Here you would normally handle the payment processing
        // setIsOpen(false);
        setFormData({ name: '', email: '', phone: '' });
    };

    if (!isOpen) return null;

    return (
        <div className="payment-modal-overlay" onClick={() => setIsOpen(false)}>
            <div className="payment-modal" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>{t('payment-title')}</h2>
                    <button 
                        className="modal-close"
                        onClick={() => setIsOpen(false)}
                    >
                        <i data-feather="x"></i>
                    </button>
                </div>

                <div className="modal-content">
                    <div className="package-summary">
                        <h3>{t('package-summary-title')}</h3>
                        <div className="summary-price">
                            <span className="price">Rp 360.000</span>
                            <span className="period">/bulan</span>
                        </div>
                        <div className="summary-features">
                            <div className="feature-item">
                                <i data-feather="check"></i>
                                <span>AI Image Creator</span>
                            </div>
                            <div className="feature-item">
                                <i data-feather="check"></i>
                                <span>AI SEO Optimizer</span>
                            </div>
                            <div className="feature-item">
                                <i data-feather="check"></i>
                                <span>AI Ads Manager</span>
                            </div>
                            <div className="feature-item">
                                <i data-feather="check"></i>
                                <span>Smart Dashboard</span>
                            </div>
                            <div className="feature-item">
                                <i data-feather="check"></i>
                                <span>Rp50.000 AI Credit</span>
                            </div>
                        </div>
                    </div>

                    <form className="payment-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">{t('form-name')}</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">{t('form-email')}</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">{t('form-phone')}</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                            />
                        </div>

                        <button disabled={isDisabled} onClick={() => onPaymentClick(formData)} type="submit" className={`btn payment-submit ${isDisabled ? 'disabled' : 'btn-primary'}`}>
                            {t('payment-btn')}
                            <i data-feather="credit-card"></i>
                        </button>
                    </form>
                </div>

                <style jsx>{`
                    .payment-modal-overlay {
                        position: fixed;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background: rgba(0, 0, 0, 0.8);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        z-index: var(--z-modal);
                        padding: var(--spacing-md);
                        backdrop-filter: blur(5px);
                        -webkit-backdrop-filter: blur(5px);
                    }

                    .payment-modal {
                        background: #1a0933;
                        border: 1px solid rgba(255, 255, 255, 0.1);
                        border-radius: var(--radius-xl);
                        width: 100%;
                        max-width: 800px;
                        max-height: 90vh;
                        overflow-y: auto;
                        box-shadow: 0 25px 80px rgba(0, 0, 0, 0.5);
                        animation: modalSlideIn 0.3s ease-out;
                    }
                    
                    @keyframes modalSlideIn {
                        from {
                            opacity: 0;
                            transform: translateY(30px) scale(0.95);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0) scale(1);
                        }
                    }

                    .modal-header {
                        background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
                        color: white;
                        padding: var(--spacing-xl);
                        border-radius: var(--radius-xl) var(--radius-xl) 0 0;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    }

                    .modal-header h2 {
                        margin: 0;
                        font-size: var(--font-size-2xl);
                    }

                    .modal-close {
                        background: rgba(255, 255, 255, 0.2);
                        border: none;
                        border-radius: var(--radius-md);
                        width: 40px;
                        height: 40px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;
                        transition: background-color var(--transition-fast);
                    }

                    .modal-close:hover {
                        background: rgba(255, 255, 255, 0.3);
                    }

                    .modal-close i {
                        width: 20px;
                        height: 20px;
                        color: white;
                    }

                    .modal-content {
                        padding: var(--spacing-xl);
                        display: grid;
                        grid-template-columns: 1fr;
                        gap: var(--spacing-2xl);
                    }

                    @media (min-width: 768px) {
                        .modal-content {
                            grid-template-columns: 1fr 1fr;
                        }
                    }

                    .package-summary {
                        background: rgba(255, 255, 255, 0.05);
                        border-radius: var(--radius-lg);
                        padding: var(--spacing-xl);
                        border: 1px solid rgba(255, 255, 255, 0.1);
                    }

                    .package-summary h3 {
                        margin-bottom: var(--spacing-lg);
                        color: var(--text-color);
                    }

                    .summary-price {
                        display: flex;
                        align-items: baseline;
                        gap: var(--spacing-xs);
                        margin-bottom: var(--spacing-xl);
                    }

                    .price {
                        font-size: var(--font-size-3xl);
                        font-weight: 600;
                        background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        background-clip: text;
                    }

                    .period {
                        color: rgba(var(--text-color), 0.7);
                    }

                    .summary-features {
                        display: flex;
                        flex-direction: column;
                        gap: var(--spacing-md);
                    }

                    .feature-item {
                        display: flex;
                        align-items: center;
                        gap: var(--spacing-sm);
                    }

                    .feature-item i {
                        width: 16px;
                        height: 16px;
                        color: var(--primary-color);
                    }

                    .payment-form {
                        display: flex;
                        flex-direction: column;
                        gap: var(--spacing-lg);
                    }

                    .form-group {
                        display: flex;
                        flex-direction: column;
                        gap: var(--spacing-xs);
                    }

                    .form-group label {
                        font-weight: 500;
                        color: var(--text-color);
                    }

                    .form-group input {
                        padding: var(--spacing-md);
                        border: 1px solid rgba(255, 255, 255, 0.2);
                        border-radius: var(--radius-md);
                        background: rgba(255, 255, 255, 0.05);
                        color: #FFFFFF;
                        font-size: var(--font-size-base);
                        transition: border-color var(--transition-fast);
                    }

                    .form-group input:focus {
                        outline: none;
                        border-color: var(--primary-color);
                    }

                    .payment-submit {
                        width: 100%;
                        padding: var(--spacing-md) var(--spacing-xl);
                        font-size: var(--font-size-lg);
                        font-weight: 600;
                        margin-top: var(--spacing-lg);
                    }
                `}</style>
            </div>
        </div>
    );
}

export default PaymentModal;