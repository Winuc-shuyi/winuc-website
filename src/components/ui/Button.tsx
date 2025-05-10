"use client"

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  animate?: boolean;
}

export default function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  animate = true,
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center px-4 py-2 rounded-md font-medium transition-colors duration-200';
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary-600 focus:ring-2 focus:ring-primary-400 focus:ring-offset-2',
    secondary: 'bg-secondary text-white hover:bg-secondary-700 focus:ring-2 focus:ring-secondary-400 focus:ring-offset-2',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 focus:ring-2 focus:ring-gray-400 focus:ring-offset-2',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;

  const buttonContent = (
    <span className="flex items-center">
      {children}
    </span>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {buttonContent}
      </Link>
    );
  }

  if (animate) {
    return (
      <motion.button
        type={type}
        className={classes}
        onClick={onClick}
        disabled={disabled}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        {buttonContent}
      </motion.button>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {buttonContent}
    </button>
  );
} 