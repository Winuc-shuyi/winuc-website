'use client'

import Image, { ImageProps } from 'next/image';
import { useState, useEffect } from 'react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface LazyImageProps extends Omit<ImageProps, 'onLoad' | 'onLoadingComplete'> {
  fallbackSrc?: string;
  blurHash?: string;
  threshold?: number;
  cloudflareOptimize?: boolean;
}

export default function LazyImage({
  src, 
  alt, 
  fallbackSrc = '/images/placeholder.jpg',
  blurHash,
  threshold = 0.1,
  className = '',
  cloudflareOptimize = false,
  ...props
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(blurHash || fallbackSrc);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: threshold });
  
  // 当图片进入视口时加载真实图片
  useEffect(() => {
    if (isInView && src) {
      // 如果启用了Cloudflare优化且是在Cloudflare环境中，处理图片路径
      if (cloudflareOptimize && process.env.NEXT_PUBLIC_CLOUDFLARE_BASE_URL) {
        const baseUrl = process.env.NEXT_PUBLIC_CLOUDFLARE_BASE_URL;
        const srcStr = src.toString();
        
        // 如果图片路径不是绝对URL，添加基础URL
        if (!srcStr.startsWith('http') && !srcStr.startsWith('https') && !srcStr.startsWith(baseUrl)) {
          setImageSrc(`${baseUrl}${srcStr}`);
          return;
        }
      }
      
      setImageSrc(src.toString());
    }
  }, [isInView, src, cloudflareOptimize]);
  
  return (
    <div 
      ref={ref}
      className={`overflow-hidden relative ${className}`}
      style={{ background: blurHash || '#f3f4f6' }}
    >
      <Image
        src={imageSrc}
        alt={alt}
        className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoadingComplete={() => setIsLoaded(true)}
        {...props}
      />
    </div>
  );
} 