 /** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: '/Users/vanderleineto/Desktop/VANDERLEI/TI/DEV/portfolio/my-portfolio'
  }
};

export default nextConfig;
