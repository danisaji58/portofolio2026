export interface Project {
  id: string
  title: string
  subtitle: string
  category: "Web Application" | "Interface Prototype" | "Concept"
  status: "Completed" | "Prototype" | "In Progress" | "Exploration"
  summary: string
  problemStatement: string
  solution: string
  myRole: string
  keyFeatures: string[]
  technicalHighlights: string[]
  technologies: string[]
  image: string
  liveUrl?: string | null
  githubUrl?: string | null
  isFeatured: boolean
}

export const projectsData: Project[] = [
  {
    id: "ajira-bromo",
    title: "Ajira Bromo",
    subtitle: "Bromo Tourism & Travel Portal",
    category: "Web Application",
    status: "Completed",
    summary:
      "A centralized tourism discovery website connecting travelers with verified Bromo excursion services — from 4x4 Jeep charters and lodging to guided sunrise photography packages.",
    problemStatement:
      "Tourists often struggle to find unified pricing and transparent packages when planning trips to Mount Bromo across scattered social media contacts.",
    solution:
      "Designed a comprehensive travel platform presenting clear package itineraries, pickup logistics, jeep rentals, and lodging options under a 'One Gate Solution' vision.",
    myRole: "Frontend Developer — Information architecture, UI cards, package presentation, and responsive design.",
    keyFeatures: [
      "Curated Bromo travel packages with itemized inclusions",
      "Jeep charter and pickup arrangement showcase",
      "Lodging and homestay service overview",
      "Visual photography gallery featuring Bromo viewpoints",
    ],
    technicalHighlights: [
      "Optimized imagery layouts for cinematic landscape photography",
      "Interactive package filter cards with transparent price displays",
      "Mobile-first responsive navigation suited for travelers on mobile devices",
    ],
    technologies: ["Next.js", "Tailwind CSS", "Lucide Icons", "Responsive UI"],
    image: "/images/ajira-project.png",
    liveUrl: "https://ajira-bromo-app.vercel.app/",
    githubUrl: "https://github.com/danisaji58",
    isFeatured: true,
  },
  {
    id: "wedding-guestbook",
    title: "Digital Wedding Guestbook",
    subtitle: "Buku Tamu Pernikahan Digital",
    category: "Web Application",
    status: "Completed",
    summary:
      "A digital wedding guestbook built for a real family ceremony to replace slow manual paper logbooks with swift guest check-in, categorization, and warm greeting messages.",
    problemStatement:
      "Traditional paper guestbooks cause long registration queues, messy handwriting, and manual headcount tallying after events.",
    solution:
      "Created a responsive web app where receptionists or guests easily record their names, institution/origin, attendee category (VIP, Family, Colleagues, Friends), and leave heartfelt greetings.",
    myRole: "Sole Frontend Developer — UI layout, attendance workflow, and local data handling.",
    keyFeatures: [
      "Guest category segregation (VIP, Teachers, Institutions, Family, Friends)",
      "Instant attendance status confirmation and voucher code display",
      "Interactive greeting message board",
      "Festive typography and mobile-friendly registration layout",
    ],
    technicalHighlights: [
      "Lightweight client-side data storage without external database latency",
      "Responsive form with validation and instant status feedback",
      "Celebratory visual aesthetic tailored for high-contrast event tablets",
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "JavaScript", "Vercel"],
    image: "/images/wedding-project.png",
    liveUrl: "https://app-ruddy-phi.vercel.app/",
    githubUrl: "https://github.com/danisaji58",
    isFeatured: true,
  },
]
