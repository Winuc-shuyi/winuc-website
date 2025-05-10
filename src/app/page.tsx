"use client"

import Hero from '@/components/sections/Hero'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import { 
  PageTransition, 
  ScrollReveal, 
  StaggeredFadeIn 
} from '@/components/animations'

export default function Home() {
  return (
    <PageTransition>
      <main className="flex-grow">
        <Hero />
        
        <Section colored>
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">我们的核心优势</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              专注于创新科技解决方案，为客户提供卓越的产品和服务
            </p>
          </ScrollReveal>
          <StaggeredFadeIn
            containerClassName="grid grid-cols-1 md:grid-cols-3 gap-8"
            itemClassName="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            {[
              {
                title: '创新技术',
                description: '采用最新的技术栈和方法论，确保产品的先进性和竞争力',
                icon: '🚀',
              },
              {
                title: '用户体验',
                description: '以用户为中心的设计理念，打造直观、易用、美观的产品界面',
                icon: '✨',
              },
              {
                title: '可靠支持',
                description: '提供全方位的技术支持和服务，确保客户业务的稳定运行',
                icon: '🛠️',
              },
            ].map((feature, index) => (
              <div key={index}>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </StaggeredFadeIn>
        </Section>

        <Section>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <ScrollReveal className="md:w-1/2" x={-30}>
              <div className="h-64 md:h-96 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                <span className="text-2xl text-gray-400 dark:text-gray-500">图片展示区</span>
              </div>
            </ScrollReveal>
            <ScrollReveal className="md:w-1/2" x={30} delay={0.2}>
              <h2 className="text-3xl font-bold mb-4">关于我们</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                WINUC是一支充满活力和创造力的团队，致力于为客户提供最优质的技术解决方案。我们专注于网站开发、移动应用和企业级系统的设计与实现。
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                凭借丰富的行业经验和专业技能，我们能够满足各种规模企业的需求，帮助他们在数字时代获得竞争优势。
              </p>
              <Button href="/about">了解更多</Button>
            </ScrollReveal>
          </div>
        </Section>
      </main>
    </PageTransition>
  )
} 