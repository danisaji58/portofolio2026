'use client'

import React from 'react'
import { Github, Instagram, ArrowUp } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'
import { useLanguage } from '@/context/LanguageContext'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { t } = useLanguage()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative py-14 bg-[#06070a] border-t border-white/[0.08] overflow-hidden">
      {/* Subtle Hairline Edge */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Left: Branding & Role */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-7 h-7 rounded-lg bg-white text-zinc-950 flex items-center justify-center font-bold text-xs tracking-wider shadow-sm">
                NJ
              </div>
              <span className="font-bold text-sm tracking-tight text-white">
                {siteConfig.personal.fullName}
              </span>
            </div>
            <p className="text-xs text-zinc-400 font-mono">
              {t.footer.role}
            </p>
          </div>

          {/* Center: Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-zinc-400 hover:text-white border border-white/[0.08] transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-zinc-400 hover:text-pink-400 border border-white/[0.08] transition-colors"
              aria-label="Instagram Profile"
            >
              <Instagram className="w-4 h-4" />
            </a>

            {/* Back to Top */}
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2.5 px-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 hover:text-white border border-white/[0.08] transition-all flex items-center gap-1.5 text-xs font-mono ml-2"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="hidden sm:inline">{t.footer.top}</span>
            </button>
          </div>

        </div>

        {/* Bottom Copyright & Tech Stack */}
        <div className="mt-10 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400 font-mono text-center sm:text-left">
          <p>
            &copy; {currentYear} {siteConfig.personal.fullName}. {t.footer.rights}
          </p>
          <div className="flex items-center gap-2 text-zinc-400">
            <span>{t.footer.builtWith}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

