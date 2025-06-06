import React from 'react'
import projectsData from '@/config/projects.json'
import ProjectDetail from '@/components/projects/ProjectDetail'

export default function WinucStoreProjectPage() {
  // 从项目配置中查找对应ID的项目
  const project = projectsData.projects.find(p => p.id === 'winuc-store')
  
  return <ProjectDetail project={project!} />
} 