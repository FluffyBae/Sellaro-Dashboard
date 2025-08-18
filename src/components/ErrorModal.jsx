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
                {/* Modal Header */}
                <div className="modal-header">
                    <div className="modal-icon error">
                        <i data-feather="alert-circle"></i>
                    </div>
                    <h2>{t('error-title') || 'Error'}</h2>
                    <p className="modal-subtitle">Oops! Terjadi kesalahan</p>
                    <button 
                        className="modal-close"
                        onClick={() => setIsOpen(false)}
                    >
                        <i data-feather="x"></i>
                    </button>
                </div>

                {/* Error Message Section */}
                <div className="error-section">
                    <div className="error-message">
                        <p>{errorMessage || t('error-message') || 'An unexpected error occurred. Please try again later.'}</p>
                    </div>
                </div>

                {/* Actions */}
                <div className="error-actions">
                    <button 
                        className="retry-button"
                        onClick={() => setIsOpen(false)}
                    >
                        <span>Tutup</span>
                    </button>
                </div>

                {/* Footer */}
                <div className="modal-footer">
                    <p>Jika masalah berlanjut, silakan hubungi support kami</p>
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
                        max-width: 420px;
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
                        background: linear-gradient(135deg, #ef4444, #dc2626);
                        border-radius: 20px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin: 0 auto 20px;
                        box-shadow: 0 8px 32px rgba(239, 68, 68, 0.3);
                    }

                    .modal-icon.error {
                        background: linear-gradient(135deg, #ef4444, #dc2626);
                        box-shadow: 0 8px 32px rgba(239, 68, 68, 0.3);
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

                    .error-section {
                        padding: 0 32px 24px;
                        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
                    }

                    .error-message {
                        background: rgba(239, 68, 68, 0.1);
                        border: 1px solid rgba(239, 68, 68, 0.2);
                        border-radius: 16px;
                        padding: 24px;
                        text-align: center;
                    }

                    .error-message p {
                        color: rgba(255, 255, 255, 0.8);
                        font-size: 16px;
                        line-height: 1.5;
                        margin: 0;
                    }

                    .error-actions {
                        padding: 24px 32px;
                    }

                    .retry-button {
                        width: 100%;
                        height: 56px;
                        background: rgba(255, 255, 255, 0.08);
                        border: 1px solid rgba(255, 255, 255, 0.2);
                        border-radius: 16px;
                        color: white;
                        font-size: 16px;
                        font-weight: 600;
                        cursor: pointer;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 10px;
                        transition: all 0.3s ease;
                    }

                    .retry-button:hover {
                        background: rgba(255, 255, 255, 0.12);
                        transform: translateY(-2px);
                        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
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

                    @media (max-width: 480px) {
                        .payment-modal {
                            margin: 20px;
                            max-width: calc(100% - 40px);
                        }
                        
                        .modal-header {
                            padding: 32px 24px 20px;
                        }
                        
                        .error-section {
                            padding: 0 24px 20px;
                        }
                        
                        .error-actions {
                            padding: 20px 24px;
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

export default ErrorModal;