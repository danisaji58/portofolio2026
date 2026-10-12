"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Github, Instagram, Mail, MapPin } from "lucide-react"

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  )
}

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/danisaji58",
    icon: Github,
    handle: "@danisaji58",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/nj_daniswara",
    icon: Instagram,
    handle: "@nj_daniswara",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@freedom.id0",
    icon: TikTokIcon,
    handle: "@freedom.id0",
  },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="relative py-32 bg-[#0a0a12] overflow-hidden">
      {/* Ghost Number */}
      <div className="absolute left-4 lg:left-20 top-1/2 -translate-y-1/2 font-[var(--font-playfair)] text-[200px] lg:text-[300px] font-bold text-white/[0.02] select-none pointer-events-none">
        07
      </div>

      <div ref={ref} className="relative z-10 max-w-[1100px] mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#c9a84c] text-sm font-medium tracking-widest uppercase mb-4 block">
            Kontak
          </span>
          <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl font-bold text-[#f5f0e8] mb-4">
            Mari Terhubung
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent mx-auto" />
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative p-8 md:p-12 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
            {/* Glowing Border Effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#c9a84c]/20 via-transparent to-[#c9a84c]/20 opacity-50 blur-xl pointer-events-none" />

            <div className="relative z-10">
              <p className="text-center text-lg text-[#e8e3da]/80 mb-8 leading-relaxed">
                Jangan ragu untuk menghubungi saya — selalu terbuka untuk peluang baru dan kolaborasi. Mari ciptakan sesuatu yang luar biasa bersama.
              </p>

              {/* Location */}
              <div className="flex items-center justify-center gap-2 mb-8 text-[#e8e3da]/60">
                <MapPin className="w-4 h-4 text-[#c9a84c]" />
                <span>Malang, Jawa Timur, Indonesia</span>
              </div>

              {/* Social Links */}
              <div className="flex flex-col items-center gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="group flex items-center gap-3 text-[#e8e3da]/80 hover:text-[#c9a84c] transition-colors duration-300"
                  >
                    <link.icon className="w-5 h-5" />
                    <span className="font-medium">{link.name}</span>
                    <span className="text-[#e8e3da]/40 group-hover:text-[#c9a84c]/60 transition-colors">
                      {link.handle}
                    </span>
                    <span className="h-px flex-1 max-w-8 bg-[#c9a84c]/0 group-hover:bg-[#c9a84c]/50 transition-all duration-300" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
