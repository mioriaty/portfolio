/** @type {import("next").NextConfig} */
const nextConfig = {
  cacheComponents: true,
  images: {
    remotePatterns: [
      {
        hostname: 'res.cloudinary.com',
        pathname: '/**'
      }
    ]
  }
};

export default nextConfig;
