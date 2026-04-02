# Ashra - Fashion Design Portfolio Website

A modern, elegant fashion design portfolio website built with Next.js, TypeScript, and Tailwind CSS. Showcasing the work of Ashra, a visionary fashion designer specializing in innovative and sustainable designs.

## ✨ Features

- **Responsive Design**: Mobile-first approach ensuring beautiful display on all devices
- **Modern Aesthetic**: Clean, minimalist design with sophisticated typography and spacing
- **Portfolio Grid**: Interactive portfolio with filterable collections by category
- **Fast Performance**: Optimized Next.js 16 with Turbopack for blazing-fast builds
- **SEO Optimized**: Comprehensive metadata and structured content
- **Contact Form**: Interactive contact form with client-side validation
- **Type-Safe**: Full TypeScript support for robust development

## 📁 Project Structure

```
ashra-portfolio/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Home page
│   │   ├── layout.tsx            # Root layout with navigation and footer
│   │   ├── globals.css           # Global styles
│   │   ├── portfolio/
│   │   │   └── page.tsx          # Portfolio showcase page
│   │   ├── about/
│   │   │   └── page.tsx          # About page with biography and expertise
│   │   └── contact/
│   │       └── page.tsx          # Contact page with form
│   ├── components/
│   │   ├── Navigation.tsx        # Navigation bar with mobile menu
│   │   ├── Footer.tsx            # Footer with links and social
│   │   ├── PortfolioGrid.tsx     # Portfolio grid with filtering
│   │   └── ContactForm.tsx       # Contact form component
│   └── data/
│       └── portfolioData.ts      # Portfolio items data
├── public/                        # Static assets
└── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (LTS recommended)
- npm, yarn, pnpm, or bun

### Installation

1. Navigate to the project directory:
```bash
cd /Users/nameshsingh/Desktop/ashra-portfolio
```

2. Install dependencies (already done):
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The website will be available at `http://localhost:3000`

### Production Build

Create an optimized production build:
```bash
npm run build
npm start
```

## 📄 Pages

### Home (`/`)
- Hero section with call-to-action buttons
- Featured collections preview
- About section overview
- Statistics showcase
- Contact CTA

### Portfolio (`/portfolio`)
- Complete design portfolio with 9+ pieces
- Filterable by category (Evening Wear, Streetwear, Sustainable, etc.)
- Hover effects and smooth transitions
- Image gallery with metadata
- Collaboration CTA

### About (`/about`)
- Designer biography
- Areas of expertise (Evening Wear, Sustainable Design, Couture & Bespoke)
- Awards and recognition timeline
- Professional journey
- Project collaboration invitation

### Contact (`/contact`)
- Contact information (email, phone, location)
- Social media links
- Contact form with client-side validation
- Success message feedback
- FAQ section addressing common questions

## 🎨 Design & Styling

- **Framework**: Tailwind CSS v4
- **Color Scheme**: Minimalist black, white, and gray
- **Typography**: Geist font family for modern, clean appearance
- **Responsive**: Fully responsive with mobile-first approach
- **Animations**: Smooth transitions and hover effects

## 🔧 Technology Stack

- **Framework**: Next.js 16.2 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Turbopack (optimized Next.js builds)
- **UI**: React 19

## 📦 Key Dependencies

```json
{
  "dependencies": {
    "next": "^16.2.2",
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4.0.0",
    "tailwindcss": "^4.0.0",
    "typescript": "^5.0.0",
    "eslint": "^8.0.0"
  }
}
```

## 📱 Responsive Breakpoints

- Mobile: 320px - 768px
- Tablet: 769px - 1024px
- Desktop: 1025px+

## ✏️ Customization

### Portfolio Items
Edit `/src/data/portfolioData.ts` to add, remove, or modify portfolio items:
```typescript
{
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  year: number;
}
```

### Contact Information
Update contact details in:
- `/src/components/Footer.tsx` - Footer contact info
- `/src/app/contact/page.tsx` - Contact page details

### Brand Colors & Fonts
Modify in:
- `/src/app/globals.css` - Global CSS variables
- `/src/app/layout.tsx` - Font imports and configuration

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
The project can be deployed to:
- Netlify
- GitHub Pages
- AWS Amplify
- Self-hosted servers

## 📋 Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 SEO

- Optimized meta tags for each page
- Semantic HTML structure
- Mobile-responsive design
- Fast page load times
- Proper heading hierarchy

## 🤝 Contributing

To add new features or make improvements:
1. Create a new branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📄 License

This project is proprietary and created for Ashra's fashion design portfolio.

## 📞 Support

For questions or issues related to the website, contact hello@ashra.design

---

**Created**: April 2, 2026
**Built with**: Next.js 16, React 19, TypeScript, Tailwind CSS
**Status**: Production Ready
