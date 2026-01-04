/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  // Enable React strict mode for better error handling
  reactStrictMode: true,
  // Optimize production builds
  swcMinify: true,
  // Disable x-powered-by header
  poweredByHeader: false,
};

export default nextConfig;
