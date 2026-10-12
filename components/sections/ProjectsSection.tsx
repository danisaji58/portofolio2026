'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowUpRight, Info, Sparkles } from 'lucide-react'
import { ProjectTranslation } from '@/lib/translations'
import { useLanguage } from '@/context/LanguageContext'
import ProjectModal from './ProjectModal'

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectTranslation | null>(null)
  const { t } = useLanguage()

  return (
    <section id="projects" className="relative py-28 overflow-hidden bg-[#090a0f] border-t border-white/[0.06]">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-medium tracking-wider text-sky-400 uppercase block mb-3">
              {t.projects.tag}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              {t.projects.title}
            </h2>
            <p className="text-sm sm:text-base text-zinc-400">
              {t.projects.subtitle}
            </p>
          </div>

          {/* Right Status Badge */}
          <div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-zinc-300 self-start md:self-auto">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>{t.projects.badge}</span>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {t.projects.items.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group relative rounded-3xl bg-zinc-950/60 border border-white/[0.08] p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:border-white/[0.18] hover:shadow-2xl hover:shadow-black/60 hover:-translate-y-1"
            >
              <div>
                {/* Top Image Preview Card */}
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-zinc-900 border border-white/[0.06] mb-5">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-50" />
                  
                  {/* Status & Category Badges */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-mono text-zinc-200 bg-black/75 backdrop-blur-md border border-white/10">
                      {project.category}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono text-zinc-400 bg-black/60 backdrop-blur-md border border-white/[0.06]">
                      {project.status}
                    </span>
                  </div>

                  {/* Quick Detail Trigger Icon */}
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="absolute bottom-3 right-3 p-2.5 rounded-xl bg-black/80 hover:bg-white text-zinc-300 hover:text-black backdrop-blur-md border border-white/10 transition-all duration-200 focus:outline-none"
                    aria-label={`View full details of ${project.title}`}
                  >
                    <Info className="w-4 h-4" />
                  </button>
                </div>

                {/* Text Content */}
                <div className="space-y-3">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-sky-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-zinc-400 mt-0.5">{project.subtitle}</p>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed line-clamp-3">
                    {project.summary}
                  </p>

                  {/* Highlights Bullet */}
                  <div className="pt-1">
                    <p className="text-[11px] font-mono text-zinc-300 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                      <span>{project.keyFeatures[0]}</span>
                    </p>
                  </div>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-lg text-[11px] font-mono bg-white/[0.03] text-zinc-300 border border-white/[0.06]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-0.5 rounded-lg text-[10px] font-mono text-zinc-500">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-sky-400 hover:text-sky-300 transition-colors"
                >
                  <span>{t.projects.detailsBtn}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-zinc-300 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>{t.projects.liveBtn}</span>
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-zinc-400 hover:text-zinc-200 transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Accessible Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}
