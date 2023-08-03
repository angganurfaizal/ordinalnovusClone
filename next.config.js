/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ordinals.com",
        port: "",
        pathname: "/content/**",
      },
    ],
  },
};
