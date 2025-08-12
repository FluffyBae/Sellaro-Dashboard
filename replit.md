# Sellaro.id Landing Page

## Overview

Sellaro.id is a single-page landing website for a Shopee sales optimization service. The website showcases services designed to help Indonesian e-commerce sellers boost their Shopee sales through AI-driven strategies, data analysis, and comprehensive solutions. The landing page features a modern, tech-inspired design with bilingual support (Indonesian/English) and dark/light theme switching capabilities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The application follows a traditional static website architecture with vanilla HTML, CSS, and JavaScript. The design emphasizes simplicity and performance:

- **Single Page Application (SPA)**: All content is contained within a single HTML file with multiple sections
- **Component-based CSS**: Modular CSS structure using CSS custom properties for theme management
- **Progressive Enhancement**: Core functionality works without JavaScript, with JavaScript enhancing the user experience

### Design System
- **Theme Management**: CSS custom properties enable seamless dark/light theme switching
- **Responsive Design**: Mobile-first approach with flexible grid layouts
- **Typography**: Space Grotesk for headings and Manrope for body text to maintain modern aesthetics
- **Color Palette**: Primary blue (#0480FE) and secondary cyan (#0BC4EE) with carefully chosen background and text colors for both themes

### Internationalization
- **Language Support**: Bilingual implementation (Indonesian/English) using JavaScript translation objects
- **Dynamic Content Switching**: Real-time language switching without page reload
- **Default Language**: Indonesian (ID) as primary language with English as secondary

### User Interface Components
- **Sticky Header**: Contains logo, language toggle, and theme switcher
- **Hero Section**: Primary call-to-action with dual imagery
- **Feature Grid**: Responsive grid layout for service highlights
- **Client Showcase**: Visual representation of client relationships

### Performance Optimizations
- **Font Loading**: Preconnected Google Fonts with display=swap for better loading performance
- **Icon System**: Feather Icons loaded via CDN for consistent iconography
- **CSS Architecture**: Custom properties for efficient theme switching and maintenance

## External Dependencies

### Fonts and Typography
- **Google Fonts**: Space Grotesk and Manrope font families loaded via CDN
- **Font Display Strategy**: Swap strategy implemented for optimal loading performance

### Icon System
- **Feather Icons**: Lightweight icon library loaded from unpkg.com CDN
- **Usage**: Primarily for theme toggle and feature section icons

### Third-party Services
- **CDN Dependencies**: Google Fonts and Feather Icons are the only external dependencies
- **No Backend Services**: Pure frontend implementation with no server-side dependencies
- **No Analytics**: Currently no tracking or analytics services integrated

### Asset Management
- **Local Assets**: Logo and client images stored locally in assets directory
- **Image Strategy**: Placeholder approach mentioned for AI/tech-style images matching section context
- **File Structure**: Organized asset directory for scalable image management