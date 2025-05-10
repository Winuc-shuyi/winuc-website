"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Button from '@/components/ui/Button'

export default function TeamIntro() {
  return (
    <div className="py-16">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <motion.div 
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            我们的团队
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            WINUC团队由一群充满激情和创造力的专业人士组成，我们致力于通过技术创新解决复杂问题，并为客户提供高质量的解决方案。
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            我们的成员拥有多样化的技能和背景，包括软件开发、UI/UX设计、项目管理和业务分析等领域。这种多样性使我们能够从不同角度思考问题，并开发出真正满足用户需求的产品。
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            团队合作是我们的核心价值之一。我们相信，只有通过紧密合作和开放交流，才能实现最佳结果。我们鼓励创新思维和持续学习，确保我们始终站在技术发展的前沿。
          </p>
          <div className="flex space-x-4">
            <Button href="/team" variant="primary">
              认识团队成员
            </Button>
            <Button href="/contact" variant="outline">
              加入我们
            </Button>
          </div>
        </motion.div>
        
        <motion.div 
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="relative h-[300px] md:h-[500px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/team/team-photo.svg"
              alt="WINUC团队"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
} 