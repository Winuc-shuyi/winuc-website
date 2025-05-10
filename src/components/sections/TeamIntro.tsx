"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function TeamIntro() {
  return (
    <div className="py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            我们的<span className="text-primary">愿景</span>与<span className="text-primary">使命</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
            WINUC团队成立于2020年，由一群充满激情和创造力的技术专家组成。我们致力于通过创新的数字解决方案，帮助企业和组织在数字化转型过程中取得成功。
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
            我们的愿景是成为行业领先的技术解决方案提供商，通过卓越的产品和服务，为客户创造持久的价值。
          </p>
          <div className="grid grid-cols-2 gap-6 mb-8">
            {[
              { number: '4+', label: '年专业经验' },
              { number: '50+', label: '成功项目' },
              { number: '20+', label: '企业客户' },
              { number: '100%', label: '客户满意度' }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/team/team-photo.jpg"
              alt="WINUC团队照片"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="text-white text-lg font-medium">共同合作，创造未来</div>
            </div>
          </div>
          
          {/* 装饰元素 */}
          <motion.div 
            className="absolute w-32 h-32 bg-primary-100 dark:bg-primary-900/30 rounded-full -top-10 -left-10 -z-10"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0],
              transition: { duration: 8, repeat: Infinity, repeatType: "reverse" }
            }}
          />
          <motion.div 
            className="absolute w-24 h-24 bg-secondary-100 dark:bg-secondary-900/30 rounded-full -bottom-8 -right-8 -z-10"
            animate={{
              scale: [1, 1.15, 1],
              rotate: [0, -5, 0],
              transition: { duration: 7, repeat: Infinity, repeatType: "reverse", delay: 1 }
            }}
          />
        </motion.div>
      </div>
      
      <motion.div 
        className="mt-20 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold mb-6">我们的核心价值观</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: '创新',
              description: '我们不断探索新技术和方法，为客户提供创新的解决方案。',
              icon: '💡'
            },
            {
              title: '专业',
              description: '我们拥有深厚的技术专长和行业知识，确保高质量的交付。',
              icon: '🔍'
            },
            {
              title: '诚信',
              description: '我们以诚信为本，与客户建立长期互信的合作关系。',
              icon: '🤝'
            }
          ].map((value, index) => (
            <motion.div 
              key={index}
              className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
              <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
} 