'use client'

import { ReactNode } from 'react'
import { AnimationProvider } from '@/components/animations/AnimationContext'
import BackToTop from '@/components/ui/BackToTop'

interface ClientLayoutProps {
  children: ReactNode
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <AnimationProvider>
      {children}
      <BackToTop />
    </AnimationProvider>
  )
} 