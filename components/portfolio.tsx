"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowUpRight, ExternalLink } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Buku Tamu Pernikahan",
    description: "Buku tamu digital berbasis web untuk acara pernikahan, memungkinkan tamu meninggalkan pesan dan ucapan yang tulus untuk pasangan.",
    image: "/images/wedding-project.png",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://app-ruddy-phi.vercel.app/",
    type: "Aplikasi Web",
  },
  {
    title: "Ajira Bromo — Website Wisata",
    description: "Website destinasi wisata untuk menjelajahi pariwisata Bromo, menampilkan pemandangan indah dan informasi perjalanan.",
    image: "/images/ajira-project.png",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://ajira-bromo-app.vercel.app/",
    type: "Aplikasi Web",
  },
]

export default function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="portfolio" className="relative py-32 overflow-hidden">
      {/* Ghost Number */}
      <div className="absolute right-4 lg:right-20 top-1/2 -translate-y-1/2 font-[var(--font-playfair)] text-[200px] lg:text-[300px] font-bold text-white/[0.02] select-none pointer-events-none">
        06
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
            Portofolio
          </span>
          <h2 className="font-[var(--font-playfair)] text-4xl md:text-5xl font-bold text-[#f5f0e8] mb-4">
            Karya Unggulan
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#c9a84c] to-transparent" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#c9a84c]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#c9a84c]/10 hover:-translate-y-2">
                {/* Project Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/20 to-transparent" />
                  {/* Type Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 text-xs font-medium text-[#c9a84c] bg-[#080808]/80 backdrop-blur-sm rounded-full border border-[#c9a84c]/30">
                      {project.type}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-[var(--font-playfair)] text-2xl font-semibold text-[#f5f0e8] mb-3 group-hover:text-[#c9a84c] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#e8e3da]/70 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium text-[#e8e3da]/80 bg-white/5 rounded-full border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#c9a84c] font-medium hover:gap-3 transition-all duration-300 group/link"
                  >
                    <span>Lihat Proyek</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/link:rotate-45 transition-transform" />
                  </a>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-[#c9a84c]/0 group-hover:bg-[#c9a84c]/5 transition-colors duration-500 pointer-events-none" />
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
