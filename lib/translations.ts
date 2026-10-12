export type Language = 'en' | 'id'

export interface ProjectTranslation {
  id: string
  title: string
  subtitle: string
  category: string
  status: string
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
}

export const translations = {
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      journey: 'Journey',
      contact: 'Contact',
      connect: 'Connect',
      getInTouch: 'Get In Touch',
      schoolTag: 'SMK Telkom Malang · RPL',
      pklReady: 'PKL Ready',
    },
    hero: {
      roleSubtitle: 'Nadhif Javier Aji Daniswara · Software Engineering',
      headlinePre: 'Crafting web interfaces that feel ',
      headlineHighlight: 'fast, tactile & alive.',
      description:
        'Software Engineering student at SMK Telkom Malang. Focused on building responsive modern web applications with Next.js, clean component systems, and purposeful interactions.',
      exploreBtn: 'Explore My Work',
      contactBtn: 'Get In Touch',
      schoolBadge: 'SMK Telkom Malang · RPL',
      sculptureTitle: 'Interactive Sculpture',
      sculptureHint: 'Drag to rotate',
    },
    about: {
      tag: 'About · Background',
      title: 'Software Engineering student building for the web.',
      location: 'Based in Malang, Indonesia',
      status: 'Open for PKL / Internship',
      bio1:
        "Hello, I'm Nadhif Javier Aji Daniswara — a Software Engineering (RPL) student at SMK Telkom Malang with a deep curiosity for frontend architecture, visual fidelity, and purposeful interaction.",
      bio2:
        'As a vocational student majoring in Software Engineering (RPL), I focus on the craftsmanship of modern web interfaces — crafting modular components, fluid responsive layouts, intuitive state flows, and accessible user experiences.',
      cards: {
        education: {
          title: 'Vocational Education',
          desc: 'SMK Telkom Malang · Software Engineering (RPL). Structured algorithms, clean web architecture, and collaborative engineering.',
        },
        internship: {
          title: 'Internship Target (PKL)',
          desc: 'Actively seeking a Frontend Developer internship to build real-world web applications, learn from senior peers, and deliver production value.',
        },
        frontend: {
          title: 'Frontend Focus',
          desc: 'Building with Next.js, React, Tailwind CSS, TypeScript, and modern motion libraries to deliver fast, tactile web experiences.',
        },
        creative: {
          title: 'Creative Interests',
          desc: 'Background in video editing and visual design gives me a trained instinct for motion pacing, typography, layout rhythm, and visual polish.',
        },
      },
    },
    skills: {
      tag: 'Toolkit · Architecture',
      title: 'Tools I Use to Build',
      subtitle: 'Clear distinction between hands-on practical experience and technologies explored through coursework.',
      allPill: 'All Tools',
      categories: {
        frontend: {
          title: 'Core Frontend & Web Foundations',
          badge: 'Production & Practical',
          desc: 'Modern React architecture, responsive styling, and web engineering fundamentals.',
        },
        tooling: {
          title: 'Design, Workflow & Tooling',
          badge: 'Creative & Engineering',
          desc: 'Production-level tooling, visual design prototyping, and deployment pipelines.',
        },
        additional: {
          title: 'Studied & Explored Concepts',
          badge: 'Curriculum & Research',
          desc: 'Architectures and technologies explored through school curriculum (RPL) and learning experiments.',
        },
      },
      levels: {
        core: 'Core Practical',
        working: 'Working Experience',
        studied: 'Studied & Explored',
      },
    },
    projects: {
      tag: 'Works · Selected Projects',
      title: 'Selected Works',
      subtitle:
        'Web applications built to solve real-world workflows, featuring custom UI architectures and live public deployments.',
      badge: '2 Live Deployments',
      detailsBtn: 'Project Details',
      liveBtn: 'Live Demo',
      modal: {
        closeAria: 'Close dialog',
        launchLive: 'Launch Live Demo',
        viewGithub: 'View GitHub Repository',
        prototypeNote: 'Academic Prototype / Local Repository',
        challengeTitle: 'The Challenge / Real Need',
        solutionTitle: 'The Frontend Solution',
        roleTitle: 'My Contribution & Ownership',
        featuresTitle: 'Key Implemented Features',
        highlightsTitle: 'Technical Highlights & Approach',
        techTitle: 'Technologies & Libraries',
      },
      items: [
        {
          id: 'ajira-bromo',
          title: 'Ajira Bromo',
          subtitle: 'Bromo Tourism & Travel Portal',
          category: 'Web Application',
          status: 'Completed',
          summary:
            'A centralized tourism discovery website connecting travelers with verified Bromo excursion services — from 4x4 Jeep charters and lodging to guided sunrise photography packages.',
          problemStatement:
            'Tourists often struggle to find unified pricing and transparent packages when planning trips to Mount Bromo across scattered social media contacts.',
          solution:
            "Designed a comprehensive travel platform presenting clear package itineraries, pickup logistics, jeep rentals, and lodging options under a 'One Gate Solution' vision.",
          myRole: 'Frontend Developer — Information architecture, UI cards, package presentation, and responsive design.',
          keyFeatures: [
            'Curated Bromo travel packages with itemized inclusions',
            'Jeep charter and pickup arrangement showcase',
            'Lodging and homestay service overview',
            'Visual photography gallery featuring Bromo viewpoints',
          ],
          technicalHighlights: [
            'Optimized imagery layouts for cinematic landscape photography',
            'Interactive package filter cards with transparent price displays',
            'Mobile-first responsive navigation suited for travelers on mobile devices',
          ],
          technologies: ['Next.js', 'Tailwind CSS', 'Lucide Icons', 'Responsive UI'],
          image: '/images/ajira-project.png',
          liveUrl: 'https://ajira-bromo-app.vercel.app/',
          githubUrl: 'https://github.com/danisaji58',
        },
        {
          id: 'wedding-guestbook',
          title: 'Digital Wedding Guestbook',
          subtitle: 'Buku Tamu Pernikahan Digital',
          category: 'Web Application',
          status: 'Completed',
          summary:
            'A digital wedding guestbook built for a real family ceremony to replace slow manual paper logbooks with swift guest check-in, categorization, and warm greeting messages.',
          problemStatement:
            'Traditional paper guestbooks cause long registration queues, messy handwriting, and manual headcount tallying after events.',
          solution:
            'Created a responsive web app where receptionists or guests easily record their names, institution/origin, attendee category (VIP, Family, Colleagues, Friends), and leave heartfelt greetings.',
          myRole: 'Sole Frontend Developer — UI layout, attendance workflow, and local data handling.',
          keyFeatures: [
            'Guest category segregation (VIP, Teachers, Institutions, Family, Friends)',
            'Instant attendance status confirmation and voucher code display',
            'Interactive greeting message board',
            'Festive typography and mobile-friendly registration layout',
          ],
          technicalHighlights: [
            'Lightweight client-side data storage without external database latency',
            'Responsive form with validation and instant status feedback',
            'Celebratory visual aesthetic tailored for high-contrast event tablets',
          ],
          technologies: ['Next.js', 'React', 'Tailwind CSS', 'JavaScript', 'Vercel'],
          image: '/images/wedding-project.png',
          liveUrl: 'https://app-ruddy-phi.vercel.app/',
          githubUrl: 'https://github.com/danisaji58',
        },
      ] as ProjectTranslation[],
    },
    journey: {
      tag: 'Progression · Experience',
      title: 'Always Learning, Always Building',
      subtitle:
        'A continuous path of strengthening fundamentals, testing new ideas, and turning curiosities into working software.',
      steps: [
        {
          phase: 'Phase 01 · Foundations',
          title: 'Web Fundamentals & Algorithms',
          timeline: 'SMK Telkom Malang (RPL)',
          description:
            'Began vocational software engineering studies. Practiced programming logic, structured data structures, semantic HTML5, modern CSS3 layout techniques (Flexbox & Grid), and vanilla JavaScript DOM operations.',
          skills: ['HTML5', 'CSS3', 'JavaScript', 'Logic & Flowcharts', 'Git Basics'],
        },
        {
          phase: 'Phase 02 · Modern Stack',
          title: 'Component Architecture & Tooling',
          timeline: 'Continuous Exploration',
          description:
            'Advanced toward modern component-based architecture. Built applications using React and Next.js, adopted Tailwind CSS for streamlined utility styling, and established disciplined GitHub commit workflows.',
          skills: ['React Hooks', 'Next.js App Router', 'Tailwind CSS', 'TypeScript', 'GitHub'],
        },
        {
          phase: 'Phase 03 · Interaction & 3D',
          title: 'Fluid Experiences & Real Scenarios',
          timeline: 'Projects & Experiments',
          description:
            'Engineered projects solving real-world needs (Digital Wedding Guestbook, Ajira Bromo tourism portal). Explored interactive animation with Framer Motion and procedural 3D with Three.js.',
          skills: ['Framer Motion', 'Three.js / WebGL', 'State Management', 'REST API UI', 'UX Design'],
        },
        {
          phase: 'Phase 04 · Target Objective',
          title: 'Frontend Developer Internship / PKL',
          timeline: 'Immediate Career Goal',
          description:
            'Actively preparing for an industry internship / PKL opportunity. Eager to collaborate with experienced engineering teams, contribute to production codebases, and embrace professional code reviews.',
          skills: ['Teamwork', 'Code Review', 'Production Readiness', 'Agile Mindset'],
        },
      ],
    },
    contact: {
      tag: 'Contact · Inquiries',
      title: "Let's build something together.",
      subtitle:
        'Software Engineering student open to internship (PKL) opportunities, frontend collaborations, and engineering discussions. Feel free to connect directly.',
      phoneCard: {
        title: 'Direct Call & WhatsApp',
        subtitle: 'Real-time messaging & phone line',
        statusActive: 'Active',
        statusDemo: 'Demo Mode',
        label: 'Phone / WhatsApp Number',
        chatBtn: 'Chat on WhatsApp',
        callBtn: 'Call Phone',
        copied: 'Copied',
        copy: 'Copy',
        placeholderAlert:
          'Phone placeholder active. Configure your number in lib/site-config.ts to enable WhatsApp redirection.',
      },
      emailCard: {
        label: 'Email Address',
        copy: 'Copy',
        copied: 'Copied',
        sendBtn: 'Send Email',
      },
      social: {
        githubTitle: 'GitHub Profile',
        instagramTitle: 'Instagram',
      },
      readiness: {
        title: 'Internship & Placement Readiness',
        desc: 'Currently based in Malang, East Java. Available for on-site, hybrid, or remote frontend internships with formal academic certification from SMK Telkom Malang.',
        responseLabel: 'Response Time:',
        responseValue: 'Within 24 Hours',
      },
    },
    footer: {
      role: 'Vocational Software Engineering Student · Focused on Frontend Web Development',
      rights: 'All rights reserved.',
      builtWith: 'Built with Next.js, Three.js & Tailwind CSS',
      top: 'Top',
    },
  },

  id: {
    nav: {
      about: 'Tentang',
      skills: 'Keahlian',
      projects: 'Proyek',
      journey: 'Perjalanan',
      contact: 'Kontak',
      connect: 'Hubungi',
      getInTouch: 'Hubungi Saya',
      schoolTag: 'SMK Telkom Malang · RPL',
      pklReady: 'Siap PKL',
    },
    hero: {
      roleSubtitle: 'Nadhif Javier Aji Daniswara · Rekayasa Perangkat Lunak',
      headlinePre: 'Membangun antarmuka web yang ',
      headlineHighlight: 'cepat, taktil & hidup.',
      description:
        'Siswa Rekayasa Perangkat Lunak di SMK Telkom Malang. Berfokus pada pengembangan aplikasi web modern yang responsif dengan Next.js, arsitektur komponen bersih, dan interaksi yang terarah.',
      exploreBtn: 'Lihat Karya Saya',
      contactBtn: 'Hubungi Saya',
      schoolBadge: 'SMK Telkom Malang · RPL',
      sculptureTitle: 'Skulptur Interaktif',
      sculptureHint: 'Geser untuk memutar',
    },
    about: {
      tag: 'Tentang · Latar Belakang',
      title: 'Siswa Rekayasa Perangkat Lunak berfokus pada pengembangan web.',
      location: 'Berdomisili di Malang, Indonesia',
      status: 'Terbuka untuk PKL / Magang',
      bio1:
        'Halo, saya Nadhif Javier Aji Daniswara — siswa Rekayasa Perangkat Lunak (RPL) di SMK Telkom Malang dengan rasa ingin tahu mendalam terhadap arsitektur frontend, estetika visual, dan interaksi bermakna.',
      bio2:
        'Sebagai siswa kejuruan RPL, saya mendalami seni pembuatan antarmuka web modern — merancang komponen modular, tata letak responsif yang luwes, alur state yang intuitif, serta pengalaman pengguna yang ramah dan aksesibel.',
      cards: {
        education: {
          title: 'Pendidikan Kejuruan',
          desc: 'SMK Telkom Malang · Rekayasa Perangkat Lunak (RPL). Algoritma terstruktur, arsitektur web bersih, dan rekayasa kolaboratif.',
        },
        internship: {
          title: 'Target Magang (PKL)',
          desc: 'Aktif mencari kesempatan magang Frontend Developer untuk membangun aplikasi web nyata, belajar dari rekan senior, dan memberikan dampak produksi.',
        },
        frontend: {
          title: 'Fokus Frontend',
          desc: 'Membangun dengan Next.js, React, Tailwind CSS, TypeScript, dan library motion modern untuk menghadirkan pengalaman web yang cepat dan taktil.',
        },
        creative: {
          title: 'Minat Kreatif',
          desc: 'Latar belakang dalam editing video dan desain visual memberi saya kepekaan alami terhadap ritme motion, tipografi, tata letak, dan sentuhan visual akhir.',
        },
      },
    },
    skills: {
      tag: 'Toolkit · Arsitektur',
      title: 'Perangkat yang Saya Gunakan',
      subtitle: 'Pemisahan yang jelas antara pengalaman praktis langsung dan teknologi yang dipelajari melalui kurikulum.',
      allPill: 'Semua Tool',
      categories: {
        frontend: {
          title: 'Frontend Utama & Fondasi Web',
          badge: 'Produksi & Praktik',
          desc: 'Arsitektur React modern, styling responsif, dan fondasi rekayasa web.',
        },
        tooling: {
          title: 'Desain, Alur Kerja & Tooling',
          badge: 'Kreatif & Rekayasa',
          desc: 'Tooling standar produksi, prototipe desain visual, dan alur deployment.',
        },
        additional: {
          title: 'Konsep yang Dipelajari & Dieksplorasi',
          badge: 'Kurikulum & Riset',
          desc: 'Arsitektur dan teknologi yang dieksplorasi melalui kurikulum sekolah (RPL) dan eksperimen belajar.',
        },
      },
      levels: {
        core: 'Praktik Utama',
        working: 'Pengalaman Praktis',
        studied: 'Dipelajari & Riset',
      },
    },
    projects: {
      tag: 'Karya · Proyek Pilihan',
      title: 'Karya Pilihan',
      subtitle:
        'Aplikasi web yang dibangun untuk menyelesaikan alur kerja nyata, menampilkan arsitektur UI khusus dan deployment publik aktif.',
      badge: '2 Aplikasi Live',
      detailsBtn: 'Detail Proyek',
      liveBtn: 'Demo Langsung',
      modal: {
        closeAria: 'Tutup dialog',
        launchLive: 'Buka Demo Langsung',
        viewGithub: 'Lihat Repositori GitHub',
        prototypeNote: 'Prototipe Akademik / Repositori Lokal',
        challengeTitle: 'Tantangan & Kebutuhan Riil',
        solutionTitle: 'Solusi Frontend',
        roleTitle: 'Kontribusi & Tanggung Jawab',
        featuresTitle: 'Fitur Utama yang Diterapkan',
        highlightsTitle: 'Sorotan Teknis & Pendekatan',
        techTitle: 'Teknologi & Library',
      },
      items: [
        {
          id: 'ajira-bromo',
          title: 'Ajira Bromo',
          subtitle: 'Portal Wisata & Perjalanan Bromo',
          category: 'Aplikasi Web',
          status: 'Selesai',
          summary:
            'Situs penemuan wisata terpusat yang menghubungkan wisatawan dengan layanan perjalanan Bromo terverifikasi — mulai dari sewa Jeep 4x4, penginapan, hingga paket fotografi sunrise berpemandu.',
          problemStatement:
            'Wisatawan sering kesulitan menemukan harga terpadu dan paket transparan saat merencanakan perjalanan ke Gunung Bromo melalui kontak media sosial yang tersebar.',
          solution:
            "Merancang platform perjalanan terpadu yang menyajikan rencana perjalanan paket yang jelas, logistik penjemputan, sewa jeep, dan opsi penginapan dalam visi 'One Gate Solution'.",
          myRole: 'Frontend Developer — Arsitektur informasi, kartu UI, penyajian paket, dan desain responsif.',
          keyFeatures: [
            'Paket perjalanan Bromo terkurasi dengan rincian fasilitas',
            'Informasi penyewaan Jeep dan penjemputan logistik',
            'Ringkasan layanan penginapan dan homestay',
            'Galeri fotografi visual menampilkan spot panorama Bromo',
          ],
          technicalHighlights: [
            'Optimasi tata letak gambar untuk fotografi pemandangan sinematik',
            'Kartu filter paket interaktif dengan tampilan harga transparan',
            'Navigasi responsif mobile-first yang nyaman bagi wisatawan',
          ],
          technologies: ['Next.js', 'Tailwind CSS', 'Lucide Icons', 'Responsive UI'],
          image: '/images/ajira-project.png',
          liveUrl: 'https://ajira-bromo-app.vercel.app/',
          githubUrl: 'https://github.com/danisaji58',
        },
        {
          id: 'wedding-guestbook',
          title: 'Buku Tamu Pernikahan Digital',
          subtitle: 'Digital Wedding Guestbook',
          category: 'Aplikasi Web',
          status: 'Selesai',
          summary:
            'Aplikasi buku tamu pernikahan digital yang dibuat untuk acara keluarga nyata guna menggantikan buku tamu manual yang lambat dengan registrasi tamu yang cepat, pengkategorian, dan ucapan selamat hangat.',
          problemStatement:
            'Buku tamu kertas konvensional menyebabkan antrean registrasi panjang, tulisan tangan yang sulit dibaca, dan rekap jumlah tamu manual setelah acara selesai.',
          solution:
            'Membuat aplikasi web responsif di mana penerima tamu atau hadirin dapat dengan mudah mencatat nama, asal/instansi, kategori tamu (VIP, Keluarga, Rekan, Teman), dan meninggalkan ucapan selamat.',
          myRole: 'Frontend Developer Tunggal — Tata letak UI, alur kehadiran, dan penanganan data lokal.',
          keyFeatures: [
            'Pemisahan kategori tamu (VIP, Guru/Instansi, Keluarga, Teman)',
            'Konfirmasi status kehadiran instan dan tampilan kode voucher',
            'Papan pesan ucapan selamat interaktif',
            'Tipografi anggun dan tata letak registrasi ramah tablet',
          ],
          technicalHighlights: [
            'Penyimpanan data sisi klien yang ringan tanpa jeda latensi database',
            'Formulir responsif dengan validasi dan umpan balik status seketika',
            'Estetika visual bernuansa pesta disesuaikan untuk tablet event',
          ],
          technologies: ['Next.js', 'React', 'Tailwind CSS', 'JavaScript', 'Vercel'],
          image: '/images/wedding-project.png',
          liveUrl: 'https://app-ruddy-phi.vercel.app/',
          githubUrl: 'https://github.com/danisaji58',
        },
      ] as ProjectTranslation[],
    },
    journey: {
      tag: 'Perkembangan · Pengalaman',
      title: 'Selalu Belajar, Selalu Berkarya',
      subtitle:
        'Jalur berkesinambungan dalam memperkuat fondasi dasar, menguji ide-ide baru, dan mengubah rasa ingin tahu menjadi perangkat lunak nyata.',
      steps: [
        {
          phase: 'Fase 01 · Fondasi',
          title: 'Fondasi Web & Algoritma',
          timeline: 'SMK Telkom Malang (RPL)',
          description:
            'Memulai studi rekayasa perangkat lunak kejuruan. Mempraktikkan logika pemrograman, struktur data terstruktur, HTML5 semantik, teknik tata letak CSS3 modern (Flexbox & Grid), dan manipulasi DOM vanilla JavaScript.',
          skills: ['HTML5', 'CSS3', 'JavaScript', 'Logika & Flowchart', 'Dasar Git'],
        },
        {
          phase: 'Fase 02 · Modern Stack',
          title: 'Arsitektur Komponen & Tooling',
          timeline: 'Eksplorasi Berkelanjutan',
          description:
            'Melangkah maju menuju arsitektur berbasis komponen modern. Membangun aplikasi menggunakan React dan Next.js, menerapkan Tailwind CSS untuk efisiensi styling, serta disiplin alur kerja commit GitHub.',
          skills: ['React Hooks', 'Next.js App Router', 'Tailwind CSS', 'TypeScript', 'GitHub'],
        },
        {
          phase: 'Fase 03 · Interaksi & 3D',
          title: 'Pengalaman Luwes & Skenario Riil',
          timeline: 'Proyek & Eksperimen',
          description:
            'Mengembangkan proyek untuk menyelesaikan kebutuhan dunia nyata (Buku Tamu Pernikahan Digital, portal wisata Ajira Bromo). Mengeksplorasi animasi interaktif dengan Framer Motion dan 3D prosedural dengan Three.js.',
          skills: ['Framer Motion', 'Three.js / WebGL', 'State Management', 'REST API UI', 'Desain UX'],
        },
        {
          phase: 'Fase 04 · Target Sasaran',
          title: 'Magang Frontend Developer / PKL',
          timeline: 'Tujuan Karir Terdekat',
          description:
            'Aktif mempersiapkan diri untuk kesempatan magang industri / PKL. Bersemangat untuk berkolaborasi dengan tim engineering berpengalaman, berkontribusi pada codebase produksi, dan menerima code review profesional.',
          skills: ['Kerja Tim', 'Code Review', 'Kesiapan Produksi', 'Agile Mindset'],
        },
      ],
    },
    contact: {
      tag: 'Kontak · Pertanyaan',
      title: 'Mari membangun sesuatu bersama.',
      subtitle:
        'Siswa Rekayasa Perangkat Lunak yang terbuka untuk kesempatan magang (PKL), kolaborasi frontend, dan diskusi teknis. Jangan ragu untuk menghubungi langsung.',
      phoneCard: {
        title: 'Panggilan Langsung & WhatsApp',
        subtitle: 'Pesan instan & sambungan telepon',
        statusActive: 'Aktif',
        statusDemo: 'Mode Demo',
        label: 'Nomor Telepon / WhatsApp',
        chatBtn: 'Chat di WhatsApp',
        callBtn: 'Panggil Telepon',
        copied: 'Tersalin',
        copy: 'Salin',
        placeholderAlert:
          'Placeholder nomor telepon aktif. Konfigurasikan nomor Anda di lib/site-config.ts untuk mengaktifkan pengalihan WhatsApp.',
      },
      emailCard: {
        label: 'Alamat Email',
        copy: 'Salin',
        copied: 'Tersalin',
        sendBtn: 'Kirim Email',
      },
      social: {
        githubTitle: 'Profil GitHub',
        instagramTitle: 'Instagram',
      },
      readiness: {
        title: 'Kesiapan Magang & Penempatan (PKL)',
        desc: 'Berdomisili di Malang, Jawa Timur. Siap untuk magang frontend on-site, hybrid, maupun remote dengan sertifikasi akademik resmi dari SMK Telkom Malang.',
        responseLabel: 'Waktu Respon:',
        responseValue: 'Dalam 24 Jam',
      },
    },
    footer: {
      role: 'Siswa Rekayasa Perangkat Lunak Kejuruan · Berfokus pada Frontend Web Development',
      rights: 'Hak cipta dilindungi undang-undang.',
      builtWith: 'Dibuat dengan Next.js, Three.js & Tailwind CSS',
      top: 'Atas',
    },
  },
}
