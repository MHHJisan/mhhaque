import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    webpackBuildWorker: false,
  },
  // Explicitly enable webpack 5
  webpack: (config, { isServer }) => {
    return config;
  },
  // Add empty turbopack config to silence the warning
  turbopack: {},
};

module.exports = nextConfig;
