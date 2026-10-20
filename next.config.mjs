/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/work',
        destination: '/about#work',
        permanent: true,
      },
      {
        source: '/field-log',
        destination: '/about#field-log',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/about#contact',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
