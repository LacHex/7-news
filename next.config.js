const runtimeCaching = require('next-pwa/cache');

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: ['images.thewest.com.au']
  }
};

module.exports = nextConfig;
const withPwa = require('next-pwa')({
  disable: process.env.NODE_ENV === 'development',
  dest: 'public',
  runtimeCaching
});

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

module.exports = withBundleAnalyzer(withPwa(nextConfig));
