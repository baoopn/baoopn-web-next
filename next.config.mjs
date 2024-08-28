// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.baoopn.com',
        pathname: '/data/img/**',
      },
    ],
    loader: 'imgix', // or 'cloudinary', 'akamai', etc.
    path: '',
    unoptimized: true,
  },
};

export default nextConfig;