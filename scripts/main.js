// Translations data
const translations = {
    id: {
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
        'service6-desc': 'Optimasi user experience toko untuk memastikan navigasi yang mudah, loading yang cepat, dan proses pembelian yang lancar.'
    },
    en: {
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
        'service6-desc': 'Store user experience optimization to ensure easy navigation, fast loading, and smooth purchasing process.'
    }
};

// Current language
let currentLang = 'id';

// DOM Elements
const themeToggle = document.getElementById('themeToggle');
const langButtons = document.querySelectorAll('.lang-btn');
const body = document.body;

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Feather icons
    feather.replace();
    
    // Set initial theme from localStorage or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    body.classList.remove('light-theme', 'dark-theme');
    body.classList.add(`${savedTheme}-theme`);
    
    // Set initial language from localStorage or default to Indonesian
    const savedLang = localStorage.getItem('language') || 'id';
    switchLanguage(savedLang);
    
    // Setup event listeners
    setupEventListeners();
    
    // Setup scroll animations
    setupScrollAnimations();
    
    // Setup sticky header
    setupStickyHeader();
});

// Setup event listeners
function setupEventListeners() {
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);
    
    // Language toggle
    langButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const lang = e.target.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });
    
    // Smooth scrolling for CTA button
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById('services').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
}

// Theme toggle function
function toggleTheme() {
    const isLight = body.classList.contains('light-theme');
    
    body.classList.remove('light-theme', 'dark-theme');
    body.classList.add(isLight ? 'dark-theme' : 'light-theme');
    
    // Save to localStorage
    localStorage.setItem('theme', isLight ? 'dark' : 'light');
    
    // Re-initialize Feather icons after theme change
    feather.replace();
}

// Language switching function
function switchLanguage(lang) {
    currentLang = lang;
    
    // Update active button
    langButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update all text elements with data-key attribute
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update document language attribute
    document.documentElement.lang = lang;
    
    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        if (lang === 'en') {
            metaDesc.content = 'Boost your Shopee sales effortlessly with AI strategies, store optimization, and comprehensive e-commerce solutions tailored for Indonesian market.';
        } else {
            metaDesc.content = 'Tingkatkan penjualan Shopee Anda dengan mudah. Layanan optimasi toko online, strategi AI, dan solusi yang disesuaikan untuk kesuksesan e-commerce Anda.';
        }
    }
    
    // Save to localStorage
    localStorage.setItem('language', lang);
}

// Scroll animations setup
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.style.animationDelay = `${Math.random() * 0.3}s`;
            }
        });
    }, observerOptions);
    
    // Observe all animation target elements
    const animationTargets = document.querySelectorAll('.feature-card, .service-card, .client-logo');
    animationTargets.forEach(target => {
        observer.observe(target);
    });
}

// Sticky header setup
function setupStickyHeader() {
    const header = document.getElementById('header');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.classList.add('scrolled');
            
            // Hide/show header based on scroll direction
            if (currentScrollY > lastScrollY && currentScrollY > 200) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }
        } else {
            header.classList.remove('scrolled');
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
    });
}

// Smooth scroll polyfill for older browsers
function smoothScrollTo(target, duration = 800) {
    const targetElement = document.querySelector(target);
    if (!targetElement) return;
    
    const targetPosition = targetElement.offsetTop - 80; // Account for header height
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;
    
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
    
    requestAnimationFrame(animation);
}

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add loading states for better UX
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Trigger initial animations
    setTimeout(() => {
        const heroElements = document.querySelectorAll('.hero-text > *');
        heroElements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('fade-in');
            }, index * 100);
        });
    }, 300);
});
