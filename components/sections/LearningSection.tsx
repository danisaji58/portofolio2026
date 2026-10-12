'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Layers, Laptop, Flag } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

const stepIcons = [BookOpen, Laptop, Layers, Flag]

export default function LearningSection() {
  const { t } = useLanguage()

  return (
    <section id="journey" className="relative py-28 overflow-hidden bg-[#090a0f] border-t border-white/[0.06]">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-mono font-medium tracking-wider text-sky-400 uppercase block mb-3">
            {t.journey.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            {t.journey.title}
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            {t.journey.subtitle}
          </p>
        </div>

        {/* Editorial Timeline Grid */}
        <div className="relative">
          {/* Subtle Vertical Connector (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-px bg-white/[0.08] -translate-x-1/2" />

          <div className="space-y-8 lg:space-y-12">
            {t.journey.steps.map((step, index) => {
              const isEven = index % 2 === 0
              const IconComponent = stepIcons[index] || BookOpen

              return (
                <motion.div
                  key={step.phase}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Node Point (Desktop) */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-zinc-950 border border-white/20 items-center justify-center z-10">
                    <div className="w-2 h-2 rounded-full bg-sky-400" />
                  </div>

                  {/* Card Container */}
                  <div className="w-full lg:w-1/2">
                    <div
                      className={`p-6 sm:p-7 rounded-3xl bg-zinc-950/60 border border-white/[0.08] hover:border-white/[0.18] transition-all duration-300 ${
                        isEven ? 'lg:mr-8' : 'lg:ml-8'
                      }`}
                    >
                      {/* Top Header */}
                      <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.06]">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-zinc-300">
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="text-xs font-mono text-sky-400 font-medium block">
                              {step.phase}
                            </span>
                            <span className="text-[11px] font-mono text-zinc-500">
                              {step.timeline}
                            </span>
                          </div>
                        </div>

                        {index === t.journey.steps.length - 1 && (
                          <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono text-emerald-400">
                            Active Goal
                          </span>
                        )}
                      </div>

                      {/* Content */}
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">
                        {step.description}
                      </p>

                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {step.skills.map((s) => (
                          <span
                            key={s}
                            className="px-2.5 py-0.5 rounded-lg text-[11px] font-mono bg-white/[0.03] text-zinc-300 border border-white/[0.06]"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Empty Spacer Column for alternating balance */}
                  <div className="hidden lg:block w-1/2" />
                </motion.div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
