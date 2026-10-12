"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Home, BookOpen, Building, RefreshCcw, Laptop } from "lucide-react"

const milestones = [
  {
    year: "2009",
    icon: Home,
    title: "Lahir di Probolinggo",
    description: "Lahir di Probolinggo, Jawa Timur pada 29 April 2009",
  },
  {
    year: "2015",
    icon: BookOpen,
    title: "Memulai Sekolah Dasar",
    description: "Usia 6 tahun — Memulai pendidikan di SD Sukapura 2",
  },
  {
    year: "2021",
    icon: Building,
    title: "Masuk Pondok Pesantren",
    description: "Usia 12 tahun — Bergabung di Pondok Modern Darussalam Gontor",
  },
  {
    year: "2024",
    icon: RefreshCcw,
    title: "Pindah Sekolah",
    description: "Usia 15 tahun — Pindah ke SMPN Sukapura 2",
  },
  {
    year: "2024",
    icon: Laptop,
    title: "SMK Telkom Malang",
    description: "Mendaftar di SMK Telkom Malang, jurusan RPL — Memulai perjalanan rekayasa perangkat lunak",
  },
]

export default function Journey() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="journey" className="relative py-32 bg-[#0a0a12] overflow-hidden">
      {/* Ghost Number */}
      <div className="absolute left-4 lg:left-20 top-1/2 -translate-y-1/2 font-[var(--font-playfair)] text-[200px] lg:text-[300px] font-bold text-white/[0.02] select-none pointer-events-none">
        03
      </div>

      <div ref={ref} className="relative z-10 max-w-[1100px] mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-[#c9a84c] text-sm font-medium tracking-widest uppercase mb-4 block">
            Perjalanan Saya
          </span>
          <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl font-bold text-[#f5f0e8] mb-4">
            Linimasa Hidup
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent mx-auto" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px">
            <motion.div
              initial={{ height: 0 }}
              animate={isInView ? { height: "100%" } : {}}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-full bg-gradient-to-b from-[#c9a84c] via-[#c9a84c]/50 to-transparent"
            />
          </div>

          {/* Milestones */}
          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                  <div className="relative">
                    <div className="w-4 h-4 rounded-full bg-[#c9a84c]" />
                    <div className="absolute inset-0 rounded-full bg-[#c9a84c] animate-ping opacity-30" />
                  </div>
                </div>

                {/* Content */}
                <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                  <div className={`p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#c9a84c]/30 transition-colors duration-300 ${index % 2 === 0 ? "md:ml-auto md:mr-8" : "md:mr-auto md:ml-8"} max-w-md`}>
                    {/* Year Badge */}
                    <div className={`inline-flex items-center gap-2 mb-4 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                      <span className="font-[var(--font-playfair)] text-2xl font-bold text-[#c9a84c]">
                        {milestone.year}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-[#c9a84c]/10 flex items-center justify-center">
                        <milestone.icon className="w-4 h-4 text-[#c9a84c]" />
                      </div>
                    </div>
                    <h3 className="font-[var(--font-playfair)] text-xl font-semibold text-[#f5f0e8] mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-[#e8e3da]/70">{milestone.description}</p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Gold Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/30 to-transparent" />
    </section>
  )
}
