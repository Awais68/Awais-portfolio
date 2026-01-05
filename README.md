# 🚀 Awais Niaz Portfolio - Full Stack with Admin Panel

A modern, full-stack portfolio website with admin panel for managing projects dynamically. Built with Next.js 14, MongoDB, and Clerk authentication.

## ✨ Features

- 🎨 **Modern Design**: Clean, professional layout with glassmorphism effects
- 🌓 **Dark/Light Mode**: Seamless theme switching with animated toggle
- 🔐 **Admin Panel**: Secure admin dashboard for managing projects
- 📊 **MongoDB Integration**: Dynamic project management with database
- 📧 **Email Contact Form**: Functional contact form with nodemailer
- ⚡ **Performance Optimized**: Lighthouse score 90+
- 📱 **Fully Responsive**: Mobile-first design (iPhone SE to 4K desktop)
- 🎭 **Smooth Animations**: Framer Motion animations throughout
- ♿ **Accessible**: WCAG 2.1 AA compliant
- 🚀 **SEO Optimized**: Next.js 14 App Router with metadata
- 💅 **Modern Stack**: TypeScript, Tailwind CSS, shadcn/ui

## 🚀 Tech Stack

**Frontend:**

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Framer Motion
- Lucide React icons
- next-themes

**Backend:**

- Next.js API Routes
- MongoDB with Mongoose
- Nodemailer

**Authentication:**

- Clerk

## 📋 Sections

1. **Hero Section** - Full viewport height with animated profile photo
2. **About Me** - Professional bio with colorful skill icons
3. **Work Process** - 4-step workflow visualization
4. **Portfolio** - Dynamic projects fetched from MongoDB
5. **Achievements** - Animated counters showing impact metrics
6. **Testimonials** - Client reviews carousel
7. **Contact** - Functional contact form with email integration

## 🎯 Quick Start

### Prerequisites

- Node.js 18+
- MongoDB Atlas account (free tier)
- Clerk account (free tier)
- Gmail account (for email)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/Awais68/Awais-portfolio.git
cd awais-portfolio
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create `.env.local` file (see [Complete Setup Guide](./SETUP.md) for detailed instructions):

```env
# Email
EMAIL_USER=awaisniaz768@gmail.com
EMAIL_PASSWORD=your-gmail-app-password

# MongoDB
MONGODB_URI=your-mongodb-connection-string

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-clerk-publishable-key
CLERK_SECRET_KEY=your-clerk-secret-key
```

4. **Run the development server**

```bash
npm run dev
```

5. **Open** [http://localhost:3000](http://localhost:3000)

## 📚 Complete Setup Guide

For detailed setup instructions including:

- Gmail App Password setup
- MongoDB Atlas configuration
- Clerk authentication setup
- Admin panel usage

**👉 See [SETUP.md](./SETUP.md) for complete guide**

## 🎮 Admin Panel

### Access Admin Panel

1. Navigate to `/sign-in`
2. Create your admin account (first user)
3. Access admin dashboard at `/admin`

### Add Projects Dynamically

The admin panel allows you to:

- ✅ Add new projects with images
- ✅ Edit existing projects
- ✅ Choose color gradients
- ✅ Add tech stack badges
- ✅ Projects appear instantly on homepage

All projects are stored in MongoDB and fetched dynamically.

## 🔧 Customization Guide

### 1. Personal Information

**Hero Section** (`components/hero-section.tsx`):

- Update name, title, and bio
- Replace profile photo in `/public/images/`

**About Section** (`components/about-section.tsx`):

- Update bio text
- Add/remove skills
- Modify experience stats

**Contact Section** (`components/contact-section.tsx`):

- Update contact information
- Update social media links
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
