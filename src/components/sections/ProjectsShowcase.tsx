"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Button from '@/components/ui/Button'

export default function ProjectsShowcase() {
  const featuredProjects = [
    {
      id: 'winuc-chat',
      title: 'WinucChat',
      description: '一款简单但功能强大的即时通讯软件，支持一对一聊天和群组功能，提供安全加密的通信方式。通过优化的用户界面，确保用户能够轻松地与朋友、家人和同事保持联系。',
      image: '/images/projects/winuc-chat',
      stats: [
        { value: '端到端', label: '安全加密' },
        { value: '99.9%', label: '服务可用性' },
        { value: '多平台', label: '支持与兼容' },
      ]
    },
    {
      id: 'winuc-store',
      title: 'WinucStore',
      description: '一个简易但功能完善的商店平台，支持用户浏览、购买商品，自带PAY支付系统，提供安全便捷的购物体验。集成了库存管理、订单追踪和客户服务等功能，满足各类商家的需求。',
      image: '/images/projects/winuc-store',
      stats: [
        { value: '安全', label: 'PAY支付系统' },
        { value: '便捷', label: '购物流程' },
        { value: '全面', label: '商家解决方案' },
      ]
    }
  ]

  return (
    <div className="py-16">
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">项目亮点</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          这些项目展示了我们团队的技术实力和创新能力，为用户提供实用且高效的解决方案
        </p>
      </div>

      <div className="space-y-24">
        {featuredProjects.map((project, index) => (
          <div 
            key={project.id}
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
          >
            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="relative h-[350px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={`${project.image}.svg`}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60"></div>
              </div>
            </motion.div>

            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                {project.description}
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                {project.stats.map((stat, statIndex) => (
                  <motion.div
                    key={statIndex}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: statIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <Button href={`/projects/${project.id}`} variant="primary">
                了解更多
              </Button>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
} 