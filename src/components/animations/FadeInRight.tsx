import BaseAnimation, { BaseAnimationProps } from './BaseAnimation';

interface FadeInRightProps extends Omit<BaseAnimationProps, 'initial' | 'animate'> {
  x?: number;
}

export default function FadeInRight({ 
  children, 
  x = 50, 
  ...rest 
}: FadeInRightProps) {
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