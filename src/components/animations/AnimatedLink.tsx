import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactNode } from 'react';

interface AnimatedLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  underline?: boolean;
  external?: boolean;
}

export default function AnimatedLink({
  href,
  children,
  className = '',
  underline = true,
  external = false
}: AnimatedLinkProps) {
  const underlineAnimation = {
    hidden: { width: 0 },
    hover: { width: '100%' }
  };

  const LinkElement = external ? 'a' : Link;
  const externalProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <motion.div
      className="inline-block relative"
      whileHover="hover"
      initial="hidden"
    >
      <LinkElement
        href={href}
        className={`relative inline-block ${className}`}
        {...externalProps}
      >
        {children}
        
        {underline && (
          <motion.span
            className="absolute bottom-0 left-0 h-0.5 bg-blue-500 dark:bg-blue-400"
            variants={underlineAnimation}
            transition={{ duration: 0.3 }}
          />
        )}
      </LinkElement>
    </motion.div>
  );
} 