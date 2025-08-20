import { createContext, useContext, useState } from 'react';

const translations = {
    id: {
        'error-message': 'Terjadi kesalahan tak terduga. Silakan coba lagi nanti.',
        'error-title': 'Terjadi Kesalahan',
        'hero-title': 'Tingkatkan Penjualan Shopee, Tanpa Ribet',
        'hero-subtitle': 'Jual Lebih Banyak, Stres Lebih Sedikit',
        'hero-description': 'Tingkatkan penjualan Shopee Anda dengan strategi AI yang cerdas, analisis data mendalam, dan solusi yang disesuaikan dengan kebutuhan bisnis Anda.',
        'cta-button': 'Mulai Sekarang',
        'clients-title': 'Klien Kami',
        'clients-more': 'dan 120+ lainnya',
        'why-choose-title': 'Mengapa Memilih Kami?',
        'feature1-title': 'Strategi AI yang Cerdas',
        'feature1-desc': 'Menggunakan teknologi AI terdepan untuk menganalisis tren pasar dan perilaku konsumen.',
        'feature2-title': 'Keputusan Berbasis Data',
        'feature2-desc': 'Setiap rekomendasi didukung oleh analisis data yang akurat dan mendalam.',
        'feature3-title': 'Solusi yang Disesuaikan',
        'feature3-desc': 'Layanan yang dipersonalisasi sesuai dengan kebutuhan dan target bisnis Anda.',
        'feature4-title': 'Layanan Menyeluruh',
        'feature4-desc': 'Dari analisis hingga implementasi, kami menyediakan solusi end-to-end.',
        'feature5-title': 'Hasil yang Terbukti',
        'feature5-desc': 'Track record yang solid dengan peningkatan penjualan rata-rata 150%.',
        'services-title': 'Layanan Kami',
        'service1-title': 'Analisis Tampilan Toko',
        'service1-desc': 'Evaluasi mendalam terhadap tampilan toko Shopee Anda untuk mengidentifikasi area yang perlu diperbaiki dan dioptimalkan untuk meningkatkan konversi.',
        'service2-title': 'Re-Design Toko',
        'service2-desc': 'Redesign komprehensif toko Shopee Anda dengan pendekatan yang berpusat pada pengguna untuk meningkatkan pengalaman belanja dan tingkat konversi.',
        'service3-title': 'Copywriting',
        'service3-desc': 'Penulisan deskripsi produk yang persuasif dan SEO-friendly untuk meningkatkan visibilitas dan daya tarik produk Anda di platform Shopee.',
        'service4-title': 'Foto Product',
        'service4-desc': 'Jasa fotografi produk profesional dengan kualitas tinggi yang akan membuat produk Anda tampil menarik dan meningkatkan kepercayaan pembeli.',
        'service5-title': 'Rekomendasi Iklan',
        'service5-desc': 'Strategi periklanan yang efektif dan tepat sasaran untuk memaksimalkan ROI iklan Shopee Anda dengan budget yang optimal.',
        'service6-title': 'Optimasi UX Toko',
        'service6-desc': 'Optimasi user experience toko untuk memastikan navigasi yang mudah, loading yang cepat, dan proses pembelian yang lancar.',
        'packages-title': 'Paket Kami',
        'package-title': 'Paket AI Complete',
        'package-period': '/bulan',
        'feature-ai-image-title': 'AI Image Creator',
        'feature-ai-image-desc': 'Buat gambar toko dan produk yang lebih menarik dan profesional.',
        'feature-seo-title': 'AI SEO Optimizer',
        'feature-seo-desc': 'Optimasi judul & deskripsi produk agar lebih mudah ditemukan di pencarian Shopee.',
        'feature-ads-title': 'AI Ads Manager',
        'feature-ads-desc': 'Rekomendasi dan pengelolaan iklan otomatis agar lebih efektif & hemat biaya.',
        'feature-dashboard-title': 'Smart Dashboard',
        'feature-dashboard-desc': 'Pantau performa toko Shopee Anda dalam satu dashboard yang rapi & mudah dipahami.',
        'feature-credit-title': 'Rp50.000 AI Credit / bulan',
        'feature-credit-desc': 'Bisa dipakai untuk tambahan fitur premium AI sesuai kebutuhan Anda.',
        'package-cta': 'Mulai Sekarang',
        'nav-home': 'Home',
        'nav-clients': 'Klien',
        'nav-why': 'Tentang Kami',
        'nav-services': 'Layanan',
        'nav-packages': 'Paket',
        'nav-contact': 'Kontak',
        'nav-login': 'Login',
        'chat-title': 'Chat dengan AI Assistant',
        'chat-subtitle': 'Tanya tentang layanan kami',
        'bot-greeting': 'Halo! 👋 Saya AI Assistant Sellaro. Bagaimana saya bisa membantu Anda hari ini?',
        'chat-placeholder': 'Ketik pesan Anda...',
        'quick-services': 'Layanan apa saja yang tersedia?',
        'quick-pricing': 'Berapa harga layanannya?',
        'quick-contact': 'Cara menghubungi tim?',
        'payment-title': 'Mulai Berlangganan',
        'package-summary-title': 'Paket AI Complete',
        'form-name': 'Nama Lengkap',
        'form-email': 'Email',
        'form-phone': 'Nomor Telepon',
        'payment-btn': 'Pembayaran'
    },
    en: {
        'error-message': 'An unexpected error occurred. Please try again later.',
        'error-title': 'An Error Occurred',
        'hero-title': 'Boost Your Shopee Sales, Effortlessly',
        'hero-subtitle': 'Sell More, Stress Less',
        'hero-description': 'Boost your Shopee sales with smart AI strategies, deep data analysis, and solutions tailored to your business needs.',
        'cta-button': 'Get Started',
        'clients-title': 'Our Clients',
        'clients-more': 'and 120+ more',
        'why-choose-title': 'Why Choose Us?',
        'feature1-title': 'Smart AI Strategies',
        'feature1-desc': 'Using cutting-edge AI technology to analyze market trends and consumer behavior.',
        'feature2-title': 'Data-Driven Decisions',
        'feature2-desc': 'Every recommendation is backed by accurate and in-depth data analysis.',
        'feature3-title': 'Customized Solutions',
        'feature3-desc': 'Personalized services tailored to your business needs and targets.',
        'feature4-title': 'Comprehensive Services',
        'feature4-desc': 'From analysis to implementation, we provide end-to-end solutions.',
        'feature5-title': 'Proven Results',
        'feature5-desc': 'Solid track record with an average sales increase of 150%.',
        'services-title': 'Our Services',
        'service1-title': 'Store Display Analysis',
        'service1-desc': 'In-depth evaluation of your Shopee store display to identify areas for improvement and optimization to increase conversions.',
        'service2-title': 'Store Re-Design',
        'service2-desc': 'Comprehensive redesign of your Shopee store with a user-centered approach to improve shopping experience and conversion rates.',
        'service3-title': 'Copywriting',
        'service3-desc': 'Persuasive and SEO-friendly product descriptions to increase visibility and attractiveness of your products on Shopee platform.',
        'service4-title': 'Product Photography',
        'service4-desc': 'Professional high-quality product photography services that will make your products look attractive and increase buyer confidence.',
        'service5-title': 'Advertising Recommendations',
        'service5-desc': 'Effective and targeted advertising strategies to maximize your Shopee ad ROI with optimal budget.',
        'service6-title': 'Store UX Optimization',
        'service6-desc': 'Store user experience optimization to ensure easy navigation, fast loading, and smooth purchasing process.',
        'packages-title': 'Our Packages',
        'package-title': 'AI Complete Package',
        'package-period': '/month',
        'feature-ai-image-title': 'AI Image Creator',
        'feature-ai-image-desc': 'Create more attractive and professional store and product images.',
        'feature-seo-title': 'AI SEO Optimizer',
        'feature-seo-desc': 'Optimize product titles & descriptions to be easily found in Shopee search.',
        'feature-ads-title': 'AI Ads Manager',
        'feature-ads-desc': 'Automatic ad recommendations and management for more effective & cost-efficient results.',
        'feature-dashboard-title': 'Smart Dashboard',
        'feature-dashboard-desc': 'Monitor your Shopee store performance in one neat & easy-to-understand dashboard.',
        'feature-credit-title': 'Rp50,000 AI Credit / month',
        'feature-credit-desc': 'Can be used for additional premium AI features according to your needs.',
        'package-cta': 'Get Started',
        'nav-home': 'Home',
        'nav-clients': 'Clients',
        'nav-why': 'About Us',
        'nav-services': 'Services',
        'nav-packages': 'Packages',
        'nav-contact': 'Contact',
        'nav-login': 'Login',
        'chat-title': 'Chat with AI Assistant',
        'chat-subtitle': 'Ask about our services',
        'bot-greeting': 'Hello! 👋 I\'m Sellaro AI Assistant. How can I help you today?',
        'chat-placeholder': 'Type your message...',
        'quick-services': 'What services do you offer?',
        'quick-pricing': 'How much do your services cost?',
        'quick-contact': 'How to contact the team?',
        'payment-title': 'Start Subscription',
        'package-summary-title': 'AI Complete Package',
        'form-name': 'Full Name',
        'form-email': 'Email',
        'form-phone': 'Phone Number',
        'payment-btn': 'Payment'
    }
};

const TranslationContext = createContext();

export function TranslationProvider({ children }) {
    const [language, setLanguage] = useState(() => {
        // Check localStorage for saved language preference
        const savedLanguage = localStorage.getItem('language');
        return savedLanguage || 'id';
    });

    const t = (key) => {
        return translations[language][key] || key;
    };

    const switchLanguage = (lang) => {
        setLanguage(lang);
        document.documentElement.lang = lang;
        // Save language preference to localStorage
        localStorage.setItem('language', lang);
        
        // Update meta description based on language
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            if (lang === 'en') {
                metaDesc.content = 'Boost your Shopee sales effortlessly with AI strategies, store optimization, and comprehensive e-commerce solutions tailored for Indonesian market.';
            } else {
                metaDesc.content = 'Tingkatkan penjualan Shopee Anda dengan mudah. Layanan optimasi toko online, strategi AI, dan solusi yang disesuaikan untuk kesuksesan e-commerce Anda.';
            }
        }
    };

    return (
        <TranslationContext.Provider value={{ 
            language, 
            setLanguage: switchLanguage, 
            t 
        }}>
            {children}
        </TranslationContext.Provider>
    );
}

export function useTranslation() {
    const context = useContext(TranslationContext);
    if (!context) {
        throw new Error('useTranslation must be used within a TranslationProvider');
    }
    return {
        ...context,
        theme: 'dark' // Always return dark theme to match the design
    };
}