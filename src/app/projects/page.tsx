"use client"

import React from 'react'
import { motion } from 'framer-motion'
import ProjectsList from '@/components/sections/ProjectsList'
import ProjectsShowcase from '@/components/sections/ProjectsShowcase'
import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'

export default function ProjectsPage() {
  return (
    <main className="flex-grow">
      <Section>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">我们的项目</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              探索WINUC团队开发的创新项目，以及我们为客户创造的成功案例
            </p>
          </motion.div>
          
          <ProjectsShowcase />
          
          <div className="h-24"></div>
          
          <ProjectsList />
        </Container>
      </Section>
    </main>
  )
} 