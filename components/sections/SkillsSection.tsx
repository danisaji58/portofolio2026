'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Code,
  Layers,
  Wrench,
  BookOpen,
  Sparkles,
  CheckCircle2,
  Cpu,
  MonitorSmartphone,
  GitBranch,
  Terminal,
  Database,
  Server,
} from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

interface SkillItem {
  name: string
  level: 'Core Practical' | 'Working Experience' | 'Studied & Explored'
  description: string
  tag: string
}

const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    badge: 'Core Focus',
    icon: Code,
    color: 'from-cyan-400 to-blue-500',
    description: 'Core technologies I actively write to build modular, type-safe web applications.',
    skills: [
      { name: 'HTML5', level: 'Core Practical', description: 'Semantic markup, accessible tree structure, SEO standards', tag: 'Core' },
      { name: 'CSS3', level: 'Core Practical', description: 'Modern layouts, flexbox, grid, custom properties, media queries', tag: 'Styling' },
      { name: 'JavaScript (ES6+)', level: 'Core Practical', description: 'Async/await, DOM APIs, event loop, functional utilities', tag: 'Language' },
      { name: 'TypeScript', level: 'Working Experience', description: 'Interfaces, generic props, type safety across React components', tag: 'Language' },
      { name: 'React', level: 'Core Practical', description: 'Hooks, functional components, state management, lifecycle flows', tag: 'Framework' },
      { name: 'Next.js (App Router)', level: 'Working Experience', description: 'Server & client components, dynamic routing, metadata API', tag: 'Framework' },
      { name: 'Tailwind CSS', level: 'Core Practical', description: 'Design token architecture, responsive variants, utility-first CSS', tag: 'Styling' },
    ] as SkillItem[],
  },
  {
    id: 'interface-motion',
    title: 'Interface & Motion',
    badge: 'Interaction',
    icon: Layers,
    color: 'from-sky-400 to-indigo-500',
    description: 'Techniques used to make interfaces feel tactile, responsive, and alive.',
    skills: [
      { name: 'Responsive Design', level: 'Core Practical', description: 'Mobile-first adaptation across mobile, tablet, and desktop viewports', tag: 'Layout' },
      { name: 'Framer Motion', level: 'Working Experience', description: 'Declarative UI animations, layout transitions, exit effects', tag: 'Motion' },
      { name: 'SVG Architecture', level: 'Working Experience', description: 'Scalable vector manipulation, inline icons, path animation', tag: 'Graphics' },
      { name: 'UI Micro-Animations', level: 'Working Experience', description: 'Hover states, focus rings, interactive card depth', tag: 'UX' },
    ] as SkillItem[],
  },
  {
    id: 'tools',
    title: 'Development Tools',
    badge: 'Workflow',
    icon: Wrench,
    color: 'from-indigo-400 to-violet-500',
    description: 'Toolchain and environments powering development and continuous deployment.',
    skills: [
      { name: 'Git', level: 'Core Practical', description: 'Version control, atomic commits, branch workflows', tag: 'VCS' },
      { name: 'GitHub', level: 'Core Practical', description: 'Repository hosting, pull requests, collaboration, issue tracking', tag: 'Platform' },
      { name: 'Visual Studio Code', level: 'Core Practical', description: 'Primary IDE, debugging, linting, extensions ecosystem', tag: 'Editor' },
      { name: 'Vercel', level: 'Working Experience', description: 'Continuous deployment, preview links, environment variables', tag: 'Deploy' },
    ] as SkillItem[],
  },
  {
    id: 'additional',
    title: 'Studied & Explored Concepts',
    badge: 'Curriculum & Research',
    icon: BookOpen,
    color: 'from-purple-400 to-pink-500',
    description: 'Architectures and technologies explored through school curriculum (RPL) and learning experiments.',
    skills: [
      { name: 'REST APIs & Fetch', level: 'Studied & Explored', description: 'Endpoint consumption, HTTP verbs, response parsing, error handling', tag: 'Architecture' },
      { name: 'Routing, Params & Query', level: 'Studied & Explored', description: 'Dynamic URL slugs, query strings, state synchronization', tag: 'Web' },
      { name: 'CRUD Workflows', level: 'Studied & Explored', description: 'Data creation, reading, updating, and deleting lifecycles', tag: 'Data' },
      { name: 'localStorage API', level: 'Studied & Explored', description: 'Client-side persistence, JSON serialization, cache handling', tag: 'Browser' },
      { name: 'MySQL & Prisma', level: 'Studied & Explored', description: 'Relational database schema modeling, queries, ORM migrations', tag: 'Database' },
    ] as SkillItem[],
  },
]

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('frontend')
  const { t } = useLanguage()

  const getLevelLabel = (level: SkillItem['level']) => {
    if (level === 'Core Practical') return t.skills.levels.core
    if (level === 'Working Experience') return t.skills.levels.working
    return t.skills.levels.studied
  }

  return (
    <section id="skills" className="relative py-28 overflow-hidden bg-[#090a0f] border-t border-white/[0.06]">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-medium tracking-wider text-sky-400 uppercase block mb-3">
              {t.skills.tag}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              {t.skills.title}
            </h2>
            <p className="text-sm sm:text-base text-zinc-400">
              {t.skills.subtitle}
            </p>
          </div>

          {/* Category Filter Pills (Minimal Linear Segmented Style) */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-white/[0.03] border border-white/[0.08]">
            {skillCategories.map((cat) => {
              const isSelected = selectedCategory === cat.id
              const catKey = cat.id as keyof typeof t.skills.categories
              const catTrans = t.skills.categories[catKey]
              const shortTitle = catTrans ? catTrans.title.split(' ')[0] : cat.title.split(' ')[0]

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 flex items-center gap-2 ${
                    isSelected
                      ? 'bg-white text-zinc-950 font-semibold shadow-sm'
                      : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  <cat.icon className="w-3.5 h-3.5" />
                  <span>{shortTitle}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Categories Display */}
        <div className="space-y-8">
          {skillCategories.map((category) => {
            const isHighlighted = selectedCategory === category.id
            const catKey = category.id as keyof typeof t.skills.categories
            const catTrans = t.skills.categories[catKey]

            const title = catTrans ? catTrans.title : category.title
            const badge = catTrans ? catTrans.badge : category.badge
            const desc = catTrans ? catTrans.desc : category.description

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6 }}
                className={`rounded-3xl p-6 sm:p-8 transition-all duration-300 ${
                  isHighlighted
                    ? 'bg-zinc-950/80 border border-white/[0.12] shadow-xl'
                    : 'bg-zinc-950/40 border border-white/[0.06] hover:border-white/[0.1]'
                }`}
              >
                {/* Category Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-white/[0.06] gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-zinc-200">
                      <category.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
                        <span>{title}</span>
                        <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-zinc-400">
                          {badge}
                        </span>
                      </h3>
                      <p className="text-xs text-zinc-400 mt-0.5">{desc}</p>
                    </div>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.16] hover:bg-white/[0.04] transition-all duration-200 group flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-zinc-400 border border-white/[0.06]">
                            {skill.tag}
                          </span>
                        </div>
                        <p className="text-xs text-zinc-400 leading-relaxed mb-3">
                          {skill.description}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-white/[0.05] flex items-center justify-between">
                        <span
                          className={`text-[10px] font-mono ${
                            skill.level === 'Core Practical'
                              ? 'text-sky-400'
                              : skill.level === 'Working Experience'
                              ? 'text-zinc-300'
                              : 'text-zinc-400'
                          }`}
                        >
                          ● {getLevelLabel(skill.level)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
