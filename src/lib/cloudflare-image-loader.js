/**
 * 自定义图片加载器，用于Cloudflare Pages环境
 * 这个加载器可以在Cloudflare Pages上使用next/image组件
 */
module.exports = function cloudflareLoader({ src, width, quality }) {
  // 处理绝对URL
  if (src.startsWith('http') || src.startsWith('https')) {
    // 如果是外部URL，使用Cloudflare Image Resizing
    return `${src}?width=${width}&quality=${quality || 75}`;
  }

  // 处理相对路径
  const baseUrl = process.env.NEXT_PUBLIC_CLOUDFLARE_BASE_URL || '';
  return `${baseUrl}${src}?width=${width}&quality=${quality || 75}`;
}; 