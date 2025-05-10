"use client"

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Button from '@/components/ui/Button'

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  }

  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut"
    }
  }

  const backgroundGradientVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 1.5, ease: "easeOut" }
    }
  }

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* 背景渐变效果 */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={backgroundGradientVariants}
      >
        <div className="absolute -top-[30%] -right-[25%] w-[80%] h-[80%] rounded-full bg-primary-100/30 blur-[100px] dark:bg-primary-900/20" />
        <div className="absolute -bottom-[30%] -left-[25%] w-[80%] h-[80%] rounded-full bg-primary-100/30 blur-[100px] dark:bg-primary-800/20" />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            className="w-full lg:w-1/2 z-10"
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6"
              variants={itemVariants}
            >
              <span className="block">欢迎来到</span>
              <span className="text-primary">WINUC</span>
              <span className="block text-2xl md:text-3xl mt-2 font-medium">创新团队，卓越成果</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl mb-10 text-gray-600 dark:text-gray-300"
              variants={itemVariants}
            >
              我们专注于打造现代化的数字体验和解决方案，帮助客户实现业务价值最大化。通过创新技术和专业团队，为您提供顶尖的服务。
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              variants={itemVariants}
            >
              <Button href="/about" variant="primary">
                了解我们
              </Button>
              <Button href="/projects" variant="outline">
                查看项目
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-1/2 flex justify-center z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full h-[400px] max-w-lg">
              {/* 主图形元素 */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  y: [0, -15, 0],
                  transition: {
                    duration: 6,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut"
                  }
                }}
              >
                <div className="relative w-[80%] h-[80%] bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary-100 to-primary-50 dark:from-primary-900 dark:to-primary-800 flex items-center justify-center">
                    <Image 
                      src="/images/logo.svg"
                      alt="WINUC Logo"
                      width={200}
                      height={200}
                      className="object-contain"
                    />
                  </div>
                </div>
              </motion.div>

              {/* 装饰元素 */}
              <motion.div
                className="absolute top-0 right-0 w-20 h-20 bg-accent rounded-full opacity-70"
                animate={{
                  scale: [1, 1.2, 1],
                  transition: { duration: 4, repeat: Infinity }
                }}
              />
              <motion.div
                className="absolute bottom-10 left-0 w-16 h-16 bg-primary-300 dark:bg-primary-700 rounded-full opacity-70"
                animate={{
                  scale: [1, 1.3, 1],
                  transition: { duration: 5, repeat: Infinity, delay: 1 }
                }}
              />
              <motion.div
                className="absolute top-1/2 left-10 w-12 h-12 bg-secondary-200 dark:bg-secondary-700 rounded-full opacity-70"
                animate={{
                  scale: [1, 1.4, 1],
                  transition: { duration: 6, repeat: Infinity, delay: 2 }
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 