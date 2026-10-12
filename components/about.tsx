"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Quote, Code, Award, Clock } from "lucide-react"

const stats = [
  { icon: Code, value: "2+", label: "Proyek" },
  { icon: Award, value: "3+", label: "Keahlian" },
  { icon: Clock, value: "1", label: "Tahun Coding" },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Ghost Number */}
      <div className="absolute right-4 lg:right-20 top-1/2 -translate-y-1/2 font-[var(--font-playfair)] text-[200px] lg:text-[300px] font-bold text-white/[0.02] select-none pointer-events-none">
        02
      </div>

      <div ref={ref} className="relative z-10 max-w-[1100px] mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-[#c9a84c] text-sm font-medium tracking-widest uppercase mb-4 block">
            Tentang Saya
          </span>
          <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl font-bold text-[#f5f0e8] mb-4">
            Siapa Saya
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#c9a84c] to-transparent" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Quote Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10"
          >
            <Quote className="absolute top-6 left-6 w-10 h-10 text-[#c9a84c]/30" />
            <div className="pt-8">
              <p className="font-[var(--font-playfair)] text-2xl md:text-3xl text-[#f5f0e8] italic leading-relaxed">
                &ldquo;Kode adalah puisi yang ditulis dalam logika, dan setiap bug hanyalah bait yang menunggu untuk disempurnakan.&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-12 h-px bg-[#c9a84c]" />
                <span className="text-[#c9a84c] font-medium">Nadhif Javier</span>
              </div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-lg text-[#e8e3da]/80 leading-relaxed mb-6">
              Saya Nadhif Javier Aji Daniswara, seorang pengembang muda yang bersemangat yang saat ini menempuh jurusan Rekayasa Perangkat Lunak (RPL) di SMK Telkom Malang. Perjalanan saya di dunia teknologi dimulai dari rasa ingin tahu dan telah berkembang menjadi dedikasi untuk menciptakan aplikasi web yang bersih, fungsional, dan indah.
            </p>
            <p className="text-lg text-[#e8e3da]/80 leading-relaxed mb-8">
              Dengan dasar dalam teknologi web modern dan kepekaan terhadap desain, saya berusaha menjembatani kesenjangan antara fungsionalitas dan estetika. Setiap proyek yang saya kerjakan adalah kesempatan untuk belajar, berkembang, dan mendorong batas kemungkinan.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="text-center p-4 rounded-xl bg-white/5 border border-white/10"
                >
                  <stat.icon className="w-6 h-6 text-[#c9a84c] mx-auto mb-2" />
                  <div className="font-[var(--font-playfair)] text-2xl font-bold text-[#f5f0e8]">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[#e8e3da]/60">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Gold Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/30 to-transparent" />
    </section>
  )
}
