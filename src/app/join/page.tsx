"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Section from '@/components/ui/Section'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

// 模拟职位数据（实际应用中应该来自配置文件或API）
const jobPositions = [
  {
    id: 'job1',
    title: '前端开发工程师',
    department: '研发部',
    location: '北京',
    type: '全职',
    description: '负责公司产品的前端开发和优化，创建高质量、可维护的代码，并与设计师和后端开发人员紧密合作。',
    responsibilities: [
      '使用现代前端技术栈（React, Vue等）开发和维护高性能web应用',
      '编写可重用、可测试和高效的代码',
      '与UI/UX设计师合作，将视觉设计转化为优质代码',
      '确保网站的兼容性和响应性',
      '优化应用以获得最大速度和可扩展性'
    ],
    requirements: [
      '计算机科学或相关领域学士学位',
      '3年以上前端开发经验',
      '精通HTML, CSS, JavaScript和现代前端框架',
      '良好的设计感和用户体验意识',
      '团队合作精神和沟通能力'
    ]
  },
  {
    id: 'job2',
    title: '后端开发工程师',
    department: '研发部',
    location: '北京',
    type: '全职',
    description: '设计和实现高性能、高可用性和可扩展的服务端系统，支持公司的产品和服务。',
    responsibilities: [
      '设计和开发高效、可靠的服务端逻辑和API',
      '构建和维护数据库，确保数据安全和效率',
      '优化系统性能和资源利用',
      '参与技术架构讨论和决策',
      '编写技术文档和单元测试'
    ],
    requirements: [
      '计算机科学或相关领域学士学位',
      '3年以上后端开发经验',
      '熟练掌握一种或多种后端语言（Node.js, Python, Java等）',
      '良好的数据库设计和优化能力',
      '团队合作和问题解决能力'
    ]
  },
  {
    id: 'job3',
    title: 'UI/UX设计师',
    department: '设计部',
    location: '北京',
    type: '全职',
    description: '负责产品的视觉设计和用户体验设计，创造吸引人且易用的用户界面，提升用户满意度。',
    responsibilities: [
      '创造视觉设计概念和原型',
      '设计用户流程、交互模式和UI组件',
      '进行用户研究和测试，收集用户反馈',
      '与开发团队合作实现设计',
      '建立和维护设计系统和规范'
    ],
    requirements: [
      '设计或相关领域学位',
      '2年以上UI/UX设计经验',
      '精通Figma, Sketch, Adobe XD等设计工具',
      '对设计趋势和用户行为有深入了解',
      '优秀的沟通能力和团队合作精神'
    ]
  }
]

export default function JoinPage() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    resumeFile: null as File | null,
    message: ''
  })
  
  const [formStatus, setFormStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({
    type: null,
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        resumeFile: e.target.files![0]
      }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 模拟表单提交
    setTimeout(() => {
      setFormStatus({
        type: 'success',
        message: '您的申请已成功提交！我们会尽快审核您的申请并与您联系。'
      })
      
      // 重置表单
      setFormData({
        name: '',
        email: '',
        phone: '',
        position: '',
        experience: '',
        resumeFile: null,
        message: ''
      })
      
      // 5秒后清除状态消息
      setTimeout(() => {
        setFormStatus({ type: null, message: '' })
      }, 5000)
    }, 1000)
  }

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">加入我们</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              加入WINUC团队，与我们一起创造未来
            </p>
          </motion.div>
          
          {/* 团队文化介绍 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">我们的团队文化</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                在WINUC，我们相信人才是推动创新和成功的核心。我们致力于创造一个支持性、包容性和充满活力的工作环境，让每个团队成员都能发挥自己的才能和潜力。
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                我们鼓励合作、创新和持续学习，为员工提供成长和发展的机会。加入WINUC，你将成为一个充满激情的团队的一部分，一起解决挑战性问题，创造有意义的产品。
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">创新精神</h3>
                  <p className="text-gray-600 dark:text-gray-400">我们鼓励创新思维和新观点</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">团队合作</h3>
                  <p className="text-gray-600 dark:text-gray-400">我们一起工作，共同实现目标</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">持续学习</h3>
                  <p className="text-gray-600 dark:text-gray-400">我们重视知识分享和技能提升</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">工作平衡</h3>
                  <p className="text-gray-600 dark:text-gray-400">我们注重工作和生活的平衡</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px] rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">
                  团队照片展示区
                </span>
              </div>
            </motion.div>
          </div>
          
          {/* 职位列表 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">开放职位</h2>
            <div className="space-y-6">
              {jobPositions.map((job) => (
                <motion.div
                  key={job.id}
                  layout
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
                >
                  <div 
                    className="p-6 cursor-pointer"
                    onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                  >
                    <div className="flex flex-wrap justify-between items-center">
                      <h3 className="text-xl font-bold">{job.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm dark:bg-primary-900/30 dark:text-primary-300">
                          {job.department}
                        </span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm dark:bg-gray-700 dark:text-gray-300">
                          {job.location}
                        </span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm dark:bg-blue-900/30 dark:text-blue-300">
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <p className="mt-3 text-gray-600 dark:text-gray-300">{job.description}</p>
                    <div className="mt-4 flex items-center text-primary">
                      <span className="font-medium">
                        {selectedJob === job.id ? '收起详情' : '查看详情'}
                      </span>
                      <svg 
                        className={`ml-2 w-5 h-5 transition-transform duration-300 ${selectedJob === job.id ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  
                  {selectedJob === job.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6"
                    >
                      <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-2">
                        <div className="mb-4">
                          <h4 className="text-lg font-semibold mb-2">职责:</h4>
                          <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-300">
                            {job.responsibilities.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold mb-2">要求:</h4>
                          <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-300">
                            {job.requirements.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <Button 
                          href="#application-form" 
                          variant="primary"
                          onClick={() => {
                            setFormData(prev => ({
                              ...prev,
                              position: job.title
                            }))
                          }}
                        >
                          申请此职位
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* 申请表单 */}
          <motion.div
            id="application-form"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg max-w-3xl mx-auto"
          >
            <h2 className="text-2xl font-bold mb-6">申请加入</h2>
            
            {formStatus.type && (
              <div 
                className={`mb-6 p-4 rounded-lg ${
                  formStatus.type === 'success' 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' 
                    : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
                }`}
              >
                {formStatus.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    姓名
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    电子邮箱
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    电话号码
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="position" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                    申请职位
                  </label>
                  <select
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  >
                    <option value="">请选择职位</option>
                    {jobPositions.map(job => (
                      <option key={job.id} value={job.title}>{job.title}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="experience" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  工作经验
                </label>
                <input
                  type="text"
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  placeholder="例如：3年前端开发经验"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              
              <div>
                <label htmlFor="resume" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  上传简历
                </label>
                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="resume"
                    className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-600"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        {formData.resumeFile ? formData.resumeFile.name : '点击上传或拖放'}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        支持PDF, DOC, DOCX (最大 10MB)
                      </p>
                    </div>
                    <input
                      id="resume"
                      type="file"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  其他信息
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="告诉我们更多关于你自己的信息，以及为什么想加入我们的团队"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              
              <div>
                <Button type="submit" variant="primary" className="w-full py-3">
                  提交申请
                </Button>
              </div>
            </form>
          </motion.div>
        </Container>
      </Section>
    </main>
  )
} 