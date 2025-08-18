import React, { createContext, useContext, useState } from 'react';

const TranslationContext = createContext();

const translations = {
    id: {
        'nav-home': 'Beranda',
        'nav-clients': 'Klien',
        'nav-why': 'Mengapa Kami',
        'nav-services': 'Layanan',
        'nav-packages': 'Paket',
        'nav-contact': 'Kontak',
        'nav-login': 'Masuk',
        'hero-title': 'Tingkatkan Penjualan Shopee Anda dengan AI',
        'hero-subtitle': 'Solusi Cerdas untuk E-Commerce Indonesia',
        'hero-description': 'Dapatkan wawasan mendalam tentang kompetitor, optimisasi produk otomatis, dan strategi penjualan yang didukung AI untuk meningkatkan performa toko Shopee Anda.',
        'cta-button': 'Mulai Sekarang',
        'payment-title': 'Pembayaran',
        'form-name': 'Nama Lengkap',
        'form-email': 'Email',
        'form-phone': 'Nomor WhatsApp',
        'error-title': 'Terjadi Kesalahan',
        'error-message': 'Terjadi kesalahan yang tidak terduga. Silakan coba lagi nanti.'
    },
    en: {
        'nav-home': 'Home',
        'nav-clients': 'Clients',
        'nav-why': 'Why Us',
        'nav-services': 'Services',
        'nav-packages': 'Packages',
        'nav-contact': 'Contact',
        'nav-login': 'Login',
        'hero-title': 'Boost Your Shopee Sales with AI',
        'hero-subtitle': 'Smart Solutions for Indonesian E-Commerce',
        'hero-description': 'Get deep insights about competitors, automatic product optimization, and AI-powered sales strategies to improve your Shopee store performance.',
        'cta-button': 'Get Started',
        'payment-title': 'Payment',
        'form-name': 'Full Name',
        'form-email': 'Email',
        'form-phone': 'WhatsApp Number',
        'error-title': 'Error Occurred',
        'error-message': 'An unexpected error occurred. Please try again later.'
    }
};

export function TranslationProvider({ children }) {
    const [language, setLanguage] = useState('id');
    const [theme, setTheme] = useState('dark');

    const t = (key) => {
        return translations[language][key] || key;
    };

    return (
        <TranslationContext.Provider value={{
            language,
            setLanguage,
            theme,
            setTheme,
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
    return context;
}