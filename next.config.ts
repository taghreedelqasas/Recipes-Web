import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
  ignoreDuringBuilds: true,
},
  images: {
    domains: ['www.themealdb.com'],
    unoptimized: true,   // <--- أضف هنا أي domain خارجي هتجيب منه الصور
  },
};

export default nextConfig;
