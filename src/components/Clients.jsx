import React from 'react';
import { useTranslation } from '../hooks/useTranslation.jsx';
import Client1 from '../../assets/client1.png'
import Client2 from '../../assets/client2.png'
import Client3 from '../../assets/hotto-logo.webp'
import Client4 from '../../assets/client4.png'

function Clients() {
    const { t } = useTranslation();

    const clients = [
        Client1, Client3, Client4
    ];

    return (
        <section className="clients" id="clients">
            <div className="container">
                <h2 className="clients-title text-center">
                    {t('clients-title')}
                </h2>
                <div className="clients-grid">
                    {clients.map((client, index) => (
                        <div key={index} className="client-card">
                            {/*<div className="client-logo">*/}
                            {/*    {client}*/}
                            {/*</div>*/}
                            <img className="client-logo" src={client} alt="" />
                        </div>
                    ))}
                </div>
                <p className="clients-more text-center">
                    {t('clients-more')}
                </p>
            </div>

            <style jsx>{`
                .clients {
                    padding: var(--spacing-3xl) 0;
                    background: linear-gradient(180deg, 
                        var(--bg-color) 0%, 
                        var(--bg-color) 70%, 
                        rgba(45, 27, 105, 0.2) 100%
                    );
                }

                .clients-title {
                    font-size: var(--font-size-3xl);
                    margin-bottom: var(--spacing-2xl);
                    color: var(--text-color);
                }

                .clients-grid {
                    display: grid;
                    align-items: center;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: var(--spacing-lg);
                    margin-bottom: var(--spacing-xl);
                }

                @media (min-width: 768px) {
                    .clients-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media (min-width: 1024px) {
                    .clients-grid {
                        grid-template-columns: repeat(3, 1fr);
                    }
                }

                .client-card {
                    background: var(--card-bg);
                    border-radius: var(--radius-lg);
                    padding: var(--spacing-lg);
                    text-align: center;
                    height: 150px;
                    width: 100%;
                    transition: all var(--transition-normal);
                    border: 1px solid var(--border-color);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                }

                .client-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 8px 30px var(--card-shadow);
                    border-color: var(--primary-color);
                }

                .client-logo {
                    font-size: var(--font-size-lg);
                    font-weight: 600;
                    color: var(--text-color);
                    opacity: 0.8;
                    max-height: 80px;
                    max-width: 100%;
                    width: auto;
                    height: auto;
                    object-fit: contain;
                    transition: opacity var(--transition-fast);
                }

                .client-card:hover .client-logo {
                    opacity: 1;
                    color: var(--primary-color);
                }

                .clients-more {
                    font-size: var(--font-size-lg);
                    color: rgba(var(--text-color), 0.7);
                    font-style: italic;
                }
            `}</style>
        </section>
    );
}

export default Clients;