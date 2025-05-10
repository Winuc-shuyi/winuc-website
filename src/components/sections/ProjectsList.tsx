"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import projectsData from '@/config/projects.json'

interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  link: string
}

export default function ProjectsList() {
  const { projects } = projectsData
  const [activeFilter, setActiveFilter] = useState<string>('全部')
  
  // 从项目中收集所有不重复的标签
  const allTags = ['全部', ...Array.from(new Set(projects.flatMap((project: Project) => project.tags)))]
  
  // 根据当前筛选条件过滤项目
  const filteredProjects = activeFilter === '全部'
    ? projects
    : projects.filter((project: Project) => project.tags.includes(activeFilter))

  return (
    <div className="py-12">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">我们的项目</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          探索我们的创新项目和解决方案，助力客户实现业务目标
        </p>
      </div>
      
      {/* 标签筛选 */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveFilter(tag)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeFilter === tag
                ? 'bg-primary text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* 项目网格 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project: Project, index: number) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden flex flex-col h-full"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={`${project.image}.svg`}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="inline-block px-2 py-1 text-xs font-medium bg-primary-100 text-primary-800 rounded dark:bg-primary-900/30 dark:text-primary-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{project.description}</p>
                
                <Link 
                  href={project.link} 
                  className="inline-flex items-center text-primary hover:text-primary-600 font-medium"
                >
                  查看详情
                  <svg className="ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      
      {filteredProjects.length === 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300">暂无相关项目</p>
        </motion.div>
      )}
    </div>
  )
} 