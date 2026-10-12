"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative py-12 bg-[#080808] border-t border-[#c9a84c]/10">
      {/* Top Gold Glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/50 to-transparent" />
      
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <span className="font-[var(--font-playfair)] text-3xl font-bold text-[#c9a84c]">
              NJ.
            </span>
          </motion.div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-[#e8e3da]/60 mb-2"
          >
            © 2025 Nadhif Javier Aji Daniswara. Hak cipta dilindungi.
          </motion.p>

          {/* Built With */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-sm text-[#e8e3da]/40"
          >
            Dibuat dengan Next.js & Tailwind CSS
            <Heart className="w-4 h-4 text-[#c9a84c] fill-[#c9a84c]" />
          </motion.p>
        </div>
      </div>
    </footer>
  )
}
