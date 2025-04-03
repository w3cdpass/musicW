import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'archive.smashing.media',
        pathname: '/assets/**',
      },
    ],
  },
};

export default nextConfig;