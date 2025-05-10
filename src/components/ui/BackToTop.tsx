'use client'

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useWindowScroll } from '@/lib/hooks/useWindowScroll';

const SCROLL_THRESHOLD = 300;

export default function BackToTop() {
  const { isScrolledPast, scrollToTop } = useWindowScroll();
  const [shouldShow, setShouldShow] = useState(false);
  
  useEffect(() => {
    setShouldShow(isScrolledPast(SCROLL_THRESHOLD));
  }, [isScrolledPast]);
  
  return (
    <AnimatePresence>
      {shouldShow && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-primary-500 hover:bg-primary-600 text-white p-3 rounded-full shadow-lg z-50 focus:outline-none"
          aria-label="返回顶部"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
} 