import React, { useState, useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation.jsx';

function PaymentModal({ isOpen, setIsOpen, onPaymentClick }) {
    const { t } = useTranslation();
    const [isDisabled, setIsDisabled] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        presale: 'PRESALE'
    });
    const [errors, setErrors] = useState({
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

    // Validation functions
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePhone = (phone) => {
        // Remove any spaces or dashes
        const cleanPhone = phone.replace(/[\s-]/g, '');
        
        // Check if it starts with 08 or 62 and has at least 10 digits
        const phoneRegex = /^(08|62)\d{8,}$/;
        return phoneRegex.test(cleanPhone) && cleanPhone.length >= 10;
    };

    const validateForm = (data) => {
        const newErrors = {};

        // Name validation
        if (!data.name.trim()) {
            newErrors.name = 'Nama lengkap wajib diisi';
        }

        // Email validation
        if (!data.email.trim()) {
            newErrors.email = 'Email wajib diisi';
        } else if (!validateEmail(data.email)) {
            newErrors.email = 'Format email tidak valid';
        }

        // Phone validation
        if (!data.phone.trim()) {
            newErrors.phone = 'Nomor telepon wajib diisi';
        } else if (!validatePhone(data.phone)) {
            newErrors.phone = 'Nomor telepon harus dimulai dengan 08 atau 62 dan minimal 10 digit';
        }

        return newErrors;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const newFormData = {
            ...formData,
            [name]: value
        };
        
        setFormData(newFormData);

        // Clear errors for the current field
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }

        // Check if form is valid for enabling/disabling submit button
        const formErrors = validateForm(newFormData);
        const hasErrors = Object.values(formErrors).some(error => error !== '');
        const hasEmptyFields = !newFormData.name || !newFormData.email || !newFormData.phone;
        
        setIsDisabled(hasErrors || hasEmptyFields);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate form before submission
        const formErrors = validateForm(formData);
        
        if (Object.values(formErrors).some(error => error !== '')) {
            setErrors(formErrors);
            return;
        }

        // Clear any existing errors
        setErrors({ name: '', email: '', phone: '' });

        // Process payment (redirect to payment page)
        onPaymentClick(formData);
        
        // Reset form and close modal
        setFormData({ name: '', email: '', phone: '', presale: 'PRESALE' });
        setIsOpen(false);
    };

    if (!isOpen) return null;

    return (
        <div className="payment-modal-overlay" onClick={() => setIsOpen(false)}>
            <div className="payment-modal" onClick={(e) => e.stopPropagation()}>
                {/* Modal Header */}
                <div className="modal-header">
                    <div className="modal-icon">
                        <i data-feather="credit-card"></i>
                    </div>
                    <h2>{t('payment-title')}</h2>
                    <p className="modal-subtitle">Mulai perjalanan bisnis Anda dengan Sellaro</p>
                    <button 
                        className="modal-close"
                        onClick={() => setIsOpen(false)}
                    >
                        <i data-feather="x"></i>
                    </button>
                </div>

                {/* Pricing Display */}
                <div className="pricing-section">
                    <div className="price-display">
                        <span className="price-amount">Rp 368.000</span>
                        <span className="price-period">/bulan</span>
                    </div>
                    <div className="package-features">
                        <span className="feature-badge">
                            <i data-feather="check"></i>
                            AI Complete Package
                        </span>
                        <span className="feature-badge">
                            <i data-feather="check"></i>
                            Dashboard Premium
                        </span>
                        <span className="feature-badge">
                            <i data-feather="check"></i>
                            Rp50k AI Credit
                        </span>
                    </div>
                </div>

                {/* Form Section */}
                <form className="payment-form" onSubmit={handleSubmit}>
                    {/* Hidden field for PRESALE */}
                    <input
                        type="hidden"
                        name="presale"
                        value={formData.presale}
                    />
                    <div className="form-row">
                        <div className="form-group">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder={t('form-name')}
                                value={formData.name}
                                onChange={handleInputChange}
                                className={errors.name ? 'error' : ''}
                                required
                            />
                            {errors.name && <span className="error-message">{errors.name}</span>}
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
                                className={errors.email ? 'error' : ''}
                                required
                            />
                            {errors.email && <span className="error-message">{errors.email}</span>}
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
                                className={errors.phone ? 'error' : ''}
                                required
                            />
                            {errors.phone && <span className="error-message">{errors.phone}</span>}
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

                    .form-group input.error {
                        border-color: #ef4444;
                        box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
                    }

                    .error-message {
                        display: block;
                        color: #ef4444;
                        font-size: 14px;
                        margin-top: 8px;
                        margin-left: 4px;
                        font-weight: 500;
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

                    @media (max-width: 768px) {
                        .payment-modal-overlay {
                            padding: 10px;
                            align-items: flex-start;
                            padding-top: 20px;
                            overflow-y: auto;
                        }

                        .payment-modal {
                            margin: 0;
                            max-width: 100%;
                            max-height: calc(100vh - 40px);
                            overflow-y: auto;
                        }
                        
                        .modal-header {
                            padding: 20px 20px 16px;
                        }

                        .modal-icon {
                            width: 48px;
                            height: 48px;
                            margin: 0 auto 12px;
                        }

                        .modal-icon i {
                            width: 22px;
                            height: 22px;
                        }

                        .modal-header h2 {
                            font-size: 22px;
                            margin: 0 0 6px 0;
                        }

                        .modal-subtitle {
                            font-size: 14px;
                        }
                        
                        .pricing-section {
                            padding: 0 20px 16px;
                        }

                        .price-amount {
                            font-size: 28px;
                        }

                        .price-period {
                            font-size: 16px;
                        }

                        .package-features {
                            gap: 6px;
                        }

                        .feature-badge {
                            padding: 4px 8px;
                            font-size: 12px;
                        }
                        
                        .payment-form {
                            padding: 20px;
                        }

                        .form-row {
                            margin-bottom: 16px;
                        }

                        .form-group input {
                            height: 48px;
                            font-size: 16px;
                            padding: 0 16px;
                        }

                        .payment-submit {
                            height: 48px;
                            font-size: 15px;
                            margin-top: 8px;
                        }
                        
                        .modal-footer {
                            padding: 0 20px 20px;
                        }

                        .modal-footer p {
                            font-size: 12px;
                        }

                        .error-message {
                            font-size: 12px;
                            margin-top: 6px;
                        }
                    }
                `}</style>
            </div>
        </div>
    );
}

export default PaymentModal;