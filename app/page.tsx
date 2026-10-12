import React from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import SkillsSection from '@/components/sections/SkillsSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import LearningSection from '@/components/sections/LearningSection'
import ContactSection from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#06080e] text-[#f1f5f9] selection:bg-cyan-500/25 selection:text-white">
      {/* Top Fixed Navigation */}
      <Navbar />

      {/* Hero Section with Interactive 3D Centerpiece */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Technical Skills Section */}
      <SkillsSection />

      {/* Selected Works (Projects) Section */}
      <ProjectsSection />

      {/* Learning Journey Timeline */}
      <LearningSection />

      {/* Contact Section (Phone, WhatsApp, Email, GitHub) */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  )
}
