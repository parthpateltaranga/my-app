import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'phosphoricons.com',
      },
      {
        protocol: 'https',
        hostname: 'logodip.com',
      },
      {
        protocol: 'https',
        hostname: 'www.intact.ca',
      },
      {
        protocol: 'https',
        hostname: 'www.aviva.ca',
      },
      {
        protocol: 'https',
        hostname: 'www.travelerscanada.ca',
      },
      {
        protocol: 'https',
        hostname: 'www.economical.com',
      },
    ],
  },
};

export default nextConfig;
