import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Rankly',
  assetPrefix: '/Rankly/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
