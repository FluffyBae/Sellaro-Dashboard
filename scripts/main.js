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
        'service6-desc': 'Optimasi user experience toko untuk memastikan navigasi yang mudah, loading yang cepat, dan proses pembelian yang lancar.',
        'nav-home': 'Home',
        'nav-clients': 'Klien',
        'nav-why': 'Tentang Kami',
        'nav-services': 'Layanan',
        'nav-contact': 'Kontak',
        'chat-title': 'Chat dengan AI Assistant',
        'chat-subtitle': 'Tanya tentang layanan kami',
        'bot-greeting': 'Halo! 👋 Saya AI Assistant Sellaro. Bagaimana saya bisa membantu Anda hari ini?',
        'chat-placeholder': 'Ketik pesan Anda...',
        'quick-services': 'Layanan apa saja yang tersedia?',
        'quick-pricing': 'Berapa harga layanannya?',
        'quick-contact': 'Cara menghubungi tim?'
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
        'service6-desc': 'Store user experience optimization to ensure easy navigation, fast loading, and smooth purchasing process.',
        'nav-home': 'Home',
        'nav-clients': 'Clients',
        'nav-why': 'About Us',
        'nav-services': 'Services',
        'nav-contact': 'Contact',
        'chat-title': 'Chat with AI Assistant',
        'chat-subtitle': 'Ask about our services',
        'bot-greeting': 'Hello! 👋 I\'m Sellaro AI Assistant. How can I help you today?',
        'chat-placeholder': 'Type your message...',
        'quick-services': 'What services do you offer?',
        'quick-pricing': 'What are your pricing rates?',
        'quick-contact': 'How to contact your team?'
    }
};

// Current language
let currentLang = 'id';

// Chat widget responses database
const chatResponses = {
    id: {
        services: "Kami menyediakan 6 layanan utama:\n\n🔍 Analisis Tampilan Toko\n🎨 Re-Design Toko\n✍️ Copywriting\n📷 Foto Product\n🎯 Rekomendasi Iklan\n📱 Optimasi UX Toko\n\nLayanan mana yang paling Anda butuhkan?",
        pricing: "Harga layanan kami bervariasi tergantung kebutuhan:\n\n• Paket Basic: Rp 2.500.000 (1-2 layanan)\n• Paket Premium: Rp 4.500.000 (3-4 layanan)\n• Paket Complete: Rp 7.500.000 (semua layanan)\n\nHubungi kami untuk konsultasi gratis! 📞",
        contact: "Anda bisa menghubungi tim kami melalui:\n\n📧 Email: contact@diserbu.id\n📱 WhatsApp: +62 812-3456-7890\n⏰ Jam kerja: Senin-Jumat 09:00-17:00\n\nAtau klik tombol 'Mulai Sekarang' di halaman ini untuk konsultasi langsung!",
        default: "Terima kasih atas pertanyaannya! Untuk informasi lebih detail, silakan hubungi tim support kami di contact@diserbu.id atau gunakan tombol quick reply di bawah untuk pertanyaan umum. 😊"
    },
    en: {
        services: "We provide 6 main services:\n\n🔍 Store Display Analysis\n🎨 Store Re-Design\n✍️ Copywriting\n📷 Product Photography\n🎯 Advertising Recommendations\n📱 Store UX Optimization\n\nWhich service do you need most?",
        pricing: "Our service pricing varies based on needs:\n\n• Basic Package: $170 (1-2 services)\n• Premium Package: $305 (3-4 services)\n• Complete Package: $510 (all services)\n\nContact us for a free consultation! 📞",
        contact: "You can contact our team via:\n\n📧 Email: contact@diserbu.id\n📱 WhatsApp: +62 812-3456-7890\n⏰ Business hours: Monday-Friday 09:00-17:00\n\nOr click the 'Get Started' button on this page for direct consultation!",
        default: "Thank you for your question! For more detailed information, please contact our support team at contact@diserbu.id or use the quick reply buttons below for common questions. 😊"
    }
};

// DOM Elements
const themeToggle = document.getElementById('themeToggle');
const langButtons = document.querySelectorAll('.lang-btn');
const body = document.body;
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');
const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
const chatWidget = document.getElementById('chatWidget');
const chatButton = document.getElementById('chatButton');
const chatBubble = document.getElementById('chatBubble');
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const sendButton = document.getElementById('sendButton');
const quickReplies = document.querySelectorAll('.quick-reply');

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Feather icons
    feather.replace();
    
    // Set initial theme from localStorage or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    body.classList.remove('light-theme', 'dark-theme');
    body.classList.add(`${savedTheme}-theme`);
    
    // Update logo based on initial theme
    updateLogo();
    
    // Set initial language from localStorage or default to Indonesian
    const savedLang = localStorage.getItem('language') || 'id';
    switchLanguage(savedLang);
    
    // Setup event listeners
    setupEventListeners();
    
    // Setup scroll animations
    setupScrollAnimations();
    
    // Setup sticky header
    setupStickyHeader();
    
    // Setup navigation
    setupNavigation();
    
    // Setup chat widget
    setupChatWidget();
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
    
    // Mobile menu toggle
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }
    
    // Navigation link clicks
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Close mobile menu if open
                if (mobileNav.classList.contains('open')) {
                    toggleMobileMenu();
                }
                
                // Smooth scroll to target
                const offsetTop = targetElement.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Theme toggle function
function toggleTheme() {
    const isLight = body.classList.contains('light-theme');
    
    body.classList.remove('light-theme', 'dark-theme');
    body.classList.add(isLight ? 'dark-theme' : 'light-theme');
    
    // Update logo based on theme
    updateLogo();
    
    // Save to localStorage
    localStorage.setItem('theme', isLight ? 'dark' : 'light');
    
    // Re-initialize Feather icons after theme change
    feather.replace();
}

// Update logo based on current theme
function updateLogo() {
    const logoImg = document.querySelector('.logo-img');
    if (logoImg) {
        const isDark = body.classList.contains('dark-theme');
        logoImg.src = isDark ? 'assets/logo-dark.png' : 'assets/logo.png';
    }
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

// Mobile menu toggle function
function toggleMobileMenu() {
    if (mobileNav) {
        mobileNav.classList.toggle('open');
        
        // Update mobile menu button icon
        const icon = mobileMenuBtn.querySelector('i');
        if (mobileNav.classList.contains('open')) {
            icon.setAttribute('data-feather', 'x');
        } else {
            icon.setAttribute('data-feather', 'menu');
        }
        feather.replace();
    }
}

// Navigation setup function
function setupNavigation() {
    // Track active section on scroll
    const sections = document.querySelectorAll('section, main');
    const navLinksDesktop = document.querySelectorAll('.nav-link');
    
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '-80px 0px -50% 0px'
    };
    
    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;
                
                // Update active nav link
                navLinksDesktop.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        if (section.id) {
            navObserver.observe(section);
        }
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (mobileNav && mobileNav.classList.contains('open')) {
            if (!mobileNav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                toggleMobileMenu();
            }
        }
    });
    
    // Close mobile menu on window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && mobileNav && mobileNav.classList.contains('open')) {
            toggleMobileMenu();
        }
    });
}

// Setup chat widget functionality
function setupChatWidget() {
    if (!chatButton || !chatWidget) return;
    
    // Chat toggle
    chatButton.addEventListener('click', toggleChat);
    
    // Send message functionality
    if (sendButton && chatInput) {
        sendButton.addEventListener('click', sendMessage);
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
    
    // Quick reply buttons
    quickReplies.forEach(button => {
        button.addEventListener('click', (e) => {
            const message = e.target.textContent;
            sendUserMessage(message);
            
            // Generate bot response based on button content
            setTimeout(() => {
                let response;
                if (message.includes('layanan') || message.includes('services')) {
                    response = chatResponses[currentLang].services;
                } else if (message.includes('harga') || message.includes('pricing')) {
                    response = chatResponses[currentLang].pricing;
                } else if (message.includes('hubungi') || message.includes('contact')) {
                    response = chatResponses[currentLang].contact;
                } else {
                    response = chatResponses[currentLang].default;
                }
                sendBotMessage(response);
            }, 800);
            
            // Hide quick replies after use
            e.target.parentElement.style.display = 'none';
        });
    });
    
    // Close chat when clicking outside
    document.addEventListener('click', (e) => {
        if (chatWidget.classList.contains('open') && 
            !chatWidget.contains(e.target)) {
            toggleChat();
        }
    });
}

// Toggle chat widget
function toggleChat() {
    chatWidget.classList.toggle('open');
    
    // Re-initialize Feather icons after toggle
    setTimeout(() => feather.replace(), 100);
}

// Send user message
function sendUserMessage(message) {
    if (!message.trim()) return;
    
    const messageElement = createMessageElement(message, 'user');
    chatMessages.appendChild(messageElement);
    scrollToBottom();
    
    if (chatInput) {
        chatInput.value = '';
    }
}

// Send bot message
function sendBotMessage(message) {
    const messageElement = createMessageElement(message, 'bot');
    chatMessages.appendChild(messageElement);
    scrollToBottom();
}

// Create message element
function createMessageElement(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    avatar.innerHTML = sender === 'bot' ? '<i data-feather="cpu"></i>' : '<i data-feather="user"></i>';
    
    const content = document.createElement('div');
    content.className = 'message-content';
    
    const textP = document.createElement('p');
    textP.textContent = text;
    
    const time = document.createElement('span');
    time.className = 'message-time';
    time.textContent = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    
    content.appendChild(textP);
    content.appendChild(time);
    messageDiv.appendChild(avatar);
    messageDiv.appendChild(content);
    
    // Re-initialize feather icons for new message
    setTimeout(() => feather.replace(), 50);
    
    return messageDiv;
}

// Send message function
function sendMessage() {
    if (!chatInput) return;
    
    const message = chatInput.value.trim();
    if (!message) return;
    
    sendUserMessage(message);
    
    // Simulate bot response
    setTimeout(() => {
        const response = generateBotResponse(message.toLowerCase());
        sendBotMessage(response);
    }, 1000);
}

// Generate bot response based on keywords
function generateBotResponse(message) {
    if (message.includes('layanan') || message.includes('service')) {
        return chatResponses[currentLang].services;
    } else if (message.includes('harga') || message.includes('price') || message.includes('biaya')) {
        return chatResponses[currentLang].pricing;
    } else if (message.includes('kontak') || message.includes('contact') || message.includes('hubungi')) {
        return chatResponses[currentLang].contact;
    } else if (message.includes('halo') || message.includes('hello') || message.includes('hai')) {
        return currentLang === 'id' ? 
            "Halo! Senang bertemu dengan Anda. Ada yang bisa saya bantu tentang layanan Sellaro hari ini? 😊" :
            "Hello! Nice to meet you. Is there anything I can help you with about Sellaro services today? 😊";
    } else if (message.includes('terima kasih') || message.includes('thank')) {
        return currentLang === 'id' ? 
            "Sama-sama! Jika ada pertanyaan lain, jangan ragu untuk bertanya. Tim kami siap membantu! 🙌" :
            "You're welcome! If you have any other questions, don't hesitate to ask. Our team is ready to help! 🙌";
    } else {
        return chatResponses[currentLang].default;
    }
}

// Scroll chat to bottom
function scrollToBottom() {
    if (chatMessages) {
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}
