"use client"

import React from 'react'
import Section from '@/components/ui/Section'
import TeamIntro from '@/components/sections/TeamIntro'
import TeamMembers from '@/components/sections/TeamMembers'

export default function TeamPage() {
  return (
    <main className="flex-grow">
      <Section>
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            认识<span className="text-primary">WINUC</span>团队
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg">
            由一群充满热情的专业人士组成，我们致力于为客户提供最优质的解决方案
          </p>
        </div>
      </Section>
      
      <Section colored>
        <TeamIntro />
      </Section>
      
      <Section>
        <TeamMembers />
      </Section>
    </main>
  )
} 