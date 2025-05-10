import { motion, useInView } from 'framer-motion';
import { ReactNode, useRef } from 'react';
import { BaseAnimationProps } from './BaseAnimation';

interface ScrollRevealProps extends Omit<BaseAnimationProps, 'initial' | 'animate'> {
  y?: number;
  x?: number;
  once?: boolean;
  amount?: number;
}

export default function ScrollReveal({ 
  children, 
  y = 50, 
  x = 0, 
  once = true,
  amount = 0.1,
  className = '',
  delay = 0,
  duration = 0.5,
  ease = 'easeOut',
  ...rest
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y, x }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y, x }}
      transition={{ 
        duration, 
        delay, 
        ease 
      }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
} 