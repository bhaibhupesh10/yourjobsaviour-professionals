/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.youtube.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
        pathname: '/**', // This allows images from any path on LinkedIn's media domain
      },

      {
        protocol: 'https',
        hostname: 'ipec.org.in',
        pathname: '/**', // This allows images from any path on LinkedIn's media domain
      },
 
    ],
    domains: ['images.unsplash.com']
  },
};

export default nextConfig;
