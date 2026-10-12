export interface SiteConfig {
  personal: {
    fullName: string
    shortName: string
    nickName: string
    title: string
    eyebrow: string
    headline: string
    supportingText: string
    education: {
      school: string
      major: string
      majorEn: string
      location: string
      status: string
    }
    careerTarget: string
    secondaryInterests: string[]
    bio: string
  }
  contact: {
    phone: {
      raw: string
      displayPlaceholder: string
    }
    email: string
    location: string
    whatsappMessageDefault: string
  }
  socials: {
    github: string
    instagram: string
    tiktok?: string
    linkedin?: string
  }
}

export const siteConfig: SiteConfig = {
  personal: {
    fullName: "Nadhif Javier Aji Daniswara",
    shortName: "Nadhif Javier",
    nickName: "NJ",
    title: "Aspiring Frontend Developer",
    eyebrow: "CREATIVE DEVELOPER · PORTFOLIO",
    headline: "Building Digital Experiences.",
    supportingText:
      "I'm a Software Engineering student focused on building modern, responsive, and user-friendly web experiences.",
    education: {
      school: "SMK Telkom Malang",
      major: "Rekayasa Perangkat Lunak (RPL)",
      majorEn: "Software Engineering",
      location: "Malang, East Java, Indonesia",
      status: "Active Student",
    },
    careerTarget: "Frontend Developer Intern / PKL / Entry-Level",
    secondaryInterests: ["Video Editing", "Visual Design", "Motion Graphics"],
    bio: "I'm a Software Engineering student at SMK Telkom Malang with a strong interest in Frontend Development. I enjoy turning ideas into responsive web interfaces and exploring how design, code, and interaction can create better digital experiences.",
  },
  contact: {
    phone: {
      // Configurable phone number for Nadhif Javier Aji Daniswara
      // Placeholder configured as requested: +62 857-4557-5664
      raw: "6285745575664",
      displayPlaceholder: "+62 857-4557-5664",
    },
    email: "danisaji58@gmail.com",
    location: "Malang, East Java, Indonesia",
    whatsappMessageDefault:
      "Halo Nadhif, saya melihat portfolio kamu dan tertarik untuk berdiskusi mengenai peluang magang / kolaborasi web development.",
  },
  socials: {
    github: "https://github.com/danisaji58",
    instagram: "https://www.instagram.com/nj_daniswara",
    tiktok: "https://www.tiktok.com/@freedom.id0",
  },
}

/**
 * Checks if a real phone number has been configured.
 */
export function isPhoneConfigured(): boolean {
  const p = siteConfig.contact.phone.raw.trim()
  if (!p) return false
  if (p.includes("[") || p.includes("]")) return false
  const digits = p.replace(/\D/g, "")
  return digits.length >= 9
}

/**
 * Returns clean digits for Indonesian numbers normalized to 62...
 */
export function getNormalizedPhoneDigits(): string | null {
  if (!isPhoneConfigured()) return null
  let digits = siteConfig.contact.phone.raw.replace(/\D/g, "")
  if (digits.startsWith("0")) {
    digits = "62" + digits.slice(1)
  }
  return digits
}

/**
 * Returns the telephone link (tel:) or null if not configured.
 */
export function getTelLink(): string | null {
  const digits = getNormalizedPhoneDigits()
  if (!digits) return null
  return `tel:+${digits}`
}

/**
 * Generates the official WhatsApp link according to specification:
 * https://wa.me/62XXXXXXXXXX with URL encoded default message.
 * Returns null if phone number is not configured.
 */
export function getWhatsAppLink(): string | null {
  const digits = getNormalizedPhoneDigits()
  if (!digits) return null
  return `https://wa.me/${digits}`
}

/**
 * Returns formatted phone string for display.
 */
export function getDisplayPhone(): string {
  if (!isPhoneConfigured()) {
    return siteConfig.contact.phone.displayPlaceholder
  }
  const digits = getNormalizedPhoneDigits()
  if (!digits) return siteConfig.contact.phone.displayPlaceholder
  if (digits.startsWith("62")) {
    return `+62 ${digits.slice(2, 5)}-${digits.slice(5, 9)}-${digits.slice(9)}`
  }
  return siteConfig.contact.phone.raw
}
