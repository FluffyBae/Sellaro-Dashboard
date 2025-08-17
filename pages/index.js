import Head from 'next/head'
import { useState, useEffect } from 'react'
import PaymentModal from '../components/PaymentModal'

export default function Home() {
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false)
    const [currentLang, setCurrentLang] = useState('id')

    useEffect(() => {
        // Initialize Feather icons
        if (typeof window !== 'undefined' && window.feather) {
            window.feather.replace()
        }

        // Initialize theme from localStorage
        const savedTheme = localStorage.getItem('theme') || 'light'
        document.body.classList.remove('light-theme', 'dark-theme')
        document.body.classList.add(`${savedTheme}-theme`)
        
        // Setup theme toggle functionality
        const themeToggle = document.getElementById('themeToggle')
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                const currentTheme = document.body.classList.contains('light-theme') ? 'light' : 'dark'
                const newTheme = currentTheme === 'light' ? 'dark' : 'light'
                
                document.body.classList.remove('light-theme', 'dark-theme')
                document.body.classList.add(`${newTheme}-theme`)
                localStorage.setItem('theme', newTheme)
            })
        }

        // Setup mobile menu toggle
        const mobileMenuToggle = document.getElementById('mobileMenuToggle')
        const mobileNav = document.getElementById('mobileNav')
        
        if (mobileMenuToggle && mobileNav) {
            mobileMenuToggle.addEventListener('click', () => {
                mobileNav.classList.toggle('show')
            })
        }
    }, [])

    const scrollToPackages = () => {
        document.getElementById('packages')?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }

    const openPaymentModal = () => {
        setIsPaymentModalOpen(true)
        document.body.style.overflow = 'hidden'
    }

    const closePaymentModal = () => {
        setIsPaymentModalOpen(false)
        document.body.style.overflow = 'auto'
    }

    return (
        <>
            <Head>
                <title>Sellaro.id - Boost Your Shopee Sales with AI</title>
                <meta name="description" content="Tingkatkan penjualan Shopee Anda dengan strategi AI yang cerdas, analisis data mendalam, dan solusi yang disesuaikan dengan kebutuhan bisnis Anda." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            {/* Header */}
            <header className="header" id="header">
                <div className="container">
                    <div className="header-content">
                        <div className="logo">
                            <img src="/assets/logo.png" alt="Sellaro.id" className="logo-img" />
                        </div>
                        
                        <nav className="nav">
                            <a href="#hero" className="nav-link">Home</a>
                            <a href="#clients" className="nav-link">Klien</a>
                            <a href="#why-choose" className="nav-link">Tentang Kami</a>
                            <a href="#services" className="nav-link">Layanan</a>
                            <a href="#packages" className="nav-link">Paket</a>
                            <a href="#footer" className="nav-link">Kontak</a>
                            <a href="#" className="nav-link login-btn">Login</a>
                        </nav>

                        <div className="header-controls">
                            <button className="language-toggle" id="languageToggle">
                                <span>ID</span>
                            </button>
                            
                            <button className="theme-toggle" id="themeToggle">
                                <i data-feather="sun" className="sun-icon"></i>
                                <i data-feather="moon" className="moon-icon"></i>
                            </button>
                            
                            <button className="mobile-menu-toggle" id="mobileMenuToggle">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                    </div>
                    
                    <nav className="mobile-nav" id="mobileNav">
                        <a href="#hero" className="mobile-nav-link">Home</a>
                        <a href="#clients" className="mobile-nav-link">Klien</a>
                        <a href="#why-choose" className="mobile-nav-link">Tentang Kami</a>
                        <a href="#services" className="mobile-nav-link">Layanan</a>
                        <a href="#packages" className="mobile-nav-link">Paket</a>
                        <a href="#footer" className="mobile-nav-link">Kontak</a>
                        <a href="#" className="mobile-nav-link login-btn">Login</a>
                    </nav>
                </div>
            </header>

            <main>
                {/* Hero Section */}
                <section className="hero" id="hero">
                    <div className="container">
                        <div className="hero-content">
                            <div className="hero-text">
                                <h1 className="hero-title">Boost Your Shopee Sales, Effortlessly</h1>
                                <p className="hero-subtitle">Sell More, Stress Less</p>
                                <p className="hero-description">Tingkatkan penjualan Shopee Anda dengan strategi AI yang cerdas, analisis data mendalam, dan solusi yang disesuaikan dengan kebutuhan bisnis Anda.</p>
                                <button className="cta-button" onClick={scrollToPackages}>Mulai Sekarang</button>
                            </div>
                            <div className="hero-image">
                                <img src="/assets/hero-image.svg" alt="AI Analytics Dashboard" className="hero-img" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Clients Section */}
                <section className="clients" id="clients">
                    <div className="container">
                        <h2 className="section-title">Dipercaya oleh Brand Terkemuka</h2>
                        <div className="clients-grid">
                            <div className="client-logo">
                                <img src="/assets/client1.png" alt="Global Tech" />
                            </div>
                            <div className="client-logo">
                                <img src="/assets/client2.png" alt="Maicih" />
                            </div>
                            <div className="client-logo">
                                <img src="/assets/client3.png" alt="Hotto" />
                            </div>
                            <div className="client-logo">
                                <img src="/assets/client4.png" alt="Tiens" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Section */}
                <section className="why-choose" id="why-choose">
                    <div className="container">
                        <div className="why-choose-content">
                            <div className="why-choose-text">
                                <h2 className="section-title">Mengapa Memilih Sellaro?</h2>
                                <div className="features">
                                    <div className="feature">
                                        <div className="feature-icon">
                                            <i data-feather="zap"></i>
                                        </div>
                                        <div className="feature-content">
                                            <h3>AI-Powered Analytics</h3>
                                            <p>Gunakan kekuatan AI untuk menganalisis tren pasar dan perilaku konsumen secara real-time.</p>
                                        </div>
                                    </div>
                                    
                                    <div className="feature">
                                        <div className="feature-icon">
                                            <i data-feather="trending-up"></i>
                                        </div>
                                        <div className="feature-content">
                                            <h3>Peningkatan Penjualan Terbukti</h3>
                                            <p>Rata-rata klien kami mengalami peningkatan penjualan hingga 300% dalam 3 bulan pertama.</p>
                                        </div>
                                    </div>
                                    
                                    <div className="feature">
                                        <div className="feature-icon">
                                            <i data-feather="clock"></i>
                                        </div>
                                        <div className="feature-content">
                                            <h3>Hemat Waktu & Effort</h3>
                                            <p>Otomatisasi proses optimasi toko sehingga Anda dapat fokus pada pengembangan produk.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="why-choose-image">
                                <img src="/assets/hero-image.svg" alt="Why Choose Sellaro" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section className="services" id="services">
                    <div className="container">
                        <h2 className="section-title">Layanan Kami</h2>
                        <div className="services-grid">
                            <div className="service-card">
                                <div className="service-icon">
                                    <i data-feather="search"></i>
                                </div>
                                <h3 className="service-title">SEO Toko</h3>
                                <p className="service-description">Optimasi kata kunci dan deskripsi produk untuk meningkatkan visibilitas toko Anda di hasil pencarian Shopee.</p>
                            </div>
                            
                            <div className="service-card">
                                <div className="service-icon">
                                    <i data-feather="bar-chart-2"></i>
                                </div>
                                <h3 className="service-title">Analisa Kompetitor</h3>
                                <p className="service-description">Pantau dan analisis strategi kompetitor untuk memberikan Anda keunggulan kompetitif di marketplace.</p>
                            </div>
                            
                            <div className="service-card">
                                <div className="service-icon">
                                    <i data-feather="edit"></i>
                                </div>
                                <h3 className="service-title">Copywriting</h3>
                                <p className="service-description">Penulisan deskripsi produk yang persuasif dan SEO-friendly untuk meningkatkan visibilitas dan daya tarik produk Anda di platform Shopee.</p>
                            </div>
                            
                            <div className="service-card">
                                <div className="service-icon">
                                    <i data-feather="camera"></i>
                                </div>
                                <h3 className="service-title">Foto Product</h3>
                                <p className="service-description">Jasa fotografi produk profesional dengan kualitas tinggi yang akan membuat produk Anda tampil menarik dan meningkatkan kepercayaan pembeli.</p>
                            </div>
                            
                            <div className="service-card">
                                <div className="service-icon">
                                    <i data-feather="target"></i>
                                </div>
                                <h3 className="service-title">Rekomendasi Iklan</h3>
                                <p className="service-description">Strategi periklanan yang efektif dan tepat sasaran untuk memaksimalkan ROI iklan Shopee Anda dengan budget yang optimal.</p>
                            </div>
                            
                            <div className="service-card">
                                <div className="service-icon">
                                    <i data-feather="smartphone"></i>
                                </div>
                                <h3 className="service-title">Optimasi UX Toko</h3>
                                <p className="service-description">Optimasi user experience toko untuk memastikan navigasi yang mudah, loading yang cepat, dan proses pembelian yang lancar.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Packages */}
                <section className="packages" id="packages">
                    <div className="container">
                        <h2 className="section-title">Paket Kami</h2>
                        <div className="package-container">
                            <div className="package-card featured">
                                <div className="package-header">
                                    <h3 className="package-title">Paket AI Complete</h3>
                                    <div className="package-price">
                                        <span className="price-currency">Rp</span>
                                        <span className="price-amount">350.000</span>
                                        <span className="price-period">/bulan</span>
                                    </div>
                                </div>
                                <div className="package-features">
                                    <div className="feature-item">
                                        <i data-feather="image" className="feature-icon"></i>
                                        <div className="feature-content">
                                            <h4>AI Image Creator</h4>
                                            <p>Buat gambar toko dan produk yang lebih menarik dan profesional.</p>
                                        </div>
                                    </div>
                                    <div className="feature-item">
                                        <i data-feather="search" className="feature-icon"></i>
                                        <div className="feature-content">
                                            <h4>AI SEO Optimizer</h4>
                                            <p>Optimasi judul & deskripsi produk agar lebih mudah ditemukan di pencarian Shopee.</p>
                                        </div>
                                    </div>
                                    <div className="feature-item">
                                        <i data-feather="trending-up" className="feature-icon"></i>
                                        <div className="feature-content">
                                            <h4>AI Ads Manager</h4>
                                            <p>Rekomendasi dan pengelolaan iklan otomatis agar lebih efektif & hemat biaya.</p>
                                        </div>
                                    </div>
                                    <div className="feature-item">
                                        <i data-feather="bar-chart-2" className="feature-icon"></i>
                                        <div className="feature-content">
                                            <h4>Smart Dashboard</h4>
                                            <p>Pantau performa toko Shopee Anda dalam satu dashboard yang rapi & mudah dipahami.</p>
                                        </div>
                                    </div>
                                    <div className="feature-item">
                                        <i data-feather="credit-card" className="feature-icon"></i>
                                        <div className="feature-content">
                                            <h4>Rp50.000 AI Credit / bulan</h4>
                                            <p>Bisa dipakai untuk tambahan fitur premium AI sesuai kebutuhan Anda.</p>
                                        </div>
                                    </div>
                                </div>
                                <button className="package-cta" onClick={openPaymentModal}>Mulai Sekarang</button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="footer" id="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-brand">
                            <h3>Sellaro</h3>
                            <p>contact@diserbu.id</p>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Payment Modal */}
            <PaymentModal 
                isOpen={isPaymentModalOpen} 
                onClose={closePaymentModal} 
            />
        </>
    )
}