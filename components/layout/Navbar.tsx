'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight, Globe } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'
import { useLanguage } from '@/context/LanguageContext'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const { language, setLanguage, t } = useLanguage()

  const navLinks = [
    { name: t.nav.about, href: '#about', sectionId: 'about' },
    { name: t.nav.skills, href: '#skills', sectionId: 'skills' },
    { name: t.nav.projects, href: '#projects', sectionId: 'projects' },
    { name: t.nav.journey, href: '#journey', sectionId: 'journey' },
    { name: t.nav.contact, href: '#contact', sectionId: 'contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)

      // Active section observer
      const sections = ['about', 'skills', 'projects', 'journey', 'contact']
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-[#08090d]/85 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/40'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Wordmark */}
            <a
              href="#"
              className="group flex items-center gap-2.5 text-zinc-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 rounded-lg p-1"
              aria-label="Back to top"
            >
              <div className="w-8 h-8 rounded-lg bg-white text-zinc-950 font-bold text-xs flex items-center justify-center tracking-wider group-hover:scale-105 transition-transform shadow-sm">
                NJ
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-sm tracking-tight text-white group-hover:text-zinc-300 transition-colors">
                  {siteConfig.personal.shortName}
                </span>
                <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                  Frontend Dev
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 rounded-full px-4 py-1.5 bg-[#0e1017]/80 backdrop-blur-md border border-white/[0.08] shadow-inner">
              {navLinks.map((link) => {
                const isActive = activeSection === link.sectionId
                return (
                  <a
                    key={link.sectionId}
                    href={link.href}
                    className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 ${
                      isActive
                        ? 'text-white font-semibold'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNavBubble"
                        className="absolute inset-0 bg-white/[0.08] rounded-full border border-white/[0.12]"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </a>
                )
              })}
            </nav>

            {/* Right Controls: Language Switcher & CTA */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Language Switcher */}
              <div className="flex items-center p-0.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono">
                <button
                  type="button"
                  onClick={() => setLanguage('en')}
                  className={`px-2.5 py-1 rounded-md transition-all ${
                    language === 'en'
                      ? 'bg-white text-zinc-950 font-bold shadow-sm'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                  aria-label="Switch to English"
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage('id')}
                  className={`px-2.5 py-1 rounded-md transition-all ${
                    language === 'id'
                      ? 'bg-white text-zinc-950 font-bold shadow-sm'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                  aria-label="Ganti ke Bahasa Indonesia"
                >
                  ID
                </button>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl bg-white text-zinc-950 hover:bg-zinc-200 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
              >
                <span>{t.nav.connect}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Controls: Language & Hamburger */}
            <div className="flex items-center gap-2 md:hidden">
              <div className="flex items-center p-0.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono">
                <button
                  type="button"
                  onClick={() => setLanguage('en')}
                  className={`px-2 py-0.5 rounded-md transition-all ${
                    language === 'en'
                      ? 'bg-white text-zinc-950 font-bold'
                      : 'text-zinc-400'
                  }`}
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage('id')}
                  className={`px-2 py-0.5 rounded-md transition-all ${
                    language === 'id'
                      ? 'bg-white text-zinc-950 font-bold'
                      : 'text-zinc-400'
                  }`}
                >
                  ID
                </button>
              </div>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-zinc-300 hover:text-white bg-white/[0.04] border border-white/[0.08] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-16 z-40 p-4 md:hidden"
          >
            <div className="rounded-2xl bg-[#0c0d14]/95 backdrop-blur-xl border border-white/[0.1] p-6 shadow-2xl shadow-black/80">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-4">
                <div className="flex items-center gap-2 text-xs text-zinc-300 font-mono">
                  <span>{t.nav.schoolTag}</span>
                </div>
                <div className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-[10px] text-emerald-400 font-mono">
                  {t.nav.pklReady}
                </div>
              </div>

              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.sectionId}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-zinc-200 hover:text-white hover:bg-white/[0.06] transition-colors"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-4 h-4 text-zinc-500" />
                  </a>
                ))}
              </nav>

              <div className="mt-6 pt-4 border-t border-white/[0.08]">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-xs text-zinc-950 bg-white hover:bg-zinc-200 shadow-sm"
                >
                  <span>{t.nav.getInTouch}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
