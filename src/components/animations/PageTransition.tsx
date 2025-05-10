import BaseAnimation, { BaseAnimationProps } from './BaseAnimation';

type PageTransitionProps = Omit<BaseAnimationProps, 'initial' | 'animate' | 'exit' | 'variants'>;

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function PageTransition({ children, ...rest }: PageTransitionProps) {
  return (
    <BaseAnimation
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      ease="easeInOut"
      duration={0.3}
      {...rest}
    >
      {children}
    </BaseAnimation>
  );
} 