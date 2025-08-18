import React, { useState, useEffect } from 'react';
import { useTranslation } from '../hooks/TranslationProvider.jsx';

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
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 backdrop-blur-sm" onClick={() => setIsOpen(false)}>
            <div className="bg-slate-800/95 backdrop-blur-20 border border-white/10 rounded-24 w-full max-w-md overflow-hidden shadow-modal animate-modal-slide-in relative" onClick={(e) => e.stopPropagation()}>
                {/* Modal Header */}
                <div className="text-center pt-10 px-8 pb-6 relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-20 flex items-center justify-center mx-auto mb-5 shadow-button">
                        <i data-feather="credit-card" className="w-7 h-7 text-white"></i>
                    </div>
                    <h2 className="text-white text-3xl font-bold font-heading mb-2 leading-tight">{t('payment-title')}</h2>
                    <p className="text-white/60 text-base m-0 leading-relaxed">Mulai perjalanan bisnis Anda dengan Sellaro</p>
                    <button 
                        className="absolute top-6 right-6 w-9 h-9 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-white/10 hover:border-white/20"
                        onClick={() => setIsOpen(false)}
                    >
                        <i data-feather="x" className="w-4 h-4 text-white/70"></i>
                    </button>
                </div>

                {/* Pricing Display */}
                <div className="px-8 py-6 border-b border-white/8">
                    <div className="flex items-baseline justify-center mb-6">
                        <span className="text-4xl font-bold text-white">Rp 360.000</span>
                        <span className="text-white/60 ml-2">/bulan</span>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center">
                        <span className="flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-3 py-1.5 rounded-full text-sm">
                            <i data-feather="check" className="w-3 h-3"></i>
                            AI Complete Package
                        </span>
                        <span className="flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-3 py-1.5 rounded-full text-sm">
                            <i data-feather="check" className="w-3 h-3"></i>
                            Dashboard Premium
                        </span>
                        <span className="flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-3 py-1.5 rounded-full text-sm">
                            <i data-feather="check" className="w-3 h-3"></i>
                            Rp50k AI Credit
                        </span>
                    </div>
                </div>

                {/* Form Section */}
                <form className="payment-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder={t('form-name')}
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>
                    
                    <div className="form-row">
                        <div className="form-group">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder={t('form-email')}
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                            <i data-feather="mail" className="input-icon"></i>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder={t('form-phone')}
                                value={formData.phone}
                                onChange={handleInputChange}
                                required
                            />
                            <i data-feather="phone" className="input-icon"></i>
                        </div>
                    </div>

                    <button 
                        disabled={isDisabled} 
                        onClick={() => onPaymentClick(formData)} 
                        type="submit" 
                        className="payment-submit"
                    >
                        <span>{t('payment-btn')}</span>
                        <i data-feather="arrow-right"></i>
                    </button>
                </form>

                {/* Footer */}
                <div className="modal-footer">
                    <p>Dengan melanjutkan, Anda menyetujui <a href="#">Terms & Service</a> kami</p>
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
                        backdrop-filter: blur(8px);
                        -webkit-backdrop-filter: blur(8px);
                    }

                    .payment-modal {
                        background: rgba(20, 20, 35, 0.95);
                        border: 1px solid rgba(255, 255, 255, 0.1);
                        border-radius: 24px;
                        width: 100%;
                        max-width: 480px;
                        overflow: hidden;
                        box-shadow: 
                            0 20px 80px rgba(0, 0, 0, 0.6),
                            0 0 0 1px rgba(255, 255, 255, 0.05);
                        animation: modalSlideIn 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                        position: relative;
                    }
                    
                    @keyframes modalSlideIn {
                        from {
                            opacity: 0;
                            transform: translateY(20px) scale(0.95);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0) scale(1);
                        }
                    }

                    .modal-header {
                        text-align: center;
                        padding: 40px 32px 24px;
                        position: relative;
                    }

                    .modal-icon {
                        width: 64px;
                        height: 64px;
                        background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
                        border-radius: 20px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin: 0 auto 20px;
                        box-shadow: 0 8px 32px rgba(4, 128, 254, 0.3);
                    }

                    .modal-icon i {
                        width: 28px;
                        height: 28px;
                        color: white;
                    }

                    .modal-header h2 {
                        color: #FFFFFF;
                        font-size: 28px;
                        font-weight: 700;
                        margin: 0 0 8px 0;
                        line-height: 1.2;
                    }

                    .modal-subtitle {
                        color: rgba(255, 255, 255, 0.6);
                        font-size: 16px;
                        margin: 0;
                        line-height: 1.4;
                    }

                    .modal-close {
                        position: absolute;
                        top: 24px;
                        right: 24px;
                        width: 36px;
                        height: 36px;
                        background: rgba(255, 255, 255, 0.05);
                        border: 1px solid rgba(255, 255, 255, 0.1);
                        border-radius: 12px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;
                        transition: all 0.2s ease;
                    }

                    .modal-close:hover {
                        background: rgba(255, 255, 255, 0.1);
                        border-color: rgba(255, 255, 255, 0.2);
                    }

                    .modal-close i {
                        width: 18px;
                        height: 18px;
                        color: rgba(255, 255, 255, 0.7);
                    }

                    .pricing-section {
                        text-align: center;
                        padding: 0 32px 32px;
                        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
                    }

                    .price-display {
                        margin-bottom: 20px;
                    }

                    .price-amount {
                        font-size: 36px;
                        font-weight: 800;
                        color: #FFFFFF;
                        margin-right: 8px;
                    }

                    .price-period {
                        font-size: 18px;
                        color: rgba(255, 255, 255, 0.6);
                        font-weight: 500;
                    }

                    .package-features {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 8px;
                        justify-content: center;
                    }

                    .feature-badge {
                        display: flex;
                        align-items: center;
                        gap: 6px;
                        background: rgba(4, 128, 254, 0.1);
                        border: 1px solid rgba(4, 128, 254, 0.2);
                        color: #4A9EFF;
                        padding: 6px 12px;
                        border-radius: 20px;
                        font-size: 14px;
                        font-weight: 500;
                    }

                    .feature-badge i {
                        width: 14px;
                        height: 14px;
                    }

                    .payment-form {
                        padding: 32px;
                    }

                    .form-row {
                        margin-bottom: 20px;
                    }

                    .form-group {
                        position: relative;
                    }

                    .form-group input {
                        width: 100%;
                        height: 56px;
                        background: rgba(255, 255, 255, 0.03);
                        border: 1px solid rgba(255, 255, 255, 0.1);
                        border-radius: 16px;
                        color: #FFFFFF;
                        font-size: 16px;
                        padding: 0 20px;
                        padding-right: 48px;
                        transition: all 0.3s ease;
                        box-sizing: border-box;
                    }

                    .form-group input::placeholder {
                        color: rgba(255, 255, 255, 0.4);
                        font-weight: 500;
                    }

                    .form-group input:focus {
                        outline: none;
                        border-color: var(--primary-color);
                        background: rgba(255, 255, 255, 0.05);
                        box-shadow: 0 0 0 3px rgba(4, 128, 254, 0.1);
                    }

                    .input-icon {
                        position: absolute;
                        right: 16px;
                        top: 50%;
                        transform: translateY(-50%);
                        width: 20px;
                        height: 20px;
                        color: rgba(255, 255, 255, 0.3);
                        pointer-events: none;
                    }

                    .payment-submit {
                        width: 100%;
                        height: 56px;
                        background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
                        border: none;
                        border-radius: 16px;
                        color: white;
                        font-size: 16px;
                        font-weight: 600;
                        cursor: pointer;
                        margin-top: 12px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 10px;
                        transition: all 0.3s ease;
                        box-shadow: 0 4px 20px rgba(4, 128, 254, 0.3);
                    }

                    .payment-submit:hover:not(:disabled) {
                        transform: translateY(-2px);
                        box-shadow: 0 8px 30px rgba(4, 128, 254, 0.4);
                    }

                    .payment-submit:disabled {
                        opacity: 0.5;
                        cursor: not-allowed;
                        transform: none;
                        box-shadow: none;
                    }

                    .payment-submit i {
                        width: 20px;
                        height: 20px;
                        transition: transform 0.3s ease;
                    }

                    .payment-submit:hover:not(:disabled) i {
                        transform: translateX(2px);
                    }

                    .modal-footer {
                        padding: 0 32px 32px;
                        text-align: center;
                    }

                    .modal-footer p {
                        color: rgba(255, 255, 255, 0.4);
                        font-size: 14px;
                        margin: 0;
                        line-height: 1.4;
                    }

                    .modal-footer a {
                        color: var(--primary-color);
                        text-decoration: none;
                        font-weight: 500;
                    }

                    .modal-footer a:hover {
                        text-decoration: underline;
                    }

                    @media (max-width: 480px) {
                        .payment-modal {
                            margin: 20px;
                            max-width: calc(100% - 40px);
                        }
                        
                        .modal-header {
                            padding: 32px 24px 20px;
                        }
                        
                        .pricing-section {
                            padding: 0 24px 24px;
                        }
                        
                        .payment-form {
                            padding: 24px;
                        }
                        
                        .modal-footer {
                            padding: 0 24px 24px;
                        }
                    }
                `}</style>
            </div>
        </div>
    );
}

export default PaymentModal;