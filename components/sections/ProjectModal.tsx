'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Github, CheckCircle, AlertCircle, Wrench, ArrowUpRight } from 'lucide-react'
import { ProjectTranslation } from '@/lib/translations'
import { useLanguage } from '@/context/LanguageContext'

interface ProjectModalProps {
  project: ProjectTranslation | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { t } = useLanguage()

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (project) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = 'auto'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-3xl my-8 rounded-3xl bg-[#0c0d14] border border-white/[0.1] shadow-2xl shadow-black/90 overflow-hidden flex flex-col max-h-[90vh]"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Top Bar with Close Button */}
            <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0c0d14]/90 backdrop-blur-md border-b border-white/[0.08]">
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-white/[0.06] border border-white/[0.1] text-zinc-200">
                  {project.category}
                </span>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-white/[0.03] border border-white/[0.06] text-zinc-400">
                  {project.status}
                </span>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-white/[0.08] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
                aria-label={t.projects.modal.closeAria}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
              
              {/* Header Title & Subtitle */}
              <div>
                <h3 id="modal-title" className="text-2xl sm:text-3xl font-bold text-white mb-1 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-sm font-mono text-zinc-400">{project.subtitle}</p>
              </div>

              {/* Project Image Banner */}
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black/40 border border-white/[0.08]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d14] via-transparent to-transparent opacity-40" />
              </div>

              {/* Action Links Bar */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-zinc-950 font-semibold text-xs shadow-md shadow-white/10 hover:bg-zinc-200 hover:scale-[1.01] transition-all"
                  >
                    <span>{t.projects.modal.launchLive}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-zinc-200 border border-white/[0.08] font-medium text-xs transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>{t.projects.modal.viewGithub}</span>
                  </a>
                )}

                {!project.liveUrl && (
                  <span className="text-xs font-mono text-zinc-400 bg-white/[0.03] px-3 py-2 rounded-xl border border-white/[0.06]">
                    {t.projects.modal.prototypeNote}
                  </span>
                )}
              </div>

              {/* Problem & Solution Breakdown */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-[#11131b] border border-white/[0.06]">
                  <div className="flex items-center gap-2 text-zinc-300 font-semibold text-xs mb-2">
                    <AlertCircle className="w-4 h-4 text-amber-400" />
                    <span>{t.projects.modal.challengeTitle}</span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                    {project.problemStatement}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#11131b] border border-white/[0.06]">
                  <div className="flex items-center gap-2 text-zinc-300 font-semibold text-xs mb-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span>{t.projects.modal.solutionTitle}</span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Role */}
              <div className="p-5 rounded-2xl bg-[#11131b] border border-white/[0.06]">
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block mb-1">
                  {t.projects.modal.roleTitle}
                </span>
                <p className="text-xs sm:text-sm text-zinc-200 font-medium">
                  {project.myRole}
                </p>
              </div>

              {/* Implemented Features */}
              <div>
                <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-zinc-400" />
                  <span>{t.projects.modal.featuresTitle}</span>
                </h4>
                <ul className="grid sm:grid-cols-2 gap-2 text-xs text-zinc-300">
                  {project.keyFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#11131b] border border-white/[0.05]">
                      <span className="text-zinc-500 font-mono">›</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Challenges & Solutions */}
              <div>
                <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-zinc-400" />
                  <span>{t.projects.modal.highlightsTitle}</span>
                </h4>
                <ul className="space-y-2 text-xs text-zinc-300">
                  {project.technicalHighlights.map((techH, idx) => (
                    <li key={idx} className="p-3.5 rounded-xl bg-[#11131b] border border-white/[0.05]">
                      {techH}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2.5">
                  {t.projects.modal.techTitle}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tTech) => (
                    <span
                      key={tTech}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.04] text-zinc-300 border border-white/[0.08]"
                    >
                      {tTech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
