'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { GraduationCap, Code2, Film, Palette, Target, Compass, ArrowUpRight } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'
import { useLanguage } from '@/context/LanguageContext'

export default function AboutSection() {
  const { t } = useLanguage()

  return (
    <section id="about" className="relative py-28 overflow-hidden bg-[#090a0f] border-t border-white/[0.06]">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-mono font-medium tracking-wider text-sky-400 uppercase block mb-3">
            {t.about.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            {t.about.title}
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            {t.about.location} · {t.about.status}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Authentic Photo & Profile Card (Col 5) */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              <div className="relative rounded-3xl bg-zinc-900/40 p-3 border border-white/[0.08] shadow-2xl backdrop-blur-md">
                {/* Photo Container */}
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-zinc-950 border border-white/[0.06]">
                  <Image
                    src="/images/profile.png"
                    alt={`${siteConfig.personal.fullName} - Software Engineering Student`}
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-cover object-center transition-transform duration-500 hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                  
                  {/* Overlay Badge */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-zinc-950/85 backdrop-blur-md border border-white/[0.08]">
                    <p className="text-xs font-semibold text-white">
                      {siteConfig.personal.fullName}
                    </p>
                    <p className="text-[11px] text-zinc-400 font-mono">
                      RPL Student · SMK Telkom Malang
                    </p>
                  </div>
                </div>

                {/* Quick Info Grid below photo */}
                <div className="grid grid-cols-2 gap-2 mt-3 pt-2 text-xs font-mono">
                  <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <span className="text-[10px] text-zinc-500 block uppercase">Location</span>
                    <span className="text-zinc-300 font-medium">Malang, ID</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <span className="text-[10px] text-zinc-500 block uppercase">Availability</span>
                    <span className="text-emerald-400 font-medium">Internship Ready</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Editorial Biography & Highlights (Col 7) */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Primary Bio Statement */}
            <p className="text-lg sm:text-xl text-zinc-200 font-normal leading-relaxed">
              {t.about.bio1}
            </p>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              {t.about.bio2}
            </p>

            {/* Key Dimension Cards */}
            <div className="grid sm:grid-cols-2 gap-3.5 pt-2">
              {/* Education Card */}
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-white/[0.15] transition-colors">
                <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mb-3">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">
                  {t.about.cards.education.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {t.about.cards.education.desc}
                </p>
              </div>

              {/* Career Goal Card */}
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-white/[0.15] transition-colors">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-3">
                  <Target className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">
                  {t.about.cards.internship.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {t.about.cards.internship.desc}
                </p>
              </div>

              {/* Frontend Focus Card */}
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-white/[0.15] transition-colors">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-3">
                  <Code2 className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">
                  {t.about.cards.frontend.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {t.about.cards.frontend.desc}
                </p>
              </div>

              {/* Supporting Creative Interests */}
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-white/[0.15] transition-colors">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-3">
                  <Palette className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">
                  {t.about.cards.creative.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {t.about.cards.creative.desc}
                </p>
              </div>
            </div>

            {/* GitHub Verification Link */}
            <div className="pt-2 flex items-center gap-4">
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-zinc-300 hover:text-sky-400 transition-colors group"
              >
                <span>View personal code on GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  )
}
