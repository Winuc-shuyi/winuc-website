"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Button from '@/components/ui/Button'

export default function ProjectsShowcase() {
  const featuredProjects = [
    {
      id: 'featured-1',
      title: '智能数据分析平台',
      description: '结合人工智能和大数据技术，为企业提供全方位的数据分析解决方案。通过直观的可视化界面，帮助管理者洞察业务趋势，做出数据驱动的决策。',
      image: '/images/projects/featured-1.jpg',
      stats: [
        { value: '300%', label: '决策效率提升' },
        { value: '65%', label: '数据处理时间减少' },
        { value: '10+', label: '行业应用场景' },
      ]
    },
    {
      id: 'featured-2',
      title: '云端协作工具',
      description: '为远程团队设计的一站式协作平台，集成了文档管理、项目追踪、视频会议等功能。无缝连接的工作流程，让团队协作更加高效流畅。',
      image: '/images/projects/featured-2.jpg',
      stats: [
        { value: '200+', label: '企业用户' },
        { value: '40%', label: '沟通成本降低' },
        { value: '24/7', label: '全天候支持' },
      ]
    }
  ]

  return (
    <div className="py-16">
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">项目亮点</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          这些项目展示了我们团队的技术实力和创新能力，为客户创造了显著的商业价值
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