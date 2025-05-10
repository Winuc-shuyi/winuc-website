import { motion } from 'framer-motion';
import { ReactNode, memo } from 'react';

interface ButtonHoverProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  scaleAmount?: number;
  tapScaleAmount?: number;
  duration?: number;
  ariaLabel?: string;
}

const ButtonHover = memo(function ButtonHover({
  children,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  scaleAmount = 1.03,
  tapScaleAmount = 0.97,
  duration = 0.2,
  ariaLabel
}: ButtonHoverProps) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={className}
      whileHover={{ scale: disabled ? 1 : scaleAmount }}
      whileTap={{ scale: disabled ? 1 : tapScaleAmount }}
      transition={{ duration }}
      aria-label={ariaLabel}
    >
      {children}
    </motion.button>
  );
});

export default ButtonHover; 