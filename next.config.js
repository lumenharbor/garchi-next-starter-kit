/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.garchi.co.uk",
      },
    ],
  },
};

module.exports = nextConfig;
