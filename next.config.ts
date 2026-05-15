import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Generate images at multiple quality levels for responsive images
    qualities: [50, 75, 90],
    // Supported image formats - modern formats first for better compression
    formats: ["image/avif", "image/webp"],
    // Device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // Image sizes for srcset generation
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Cache optimized images for 1 year (production)
    minimumCacheTTL: 31536000,
  },
  // Optimize on-demand entries for better performance
  onDemandEntries: {
    maxInactiveAge: 60 * 1000,
    pagesBufferLength: 5,
  },
  // Compress assets
  compress: true,
};

export default nextConfig;

