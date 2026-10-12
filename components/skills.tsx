"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import {
  Atom,
  Braces,
  Code2,
  FileCode2,
  FileJson2,
  FileType2,
  MessageCircle,
  PanelsTopLeft,
  UsersRound,
  Video,
} from "lucide-react"

const skills = [
  { name: "JavaScript", icon: FileJson2 },
  { name: "Communication", icon: MessageCircle },
  { name: "CSS", icon: Code2 },
  { name: "Teamwork", icon: UsersRound },
  { name: "Frontend Development", icon: PanelsTopLeft },
  { name: "Next.js", icon: Braces },
  { name: "React.js", icon: Atom },
  { name: "TypeScript", icon: FileType2 },
  { name: "Video Editing", icon: Video },
  { name: "HTML", icon: FileCode2 },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="relative py-32 bg-[#0a0a12] overflow-hidden">
      {/* Ghost Number */}
      <div className="absolute left-4 lg:left-20 top-1/2 -translate-y-1/2 font-[var(--font-playfair)] text-[200px] lg:text-[300px] font-bold text-white/[0.02] select-none pointer-events-none">
        05
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
            Keahlian
          </span>
          <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl font-bold text-[#f5f0e8] mb-4">
            Kemampuan Saya
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent mx-auto" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group relative"
            >
              <div className="flex h-full flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#c9a84c]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#c9a84c]/10 hover:scale-105">
                <div className="text-[#e8e3da]/80 group-hover:text-[#c9a84c] transition-colors duration-300">
                  <skill.icon aria-hidden="true" className="w-8 h-8" strokeWidth={1.7} />
                </div>
                <span className="text-center text-sm font-medium text-[#f5f0e8] text-balance">{skill.name}</span>
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
