'use client'

import { createContext, useContext, ReactNode, useState, useEffect } from 'react';

interface AnimationContextProps {
  prefersReducedMotion: boolean;
  isLoaded: boolean;
  enableAnimations: boolean;
  setEnableAnimations: (enable: boolean) => void;
}

const defaultContext: AnimationContextProps = {
  prefersReducedMotion: false,
  isLoaded: false,
  enableAnimations: true,
  setEnableAnimations: () => {}
};

const AnimationContext = createContext<AnimationContextProps>(defaultContext);

export function useAnimation() {
  return useContext(AnimationContext);
}

interface AnimationProviderProps {
  children: ReactNode;
}

export function AnimationProvider({ children }: AnimationProviderProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [enableAnimations, setEnableAnimations] = useState(true);

  useEffect(() => {
    // 检测用户是否设置了减少动画的系统偏好
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    setIsLoaded(true);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  const value = {
    prefersReducedMotion,
    isLoaded,
    enableAnimations: enableAnimations && !prefersReducedMotion,
    setEnableAnimations
  };

  return (
    <AnimationContext.Provider value={value}>
      {children}
    </AnimationContext.Provider>
  );
} 