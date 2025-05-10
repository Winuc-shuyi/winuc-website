/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
    // 支持Cloudflare Pages的图片优化
    loader: 'custom',
    loaderFile: './src/lib/cloudflare-image-loader.js',
    // 开发环境使用默认加载器
    unoptimized: process.env.NODE_ENV === 'development',
  },
  // 添加webpack配置以解决库兼容性问题和减小构建大小
  webpack: (config) => {
    // 优化chunk大小
    config.optimization.splitChunks = {
      chunks: 'all',
      maxSize: 20000000, // 20MB以下
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          priority: 10
        }
      }
    };
    return config;
  },
  // 为Cloudflare Pages优化输出
  output: 'export',
  // 禁用输出文件跟踪以减小构建大小
  outputFileTracing: false,
  // 确保客户端导航正常工作
  trailingSlash: false,
  // 禁用严格模式用于生产环境，解决一些导航问题
  ...(process.env.NODE_ENV === 'production' ? { 
    reactStrictMode: false 
  } : {})
}

module.exports = nextConfig 