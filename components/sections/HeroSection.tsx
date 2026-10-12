'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, Github, Instagram, Terminal, Sparkles } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'
import HeroScene from '@/components/three/HeroScene'
import { useLanguage } from '@/context/LanguageContext'

export default function HeroSection() {
  const { t } = useLanguage()

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* Subtle architectural atmosphere vignette */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-sky-500/[0.04] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-indigo-500/[0.03] rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Expressive Editorial Typography & CTA (Col 7) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            {/* Name / Focus Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="text-sm sm:text-base font-mono text-sky-400/90 tracking-wide uppercase mb-3"
            >
              {t.hero.roleSubtitle}
            </motion.p>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-extrabold tracking-tight text-white leading-[1.08] mb-6"
            >
              {t.hero.headlinePre}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-sky-400">
                {t.hero.headlineHighlight}
              </span>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-xl mb-9 font-normal"
            >
              {t.hero.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white text-zinc-950 font-semibold text-sm hover:bg-zinc-200 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-md shadow-white/10"
              >
                <span>{t.hero.exploreBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.09] text-zinc-200 hover:text-white font-medium text-sm border border-white/[0.1] backdrop-blur-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Mail className="w-4 h-4 text-zinc-400" />
                <span>{t.hero.contactBtn}</span>
              </a>
            </motion.div>

            {/* Micro details: School & Social */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/[0.08] text-xs text-zinc-400 font-mono"
            >
              <div className="flex items-center gap-2 text-zinc-300">
                <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                <span>{t.hero.schoolBadge}</span>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href={siteConfig.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>danisaji58</span>
                </a>

                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                  aria-label="Instagram Profile"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>@nj_daniswara</span>
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Tactile Interactive 3D Sculpture (Col 5) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* Architectural Studio Frame */}
            <div className="relative w-full aspect-square max-w-[460px] lg:max-w-none rounded-3xl bg-zinc-950/60 border border-white/[0.08] p-3 overflow-hidden shadow-2xl backdrop-blur-xl group">
              
              {/* Subtle Tactile Guide */}
              <div className="absolute top-4 left-5 z-20 flex items-center gap-2 pointer-events-none">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                <span className="text-[11px] font-mono text-zinc-400">
                  {t.hero.sculptureTitle}
                </span>
              </div>

              <div className="absolute bottom-4 right-5 z-20 text-[11px] font-mono text-zinc-500 pointer-events-none flex items-center gap-1.5">
                <span>{t.hero.sculptureHint}</span>
                <span>↺</span>
              </div>

              {/* The 3D Scene */}
              <HeroScene className="w-full h-full" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
