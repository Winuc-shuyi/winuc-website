import React from 'react'
import { notFound } from 'next/navigation'
import projectsData from '@/config/projects.json'
import ProjectDetail from '@/components/projects/ProjectDetail'

interface ProjectDetailPageProps {
  params: {
    id: string
  }
}

// 添加generateStaticParams函数，用于静态生成页面
export async function generateStaticParams() {
  // 返回所有项目ID的params数组
  return projectsData.projects.map((project) => ({
    id: project.id,
  }))
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  // 从项目配置中查找对应ID的项目
  const project = projectsData.projects.find(p => p.id === params.id)
  
  // 如果找不到项目，返回404
  if (!project) {
    notFound()
  }
  
  return <ProjectDetail project={project} />
} 