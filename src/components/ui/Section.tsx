"use client"

import React from 'react';
import Container from './Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  full?: boolean; // 是否全宽度，不使用Container
  colored?: boolean; // 是否添加背景色
}

export default function Section({
  children,
  className = '',
  id,
  full = false,
  colored = false,
}: SectionProps) {
  const baseClasses = 'py-12 md:py-24';
  const colorClasses = colored 
    ? 'bg-gray-50 dark:bg-gray-800' 
    : '';
  
  const sectionClasses = `${baseClasses} ${colorClasses} ${className}`;

  return (
    <section id={id} className={sectionClasses}>
      {full ? children : <Container>{children}</Container>}
    </section>
  );
} 