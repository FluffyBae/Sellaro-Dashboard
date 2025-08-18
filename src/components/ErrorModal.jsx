import React, { useState, useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation.jsx';


function ErrorModal({ isOpen, setIsOpen, errorMessage }) {
    const { t } = useTranslation();

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

    if (!isOpen) return null;

    // 200 - Your request Success

    // 400 - Bad request, your request incomplete or you need add required data
    // 404 - Endpoint or Product Dont exist.
    // 401 - You dont have Authorization for access API
    // 429 - Your limit reached
    // 500 - Error

    return (
        <div className="payment-modal-overlay" onClick={() => setIsOpen(false)}>
            <div className="payment-modal" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header" style={{ background: 'linear-gradient(135deg, #e53935, #e35d5b)' }}>
                    <h2>{t('error-title') || 'Error'}</h2>
                    <button
                        className="modal-close"
                        onClick={() => setIsOpen(false)}
                    >
                        <i data-feather="x"></i>
                    </button>
                </div>
                <div className="modal-content">
                    <div className="package-summary">
                        <div className="summary-features">
                            <div className="feature-item">
                                <i data-feather="alert-circle"></i>
                                <span>{errorMessage || t('error-message') || 'An unexpected error occurred. Please try again later.'}</span>
                            </div>
                        </div>
                    </div>
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
                        max-width: 500px;
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
                            grid-template-columns: 1fr;
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
                        width: 24px;
                        height: 24px;
                        color: #e53935;
                    }
                `}</style>
            </div>
        </div>
    );
}

export default ErrorModal;