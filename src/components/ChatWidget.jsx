import React, { useState, useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation.jsx';

function ChatWidget() {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        if (window.feather) {
            window.feather.replace();
        }
    }, [isOpen]);

    useEffect(() => {
        if (isOpen && messages.length === 0) {
            // Add initial bot greeting
            setMessages([{
                id: 1,
                type: 'bot',
                content: t('bot-greeting'),
                timestamp: new Date()
            }]);
        }
    }, [isOpen, messages.length, t]);

    const quickActions = [
        t('quick-services'),
        t('quick-pricing'),
        t('quick-contact')
    ];

    const handleSendMessage = (message = inputMessage) => {
        if (!message.trim()) return;

        const userMessage = {
            id: Date.now(),
            type: 'user',
            content: message,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setInputMessage('');
        setIsTyping(true);

        // Simulate bot response
        setTimeout(() => {
            const botResponse = {
                id: Date.now() + 1,
                type: 'bot',
                content: getBotResponse(message),
                timestamp: new Date()
            };
            setMessages(prev => [...prev, botResponse]);
            setIsTyping(false);
        }, 1500);
    };

    const getBotResponse = (message) => {
        const lowerMessage = message.toLowerCase();
        
        if (lowerMessage.includes('layanan') || lowerMessage.includes('service')) {
            return 'Kami menyediakan 6 layanan utama: Analisis Tampilan Toko, Re-Design Toko, Copywriting, Foto Produk, Rekomendasi Iklan, dan Optimasi UX Toko. Semua dirancang khusus untuk meningkatkan penjualan Shopee Anda.';
        } else if (lowerMessage.includes('harga') || lowerMessage.includes('pricing') || lowerMessage.includes('biaya')) {
            return 'Paket AI Complete kami tersedia dengan harga Rp 368.000/bulan. Paket ini sudah termasuk semua fitur AI dan Rp 50.000 AI Credit setiap bulannya.';
        } else if (lowerMessage.includes('kontak') || lowerMessage.includes('contact') || lowerMessage.includes('hubungi')) {
            return 'Anda bisa menghubungi kami melalui email: hello@sellaro.id atau WhatsApp: +62 812-3456-7890. Tim kami siap membantu Anda 24/7!';
        } else {
            return 'Terima kasih atas pertanyaan Anda! Tim AI kami akan segera memproses dan memberikan rekomendasi terbaik untuk bisnis Shopee Anda. Ada hal lain yang bisa saya bantu?';
        }
    };

    return (
        <>
            {/* Chat Widget Button */}
            <button 
                className={`chat-widget-btn ${isOpen ? 'active' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <i data-feather={isOpen ? 'x' : 'message-circle'}></i>
            </button>

            {/* Chat Widget Panel */}
            <div className={`chat-widget ${isOpen ? 'open' : ''}`}>
                <div className="chat-header">
                    <div className="chat-info">
                        <h3>{t('chat-title')}</h3>
                        <p>{t('chat-subtitle')}</p>
                    </div>
                    <button 
                        className="chat-close"
                        onClick={() => setIsOpen(false)}
                    >
                        <i data-feather="x"></i>
                    </button>
                </div>

                <div className="chat-messages">
                    {messages.map(message => (
                        <div key={message.id} className={`message ${message.type}`}>
                            <div className="message-content">
                                {message.content}
                            </div>
                            <div className="message-time">
                                {message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                            </div>
                        </div>
                    ))}
                    
                    {isTyping && (
                        <div className="message bot typing">
                            <div className="message-content">
                                <div className="typing-dots">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="chat-quick-actions">
                    {quickActions.map((action, index) => (
                        <button 
                            key={index}
                            className="quick-action-btn"
                            onClick={() => handleSendMessage(action)}
                        >
                            {action}
                        </button>
                    ))}
                </div>

                <div className="chat-input">
                    <input
                        type="text"
                        placeholder={t('chat-placeholder')}
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    />
                    <button 
                        className="send-btn"
                        onClick={() => handleSendMessage()}
                    >
                        <i data-feather="send"></i>
                    </button>
                </div>
            </div>

            <style jsx>{`
                .chat-widget-btn {
                    position: fixed;
                    bottom: var(--spacing-xl);
                    right: var(--spacing-xl);
                    width: 60px;
                    height: 60px;
                    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
                    border: none;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    box-shadow: 0 8px 30px rgba(4, 128, 254, 0.3);
                    transition: all var(--transition-normal);
                    z-index: var(--z-fixed);
                }

                .chat-widget-btn:hover {
                    transform: scale(1.1);
                    box-shadow: 0 12px 40px rgba(4, 128, 254, 0.4);
                }

                .chat-widget-btn i {
                    width: 24px;
                    height: 24px;
                    color: white;
                }

                .chat-widget {
                    position: fixed;
                    bottom: var(--spacing-xl);
                    right: var(--spacing-xl);
                    width: 350px;
                    height: 500px;
                    background: rgba(20, 20, 35, 0.98);
                    backdrop-filter: blur(20px);
                    -webkit-backdrop-filter: blur(20px);
                    border-radius: var(--radius-xl);
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
                    display: flex;
                    flex-direction: column;
                    transform: translateY(100%) scale(0.8);
                    opacity: 0;
                    visibility: hidden;
                    transition: all var(--transition-normal);
                    z-index: var(--z-modal);
                    border: 1px solid rgba(255, 255, 255, 0.15);
                }

                .chat-widget.open {
                    transform: translateY(0) scale(1);
                    opacity: 1;
                    visibility: visible;
                }

                @media (max-width: 768px) {
                    .chat-widget {
                        width: calc(100vw - 2rem);
                        height: 80vh;
                        bottom: var(--spacing-md);
                        right: var(--spacing-md);
                        left: var(--spacing-md);
                    }
                }

                .chat-header {
                    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
                    color: white;
                    padding: var(--spacing-lg);
                    border-radius: var(--radius-xl) var(--radius-xl) 0 0;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .chat-info h3 {
                    margin: 0 0 var(--spacing-xs) 0;
                    font-size: var(--font-size-lg);
                }

                .chat-info p {
                    margin: 0;
                    opacity: 0.9;
                    font-size: var(--font-size-sm);
                }

                .chat-close {
                    background: rgba(255, 255, 255, 0.2);
                    border: none;
                    border-radius: var(--radius-md);
                    width: 32px;
                    height: 32px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: background-color var(--transition-fast);
                }

                .chat-close:hover {
                    background: rgba(255, 255, 255, 0.3);
                }

                .chat-close i {
                    width: 16px;
                    height: 16px;
                    color: white;
                }

                .chat-messages {
                    flex: 1;
                    padding: var(--spacing-lg);
                    overflow-y: auto;
                    display: flex;
                    flex-direction: column;
                    gap: var(--spacing-md);
                    background: rgba(255, 255, 255, 0.02);
                }

                .message {
                    display: flex;
                    flex-direction: column;
                    gap: var(--spacing-xs);
                }

                .message.user {
                    align-items: flex-end;
                }

                .message.bot {
                    align-items: flex-start;
                }

                .message-content {
                    max-width: 80%;
                    padding: var(--spacing-sm) var(--spacing-md);
                    border-radius: var(--radius-lg);
                    font-size: var(--font-size-sm);
                    line-height: 1.4;
                }

                .message.user .message-content {
                    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
                    color: white;
                    border-bottom-right-radius: var(--radius-sm);
                }

                .message.bot .message-content {
                    background: rgba(255, 255, 255, 0.1);
                    color: rgba(255, 255, 255, 0.9);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-bottom-left-radius: var(--radius-sm);
                }

                .message-time {
                    font-size: var(--font-size-xs);
                    color: rgba(var(--text-color), 0.6);
                    padding: 0 var(--spacing-sm);
                }

                .typing-dots {
                    display: flex;
                    gap: 4px;
                    align-items: center;
                }

                .typing-dots span {
                    width: 8px;
                    height: 8px;
                    background: var(--primary-color);
                    border-radius: 50%;
                    animation: typing 1.4s infinite ease-in-out;
                }

                .typing-dots span:nth-child(2) {
                    animation-delay: 0.2s;
                }

                .typing-dots span:nth-child(3) {
                    animation-delay: 0.4s;
                }

                @keyframes typing {
                    0%, 60%, 100% {
                        transform: translateY(0);
                        opacity: 0.5;
                    }
                    30% {
                        transform: translateY(-10px);
                        opacity: 1;
                    }
                }

                .chat-quick-actions {
                    padding: var(--spacing-md) var(--spacing-lg);
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                    display: flex;
                    flex-wrap: wrap;
                    gap: var(--spacing-xs);
                    background: rgba(255, 255, 255, 0.02);
                }

                .quick-action-btn {
                    background: rgba(255, 255, 255, 0.08);
                    border: 1px solid rgba(255, 255, 255, 0.15);
                    border-radius: var(--radius-md);
                    padding: var(--spacing-xs) var(--spacing-sm);
                    font-size: var(--font-size-xs);
                    color: rgba(255, 255, 255, 0.8);
                    cursor: pointer;
                    transition: all var(--transition-fast);
                }

                .quick-action-btn:hover {
                    border-color: var(--primary-color);
                    color: var(--primary-color);
                }

                .chat-input {
                    padding: var(--spacing-lg);
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                    display: flex;
                    gap: var(--spacing-sm);
                    background: rgba(255, 255, 255, 0.02);
                }

                .chat-input input {
                    flex: 1;
                    padding: var(--spacing-sm) var(--spacing-md);
                    border: 1px solid rgba(255, 255, 255, 0.15);
                    border-radius: var(--radius-md);
                    background: rgba(255, 255, 255, 0.08);
                    color: rgba(255, 255, 255, 0.9);
                    font-size: var(--font-size-sm);
                    outline: none;
                    transition: border-color var(--transition-fast);
                }

                .chat-input input::placeholder {
                    color: rgba(255, 255, 255, 0.5);
                }

                .chat-input input:focus {
                    border-color: var(--primary-color);
                }

                .send-btn {
                    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
                    border: none;
                    border-radius: var(--radius-md);
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: transform var(--transition-fast);
                }

                .send-btn:hover {
                    transform: scale(1.05);
                }

                .send-btn i {
                    width: 16px;
                    height: 16px;
                    color: white;
                }
            `}</style>
        </>
    );
}

export default ChatWidget;