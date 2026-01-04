# Modern Portfolio Website

A professional Next.js 14 portfolio website with dark/light theme toggle and smooth Framer Motion animations, replicating the structure of successful portfolios while maintaining modern design standards.

## ✨ Features

- 🎨 **Modern Design**: Clean, professional layout with glassmorphism effects
- 🌓 **Dark/Light Mode**: Seamless theme switching with animated toggle
- ⚡ **Performance Optimized**: Lighthouse score 90+
- 📱 **Fully Responsive**: Mobile-first design (iPhone SE to 4K desktop)
- 🎭 **Smooth Animations**: Framer Motion animations throughout
- ♿ **Accessible**: WCAG 2.1 AA compliant
- 🚀 **SEO Optimized**: Next.js 14 App Router with metadata
- 💅 **Modern Stack**: TypeScript, Tailwind CSS, shadcn/ui

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes

## 📋 Sections

1. **Hero Section** - Full viewport height with animated profile photo
2. **Work Process** - 4-step workflow visualization
3. **Portfolio** - Showcase of 4 featured projects with metrics
4. **Achievements** - Animated counters showing impact metrics
5. **Testimonials** - Client reviews carousel
6. **Contact** - Contact information and form

## 🎯 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository

```bash
git clone <your-repo-url>
cd awais-portfolio
```

2. Install dependencies

```bash
npm install
```

3. Run the development server

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🔧 Customization Guide

### 1. Personal Information

**Hero Section** (`components/hero-section.tsx`):

- Line 57: Update name and title
- Line 61: Add your headline and user impact number
- Line 68: Update subtext with your location and specialty
- Line 49-51: Replace placeholder profile photo

**Contact Section** (`components/contact-section.tsx`):

- Lines 11-26: Update location, WhatsApp number, and email
- Lines 28-51: Update social media links (GitHub, LinkedIn, Fiverr, Upwork)

### 2. Projects

**Projects Section** (`components/projects-section.tsx`):

- Lines 8-57: Replace with your actual projects
- For each project update:
  - `title`: Project name
  - `description`: Brief description
  - `impact`: Measurable impact statement
  - `metric`: Short metric for badge
  - `tech`: Technology stack array
  - `liveUrl`: Live demo URL
  - `githubUrl`: GitHub repository URL

### 3. Achievements

**Achievements Section** (`components/achievements-section.tsx`):

- Lines 7-46: Update achievement values
- Modify `value`, `suffix`, and `label` for each achievement
- Numbers automatically animate on scroll

### 4. Testimonials

**Testimonials Section** (`components/testimonials-section.tsx`):

- Lines 8-63: Replace with real client testimonials
- Update `name`, `title`, `quote`, `platform`, and `platformColor`

### 5. SEO & Metadata

**Layout** (`app/layout.tsx`):

- Lines 12-35: Update metadata (title, description, keywords)
- Line 21: Update OpenGraph URL to your deployed URL

### 6. Branding & Colors

Colors are defined in `tailwind.config.ts` and `app/globals.css`. Current brand colors:

- Primary: Blue (#3b82f6)
- Secondary: Emerald (#10b981)

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with default settings
4. Your site will be live at `https://your-name-portfolio.vercel.app`

## 📊 Performance Checklist

- ✅ Image optimization (Next.js Image component)
- ✅ Lazy loading sections
- ✅ Minimal JavaScript bundles
- ✅ Font optimization (Inter via Google Fonts)
- ✅ CSS purging (Tailwind)
- ✅ Prefetching and caching

## 🎨 Design System

### Typography

- Font Family: Inter
- Headings: 700 weight
- Body: 400 weight
- Accents: 500-600 weight

### Spacing

- Section padding: 80-112px vertical
- Container: Max-width 1280px
- Grid gaps: 24-32px

### Border Radius

- Cards: 12px
- Buttons: 9999px (full rounded)
- Badges: 6px

### Shadows

- Cards: Soft shadows only
- Hover: Enhanced shadow on interaction

## 🐛 Common Issues

### Dark mode not working

Make sure ThemeProvider is properly wrapped in layout.tsx with `suppressHydrationWarning` on html tag.

### Animations stuttering

Reduce `transition` duration or disable animations for users with `prefers-reduced-motion`.

### Build errors

Run `npm run build` locally first to catch TypeScript errors before deploying.

## 📝 License

MIT License - Feel free to use this template for your personal portfolio.

## 🙏 Credits

- Design inspiration: Bilal Raza (bilalattari.com)
- Built with Next.js 14, TypeScript, Tailwind CSS, and shadcn/ui
- Animations powered by Framer Motion

---

**Made with ❤️ in Karachi, Pakistan**
