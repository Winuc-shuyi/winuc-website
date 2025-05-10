import { motion, MotionProps } from 'framer-motion';
import { ReactNode } from 'react';

export interface BaseAnimationProps extends MotionProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  ease?: string;
}

export default function BaseAnimation({
  children,
  delay = 0,
  duration = 0.5,
  className = '',
  ease = 'easeOut',
  ...motionProps
}: BaseAnimationProps) {
  return (
    <motion.div
      transition={{
        duration,
        delay,
        ease,
      }}
      className={className}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
} 