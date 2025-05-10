import BaseAnimation, { BaseAnimationProps } from './BaseAnimation';

interface FadeInProps extends Omit<BaseAnimationProps, 'initial' | 'animate'> {
  y?: number;
}

export default function FadeIn({ 
  children, 
  y = 20, 
  ...rest 
}: FadeInProps) {
  return (
    <BaseAnimation
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      {...rest}
    >
      {children}
    </BaseAnimation>
  );
} 