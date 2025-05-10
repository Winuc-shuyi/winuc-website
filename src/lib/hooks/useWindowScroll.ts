'use client'

import { useState, useEffect, useCallback } from 'react';

interface ScrollPosition {
  x: number;
  y: number;
}

export function useWindowScroll(): {
  scrollPosition: ScrollPosition;
  isScrolling: boolean;
  isScrolledPast: (threshold: number) => boolean;
  scrollToTop: () => void;
} {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({ x: 0, y: 0 });
  const [isScrolling, setIsScrolling] = useState(false);
  
  // 防抖函数
  const debounce = (func: Function, wait = 15) => {
    let timeout: NodeJS.Timeout | null = null;
    
    return (...args: any[]) => {
      const later = () => {
        if (timeout) clearTimeout(timeout);
        func(...args);
      };
      
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };
  
  // 处理滚动事件的函数
  const handleScroll = useCallback(
    debounce(() => {
      const position = {
        x: window.scrollX,
        y: window.scrollY
      };
      
      setScrollPosition(position);
      setIsScrolling(true);
      
      // 300ms 后重置滚动状态
      setTimeout(() => setIsScrolling(false), 300);
    }),
    []
  );
  
  // 判断是否滚动超过指定阈值
  const isScrolledPast = useCallback((threshold: number) => {
    return scrollPosition.y > threshold;
  }, [scrollPosition.y]);
  
  // 滚动到顶部
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    // 初始化滚动位置
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);
  
  return { scrollPosition, isScrolling, isScrolledPast, scrollToTop };
} 