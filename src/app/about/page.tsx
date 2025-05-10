"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import siteConfig from '@/config/site.json'

export default function AboutPage() {
  // 公司里程碑数据（实际应用中可放在配置文件中）
  const milestones = [
    {
      year: '2018',
      title: '公司成立',
      description: 'WINUC团队在北京成立，开始为客户提供技术咨询服务。'
    },
    {
      year: '2019',
      title: '首个产品发布',
      description: '成功发布第一款产品，获得市场积极反馈和初轮投资。'
    },
    {
      year: '2020',
      title: '团队扩张',
      description: '团队规模扩大到25人，成功为多家大型企业提供技术解决方案。'
    },
    {
      year: '2021',
      title: '国际市场拓展',
      description: '开始进军国际市场，与多家跨国公司建立合作关系。'
    },
    {
      year: '2022',
      title: '技术突破',
      description: '在人工智能和大数据领域取得重要技术突破，申请多项专利。'
    },
    {
      year: '2023',
      title: '业务多元化',
      description: '业务范围扩展到多个行业，包括金融科技、医疗健康和智慧城市等领域。'
    }
  ]

  // 核心价值观数据
  const values = [
    {
      title: '创新',
      description: '我们不断探索新技术和新方法，推动行业发展。',
      icon: '💡'
    },
    {
      title: '质量',
      description: '我们追求卓越，为客户提供高质量的产品和服务。',
      icon: '✨'
    },
    {
      title: '诚信',
      description: '我们诚实守信，建立长期互利的合作关系。',
      icon: '🤝'
    },
    {
      title: '用户至上',
      description: '我们以用户需求为中心，创造真正有价值的解决方案。',
      icon: '👥'
    }
  ]

  return (
    <main className="flex-grow">
      {/* 头部横幅 */}
      <div className="relative h-[40vh] min-h-[300px] bg-gradient-to-r from-primary to-secondary">
        <div className="absolute inset-0 bg-black/30"></div>
        <Container className="relative h-full flex flex-col justify-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            关于我们
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl max-w-2xl"
          >
            了解WINUC团队的使命、愿景和发展历程
          </motion.p>
        </Container>
      </div>

      {/* 公司简介 */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">我们是谁</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-lg">
                WINUC是一家创新科技公司，专注于为企业和组织提供先进的技术解决方案。我们由一群充满激情的技术专家和创新者组成，致力于利用最新技术解决复杂问题。
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                自2018年成立以来，我们已经为多个行业的客户提供了成功的解决方案，帮助他们实现数字化转型，提升效率和竞争力。我们的专业知识涵盖人工智能、大数据分析、云计算、物联网等领域。
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/team" variant="primary">
                  认识我们的团队
                </Button>
                <Button href="/contact" variant="outline">
                  联系我们
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg"
            >
              <Image 
                src="/images/team/company-team.svg" 
                alt="WINUC团队照片" 
                fill 
                className="object-cover"
              />
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* 使命和愿景 */}
      <Section colored>
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-4"
            >
              我们的使命与愿景
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
                我们致力于通过创新技术改变人们的生活和工作方式，为客户创造真正的价值。
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md"
            >
              <h3 className="text-2xl font-bold mb-4 text-primary">我们的使命</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                通过创新技术和卓越服务，为客户提供最优质的解决方案，帮助他们应对数字时代的挑战和机遇。
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                我们致力于将复杂的技术转化为简单易用的工具和服务，使科技的力量触手可及。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md"
            >
              <h3 className="text-2xl font-bold mb-4 text-secondary">我们的愿景</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                成为行业领先的技术解决方案提供商，引领创新潮流，推动行业发展。
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                我们希望在未来十年内，我们的技术能够影响亿万人的生活，创造更加智能、便捷和可持续的未来。
              </p>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* 核心价值观 */}
      <Section>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">核心价值观</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              这些价值观指导我们的日常工作和决策，塑造我们的企业文化。
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 发展历程 */}
      <Section colored>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">我们的发展历程</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              见证WINUC团队的成长和每一个重要里程碑
            </p>
          </motion.div>

          <div className="relative">
            {/* 时间线中心线 */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300 dark:bg-gray-700"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row-reverse text-right' : 'flex-row'
                  }`}
                >
                  <div className="w-1/2"></div>
                  <div className="z-10 flex items-center justify-center w-10 h-10 bg-primary rounded-full shadow-md">
                    <span className="text-white font-bold">{milestone.year.slice(-2)}</span>
                  </div>
                  <div className="w-1/2 p-4">
                    <div className={`bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md ${
                      index % 2 === 0 ? 'mr-6' : 'ml-6'
                    }`}>
                      <span className="text-sm font-medium text-primary">{milestone.year}</span>
                      <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{milestone.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* 号召性行动 */}
      <Section>
        <Container>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-primary to-secondary text-white p-12 rounded-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">准备好与我们合作了吗？</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              无论您是寻找技术合作伙伴，还是对加入我们的团队感兴趣，我们都期待与您沟通。
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/contact" className="bg-white text-primary hover:bg-gray-100">
                联系我们
              </Button>
              <Button href="/join" className="border-2 border-white hover:bg-white/10">
                加入我们
              </Button>
            </div>
          </motion.div>
        </Container>
      </Section>
    </main>
  )
} 