# Portfolio Customization Guide

## 🎯 Answer These 10 Questions to Personalize Your Portfolio

### 1. What's your FULL NAME for hero section?

**Where to update**: `components/hero-section.tsx` (Line 57)

```tsx
<span className="gradient-text">Your Full Name</span>
```

### 2. Experience level? (Years or "X projects completed")

**Where to update**: `components/achievements-section.tsx` (Lines 21-26)

```tsx
{
  icon: Award,
  value: 3, // Change this number
  suffix: "+",
  label: "Years Experience", // Or "Projects Completed"
}
```

### 3. TOP 4 PROJECTS with realistic metrics?

**Where to update**: `components/projects-section.tsx` (Lines 8-57)

For each project, fill in:

```tsx
{
  title: "Your Project Name",
  description: "What does it do?",
  impact: "5,000+ users tracking expenses", // Real metric
  metric: "5K Users", // Short version
  tech: ["Next.js", "TypeScript", "MongoDB"], // Your tech stack
  liveUrl: "https://your-live-demo.com",
  githubUrl: "https://github.com/yourusername/project",
}
```

**Example metrics to use:**

- "X Users" (e.g., "5K Users", "2K MAU")
- "Y% Faster" (e.g., "40% Faster Checkout")
- "Z Downloads" (e.g., "1K+ Downloads")
- Performance improvements
- Engagement metrics

### 4. Do you have CLIENT TESTIMONIALS?

**Where to update**: `components/testimonials-section.tsx` (Lines 8-63)

For each testimonial:

```tsx
{
  name: "Client Full Name",
  title: "Their Job Title, Company",
  quote: "What they said about working with you",
  platform: "Upwork", // or "Fiverr", "Direct Client"
  platformColor: "bg-green-600", // Platform brand color
}
```

**Tips:**

- Ask past clients/professors for testimonials
- Include project context in quotes
- Use testimonials from Fiverr/Upwork if available
- College project feedback counts!

### 5. Current tech stack?

**Where to update**: Multiple locations

**Primary tech stack** (`components/achievements-section.tsx` Line 27-32):

```tsx
{
  label: "Full-Stack MERN", // Change to your stack
}
```

**Project tech badges** (`components/projects-section.tsx`):

```tsx
tech: ["Next.js", "React", "Node.js", "MongoDB", "etc"];
```

### 6. LinkedIn/Fiverr/Upwork profiles?

**Where to update**: `components/contact-section.tsx` (Lines 28-51)

```tsx
const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/YOURUSERNAME", // Update this
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/YOURPROFILE", // Update this
  },
  {
    icon: Globe,
    label: "Fiverr",
    href: "https://fiverr.com/YOURPROFILE", // Update this
  },
  {
    icon: Globe,
    label: "Upwork",
    href: "https://upwork.com/freelancers/YOURPROFILE", // Update this
  },
];
```

### 7. WhatsApp number for direct contact?

**Where to update**: `components/contact-section.tsx` (Lines 16-20)

```tsx
{
  icon: Phone,
  label: "WhatsApp",
  value: "+92 XXX XXXXXXX", // Display number
  href: "https://wa.me/92XXXXXXXXXX", // WhatsApp link (no spaces, no +)
}
```

**Format**: Remove spaces and + from href

- Display: "+92 300 1234567"
- Link: "https://wa.me/923001234567"

### 8. Profile photo ready?

**Where to update**: `components/hero-section.tsx` (Lines 49-55)

**Option A**: Use initials (current placeholder)

```tsx
<div className="w-full h-full flex items-center justify-center text-6xl font-bold gradient-text">
  YN
</div>
```

**Option B**: Use actual photo

1. Add image to `public/images/profile.jpg`
2. Replace placeholder with:

```tsx
<Image
  src="/images/profile.jpg"
  alt="Your Name"
  fill
  className="object-cover"
  priority
/>
```

### 9. GitHub username for project links?

**Where to update**: `components/projects-section.tsx`

For each project:

```tsx
githubUrl: "https://github.com/YOURUSERNAME/project-repo";
```

**If projects are private:**

- Link to GitHub profile: "https://github.com/YOURUSERNAME"
- Or remove GitHub button and only show Live Demo

### 10. Target companies/roles?

**Where to update**: `components/hero-section.tsx` (Lines 68-71) and `app/layout.tsx` (Lines 12-14)

**Hero subtext**:

```tsx
<motion.p className="...">
  Building scalable applications for [INDUSTRY] - from Karachi to global markets
</motion.p>
```

**SEO keywords** in layout:

```tsx
keywords: [
  "Full-Stack Developer",
  "React Developer",
  "YOUR TARGET ROLE",
  "YOUR SPECIALTY",
  "Karachi",
  "Pakistan",
];
```

---

## 📝 Quick Start Checklist

- [ ] Update name in hero section
- [ ] Add 4 real projects with metrics
- [ ] Update all social media links
- [ ] Add WhatsApp number
- [ ] Replace/update profile photo
- [ ] Add 3-6 client testimonials
- [ ] Update achievements/counters
- [ ] Update email address
- [ ] Customize tech stack badges
- [ ] Update SEO metadata
- [ ] Test dark/light mode
- [ ] Test mobile responsiveness

---

## 🎨 Color Customization (Optional)

Current brand colors:

- Primary: Blue (#3b82f6)
- Secondary: Emerald (#10b981)

To change:

1. Update gradient classes in components (search for "from-blue-500 to-emerald-500")
2. Update theme colors in `tailwind.config.ts`
3. Update CSS variables in `app/globals.css`

---

## 🚀 Deployment

1. Update metadata URL in `app/layout.tsx`:

```tsx
url: "https://YOUR-DOMAIN.vercel.app";
```

2. Push to GitHub

3. Deploy on Vercel:
   - Import GitHub repository
   - Auto-deploy is enabled
   - Custom domain can be added later

---

## 💡 Pro Tips

1. **Metrics Matter**: Use real numbers (even if small)

   - "500 users" > "Some users"
   - "30% faster" > "Much faster"

2. **Keep Projects Updated**: Link to live demos that work

3. **Testimonials**: Even 3 good testimonials are better than 6 generic ones

4. **WhatsApp**: Most effective for Karachi/Pakistan clients

5. **GitHub**: Keep your profile active with green contribution squares

6. **SEO**: Update all metadata fields for better Google ranking

---

Need help? Open an issue or reach out!
