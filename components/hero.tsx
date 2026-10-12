"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Github, Instagram, ArrowDown } from "lucide-react"
import { useEffect, useState } from "react"

const titles = ["Pengembang Web", "Siswa RPL", "Desainer UI", "Penggemar Next.js"]

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  )
}

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Aurora Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-[#1a1a4e]/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-900/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Ghost Number */}
      <div className="absolute left-4 lg:left-20 top-1/2 -translate-y-1/2 font-[var(--font-playfair)] text-[200px] lg:text-[300px] font-bold text-white/[0.02] select-none pointer-events-none">
        01
      </div>

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/30 mb-6"
            >
              <span className="text-lg">👋</span>
              <span className="text-sm text-[#c9a84c] font-medium">Tersedia untuk Proyek</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="font-[var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#f5f0e8] leading-tight mb-4"
            >
              Halo, Saya{" "}
              <span className="relative inline-block">
                Nadhif Javier
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="absolute bottom-2 left-0 h-1 bg-gradient-to-r from-[#c9a84c] to-[#c9a84c]/50"
                />
              </span>
            </motion.h1>

            {/* Typewriter Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="h-8 mb-6"
            >
              <motion.span
                key={titleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-xl sm:text-2xl text-[#c9a84c] font-medium"
              >
                {titles[titleIndex]}
              </motion.span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg text-[#e8e3da]/80 leading-relaxed mb-8 max-w-lg"
            >
              Seorang siswa pengembang yang bersemangat dari SMK Telkom Malang, menciptakan pengalaman web modern dengan kode bersih dan desain yang indah.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <a
                href="#portfolio"
                className="group relative px-8 py-3 bg-[#c9a84c] text-[#080808] font-semibold rounded-lg overflow-hidden transition-transform hover:scale-105"
              >
                <span className="relative z-10">Lihat Karya Saya</span>
              </a>
              <a
                href="#contact"
                className="group relative px-8 py-3 border-2 border-[#c9a84c] text-[#c9a84c] font-semibold rounded-lg overflow-hidden transition-all hover:bg-[#c9a84c] hover:text-[#080808]"
              >
                <span className="relative z-10">Hubungi Saya</span>
              </a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex items-center gap-6"
            >
              <a
                href="https://github.com/danisaji58"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#e8e3da]/60 hover:text-[#c9a84c] transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.instagram.com/nj_daniswara"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#e8e3da]/60 hover:text-[#c9a84c] transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.tiktok.com/@freedom.id0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#e8e3da]/60 hover:text-[#c9a84c] transition-colors duration-300"
                aria-label="TikTok"
              >
                <TikTokIcon className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Rotating Border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#c9a84c] via-[#d4b85d] to-[#c9a84c] p-1 animate-spin" style={{ animationDuration: "8s" }}>
                <div className="w-full h-full rounded-full bg-[#080808]" />
              </div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-[#c9a84c]/20 blur-2xl" />
              
              {/* Image Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-[#c9a84c]/50">
                <Image
                  src="/images/profile.png"
                  alt="Nadhif Javier - Software Engineering Student"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-[#c9a84c]/60"
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  )
}
