# Sellaro.id Landing Page

A modern, responsive bilingual landing page for Sellaro.id built with React and Next.js, featuring AI-powered Shopee sales optimization services.

## Features

- ✨ **React + Next.js**: Modern server-side rendering for optimal performance
- 🌐 **Bilingual Support**: Indonesian/English language switching
- 🎨 **Dark/Light Theme**: Seamless theme switching with CSS custom properties
- 📱 **Responsive Design**: Mobile-first approach with flexible layouts
- 💳 **Payment Flow**: Interactive modal with form submission and success page
- 🎊 **Animations**: Confetti effects and smooth transitions
- ⚡ **Clean URLs**: Server-side routing with Next.js (`/successful-payment`)

## Tech Stack

- **Framework**: Next.js 14+ with React 18+
- **Styling**: CSS with custom properties for theming
- **Icons**: Feather Icons
- **Fonts**: Google Fonts (Space Grotesk, Manrope)
- **Development**: ESLint for code quality

## Getting Started

### Prerequisites

- Node.js 16+ installed on your machine
- npm or yarn package manager

### Installation

1. **Clone or download the project**
   ```bash
   git clone <repository-url>
   cd sellaro-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**

   On Replit:
   ```bash
   node dev.js
   ```
   
   For local development with proper package.json:
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:5000](http://localhost:5000)

## Local Development Setup

To run this project locally with standard npm scripts, create/update your `package.json` with:

```json
{
  "name": "sellaro-landing",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev -p 5000",
    "build": "next build",
    "start": "next start -p 5000",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^14.2.5",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "eslint": "^8.57.0",
    "eslint-config-next": "^14.2.5"
  }
}
```

Then run:
```bash
npm run dev
```

## Project Structure

```
├── components/           # React components
│   └── PaymentModal.js  # Payment form modal
├── pages/               # Next.js pages
│   ├── _app.js         # App wrapper
│   ├── _document.js    # HTML document structure
│   ├── index.js        # Main landing page
│   └── successful-payment.js # Payment success page
├── public/             # Static assets
│   ├── assets/         # Images and SVGs
│   └── styles/         # CSS files
├── styles/             # Next.js styles
│   ├── globals.css     # Global styles
│   └── main.css        # Main stylesheet
├── next.config.js      # Next.js configuration
├── dev.js             # Development server script
└── README.md          # This file
```

## Key Features

### Payment Flow
1. User clicks "Mulai Sekarang" (Get Started) button
2. Payment modal opens with form fields (name, email, phone)
3. Form submission redirects to `/successful-payment`
4. Success page shows confetti animation and login credentials
5. Customer email is stored and displayed from localStorage

### Theme & Language
- Toggle between dark/light themes
- Switch between Indonesian/English languages
- Preferences persist in localStorage

### Responsive Design
- Mobile-first CSS approach
- Flexible grid layouts
- Touch-friendly interactive elements

## Development Commands

- `node dev.js` - Start development server (Replit)
- `npm run dev` - Start development server (local)
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

This project is optimized for deployment on platforms like:
- Vercel (recommended for Next.js)
- Netlify
- Replit (current)

For Vercel deployment:
```bash
npm run build
```

The project includes all necessary configuration for seamless deployment.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is private and proprietary to Sellaro.id.