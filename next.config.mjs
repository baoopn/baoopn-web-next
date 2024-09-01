import dotenv from 'dotenv';
import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

dotenv.config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.IMAGE_HOSTNAME,
        pathname: process.env.IMAGE_PATH,
      },
    ],
    loader: 'imgix', // or 'cloudinary', 'akamai', etc.
    path: '',
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_TELEGRAM_CHAT_ID: process.env.TELEGRAM_CHAT_ID,
    NEXT_PUBLIC_CURRENTLY_PLAYING_ENDPOINT: process.env.CURRENTLY_PLAYING_ENDPOINT,
    NEXT_PUBLIC_RECENTLY_PLAYED_ENDPOINT: process.env.RECENTLY_PLAYED_ENDPOINT,
    NEXT_PUBLIC_LEAVE_MESSAGE_ENDPOINT: process.env.LEAVE_MESSAGE_ENDPOINT,
    NEXT_SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
    NEXT_SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
    NEXT_SPOTIFY_REFRESH_TOKEN: process.env.SPOTIFY_REFRESH_TOKEN,
  },
};

if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform();
}

export default nextConfig;