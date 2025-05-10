"use client"

import React from 'react'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { motion } from 'framer-motion'
import projectsData from '@/config/projects.json'
import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

interface ProjectDetailPageProps {
  params: {
    id: string
  }
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  // 从项目配置中查找对应ID的项目
  const project = projectsData.projects.find(p => p.id === params.id)
  
  // 如果找不到项目，返回404
  if (!project) {
    notFound()
  }
  
  // 模拟项目详情数据（在实际应用中，这些数据应该来自配置文件或API）
  const projectDetail = {
    ...project,
    fullDescription: `${project.description} 这是一个革命性的解决方案，结合了最新的技术和创新理念，旨在为用户提供无与伦比的体验和价值。通过深入的市场研究和用户需求分析，我们精心设计并开发了这个项目，以解决行业中的关键痛点，并为用户创造全新的可能性。`,
    features: [
      "直观的用户界面，易于上手且操作流畅",
      "强大的性能优化，确保高效稳定运行",
      "灵活的可扩展性，满足不同规模的需求",
      "完善的安全保障，保护用户数据和隐私"
    ],
    technologies: ["React", "Node.js", "MongoDB", "Docker", "AWS"],
    timeline: {
      started: "2023年3月",
      completed: "2023年10月"
    },
    gallery: [
      "/images/projects/gallery1.jpg.svg",
      "/images/projects/gallery2.jpg.svg",
      "/images/projects/gallery3.jpg.svg"
    ]
  }
  
  return (
    <main className="flex-grow">
      {/* 项目头部 */}
      <div className="relative h-[50vh] min-h-[400px]">
        <Image 
          src={`${project.image}.svg`}
          alt={project.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
        <Container className="relative h-full flex items-end pb-12">
          <div className="text-white">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map(tag => (
                <span 
                  key={tag}
                  className="px-3 py-1 bg-primary/90 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
          </div>
        </Container>
      </div>
      
      {/* 项目详情 */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-6">项目概述</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">
                {projectDetail.fullDescription}
              </p>
              
              <h2 className="text-2xl font-bold mb-6">核心功能</h2>
              <ul className="space-y-3 mb-8">
                {projectDetail.features.map((feature, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <span className="text-primary mr-3">✓</span>
                    <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                  </motion.li>
                ))}
              </ul>
              
              <h2 className="text-2xl font-bold mb-6">项目图片</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                {projectDetail.gallery.map((image, index) => (
                  <motion.div
                    key={index}
                    className="relative h-48 rounded-lg overflow-hidden"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Image 
                      src={image}
                      alt={`${project.title} - 图片 ${index + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </motion.div>
                ))}
              </div>
              
              <div className="flex justify-center">
                <Button 
                  href="#contact" 
                  variant="primary" 
                  className="px-6 py-3 text-lg"
                >
                  联系我们了解更多
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm mb-8">
                <h3 className="text-xl font-bold mb-4">项目信息</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">开始时间</p>
                    <p className="font-medium">{projectDetail.timeline.started}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">完成时间</p>
                    <p className="font-medium">{projectDetail.timeline.completed}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4">技术栈</h3>
                <div className="flex flex-wrap gap-2">
                  {projectDetail.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>
    </main>
  )
} 