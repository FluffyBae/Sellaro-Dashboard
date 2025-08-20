import React, { useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation.jsx';
import LogoBlack from "../../assets/logo-sellaro.svg";
import LogoWhite from "../../assets/logo-sellaro-white.svg";

function Footer() {
    const { t, language, setLanguage, theme, toggleTheme } = useTranslation();

    useEffect(() => {
        if (window.feather) {
            window.feather.replace();
        }
    }, []);

    return (
        <footer className="footer" id="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-main">
                        <div className="footer-brand">
                            <img src={LogoWhite} alt="Sellaro.id" className="footer-logo" />
                            <p className="footer-description">
                                {t('footer-description')}
                            </p>
                        </div>
                        
                        <div className="footer-contact">
                            <h4 className="footer-title">{t('footer-contact')}</h4>
                            <div className="contact-item">
                                <i data-feather="mail"></i>
                                <span>hello@sellaro.id</span>
                            </div>
                            {/*<div className="contact-item">*/}
                            {/*    <i data-feather="phone"></i>*/}
                            {/*    <span>+62 812-3456-7890</span>*/}
                            {/*</div>*/}
                            <div className="contact-item">
                                <i data-feather="map-pin"></i>
                                <span>Jakarta, Indonesia</span>
                            </div>
                        </div>
                        
                        {/*<div className="footer-social">*/}
                        {/*    <h4 className="footer-title">Ikuti Kami</h4>*/}
                        {/*    <div className="social-links">*/}
                        {/*        <a href="#" className="social-link">*/}
                        {/*            <i data-feather="instagram"></i>*/}
                        {/*        </a>*/}
                        {/*        <a href="#" className="social-link">*/}
                        {/*            <i data-feather="twitter"></i>*/}
                        {/*        </a>*/}
                        {/*        <a href="#" className="social-link">*/}
                        {/*            <i data-feather="linkedin"></i>*/}
                        {/*        </a>*/}
                        {/*        <a href="#" className="social-link">*/}
                        {/*            <i data-feather="youtube"></i>*/}
                        {/*        </a>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                    
                    <div className="footer-bottom">
                        <p>&copy; 2025 Sellaro.id. All rights reserved.</p>
                        {/*<div className="footer-links">*/}
                        {/*    <a href="#">Privacy Policy</a>*/}
                        {/*    <a href="#">Terms of Service</a>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .footer {
                    background: var(--card-bg);
                    border-top: 1px solid var(--border-color);
                    padding: var(--spacing-3xl) 0 var(--spacing-xl);
                }

                .footer-content {
                    display: flex;
                    flex-direction: column;
                    gap: var(--spacing-2xl);
                }

                .footer-main {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: var(--spacing-2xl);
                }

                @media (min-width: 768px) {
                    .footer-main {
                        grid-template-columns: 2fr 1fr 1fr;
                    }
                }

                .footer-brand {
                    display: flex;
                    align-items: start;
                    flex-direction: column;
                    gap: var(--spacing-lg);
                }

                .footer-logo {
                    height: 40px;
                }

                .footer-description {
                    //color: rgba(var(--text-color), 0.8);
                    color: var(--text-color);
                    line-height: 1.6;
                    margin: 0;
                    max-width: 300px;
                }

                .footer-title {
                    font-size: var(--font-size-lg);
                    margin-bottom: var(--spacing-lg);
                    color: var(--text-color);
                    //color: white;
                }

                .contact-item {
                    display: flex;
                    align-items: center;
                    gap: var(--spacing-sm);
                    margin-bottom: var(--spacing-md);
                    //color: rgba(var(--text-color), 0.8);
                    color: var(--text-color);
                }

                .contact-item i {
                    width: 16px;
                    height: 16px;
                    color: var(--primary-color);
                }

                .social-links {
                    display: flex;
                    gap: var(--spacing-md);
                }

                .social-link {
                    width: 40px;
                    height: 40px;
                    background: var(--bg-color);
                    border: 1px solid var(--border-color);
                    border-radius: var(--radius-md);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all var(--transition-fast);
                    text-decoration: none;
                }

                .social-link:hover {
                    background: var(--primary-color);
                    border-color: var(--primary-color);
                    transform: translateY(-2px);
                }

                .social-link i {
                    width: 18px;
                    height: 18px;
                    color: var(--text-color);
                    transition: color var(--transition-fast);
                }

                .social-link:hover i {
                    color: white;
                }

                .footer-bottom {
                    display: flex;
                    flex-direction: column;
                    gap: var(--spacing-md);
                    align-items: center;
                    justify-content: space-between;
                    padding-top: var(--spacing-xl);
                    border-top: 1px solid var(--border-color);
                    text-align: center;
                }

                @media (min-width: 768px) {
                    .footer-bottom {
                        flex-direction: row;
                        text-align: left;
                    }
                }

                .footer-bottom p {
                    //color: rgba(var(--text-color), 0.6);
                    color: var(--text-color);
                    margin: 0;
                }

                .footer-links {
                    display: flex;
                    gap: var(--spacing-lg);
                }

                .footer-links a {
                    color: rgba(var(--text-color), 0.6);
                    text-decoration: none;
                    transition: color var(--transition-fast);
                }

                .footer-links a:hover {
                    color: var(--primary-color);
                }
            `}</style>
        </footer>
    );
}

export default Footer;