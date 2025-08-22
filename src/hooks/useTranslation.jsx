import { createContext, useContext, useState } from 'react';

const translations = {
    id: {
        'lang': 'id',
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
        'feature-credit-title': '50.000 Sellaro AI Credit / bulan',
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
        'payment-btn': 'Pembayaran',
        'tutorial-text': 'Tutorial Penggunaan Tools AI',
        'footer-description': 'Tingkatkan penjualan Shopee Anda dengan strategi AI yang cerdas dan solusi yang disesuaikan.',
        'footer-contact': 'Kontak',
        'payment-modal-subtitle': 'Mulai perjalanan bisnis Anda dengan Sellaro',
        'price-period': '/bulan',
        'feature-ai-complete': 'AI Complete Package',
        'feature-dashboard-premium': 'Dashboard Premium',
        'feature-ai-credit': '50k Sellaro AI Credit',
        'modal-footer-terms': 'Dengan melanjutkan, Anda menyetujui',
        'terms-service': 'Terms & Service',
        'modal-footer-our': 'kami',
        'form-error-name-required': 'Nama lengkap wajib diisi',
        'form-error-email-required': 'Email wajib diisi',
        'form-error-email-invalid': 'Format email tidak valid',
        'form-error-phone-required': 'Nomor telepon wajib diisi',
        'form-error-phone-invalid': 'Nomor telepon harus dimulai dengan 08 atau 62 dan minimal 10 digit',
        'bot-services-response': 'Kami menyediakan 6 layanan utama: Analisis Tampilan Toko, Re-Design Toko, Copywriting, Foto Produk, Rekomendasi Iklan, dan Optimasi UX Toko. Semua dirancang khusus untuk meningkatkan penjualan Shopee Anda.',
        'bot-pricing-response': 'Paket AI Complete kami tersedia dengan harga Rp. 1.200.000/bulan. Paket ini sudah termasuk semua fitur AI dan 50.000 Sellaro AI Credit setiap bulannya.',
        'bot-contact-response': 'Anda bisa menghubungi kami melalui email: contact@sellaro.id atau WhatsApp: +62 888-1836-142. Tim kami siap membantu Anda 24/7!',
        'bot-default-response': 'Terima kasih atas pertanyaan Anda! Tim AI kami akan segera memproses dan memberikan rekomendasi terbaik untuk bisnis Shopee Anda. Ada hal lain yang bisa saya bantu?'
    },
    en: {
        'lang': 'en',
        'error-message': 'An unexpected error occurred. Please try again later.',
        'error-title': 'An Error Occurred',
        'hero-title': 'Boost Your Shopee Sales, Effortlessly',
        'hero-subtitle': 'Sell More, Stress Less',
        'hero-description': 'Boost your Shopee sales with smart AI strategies and customized solutions.',
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
        'feature-credit-title': '50,000 Sellaro AI Credit / month',
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
        'payment-btn': 'Payment',
        'tutorial-text': 'AI Tools Tutorial',
        'footer-description': 'Boost your Shopee sales with smart AI strategies and customized solutions.',
        'footer-contact': 'Contact',
        'payment-modal-subtitle': 'Start your business journey with Sellaro',
        'price-period': '/month',
        'feature-ai-complete': 'AI Complete Package',
        'feature-dashboard-premium': 'Premium Dashboard',
        'feature-ai-credit': '50k Sellaro AI Credit',
        'modal-footer-terms': 'By continuing, you agree to our',
        'terms-service': 'Terms & Service',
        'modal-footer-our': '',
        'form-error-name-required': 'Full name is required',
        'form-error-email-required': 'Email is required',
        'form-error-email-invalid': 'Invalid email format',
        'form-error-phone-required': 'Phone number is required',
        'form-error-phone-invalid': 'Phone number must start with 08 or 62 and be at least 10 digits',
        'bot-services-response': 'We provide 6 main services: Store Display Analysis, Store Re-Design, Copywriting, Product Photography, Advertising Recommendations, and Store UX Optimization. All designed to boost your Shopee sales.',
        'bot-pricing-response': 'Our AI Complete Package is available for Rp. 1.200.000/month. This package includes all AI features and Rp 50.000 AI Credit per month.',
        'bot-contact-response': 'You can contact us via email: contact@sellaro.id or WhatsApp: +62 888-1836-142. Our team is ready to help you 24/7!',
        'bot-default-response': 'Thank you for your question! Our AI team will process it soon and provide the best recommendations for your Shopee business. Is there anything else I can help you with?'
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