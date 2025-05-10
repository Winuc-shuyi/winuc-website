import { motion } from 'framer-motion';
import { ReactNode, memo } from 'react';
import { useAnimation } from './AnimationContext';

interface StaggeredFadeInProps {
  children: ReactNode[];
  containerClassName?: string;
  itemClassName?: string;
  delayStep?: number;
  initialDelay?: number;
  duration?: number;
  y?: number;
}

const StaggeredFadeIn = memo(function StaggeredFadeIn({
  children,
  containerClassName = "",
  itemClassName = "",
  delayStep = 0.1,
  initialDelay = 0.1,
  duration = 0.5,
  y = 20
}: StaggeredFadeInProps) {
  const { enableAnimations } = useAnimation();

  // 如果动画被禁用，直接渲染没有动画的内容
  if (!enableAnimations) {
    return (
      <div className={containerClassName}>
        {children.map((child, index) => (
          <div key={index} className={itemClassName}>
            {child}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={containerClassName}>
      {children.map((child, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration,
            delay: initialDelay + index * delayStep,
            ease: "easeOut"
          }}
          className={itemClassName}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
});

export default StaggeredFadeIn; 