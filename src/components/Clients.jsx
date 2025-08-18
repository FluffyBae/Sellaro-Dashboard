import React from 'react';
import { useTranslation } from '../hooks/useTranslation.jsx';
import Client1 from '../../assets/client1.png'
import Client2 from '../../assets/client2.png'
import Client3 from '../../assets/client3.png'
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
                    position: relative;
                    background: linear-gradient(180deg, 
                        transparent 0%,
                        rgba(26, 9, 51, 0.2) 20%,
                        rgba(45, 27, 105, 0.4) 50%,
                        rgba(26, 9, 51, 0.3) 80%,
                        transparent 100%
                    );
                }

                .clients::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: 
                        radial-gradient(circle at 25% 30%, rgba(4, 128, 254, 0.08) 0%, transparent 50%),
                        radial-gradient(circle at 75% 70%, rgba(11, 196, 238, 0.06) 0%, transparent 50%);
                    pointer-events: none;
                    z-index: 0;
                }

                .clients .container {
                    position: relative;
                    z-index: 1;
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
                    height: 100%;
                    width: auto;
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