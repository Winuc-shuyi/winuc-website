/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
  },
  // 添加webpack配置以解决库兼容性问题
  webpack: (config) => {
    return config;
  },
}

module.exports = nextConfig 