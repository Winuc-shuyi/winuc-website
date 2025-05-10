import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

interface ImageHoverProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  quality?: number;
}

export default function ImageHover({ 
  src, 
  alt, 
  width, 
  height, 
  className = "",
  priority = false,
  quality = 75
}: ImageHoverProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className={`${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-auto object-cover"
          priority={priority}
          quality={quality}
          onLoadingComplete={() => setIsLoaded(true)}
          loading={priority ? 'eager' : 'lazy'}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </motion.div>
    </div>
  );
} 