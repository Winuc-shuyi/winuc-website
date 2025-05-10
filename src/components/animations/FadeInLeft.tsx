import BaseAnimation, { BaseAnimationProps } from './BaseAnimation';

interface FadeInLeftProps extends Omit<BaseAnimationProps, 'initial' | 'animate'> {
  x?: number;
}

export default function FadeInLeft({ 
  children, 
  x = -50, 
  ...rest 
}: FadeInLeftProps) {
  return (
    <BaseAnimation
      initial={{ opacity: 0, x }}
      animate={{ opacity: 1, x: 0 }}
      {...rest}
    >
      {children}
    </BaseAnimation>
  );
} 