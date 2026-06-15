/** @type {import('next').NextConfig} */

// Content-Security-Policy.
// The public homepage loads no third-party JS, but the CSP applies site-wide,
// so Clerk's domains are whitelisted for the /admin and /sign-in|/sign-up routes.
// 'unsafe-inline' for scripts is required by next-themes' inline theme script and
// Next.js' inline hydration bootstrap; 'unsafe-inline' for styles is required by
// Tailwind/Next style injection.
const ContentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.clerk.accounts.dev https://*.clerk.com https://challenges.cloudflare.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://images.unsplash.com https://instasize.com https://encrypted-tbn0.gstatic.com https://img.clerk.com https://*.clerk.com",
  "font-src 'self' data:",
  "connect-src 'self' https://*.clerk.accounts.dev https://*.clerk.com",
  "frame-src 'self' https://*.clerk.accounts.dev https://challenges.cloudflare.com",
  "worker-src 'self' blob:",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
  "upgrade-insecure-requests",
].join("; ")

const securityHeaders = [
  { key: "Content-Security-Policy", value: ContentSecurityPolicy },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
]

const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      // Project images (hosts actually present in the MongoDB projects collection)
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "instasize.com" },
      { protocol: "https", hostname: "encrypted-tbn0.gstatic.com" },
      // Clerk user avatars (admin panel)
      { protocol: "https", hostname: "img.clerk.com" },
    ],
  },
  // Enable React strict mode for better error handling
  reactStrictMode: true,
  // Disable x-powered-by header
  poweredByHeader: false,
  // The project lives on an external drive; limit which directories the dev
  // file-watcher monitors to avoid hitting the system inotify watcher limit
  // (ENOSPC: System limit for number of file watchers reached).
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        ...config.watchOptions,
        ignored: ["**/node_modules/**", "**/.git/**", "**/.next/**"],
        poll: false,
        aggregateTimeout: 300,
      }
    }
    return config
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ]
  },
}

export default nextConfig
