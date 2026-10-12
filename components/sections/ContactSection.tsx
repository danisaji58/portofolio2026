'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Phone,
  Mail,
  Copy,
  Check,
  Github,
  Instagram,
  MessageSquare,
  ShieldAlert,
  ArrowUpRight,
  MapPin,
  Clock,
  Sparkles,
} from 'lucide-react'
import {
  siteConfig,
  isPhoneConfigured,
  getDisplayPhone,
  getTelLink,
  getWhatsAppLink,
} from '@/lib/site-config'
import { useLanguage } from '@/context/LanguageContext'

export default function ContactSection() {
  const [copiedPhone, setCopiedPhone] = useState(false)
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [showConfigNotice, setShowConfigNotice] = useState(false)
  const { t } = useLanguage()

  const phoneConfigured = isPhoneConfigured()
  const displayPhone = getDisplayPhone()
  const telLink = getTelLink()
  const whatsAppUrl = getWhatsAppLink()

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(displayPhone)
    setCopiedPhone(true)
    setTimeout(() => setCopiedPhone(false), 2500)
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.contact.email)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2500)
  }

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    if (!phoneConfigured) {
      e.preventDefault()
      setShowConfigNotice(true)
    }
  }

  return (
    <section id="contact" className="relative py-28 overflow-hidden bg-[#07080c]">
      {/* Subtle Ambient Lighting */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-sky-500/[0.03] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-indigo-500/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Editorial Studio Style */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              {t.contact.tag}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            {t.contact.title}
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-12 gap-6 items-start">
          
          {/* Main Direct Contact Methods (Col 7) */}
          <div className="md:col-span-7 space-y-4">
            
            {/* Phone & WhatsApp Card */}
            <div className="p-7 sm:p-8 rounded-3xl bg-[#0d0e14] border border-white/[0.08] hover:border-white/20 transition-all duration-300 relative overflow-hidden group">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-zinc-200">
                    <Phone className="w-5 h-5 text-sky-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">{t.contact.phoneCard.title}</h3>
                    <p className="text-xs text-zinc-400 font-mono">{t.contact.phoneCard.subtitle}</p>
                  </div>
                </div>

                {phoneConfigured ? (
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-[11px] font-mono text-emerald-400">
                    {t.contact.phoneCard.statusActive}
                  </span>
                ) : (
                  <span className="px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-[11px] font-mono text-amber-400">
                    {t.contact.phoneCard.statusDemo}
                  </span>
                )}
              </div>

              {/* Display Phone Text */}
              <div className="my-5 p-4 rounded-2xl bg-black/40 border border-white/[0.06] flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase text-zinc-400 block mb-0.5">
                    {t.contact.phoneCard.label}
                  </span>
                  <span className="text-lg sm:text-xl font-mono font-semibold text-white tracking-wide">
                    {displayPhone}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="p-2.5 px-3.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-zinc-200 border border-white/[0.08] transition-all flex items-center gap-1.5 text-xs font-mono"
                  aria-label="Copy phone number to clipboard"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">{t.contact.phoneCard.copied}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-zinc-400" />
                      <span>{t.contact.phoneCard.copy}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <a
                  href={whatsAppUrl || '#'}
                  onClick={handleWhatsAppClick}
                  target={phoneConfigured ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold text-xs tracking-wide transition-all shadow-md shadow-emerald-950/40 hover:scale-[1.01] active:scale-[0.99]"
                >
                  <MessageSquare className="w-4 h-4 fill-zinc-950" />
                  <span>{t.contact.phoneCard.chatBtn}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                {telLink && (
                  <a
                    href={telLink}
                    className="inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-white/[0.05] hover:bg-white/[0.09] text-zinc-200 border border-white/[0.08] text-xs font-medium transition-all"
                  >
                    <Phone className="w-3.5 h-3.5 text-sky-400" />
                    <span>{t.contact.phoneCard.callBtn}</span>
                  </a>
                )}
              </div>

              {/* Placeholder Guidance Info if not configured */}
              {!phoneConfigured && (
                <div className="mt-4 p-3 rounded-xl bg-amber-950/20 border border-amber-500/20 flex items-start gap-2.5 text-xs text-amber-300/90">
                  <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>
                    {t.contact.phoneCard.placeholderAlert}
                  </span>
                </div>
              )}
            </div>

            {/* Email Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#0d0e14] border border-white/[0.08] hover:border-white/20 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-zinc-200">
                  <Mail className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-zinc-400 block mb-0.5">
                    {t.contact.emailCard.label}
                  </span>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-sm sm:text-base font-semibold text-white hover:text-sky-300 transition-colors"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2.5 px-3.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-zinc-200 border border-white/[0.08] transition-all text-xs font-mono flex items-center gap-1.5"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-zinc-400" />}
                  <span>{copiedEmail ? t.contact.emailCard.copied : t.contact.emailCard.copy}</span>
                </button>

                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="px-4 py-2.5 rounded-xl bg-white text-zinc-950 hover:bg-zinc-200 font-semibold text-xs transition-all flex items-center gap-1.5"
                >
                  <span>{t.contact.emailCard.sendBtn}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

          {/* Social Profiles & Vocational Details (Col 5) */}
          <div className="md:col-span-5 space-y-4">
            
            {/* GitHub Card */}
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-3xl bg-[#0d0e14] border border-white/[0.08] hover:border-white/20 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white group-hover:text-sky-300 transition-colors">
                    {t.contact.social.githubTitle}
                  </h4>
                  <p className="text-xs font-mono text-zinc-400">@danisaji58</p>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            {/* Instagram Card */}
            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-3xl bg-[#0d0e14] border border-white/[0.08] hover:border-white/20 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-pink-400">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white group-hover:text-pink-300 transition-colors">
                    {t.contact.social.instagramTitle}
                  </h4>
                  <p className="text-xs font-mono text-zinc-400">@nj_daniswara</p>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>

            {/* Academic & Placement Card */}
            <div className="p-6 rounded-3xl bg-[#0d0e14] border border-white/[0.08] space-y-3.5">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="font-medium text-white">{t.contact.readiness.title}</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                {t.contact.readiness.desc}
              </p>
              <div className="pt-3 border-t border-white/[0.06] text-[11px] font-mono text-zinc-400 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-zinc-500" />
                  <span>{t.contact.readiness.responseLabel}</span>
                </div>
                <span className="text-zinc-200 font-medium">{t.contact.readiness.responseValue}</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

