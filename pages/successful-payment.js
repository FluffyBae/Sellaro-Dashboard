import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function SuccessfulPayment() {
    const [customerEmail, setCustomerEmail] = useState('')
    const [passwordVisible, setPasswordVisible] = useState(false)
    const password = 'AIComplete2024!'

    useEffect(() => {
        // Get customer email from localStorage
        const email = localStorage.getItem('customerEmail') || 'customer@example.com'
        setCustomerEmail(email)

        // Initialize theme from localStorage
        const savedTheme = localStorage.getItem('theme') || 'light'
        document.body.classList.remove('light-theme', 'dark-theme')
        document.body.classList.add(`${savedTheme}-theme`)

        // Initialize Feather icons
        if (typeof window !== 'undefined' && window.feather) {
            window.feather.replace()
        }
    }, [])

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            // Visual feedback could be added here
        })
    }

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible)
    }

    return (
        <>
            <Head>
                <title>Pembayaran Berhasil - Sellaro.id</title>
                <meta name="description" content="Pembayaran berhasil - Sellaro.id AI Complete Package" />
            </Head>

            <div className="success-page">
                {/* Confetti Animation */}
                {[...Array(9)].map((_, i) => (
                    <div 
                        key={i}
                        className="confetti" 
                        style={{
                            left: `${(i + 1) * 10}%`,
                            animationDelay: `${i * 0.5}s`
                        }}
                    ></div>
                ))}

                <div className="success-container">
                    <div className="success-content">
                        <div className="success-icon">
                            <i data-feather="check"></i>
                        </div>
                        
                        <h1 className="success-title">Pembayaran Berhasil!</h1>
                        <p className="success-message">
                            Terima kasih atas pembelian Anda! Invoice dan detail akses telah dikirim ke email Anda. 
                            Silakan cek email Anda untuk informasi lebih lanjut.
                        </p>

                        <div className="credentials-section">
                            <h3 className="credentials-title">Akses Dashboard Anda</h3>
                            
                            <div className="input-group">
                                <label htmlFor="email">Email:</label>
                                <div className="input-wrapper">
                                    <input 
                                        type="email" 
                                        id="email" 
                                        value={customerEmail} 
                                        disabled 
                                    />
                                    <button 
                                        className="copy-btn" 
                                        onClick={() => copyToClipboard(customerEmail)}
                                    >
                                        <i data-feather="copy"></i>
                                    </button>
                                </div>
                            </div>

                            <div className="input-group">
                                <label htmlFor="password">Password:</label>
                                <div className="input-wrapper">
                                    <input 
                                        type={passwordVisible ? "text" : "password"}
                                        id="password" 
                                        value={password} 
                                        disabled 
                                    />
                                    <button 
                                        className="toggle-btn" 
                                        onClick={togglePasswordVisibility}
                                    >
                                        <i data-feather={passwordVisible ? "eye-off" : "eye"}></i>
                                    </button>
                                    <button 
                                        className="copy-btn" 
                                        onClick={() => copyToClipboard(password)}
                                    >
                                        <i data-feather="copy"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="action-buttons">
                            <Link href="/" className="back-btn">
                                Kembali ke Beranda
                            </Link>
                            <a href="#" className="login-btn">
                                Login Sekarang
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}