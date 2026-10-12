"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Building, School, Laptop } from "lucide-react"

const education = [
  {
    icon: School,
    name: "SD Sukapura 2",
    years: "2015 – 2021",
    description: "Sekolah Dasar",
    current: false,
  },
  {
    icon: Building,
    name: "Pondok Modern Darussalam Gontor",
    years: "2021 – 2024",
    description: "Pondok Pesantren",
    current: false,
  },
  {
    icon: GraduationCap,
    name: "SMPN Sukapura 2",
    years: "2024",
    description: "Sekolah Menengah Pertama",
    current: false,
  },
  {
    icon: Laptop,
    name: "SMK Telkom Malang",
    years: "2024 – sekarang",
    description: "Rekayasa Perangkat Lunak (RPL)",
    current: true,
  },
]

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="education" className="relative py-32 overflow-hidden">
      {/* Ghost Number */}
      <div className="absolute right-4 lg:right-20 top-1/2 -translate-y-1/2 font-[var(--font-playfair)] text-[200px] lg:text-[300px] font-bold text-white/[0.02] select-none pointer-events-none">
        04
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
            Pendidikan
          </span>
          <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl font-bold text-[#f5f0e8] mb-4">
            Perjalanan Akademik
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#c9a84c] to-transparent" />
        </motion.div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className={`group relative p-6 rounded-2xl bg-white/5 backdrop-blur-xl border transition-all duration-300 hover:scale-[1.02] ${
                edu.current
                  ? "border-[#c9a84c]/50 shadow-lg shadow-[#c9a84c]/10"
                  : "border-white/10 hover:border-[#c9a84c]/30"
              }`}
            >
              {/* Gold Left Border */}
              <div className="absolute left-0 top-4 bottom-4 w-1 bg-gradient-to-b from-[#c9a84c] to-[#c9a84c]/30 rounded-full" />

              <div className="pl-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#c9a84c]/10 flex items-center justify-center group-hover:bg-[#c9a84c]/20 transition-colors">
                      <edu.icon className="w-6 h-6 text-[#c9a84c]" />
                    </div>
                    <div>
                      <h3 className="font-[var(--font-playfair)] text-xl font-semibold text-[#f5f0e8]">
                        {edu.name}
                      </h3>
                      <p className="text-sm text-[#e8e3da]/60">{edu.description}</p>
                    </div>
                  </div>
                  {edu.current && (
                    <span className="px-3 py-1 text-xs font-semibold text-[#080808] bg-[#c9a84c] rounded-full animate-pulse">
                      Saat Ini
                    </span>
                  )}
                </div>
                <p className="text-[#c9a84c] font-medium">{edu.years}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Gold Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/30 to-transparent" />
    </section>
  )
}
