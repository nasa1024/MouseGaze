/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['img.shields.io'],
        formats: ['image/avif', 'image/webp'],
        loader: 'default',
        path: '/_next/image',
        minimumCacheTTL: 60,
        dangerouslyAllowSVG: true,
    },
    reactStrictMode: false,
}

module.exports = nextConfig
