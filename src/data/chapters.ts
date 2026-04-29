export interface SwimLane {
  label: string;
  color: string;
  items: string[];
}

export interface Section {
  number: string;
  title: string;
  content?: string;
  keyPoints?: string[];
  swimlanes?: SwimLane[];
}

export interface Chapter {
  id: number;
  bab: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
  gradient: string;
  sections: Section[];
  outputs?: string[];
  frameworks?: string[];
  isNew?: boolean;
  isExpanded?: boolean;
}

export const chapters: Chapter[] = [
  // ─── BAB 1 ───────────────────────────────────────────────────────────────
  {
    id: 1,
    bab: "BAB 1",
    title: "Executive Summary",
    subtitle: "Ringkasan Strategis",
    description: "Ringkasan roadmap dalam 2–4 halaman beserta visual roadmap high-level — biasanya dibaca pertama oleh Direksi.",
    icon: "📊",
    color: "from-blue-500 to-cyan-500",
    gradient: "from-blue-900/40 to-cyan-900/40",
    sections: [
      { number: "1.1", title: "Latar Belakang Transformasi HC", content: "Menganalisis dorongan internal dan eksternal yang mengharuskan organisasi melakukan transformasi digital pada fungsi Human Capital untuk tetap relevan dan kompetitif." },
      { number: "1.2", title: "Tujuan Penyusunan Roadmap HCIS", content: "Menetapkan arah strategis pengembangan teknologi HC untuk 5 tahun ke depan guna mendukung visi besar perusahaan." },
      { number: "1.3", title: "Ruang Lingkup Roadmap HCIS", content: "Mendefinisikan batasan implementasi, unit bisnis yang terlibat, dan modul-modul utama yang menjadi fokus transformasi." },
      { number: "1.4", title: "Prinsip Utama Pengembangan HCIS", content: "Mengadopsi prinsip Scalability, Integrity, User-Centric, dan Security sebagai fondasi pengembangan sistem." },
      { number: "1.5", title: "Highlight Roadmap 2026–2030", content: "Ringkasan milestone utama mulai dari pembenahan fondasi data hingga adopsi kecerdasan buatan (AI) di akhir tahun 2030." },
      { number: "1.6", title: "Manfaat Strategis bagi Organisasi", content: "Memetakan nilai tambah berupa efisiensi biaya, peningkatan produktivitas, dan pengambilan keputusan berbasis data." },
    ],
    outputs: ["Ringkasan roadmap dalam 2–4 halaman", "Visual roadmap high-level"],
  },

  // ─── BAB 2 ───────────────────────────────────────────────────────────────
  {
    id: 2,
    bab: "BAB 2",
    title: "Strategic Context & Business Alignment",
    subtitle: "Konteks Strategis",
    description: "Menghubungkan HCIS dengan strategi perusahaan melalui Balanced Scorecard dan Strategy Map.",
    icon: "🎯",
    color: "from-purple-500 to-pink-500",
    gradient: "from-purple-900/40 to-pink-900/40",
    sections: [
      { number: "2.1", title: "Visi dan Misi Human Capital", content: "Menjabarkan aspirasi jangka panjang fungsi HC dalam menciptakan lingkungan kerja yang unggul dan berkelanjutan." },
      { number: "2.2", title: "Strategic Objectives Human Capital", content: "Target-target spesifik yang ingin dicapai oleh tim HC untuk mendukung keberhasilan bisnis." },
      { number: "2.3", title: "Alignment dengan Corporate Strategy", content: "Memastikan setiap inisiatif HCIS memiliki korelasi langsung dengan strategi pertumbuhan perusahaan secara keseluruhan." },
      { number: "2.4", title: "Peran HCIS dalam Mendukung Strategi", content: "Menjelaskan bagaimana teknologi bertindak sebagai enabler untuk mempercepat pencapaian tujuan strategis." },
      { number: "2.5", title: "Key Business Drivers", content: "Faktor-faktor utama dari sisi bisnis yang mempengaruhi kebutuhan akan sistem HC yang lebih modern." },
      { number: "2.6", title: "HR Transformation Vision 2030", content: "Gambaran ideal kondisi digitalisasi HR di akhir tahun 2030 (Full Digital, AI-Driven)." },
    ],
    frameworks: ["Balanced Scorecard", "Strategy Map"],
  },

  // ─── BAB 3 ───────────────────────────────────────────────────────────────
  {
    id: 3,
    bab: "BAB 3",
    title: "Current State Assessment (As-Is)",
    subtitle: "Kondisi Saat Ini",
    description: "Bagian paling krusial — pemetaan sistem HC saat ini, landscape SAP HR, IHCMIS, user satisfaction, dan identifikasi pain points.",
    icon: "🔍",
    color: "from-amber-500 to-orange-500",
    gradient: "from-amber-900/40 to-orange-900/40",
    isExpanded: true,
    sections: [
      { number: "3.1", title: "Gambaran Umum Sistem HC Saat Ini", content: "Pemetaan seluruh ekosistem aplikasi HR yang saat ini digunakan di perusahaan." },
      { number: "3.2", title: "Daftar Aplikasi HR Eksisting", content: "Inventarisasi lengkap aplikasi HR, baik yang berbasis cloud maupun on-premise." },
      { number: "3.3", title: "Landscape SAP HR", content: "Analisis mendalam mengenai penggunaan modul SAP HR yang ada saat ini dan keterbatasannya." },
      { number: "3.4", title: "Landscape IHCMIS Eksisting", content: "Evaluasi sistem IHCMIS yang sudah berjalan dan peluang integrasi lebih lanjut." },
      { number: "3.5", title: "HR Process Assessment", content: "Penilaian efisiensi proses bisnis HR saat ini dibandingkan dengan standar industri." },
      { number: "3.6", title: "HR Data Assessment", content: "Audit kualitas, kelengkapan, dan integritas data karyawan yang tersimpan di sistem." },
      { number: "3.7", title: "Integration Assessment", content: "Menganalisis sejauh mana sistem HR terhubung dengan sistem keuangan atau operasional lainnya." },
      { number: "3.8", title: "Infrastruktur & Teknologi", content: "Tinjauan terhadap hardware dan server yang mendukung jalannya aplikasi HCIS." },
      { number: "3.9", title: "HR Digital Maturity Assessment", content: "Mengukur tingkat kematangan digital organisasi menggunakan framework standar global." },
      { number: "3.10", title: "Pain Points & Issues", content: "Daftar keluhan dan kendala utama yang dirasakan oleh user saat menggunakan sistem saat ini." },
      { number: "3.11", title: "HR Organization Assessment", content: "Meninjau struktur organisasi tim IT-HR dalam mendukung operasional sistem." },
      { number: "3.12", title: "Voice of Employee (VoE) Survey", content: "Hasil survei kepuasan karyawan terhadap kemudahan penggunaan teknologi HR." },
    ],
    outputs: ["Current System Landscape", "Maturity Level", "Key Issues", "VoE Report"],
  },

  // ─── BAB 4 ───────────────────────────────────────────────────────────────
  {
    id: 4,
    bab: "BAB 4",
    title: "HR Capability & Process Architecture",
    subtitle: "Arsitektur Kapabilitas",
    description: "Menentukan capability HR yang akan didigitalisasi sepanjang value chain Hire-to-Retire.",
    icon: "⚙️",
    color: "from-teal-500 to-emerald-500",
    gradient: "from-teal-900/40 to-emerald-900/40",
    sections: [
      { number: "4.1", title: "HR Capability Map", content: "Peta kapabilitas HR yang dibutuhkan perusahaan untuk mencapai standar operasional kelas dunia." },
      { number: "4.2", title: "HR Value Chain (Hire-to-Retire)", content: "Alur penciptaan nilai dalam siklus hidup karyawan mulai dari perekrutan hingga pensiun." },
      { number: "4.3", title: "HR Process Standardization", content: "Upaya penyeragaman proses bisnis HR di seluruh unit bisnis guna efisiensi sistem." },
      { number: "4.4", title: "Core HR Capability", content: "Fokus pada administrasi personalia, organisasi, dan penggajian yang akurat." },
      { number: "4.5", title: "Talent Management Capability", content: "Digitalisasi manajemen kinerja, suksesi, dan pengembangan karir karyawan." },
      { number: "4.6", title: "Learning Capability", content: "Pengembangan ekosistem belajar digital (LMS) untuk peningkatan skill berkelanjutan." },
      { number: "4.7", title: "Workforce Analytics Capability", content: "Kemampuan mengolah data SDM menjadi insight bisnis yang berharga." },
      { number: "4.8", title: "Employee Experience Capability", content: "Fokus pada penyediaan layanan digital yang menyenangkan bagi karyawan." },
    ],
    frameworks: ["APQC HR Process Framework"],
  },

  // ─── BAB 5 (NEW) ─────────────────────────────────────────────────────────
  {
    id: 5,
    bab: "BAB 5",
    title: "HR Service Delivery Model",
    subtitle: "Model Layanan HR",
    description: "Fondasi operasional SAP + IHCMIS — mendefinisikan tiered service model (Tier 0–3) mulai dari self-service hingga CoE dan HR Business Partner.",
    icon: "🏢",
    color: "from-sky-500 to-blue-500",
    gradient: "from-sky-900/40 to-blue-900/40",
    isNew: true,
    sections: [
      { 
        number: "5.1", 
        title: "HR Service Delivery Framework",
        content: "Framework Layanan HR yang mengintegrasikan SAP HR dan IHCMIS untuk memberikan pengalaman layanan yang mulus. Framework ini mencakup strategi penyampaian layanan mulai dari otomatisasi (Self-Service) hingga konsultasi strategis oleh HR Business Partner. Tujuannya adalah untuk meningkatkan efisiensi operasional sebesar 30% dan kepuasan karyawan melalui respon yang lebih cepat dan terstandarisasi."
      },
      { 
        number: "5.2", 
        title: "Tier 0 — Employee & Manager Self-Service (ESS/MSS)",
        content: "Otomatisasi layanan HR melalui platform digital yang memungkinkan karyawan dan manajer melakukan transaksi mandiri. Mencakup pengajuan cuti, klaim benefit, perubahan data personal, dan persetujuan administratif secara real-time melalui perangkat mobile maupun desktop."
      },
      { 
        number: "5.3", 
        title: "Tier 1 — HR Shared Services Center (SSC)",
        content: "Pusat layanan terpusat yang menangani pertanyaan dan permintaan administratif HR yang lebih kompleks dan tidak dapat diselesaikan melalui Self-Service. Berfokus pada standarisasi proses, efisiensi biaya, dan penyediaan Single Point of Contact bagi seluruh unit bisnis."
      },
      { 
        number: "5.4", 
        title: "Tier 2 — Center of Excellence (CoE)",
        content: "Kumpulan ahli subjek (Subject Matter Experts) yang merancang kebijakan, program, dan sistem HR strategis seperti Talent Management, Rewards, dan Organizational Development. CoE fokus pada inovasi dan memastikan seluruh inisiatif HR mendukung target jangka panjang perusahaan."
      },
      { 
        number: "5.5", 
        title: "Tier 3 — HR Business Partner & Specialist",
        content: "Konsultan HR internal yang bekerja langsung dengan pimpinan unit bisnis untuk menyelaraskan strategi SDM dengan kebutuhan operasional spesifik. Mereka berperan sebagai mitra strategis dalam perencanaan tenaga kerja, manajemen kinerja, dan pengembangan budaya di unit masing-masing."
      },
      { 
        number: "5.6", 
        title: "Service Catalog & SLA Definition",
        content: "Daftar standar layanan HR yang tersedia bagi karyawan, lengkap dengan definisi waktu penyelesaian (Service Level Agreement). Digitalisasi katalog ini melalui IHCMIS memastikan transparansi dan akuntabilitas dalam setiap permintaan layanan HR."
      },
      { 
        number: "5.7", 
        title: "Case Management & HR Ticketing Model",
        content: "Sistem pelacakan permintaan layanan terpadu untuk mengelola seluruh tiket atau kasus HR dari awal hingga selesai. Memungkinkan tim Shared Services untuk memprioritaskan tugas, berkolaborasi dalam penyelesaian masalah, dan memberikan riwayat status yang jelas kepada user."
      },
      { 
        number: "5.8", 
        title: "HR Contact Center Strategy",
        content: "Strategi komunikasi multi-channel (Omnichannel) yang mencakup chatbot AI, telepon, dan portal mandiri untuk menjawab pertanyaan rutin karyawan. Bertujuan memberikan bantuan instan untuk informasi umum sehingga tim HR dapat fokus pada masalah yang lebih kompleks."
      },
      { 
        number: "5.9",
        title: "Continuous Service Improvement",
        content: "Mekanisme evaluasi berkala terhadap kualitas layanan HR menggunakan data analitik dari ticketing system dan feedback karyawan. Fokus pada identifikasi hambatan proses (bottlenecks) dan optimasi sistem secara berkelanjutan untuk mencapai standar 'Best-in-Class HR Service'."
      },
      {
        number: "5.10",
        title: "HR Service Experience Level Agreement (XLA)",
        content: "Evolusi dari SLA (5.6) menuju pengukuran yang berpusat pada manusia — XLA mengukur bukan apakah layanan diselesaikan secara teknis tepat waktu, melainkan apakah karyawan benar-benar merasa terlayani dengan baik. Gartner memperkenalkan XLA sejak 2019; di 2026 semua vendor ITSM mayor (ServiceNow, Nexthink, Ivanti) sudah memiliki XLA module. Untuk HCIS yang menargetkan employee-centric experience, XLA adalah mandatory — menjadi jembatan antara SLA operasional (5.6) dan EX measurement strategis (BAB 6), sekaligus menjadi input utama untuk Continuous Service Improvement (5.9).",
        keyPoints: [
          "Employee Satisfaction Score (ESAT) per interaksi layanan: survei mikro (1-2 pertanyaan) yang muncul segera setelah setiap tiket HR diselesaikan",
          "Perceived Resolution Quality: mengukur apakah karyawan merasa masalahnya benar-benar selesai — berbeda dari SLA yang hanya mengukur apakah tiket ditutup",
          "Ease of Service Score: seberapa mudah karyawan berinteraksi dengan layanan HR (skala Customer Effort Score, diadaptasi untuk karyawan)",
          "Emotional Sentiment Tracking: analisis sentimen dari komentar bebas karyawan pasca-interaksi untuk mendeteksi frustrasi atau kepuasan yang tidak tergambar dalam skor angka",
          "XLA Dashboard: visualisasi XLA vs SLA secara berdampingan — memungkinkan identifikasi layanan yang 'SLA hijau tapi XLA merah' (selesai tepat waktu tapi karyawan tidak puas)",
          "XLA Threshold & Remediation: penetapan ambang batas XLA minimum per kategori layanan dan prosedur perbaikan bila threshold tidak terpenuhi",
        ],
      },
      {
        number: "5.11",
        title: "Service Cost Transparency Model",
        content: "Langkah maturitas ketiga HR SSC setelah Quality (SLA, 5.6) dan Experience (XLA, 5.10) — memvisualisasikan biaya nyata setiap transaksi layanan HR kepada pemangku kepentingan. Berbeda dari BAB 17 (TCO) yang mengukur biaya total investasi program: sub-bab ini beroperasi di level granular unit cost per transaksi layanan, memungkinkan keputusan berbasis data tentang di mana otomasi memberikan nilai tertinggi, apakah SSC lebih efisien dari model desentralisasi, dan bagaimana perilaku demand karyawan berubah ketika cost visibility diterapkan.",
        keyPoints: [
          "Cost per HR Transaction: kalkulasi biaya per unit layanan berdasarkan Activity-Based Costing — contoh: biaya memproses 1 permohonan cuti via manual (Rp X) vs. self-service ESS (Rp X/8)",
          "Show-back vs Charge-back: keputusan model transparansi — show-back (BU melihat biaya tanpa membayar langsung) biasanya lebih tepat untuk fase awal; charge-back (penagihan nyata ke BU) untuk maturitas lanjut",
          "Service Cost Catalog: daftar harga internal setiap layanan HR SSC yang dikomunikasikan ke seluruh unit bisnis — mendorong demand management yang lebih rasional",
          "Cost Driver Analysis: identifikasi penyebab utama biaya tinggi per layanan (volume, kompleksitas, manual effort) sebagai input prioritas otomasi dan perbaikan proses",
          "Benchmarking vs Industri: membandingkan cost per HR FTE dan cost per transaction dengan benchmark SHRM/Gartner/APQC untuk mengukur posisi efisiensi relatif organisasi",
          "Cost-Quality-Experience Dashboard: visualisasi terpadu SLA + XLA + Cost dalam satu tampilan — tiga dimensi untuk setiap layanan HR, memudahkan keputusan investasi dan perbaikan",
        ],
      },
    ],
    outputs: ["HR Service Delivery Blueprint", "Service Catalog", "SLA Framework", "XLA Dashboard", "Service Cost Catalog", "Cost-Quality-Experience Dashboard"],
    frameworks: ["ITIL v4 (adapted for HR)", "Gartner HR Service Delivery Model", "XLA (Gartner 2019+)", "Customer Effort Score (adapted)", "Activity-Based Costing (ABC)", "APQC HR Cost Benchmarking"],
  },

  // ─── BAB 6 (NEW) ─────────────────────────────────────────────────────────
  {
    id: 6,
    bab: "BAB 6",
    title: "Employee Experience (EX) Design Strategy",
    subtitle: "Strategi Pengalaman Karyawan",
    description: "Deloitte Global HC Trends 2024 menempatkan EX sebagai prioritas #1 — merancang pengalaman karyawan berbasis persona, journey mapping, dan EX metrics.",
    icon: "✨",
    color: "from-rose-500 to-pink-500",
    gradient: "from-rose-900/40 to-pink-900/40",
    isNew: true,
    sections: [
      { 
        number: "6.1", 
        title: "Employee Experience Vision & Principles",
        content: "Visi EX 2030 adalah menciptakan lingkungan kerja yang bermakna, produktif, dan berpusat pada manusia. Prinsip utama mencakup: Empati dalam Desain, Personalisasi Layanan, dan Keseragaman Pengalaman lintas perangkat."
      },
      { 
        number: "6.2", 
        title: "Employee Persona Development",
        content: "Identifikasi profil karyawan berdasarkan peran, kebutuhan, dan aspirasi digital mereka. Persona membantu tim pengembang dalam membangun fitur yang benar-benar relevan bagi segmen karyawan yang berbeda, mulai dari operasional lapangan hingga level eksekutif."
      },
      { 
        number: "6.3", 
        title: "Employee Journey Mapping (Hire-to-Retire)",
        content: "Visualisasi seluruh rangkaian interaksi karyawan dengan perusahaan, mulai dari fase rekrutmen, onboarding, pengembangan karir, hingga masa purnabakti. Pemetaan ini membantu mengidentifikasi titik gesekan (friction points) dan peluang untuk meningkatkan keterlibatan karyawan di setiap tahapan."
      },
      {
        number: "6.4",
        title: "Service Blueprint Design",
        content: "Service Blueprint adalah artefak visual yang secara simultan memetakan frontstage (interaksi karyawan yang terlihat), backstage (proses pendukung yang tidak terlihat), support processes (sistem & integrasi), physical evidence (touchpoint), dan line of visibility — jembatan metodologis antara Employee Journey Map (6.3) dan HR Service Delivery Model (BAB 5). Setiap baris pada blueprint menggambarkan satu layer layanan, memungkinkan tim HR dan IT untuk mengidentifikasi fail points, bottleneck, dan peluang otomasi secara presisi.",
        keyPoints: [
          "Frontstage Actions: Apa yang dilakukan karyawan di portal ESS/MSS",
          "Line of Visibility: Batas antara proses yang terlihat dan tidak terlihat karyawan",
          "Backstage Actions: Proses verifikasi, approval, dan notifikasi oleh HR/manajer",
          "Support Processes: Integrasi SAP, IHCMIS, middleware, dan notifikasi email/WhatsApp",
          "Physical Evidence: Email konfirmasi, payslip digital, sertifikat pelatihan",
          "Fail Points & Wait Times: Titik risiko keterlambatan dan kegagalan layanan"
        ],
        swimlanes: [
          { label: "Physical Evidence", color: "slate", items: ["Portal login page", "Form input ESS/MSS", "Email/push notifikasi", "Payslip & dokumen digital", "Dashboard status pengajuan"] },
          { label: "Employee Actions (Frontstage)", color: "blue", items: ["Login ESS/MSS", "Isi & submit form (cuti, klaim, dsb)", "Pantau status pengajuan", "Terima notifikasi hasil", "Download dokumen output"] },
          { label: "── Line of Visibility ──", color: "yellow", items: [] },
          { label: "HR / Manager Actions (Backstage)", color: "purple", items: ["Terima notifikasi approval task", "Review & validasi permohonan", "Approve/reject via MSS", "Eskalasi ke CoE bila diperlukan", "Kirim konfirmasi ke karyawan"] },
          { label: "Support Processes & Systems", color: "green", items: ["IHCMIS: routing & workflow engine", "SAP: update data record & payroll", "Middleware: sinkronisasi antar sistem", "Notification service: email & WhatsApp", "Audit trail & logging"] }
        ]
      },
      {
        number: "6.5",
        title: "Moment-That-Matters Analysis",
        content: "Identifikasi titik-titik kritis dalam karir karyawan yang memiliki dampak emosional dan profesional terbesar (seperti hari pertama bekerja, promosi, atau masa transisi peran). Fokus pada optimasi momen-momen ini untuk membangun loyalitas dan kepuasan kerja yang mendalam."
      },
      {
        number: "6.6",
        title: "ESS/MSS UX Design Principles",
        content: "Penerapan prinsip desain antarmuka yang intuitif, bersih, dan konsisten untuk portal mandiri karyawan dan manajer. Memastikan setiap transaksi HR dapat diselesaikan dengan minimal klik, navigasi yang mudah dipahami, dan waktu muat (loading) yang cepat."
      },
      {
        number: "6.7",
        title: "Mobile-First Interaction Design",
        content: "Strategi pengembangan fitur yang memprioritaskan penggunaan perangkat mobile untuk mendukung fleksibilitas kerja. Menjamin seluruh layanan HR dapat diakses kapan saja dan di mana saja dengan tampilan yang responsif dan fitur pendukung seperti push-notifications."
      },
      {
        number: "6.8",
        title: "eNPS & EX Measurement Framework",
        content: "Sistem pengukuran loyalitas dan kepuasan karyawan secara periodik menggunakan metrik Employee Net Promoter Score (eNPS). Data ini digunakan sebagai indikator kesehatan budaya organisasi dan efektivitas inisiatif pengalaman karyawan yang dijalankan."
      },
      {
        number: "6.9",
        title: "Well-being & Digital Ergonomics",
        content: "Integrasi fitur pendukung kesejahteraan karyawan dalam platform digital, seperti pengingat istirahat, akses ke sumber daya kesehatan, dan desain antarmuka yang mengurangi kelelahan kognitif. Menciptakan keseimbangan antara produktivitas dan kesehatan mental karyawan."
      },
      {
        number: "6.10",
        title: "EX Feedback Loop & Continuous Listening",
        content: "Membangun mekanisme umpan balik berkelanjutan (continuous listening) melalui survei singkat (pulse surveys) dan kotak saran digital. Memungkinkan perusahaan untuk merespon kebutuhan atau keluhan karyawan secara proaktif sebelum menjadi masalah besar."
      },
    ],
    outputs: ["EX Blueprint", "Employee Persona Catalog", "Journey Maps", "Service Blueprint Master (Lampiran L)"],
    frameworks: ["Design Thinking (IDEO)", "Gartner EX Framework", "eNPS Methodology", "Service Design (Nielsen Norman Group)"],
  },

  // ─── BAB 7 ───────────────────────────────────────────────────────────────
  {
    id: 7,
    bab: "BAB 7",
    title: "Target State Architecture (To-Be)",
    subtitle: "Arsitektur Target",
    description: "Mendesain kondisi HCIS masa depan — SAP sebagai System of Record, IHCMIS sebagai System of Engagement, lengkap dengan ESS/MSS dan mobile-first design.",
    icon: "🏗️",
    color: "from-indigo-500 to-blue-500",
    gradient: "from-indigo-900/40 to-blue-900/40",
    isExpanded: true,
    sections: [
      { number: "7.1", title: "Target HCIS Vision", content: "Visi masa depan HCIS sebagai pusat keunggulan teknologi SDM yang mendorong pertumbuhan bisnis melalui otomasi dan analitik." },
      { number: "7.2", title: "Target HR Operating Model", content: "Transformasi model operasional HR menjadi lebih ramping, lincah, dan berbasis layanan digital." },
      { number: "7.3", title: "Target Application Architecture", content: "Desain arsitektur aplikasi yang menggabungkan keandalan ERP (SAP) dengan fleksibilitas sistem keterlibatan (IHCMIS)." },
      { number: "7.4", title: "SAP Role as System of Record", content: "Menempatkan SAP sebagai sumber tunggal kebenaran (single source of truth) untuk seluruh data dasar karyawan." },
      { number: "7.5", title: "IHCMIS Role as System of Engagement", content: "Menggunakan IHCMIS sebagai antarmuka utama bagi karyawan untuk berinteraksi dengan layanan HR secara modern." },
      { number: "7.6", title: "ESS/MSS Architecture", content: "Arsitektur yang memungkinkan skalabilitas akses layanan mandiri bagi ribuan karyawan secara simultan." },
      { number: "7.7", title: "Mobile-First Design Principles", content: "Prinsip desain yang menjamin setiap fitur baru dikembangkan dengan prioritas kenyamanan pengguna mobile." },
      { number: "7.8", title: "Integration Architecture", content: "Pola integrasi antar sistem menggunakan API dan Middleware untuk menjamin sinkronisasi data yang mulus." },
      { number: "7.9", title: "Data Architecture", content: "Struktur penyimpanan data yang mendukung keamanan, privasi, dan kebutuhan analitik tingkat lanjut." },
      { number: "7.10", title: "Technology Architecture", content: "Pemilihan stack teknologi pendukung, termasuk cloud infrastructure dan database yang tangguh." },
      { number: "7.11", title: "Security Architecture", content: "Kerangka keamanan untuk melindungi data sensitif SDM dari ancaman siber dan akses yang tidak sah." },
      {
        number: "7.12",
        title: "Experience Architecture Mapping",
        content: "Pemetaan sistematis dari setiap touchpoint dalam Employee Journey Map (BAB 6.3) ke komponen aplikasi yang bertanggung jawab melayaninya — menjawab pertanyaan: 'Fitur dan sistem apa yang harus ada agar setiap momen dalam perjalanan karyawan dapat terpenuhi secara digital?' Ini adalah jembatan antara desain pengalaman (BAB 6) dan arsitektur aplikasi (7.3), memastikan keputusan teknis selalu berakar pada kebutuhan nyata pengguna.",
        keyPoints: [
          "Journey-to-Application Matrix: setiap tahap Hire-to-Retire dipetakan ke modul SAP / IHCMIS / integrasi yang mendukungnya",
          "Touchpoint Inventory: inventarisasi semua titik interaksi digital karyawan (portal, mobile app, email, chatbot)",
          "Capability-to-Component Traceability: memastikan setiap EX capability dari BAB 4 memiliki realisasi teknis di BAB 7",
          "Gap Identification: menemukan touchpoint yang belum memiliki komponen aplikasi pendukung",
          "Prioritization Input: hasil pemetaan menjadi input utama untuk BAB 9 (Initiative Prioritization)",
        ],
      },
    ],
    outputs: ["Target HCIS Blueprint", "Application Architecture Diagram", "Experience Architecture Map"],
    frameworks: ["TOGAF ADM", "SAP Reference Architecture", "Service Design (NNG)"],
  },

  // ─── BAB 8 ───────────────────────────────────────────────────────────────
  {
    id: 8,
    bab: "BAB 8",
    title: "Gap Analysis",
    subtitle: "Analisis Kesenjangan",
    description: "Menentukan jarak antara kondisi saat ini dan target pada dimensi capability, process, application, data, technology, dan organization.",
    icon: "📐",
    color: "from-rose-500 to-red-500",
    gradient: "from-rose-900/40 to-red-900/40",
    sections: [
      { number: "8.1", title: "Capability Gap Analysis", content: "Mengidentifikasi keterampilan dan fitur sistem yang belum dimiliki saat ini untuk mencapai target 2030." },
      { number: "8.2", title: "Process Gap Analysis", content: "Menganalisis proses bisnis yang perlu direkayasa ulang (re-engineering) agar kompatibel dengan sistem baru." },
      { number: "8.3", title: "Application Gap Analysis", content: "Memetakan fitur aplikasi eksisting yang harus ditingkatkan atau diganti sepenuhnya." },
      { number: "8.4", title: "Data Gap Analysis", content: "Menemukan elemen data yang hilang atau tidak akurat yang diperlukan untuk analitik masa depan." },
      { number: "8.5", title: "Technology Gap Analysis", content: "Meninjau kesenjangan infrastruktur teknologi yang perlu diperbaiki untuk mendukung aplikasi baru." },
      { number: "8.6", title: "Organizational Gap Analysis", content: "Menganalisis perubahan struktur dan budaya kerja yang diperlukan untuk mengadopsi teknologi baru." },
    ],
    outputs: ["Gap Matrix"],
  },

  // ─── BAB 9 ───────────────────────────────────────────────────────────────
  {
    id: 9,
    bab: "BAB 9",
    title: "HCIS Program & Initiative Definition",
    subtitle: "Definisi Program",
    description: "Mendefinisikan program transformasi, mengidentifikasi quick wins, dan memetakan dependency antar inisiatif.",
    icon: "🚀",
    color: "from-violet-500 to-purple-500",
    gradient: "from-violet-900/40 to-purple-900/40",
    sections: [
      { number: "9.1", title: "Program Framework", content: "Struktur pengorganisasian inisiatif menjadi program-program besar yang terukur." },
      { number: "9.2", title: "Initiative Identification", content: "Daftar seluruh langkah nyata yang harus diambil untuk menutup kesenjangan hasil gap analysis." },
      { number: "9.3", title: "Initiative Categorization", content: "Pengelompokan inisiatif berdasarkan tingkat kerumitan dan dampak bisnis yang dihasilkan." },
      { number: "9.4", title: "Quick Wins Identification", content: "Memilih inisiatif dengan dampak cepat yang dapat memberikan bukti keberhasilan awal program." },
      { number: "9.5", title: "Strategic Programs", content: "Program jangka panjang yang menjadi pilar utama transformasi digital HC." },
      { number: "9.6", title: "Dependency Mapping", content: "Memetakan hubungan antar inisiatif untuk menentukan urutan pelaksanaan yang logis." },
      { number: "9.7", title: "Benefit Definition", content: "Mendefinisikan manfaat nyata (tangible) dan tidak nyata (intangible) dari setiap inisiatif." },
      { number: "9.8", title: "Vendor & Partner Selection Process", content: "Prosedur pemilihan penyedia solusi teknologi yang transparan dan akuntabel." },
      { number: "9.9", title: "Implementation Partner Evaluation Criteria", content: "Kriteria penilaian untuk memilih mitra implementasi yang memiliki rekam jejak terbukti." },
    ],
    outputs: ["List of Programs", "Initiative Catalog", "Vendor Shortlist"],
    frameworks: ["MoSCoW Prioritization", "Benefits Dependency Network"],
  },

  // ─── BAB 10 ──────────────────────────────────────────────────────────────
  {
    id: 10,
    bab: "BAB 10",
    title: "HCIS Roadmap 2026–2030",
    subtitle: "Inti Roadmap",
    description: "Inti dari dokumen — timeline multi-year berisi Year-by-Year Roadmap, Domain-Based Roadmap, Data Migration Timeline, dan Rollout Strategy.",
    icon: "🗺️",
    color: "from-cyan-500 to-blue-500",
    gradient: "from-cyan-900/40 to-blue-900/40",
    isExpanded: true,
    sections: [
      { number: "10.1", title: "Roadmap Principles", content: "Prinsip-prinsip yang menjaga agar peta jalan tetap fleksibel namun tetap terarah pada tujuan akhir." },
      { number: "10.2", title: "Year-by-Year Roadmap", content: "Detail pencapaian yang ditargetkan untuk setiap tahun anggaran mulai dari 2026 hingga 2030." },
      { number: "10.3", title: "Domain-Based Roadmap", content: "Visualisasi peta jalan berdasarkan domain fungsi (Core HR, Talent, Learning, dll)." },
      { number: "10.4", title: "Module Implementation Timeline", content: "Jadwal peluncuran setiap modul aplikasi baru secara bertahap." },
      { number: "10.5", title: "Integration Timeline", content: "Timeline sinkronisasi antar sistem agar ekosistem HCIS terhubung sepenuhnya." },
      { number: "10.6", title: "Data Migration Strategy & Timeline", content: "Rencana pemindahan data dari sistem lama ke sistem baru dengan risiko minimal." },
      { number: "10.7", title: "Legacy Data Cleansing & Mapping", content: "Upaya pembersihan data sampah (garbage) sebelum proses migrasi dimulai." },
      { number: "10.8", title: "Cutover Planning & Go-Live Checklist", content: "Langkah-langkah krusial menjelang peluncuran sistem (Go-Live) untuk menjamin kelancaran." },
      { number: "10.9", title: "Rollout Strategy", content: "Pendekatan penyebaran sistem ke seluruh unit bisnis (Big Bang atau bertahap)." },
    ],
    outputs: ["Visual Multi-Year Roadmap 2026–2030", "Data Migration Plan", "Cutover Checklist"],
  },

  // ─── BAB 11 ──────────────────────────────────────────────────────────────
  {
    id: 11,
    bab: "BAB 11",
    title: "Governance & Operating Model",
    subtitle: "Model Tata Kelola",
    description: "Bagian yang sering menentukan berhasil atau tidaknya roadmap — struktur governance, Steering Committee, PMO, RACI Matrix, dan quality assurance.",
    icon: "🏛️",
    color: "from-slate-400 to-slate-600",
    gradient: "from-slate-900/40 to-gray-900/40",
    isExpanded: true,
    sections: [
      { number: "11.1", title: "HCIS Governance Structure", content: "Struktur organisasi yang mengatur wewenang dan tanggung jawab dalam pengelolaan ekosistem HCIS." },
      { number: "11.2", title: "Steering Committee Charter", content: "Piagam yang mendefinisikan peran pimpinan eksekutif dalam memberikan arah strategis bagi program HCIS." },
      { number: "11.3", title: "Project Management Office (PMO) Setup", content: "Pembentukan kantor manajemen proyek untuk memastikan seluruh inisiatif berjalan sesuai jadwal, anggaran, dan kualitas." },
      { number: "11.4", title: "Roles & Responsibilities", content: "Penjabaran detail tugas setiap peran dalam tim proyek mulai dari sponsor hingga user." },
      { number: "11.5", title: "RACI Matrix", content: "Matriks tanggung jawab untuk memperjelas siapa yang bertanggung jawab, akuntabel, dikonsultasikan, dan diinformasikan." },
      { number: "11.6", title: "Decision Framework", content: "Prosedur pengambilan keputusan teknis dan fungsional agar tetap cepat dan efektif." },
      { number: "11.7", title: "Change Management Structure", content: "Struktur tim yang khusus menangani aspek psikologis dan budaya dari perubahan sistem." },
      { number: "11.8", title: "Data Governance Model", content: "Aturan main dalam pengelolaan kepemilikan data, standar data, dan kualitas data SDM." },
      { number: "11.9", title: "Vendor Governance", content: "Mekanisme pengawasan kinerja vendor solusi dan mitra implementasi." },
      { number: "11.10", title: "Quality Assurance Framework", content: "Kerangka kerja penjaminan kualitas untuk meminimalkan bug dan kesalahan fungsional." },
      {
        number: "11.11",
        title: "Digital HR Platform Governance",
        content: "Tata kelola khusus untuk siklus hidup platform IHCMIS sebagai System of Engagement — mencakup release management, feature roadmap governance, architecture review board, dan keputusan deprecation. Berbeda dari Vendor Governance (11.9) yang mengatur hubungan kontraktual; sub-bab ini mengatur *bagaimana platform IHCMIS dikembangkan, diubah, dan dikelola secara internal* agar tetap relevan dan aman sepanjang 2026–2030.",
        keyPoints: [
          "IHCMIS Release Management: siklus rilis fitur (major/minor/patch) dengan approval gate yang jelas",
          "Feature Roadmap Governance: proses pengajuan, evaluasi, dan prioritisasi permintaan fitur baru dari unit bisnis",
          "Platform Architecture Review Board: komite teknis yang menilai dampak setiap perubahan arsitektur IHCMIS",
          "Platform Health Monitoring: SLA uptime, performance benchmark, dan threshold eskalasi",
          "Deprecation & Sunset Policy: prosedur penghentian fitur atau versi lama agar tidak menimbulkan technical debt",
          "IHCMIS Lifecycle Roadmap: rencana evolusi platform 3–5 tahun ke depan selaras dengan roadmap bisnis",
        ],
      },
      {
        number: "11.12",
        title: "Digital HR Product Management Model",
        content: "IHCMIS bukan sekadar sistem IT — ia adalah produk digital yang harus dikelola layaknya produk teknologi kelas dunia. Sub-bab ini mendefinisikan model Product Management untuk IHCMIS: siapa Product Owner-nya, bagaimana backlog dikelola, bagaimana siklus rilis dijalankan, dan bagaimana suara karyawan (VoE, eNPS) diterjemahkan menjadi fitur nyata. Ini adalah operasionalisasi dari Platform Governance (11.11) — governance menetapkan aturan, product management menjalankannya.",
        keyPoints: [
          "Product Owner & Product Team: penetapan Product Owner IHCMIS dari sisi bisnis HC, didukung tim lintas-fungsi (IT, HR, UX)",
          "Product Backlog Management: pengelolaan backlog berbasis Epics → User Stories → Tasks, diprioritaskan dengan framework WSJF atau MoSCoW",
          "Release Cycle: siklus rilis terstruktur (misal: Major 2×/tahun, Minor 4×/tahun, Patch on-demand) selaras dengan kalender HR",
          "Product Roadmap: roadmap fitur IHCMIS 12–18 bulan ke depan, dikomunikasikan ke seluruh stakeholder secara transparan",
          "Feedback-to-Backlog Pipeline: mekanisme mengalirkan hasil VoE Survey (3.12), eNPS (6.8), dan support tickets (20.4) menjadi backlog item",
          "Definition of Done & Definition of Ready: kriteria kualitas yang harus dipenuhi setiap fitur sebelum masuk sprint dan sebelum rilis",
          "Product Metrics: velocity, cycle time, feature adoption rate, dan NPS per fitur — diukur setiap sprint",
        ],
      },
    ],
    outputs: ["Governance Model", "Steering Committee Charter", "RACI Matrix", "PMO Charter", "IHCMIS Platform Governance Charter", "IHCMIS Product Roadmap"],
  },

  // ─── BAB 12 ──────────────────────────────────────────────────────────────
  {
    id: 12,
    bab: "BAB 12",
    title: "Technology & Integration Strategy",
    subtitle: "Strategi Teknologi & AI",
    description: "Pendekatan teknologi meliputi SAP, IHCMIS, AI/GenAI, Middleware, API, Cloud, Security — Gartner 2024: 76% CHRO sudah menggunakan AI di minimal satu fungsi HR.",
    icon: "💡",
    color: "from-yellow-500 to-amber-500",
    gradient: "from-yellow-900/40 to-amber-900/40",
    isExpanded: true,
    sections: [
      { number: "12.1", title: "SAP Strategy", content: "Rencana pengembangan modul-modul SAP HR sebagai tulang punggung (backbone) sistem administrasi." },
      { number: "12.2", title: "IHCMIS Strategy", content: "Visi pengembangan portal internal yang fleksibel untuk kebutuhan spesifik perusahaan." },
      { number: "12.3", title: "Middleware Strategy", content: "Pemilihan teknologi perantara untuk menghubungkan berbagai aplikasi dalam ekosistem HCIS." },
      { number: "12.4", title: "API Strategy", content: "Standarisasi antarmuka pemrograman aplikasi agar sistem dapat berkomunikasi secara aman dan cepat." },
      { number: "12.5", title: "Cloud Strategy", content: "Pendekatan adopsi teknologi cloud untuk meningkatkan ketersediaan dan efisiensi infrastruktur." },
      { number: "12.6", title: "Security Strategy", content: "Langkah-langkah perlindungan end-to-end terhadap data karyawan dan akses sistem." },
      { number: "12.7", title: "Backup & Disaster Recovery", content: "Rencana cadangan data dan pemulihan sistem jika terjadi kegagalan infrastruktur." },
      { number: "12.8", title: "AI & Machine Learning Roadmap", content: "Peta jalan penerapan kecerdasan buatan untuk otomatisasi proses dan prediksi tren SDM." },
      { number: "12.9", title: "Generative AI untuk HR (Job Description, Screening, Chatbot)", content: "Eksperimen dan implementasi teknologi GenAI untuk membantu tugas-tugas rutin HR." },
      { number: "12.10", title: "AI Ethics & Bias Detection Framework", content: "Kerangka etika penggunaan AI untuk mencegah bias dalam proses seleksi dan penilaian karyawan." },
      { number: "12.11", title: "Emerging Technology Vision 2028–2030", content: "Meneropong teknologi masa depan seperti Metaverse HR atau Blockchain untuk kredensial." },
      {
        number: "12.12",
        title: "Responsible AI & Ethical AI Operations",
        content: "Layer ketiga dari kerangka AI lengkap HCIS — melengkapi 12.10 (policy: aturan main AI) dan 14.8 (governance: siklus hidup model) dengan dimensi operasional: bagaimana AI dijalankan secara bertanggung jawab setiap hari. Fokus pada mekanisme konkret yang memastikan keputusan berbasis AI tetap adil, transparan, dan dapat dipulihkan — terutama untuk keputusan yang berdampak langsung pada karir dan kesejahteraan karyawan.",
        keyPoints: [
          "Human-in-the-Loop Design: penetapan daftar keputusan HR yang TIDAK boleh diambil secara otonom oleh AI tanpa tinjauan manusia (contoh: terminasi, penilaian kinerja final, seleksi promosi) — disertai prosedur review yang wajib",
          "AI Explainability untuk End User: mekanisme penjelasan keputusan AI kepada karyawan yang terdampak (berbeda dari 14.8 yang fokus ke auditor) — misal: 'Mengapa rekomendasimu tidak lolos screening?' harus bisa dijawab sistem",
          "AI Fallback Mechanisms: prosedur operasional bila AI gagal, low-confidence, atau unavailable — termasuk threshold confidence minimum, fallback ke proses manual, dan SLA untuk resolusi",
          "Ethical Escalation Path: alur eskalasi yang jelas bila AI menghasilkan output yang dirasakan diskriminatif atau tidak adil oleh karyawan — berbeda dari AI Incident Response di 14.8 yang menangani kegagalan teknis",
          "AI Output Transparency Charter: kebijakan tentang kapan dan bagaimana organisasi wajib memberitahu karyawan bahwa keputusan dibantu atau dipengaruhi oleh AI",
          "Responsible AI Training for HR: program literasi AI wajib bagi tim HR yang menggunakan tools AI dalam proses rekrutmen, penilaian, atau pengembangan karyawan",
        ],
      },
    ],
    outputs: ["Technology Strategy", "AI Adoption Roadmap", "AI Ethics Guidelines", "Responsible AI Operations Playbook"],
    frameworks: ["Gartner Tech Radar", "SAP BTP Architecture", "NIST AI Risk Framework", "EU AI Act (High-Risk AI Systems)", "IEEE Ethically Aligned Design"],
  },

  // ─── BAB 13 (NEW) ────────────────────────────────────────────────────────
  {
    id: 13,
    bab: "BAB 13",
    title: "Compliance & Regulatory Framework",
    subtitle: "Kepatuhan & Regulasi",
    description: "Wajib untuk konteks Indonesia — UU PDP, UU Ketenagakerjaan, BPJS automation, PPh 21/DJP, dan audit trail requirements untuk enterprise-level HCIS.",
    icon: "⚖️",
    color: "from-emerald-500 to-green-500",
    gradient: "from-emerald-900/40 to-green-900/40",
    isNew: true,
    sections: [
      { number: "13.1", title: "Regulatory Landscape Overview", content: "Tinjauan menyeluruh terhadap peraturan pemerintah yang berdampak pada pengelolaan SDM." },
      { number: "13.2", title: "UU PDP (Perlindungan Data Pribadi) Compliance", content: "Langkah-langkah penyesuaian sistem agar patuh terhadap regulasi perlindungan data pribadi terbaru." },
      { number: "13.3", title: "Data Privacy Impact Assessment (DPIA)", content: "Proses penilaian risiko privasi data untuk setiap fitur atau inisiatif digital baru." },
      { number: "13.4", title: "UU Ketenagakerjaan & UU Cipta Kerja Compliance", content: "Memastikan logika sistem (seperti perhitungan pesangon atau upah) sesuai dengan UU terbaru." },
      { number: "13.5", title: "BPJS Ketenagakerjaan & Kesehatan Integration", content: "Otomatisasi pelaporan dan pembayaran iuran BPJS langsung dari sistem HCIS." },
      { number: "13.6", title: "PPh 21 & DJP Reporting Integration", content: "Integrasi sistem penggajian dengan portal perpajakan untuk pelaporan SPT yang akurat." },
      { number: "13.7", title: "Audit Trail & Regulatory Reporting", content: "Menyediakan log aktivitas sistem untuk kebutuhan audit internal maupun eksternal." },
      { number: "13.8", title: "Data Residency & Sovereignty Requirements", content: "Memastikan lokasi penyimpanan data sesuai dengan aturan kedaulatan data di Indonesia." },
      { number: "13.9", title: "Compliance Monitoring Framework", content: "Sistem pengawasan berkelanjutan untuk mendeteksi potensi ketidakpatuhan terhadap aturan." },
      { number: "13.10", title: "Legal Hold & eDiscovery", content: "Prosedur pengamanan data untuk kepentingan pembuktian hukum jika diperlukan." },
    ],
    outputs: ["Compliance Matrix", "DPIA Report", "Regulatory Integration Architecture"],
    frameworks: ["ISO 27701 (Privacy)", "UU No. 27 Tahun 2022 (UU PDP)", "BPJS Compliance Standard"],
  },

  // ─── BAB 14 ──────────────────────────────────────────────────────────────
  {
    id: 14,
    bab: "BAB 14",
    title: "Data & Analytics Strategy",
    subtitle: "Strategi Data & Analitik",
    description: "Mendukung Workforce Intelligence melalui HR Data Model, Data Quality Framework, dan Predictive Analytics Vision.",
    icon: "📈",
    color: "from-emerald-500 to-teal-500",
    gradient: "from-emerald-900/40 to-teal-900/40",
    sections: [
      { number: "14.1", title: "HR Data Model", content: "Struktur hubungan antar entitas data dalam sistem untuk menjamin konsistensi informasi." },
      { number: "14.2", title: "Master Data Strategy", content: "Strategi pengelolaan data utama (seperti data karyawan) agar tetap tunggal dan akurat." },
      { number: "14.3", title: "Data Quality Framework", content: "Kerangka kerja untuk memonitor dan memperbaiki kualitas data secara proaktif." },
      { number: "14.4", title: "Data Governance", content: "Penetapan kebijakan, prosedur, dan standar dalam penggunaan data organisasi." },
      { number: "14.5", title: "Workforce Analytics Strategy", content: "Pemanfaatan data SDM untuk memprediksi kebutuhan tenaga kerja dan retensi bakat." },
      { number: "14.6", title: "Reporting Framework", content: "Standarisasi format dan jadwal laporan operasional maupun strategis HR." },
      { number: "14.7", title: "Predictive Analytics Vision", content: "Menggunakan pemodelan data untuk meramalkan tren SDM di masa depan." },
      {
        number: "14.8",
        title: "Data & AI Governance",
        content: "Jembatan antara BAB 12 (AI Technology Roadmap) dan BAB 14 (Analytics Strategy) — mendefinisikan tata kelola khusus untuk model AI/ML dan data yang menggerakkannya. Berbeda dari 11.8 (Data Governance Model) yang mengatur struktur kepemilikan data secara umum, dan 14.4 (Data Governance) yang mengatur kualitas data operasional: sub-bab ini berfokus pada siklus hidup model AI — dari development, deployment, monitoring, hingga retirement — dan memastikan setiap keputusan berbasis AI dapat dipertanggungjawabkan kepada auditor internal maupun regulator.",
        keyPoints: [
          "AI Model Governance: model registry, versioning, approval gate sebelum model masuk production, dan retirement policy untuk model yang sudah usang",
          "AI Auditability & Explainability: kemampuan menjelaskan logika keputusan model AI (misal: rekomendasi promosi, prediksi turnover) kepada auditor internal dan regulator — wajib selaras dengan UU PDP (BAB 13)",
          "Data Lineage untuk AI: menelusuri secara penuh data apa yang digunakan untuk melatih model, dari mana asalnya, dan apakah sudah melalui proses quality check",
          "AI-specific Data Stewardship: penetapan Data Steward yang bertanggung jawab atas kualitas dan bias data training — peran berbeda dari Data Steward operasional di 14.4",
          "Model Performance Monitoring: pemantauan drift model secara berkala (misal: model prediksi turnover yang dilatih data 2026 bisa bias di 2028) dengan trigger untuk retraining",
          "AI Incident Response: prosedur penanganan bila model menghasilkan keputusan yang diskriminatif atau tidak akurat — eskalasi ke AI Ethics Board (12.10)",
        ],
      },
    ],
    outputs: ["Workforce Intelligence Model", "AI Model Registry", "Data Lineage Map", "AI Auditability Report"],
    frameworks: ["ISO/IEC 42001 (AI Management)", "EU AI Act Principles", "NIST AI RMF"],
  },

  // ─── BAB 15 ──────────────────────────────────────────────────────────────
  {
    id: 15,
    bab: "BAB 15",
    title: "Change Management & Adoption Strategy",
    subtitle: "Manajemen Perubahan",
    description: "Faktor sukses terbesar — stakeholder analysis, komunikasi, Digital Adoption Platform, Super User Network, dan resistance management.",
    icon: "🔄",
    color: "from-fuchsia-500 to-pink-500",
    gradient: "from-fuchsia-900/40 to-pink-900/40",
    isExpanded: true,
    sections: [
      { number: "15.1", title: "Stakeholder Analysis", content: "Mengidentifikasi individu dan kelompok kunci yang akan terpengaruh oleh perubahan sistem HCIS." },
      { number: "15.2", title: "Communication Strategy", content: "Rencana penyampaian informasi yang tepat waktu dan konsisten untuk meminimalkan ketidakpastian." },
      { number: "15.3", title: "Training Strategy", content: "Program pelatihan berjenjang untuk memastikan user mahir menggunakan sistem baru." },
      { number: "15.4", title: "Adoption Strategy", content: "Langkah-langkah untuk mendorong penggunaan sistem secara penuh di seluruh lapisan organisasi." },
      { number: "15.5", title: "Digital Adoption Platform (DAP) Strategy", content: "Pemanfaatan alat bantu panduan langsung di dalam aplikasi untuk mempermudah onboarding user." },
      { number: "15.6", title: "Super User Network", content: "Pembentukan komunitas ahli di setiap unit kerja untuk memberikan dukungan teknis tingkat pertama." },
      { number: "15.7", title: "Resistance Management", content: "Prosedur penanganan hambatan atau penolakan terhadap perubahan sistem." },
      { number: "15.8", title: "Change Impact Assessment", content: "Analisis terhadap dampak perubahan sistem pada peran, proses, dan budaya kerja." },
    ],
    outputs: ["Change Roadmap", "DAP Implementation Plan", "Super User Program"],
    frameworks: ["Prosci ADKAR", "Kotter 8-Step Change Model"],
  },

  // ─── BAB 16 ──────────────────────────────────────────────────────────────
  {
    id: 16,
    bab: "BAB 16",
    title: "Risk Management",
    subtitle: "Manajemen Risiko",
    description: "Menjamin roadmap tetap terkendali — identifikasi, assessment, dan mitigasi risiko mencakup cybersecurity, regulatory, vendor, dan operational risk.",
    icon: "🛡️",
    color: "from-red-500 to-rose-500",
    gradient: "from-red-900/40 to-rose-900/40",
    isExpanded: true,
    sections: [
      { number: "16.1", title: "Risk Identification", content: "Proses menginventarisasi potensi masalah yang dapat mengganggu keberhasilan roadmap." },
      { number: "16.2", title: "Risk Assessment", content: "Menilai probabilitas dan dampak dari setiap risiko yang teridentifikasi." },
      { number: "16.3", title: "Risk Mitigation Plan", content: "Strategi pencegahan dan penanganan untuk meminimalkan dampak risiko." },
      { number: "16.4", title: "Dependency Risk", content: "Mengelola risiko yang timbul akibat ketergantungan antar proyek atau sistem." },
      { number: "16.5", title: "Operational Risk", content: "Mitigasi risiko gangguan pada proses bisnis HR selama masa transisi." },
      { number: "16.6", title: "Data Risk", content: "Perlindungan terhadap risiko kehilangan atau kebocoran data sensitif." },
      { number: "16.7", title: "Cybersecurity Risk", content: "Langkah pertahanan terhadap serangan siber yang menargetkan data SDM." },
      { number: "16.8", title: "Regulatory & Compliance Risk", content: "Antisipasi risiko hukuman atau denda akibat ketidakpatuhan terhadap hukum." },
      { number: "16.9", title: "Third-Party & Vendor Risk", content: "Mengelola risiko yang berasal dari kinerja atau keberlangsungan bisnis vendor." },
    ],
    outputs: ["Risk Register", "Risk Heat Map"],
    frameworks: ["ISO 31000 Risk Management", "NIST Cybersecurity Framework"],
  },

  // ─── BAB 17 ──────────────────────────────────────────────────────────────
  {
    id: 17,
    bab: "BAB 17",
    title: "Financial & Investment Plan",
    subtitle: "Rencana Investasi",
    description: "Sangat penting untuk Direksi — TCO analysis, Make vs Buy, cost estimation, investment phasing, budget projection, dan ROI estimation.",
    icon: "💰",
    color: "from-green-500 to-emerald-500",
    gradient: "from-green-900/40 to-emerald-900/40",
    isExpanded: true,
    sections: [
      { number: "17.1", title: "Total Cost of Ownership (TCO) Analysis", content: "Perhitungan total biaya investasi dan operasional sistem selama siklus hidupnya." },
      { number: "17.2", title: "Make vs Buy Analysis", content: "Analisis keputusan antara mengembangkan sistem secara internal atau membeli solusi pasar." },
      { number: "17.3", title: "Cost Estimation", content: "Estimasi biaya lisensi, implementasi, infrastruktur, dan pemeliharaan." },
      { number: "17.4", title: "Investment Phasing", content: "Tahapan pengalokasian anggaran sesuai dengan milestone roadmap." },
      { number: "17.5", title: "Budget Projection", content: "Proyeksi kebutuhan anggaran tahunan untuk mendukung transformasi digital." },
      { number: "17.6", title: "ROI Estimation", content: "Estimasi pengembalian investasi melalui efisiensi dan peningkatan kinerja SDM." },
      { number: "17.7", title: "Benefit Realization Plan", content: "Rencana pemantauan untuk memastikan manfaat finansial yang dijanjikan benar-benar tercapai." },
    ],
    outputs: ["Investment Model", "TCO Report", "Make vs Buy Decision Matrix"],
    frameworks: ["Gartner TCO Framework", "Benefits Realization Management (BRM)"],
  },

  // ─── BAB 18 ──────────────────────────────────────────────────────────────
  {
    id: 18,
    bab: "BAB 18",
    title: "KPI & Performance Measurement",
    subtitle: "Pengukuran Kinerja",
    description: "Mengukur keberhasilan roadmap melalui Operational KPI, Strategic KPI, Adoption Metrics, ESG Workforce Metrics, dan Value-Based Metrics.",
    icon: "📊",
    color: "from-blue-500 to-indigo-500",
    gradient: "from-blue-900/40 to-indigo-900/40",
    isExpanded: true,
    sections: [
      { number: "18.1", title: "HCIS Success Metrics", content: "Metrik utama yang menentukan keberhasilan implementasi teknologi HCIS." },
      { number: "18.2", title: "Operational KPI", content: "Indikator kinerja harian seperti kecepatan pemrosesan gaji atau akurasi data." },
      { number: "18.3", title: "Strategic KPI", content: "Metrik yang mengukur dampak HR terhadap tujuan bisnis perusahaan." },
      { number: "18.4", title: "Adoption Metrics", content: "Mengukur seberapa aktif karyawan menggunakan fitur-fitur baru di sistem." },
      { number: "18.5", title: "Value-Based Metrics", content: "Pengukuran nilai tambah ekonomis yang dihasilkan dari transformasi digital." },
      { number: "18.6", title: "ESG & Workforce Diversity Metrics", content: "Pelaporan otomatis mengenai keberagaman dan inklusivitas tenaga kerja." },
      {
        number: "18.7",
        title: "Value Realization Tracking",
        content: "Mekanisme terstruktur untuk membuktikan bahwa manfaat yang dijanjikan dalam BAB 17 (Benefit Realization Plan) benar-benar terwujud — membandingkan benefit aktual vs. yang direncanakan secara periodik. Berbeda dari KPI operasional: Value Realization Tracking berfokus pada *pembuktian ROI investasi* kepada Direksi dan pemegang anggaran, bukan hanya mengukur kinerja sistem sehari-hari.",
        keyPoints: [
          "Baseline Measurement: pengukuran kondisi awal sebelum go-live sebagai titik acuan perbandingan",
          "Benefit Harvesting Reviews: sesi evaluasi periodik (triwulan) antara tim proyek dan business owner",
          "Actual vs. Planned Dashboard: visualisasi gap antara benefit yang dijanjikan dan benefit yang sudah terealisasi",
          "Benefit Attribution Model: metodologi untuk memisahkan dampak HCIS dari faktor eksternal lainnya",
          "Escalation Trigger: threshold yang memicu eskalasi ke Steering Committee bila benefit off-track",
          "Benefits Closure Report: laporan formal di akhir setiap fase yang menyatakan benefit telah atau belum terealisasi",
        ],
      },
    ],
    outputs: ["KPI Dashboard Framework", "ESG Reporting Template", "Value Realization Dashboard"],
    frameworks: ["Balanced Scorecard", "OKR (Objectives & Key Results)", "Benefits Realization Management (BRM)"],
  },

  // ─── BAB 19 ──────────────────────────────────────────────────────────────
  {
    id: 19,
    bab: "BAB 19",
    title: "Implementation Strategy",
    subtitle: "Strategi Implementasi",
    description: "Cara implementasi dilakukan — SAP Activate methodology, pilot strategy, UAT framework, dan deployment strategy.",
    icon: "🔧",
    color: "from-orange-500 to-amber-500",
    gradient: "from-orange-900/40 to-amber-900/40",
    isExpanded: true,
    sections: [
      { number: "19.1", title: "Implementation Approach & Methodology", content: "Metodologi pelaksanaan proyek (seperti Agile atau Waterfall) yang akan digunakan." },
      { number: "19.2", title: "Rollout Strategy", content: "Rencana peluncuran sistem ke berbagai unit bisnis dan lokasi geografis." },
      { number: "19.3", title: "Pilot Strategy", content: "Uji coba sistem pada unit bisnis terpilih sebelum peluncuran massal." },
      { number: "19.4", title: "Deployment Strategy", content: "Langkah-langkah teknis instalasi dan konfigurasi sistem di lingkungan produksi." },
      { number: "19.5", title: "UAT Framework & Test Scenarios", content: "Skenario pengujian sistem oleh user untuk memastikan kesesuaian dengan kebutuhan." },
      { number: "19.6", title: "Performance & Load Testing", content: "Pengujian ketahanan sistem saat diakses oleh banyak pengguna sekaligus." },
      { number: "19.7", title: "Security Penetration Testing", content: "Upaya pembobolan sistem yang terkendali untuk menguji kekuatan pertahanan siber." },
    ],
    outputs: ["Implementation Plan", "UAT Plan", "Testing Strategy Document"],
    frameworks: ["SAP Activate Methodology", "Agile/Iterative Delivery"],
  },

  // ─── BAB 20 (NEW) ────────────────────────────────────────────────────────
  {
    id: 20,
    bab: "BAB 20",
    title: "Post Go-Live Support & Continuous Improvement",
    subtitle: "Dukungan Pasca Go-Live",
    description: "SAP Activate Methodology mewajibkan fase ini — hypercare 90 hari, L1/L2/L3 support tiering, enhancement intake, dan annual version upgrade management.",
    icon: "🔁",
    color: "from-teal-500 to-cyan-500",
    gradient: "from-teal-900/40 to-cyan-900/40",
    isNew: true,
    sections: [
      { number: "20.1", title: "Hypercare Model (90 Hari Pasca Go-Live)", content: "Dukungan intensif selama masa kritis setelah sistem baru diluncurkan." },
      { number: "20.2", title: "L1/L2/L3 Support Tiering", content: "Struktur bantuan teknis mulai dari helpdesk umum hingga ahli teknis vendor." },
      { number: "20.3", title: "Incident & Problem Management", content: "Prosedur penanganan gangguan sistem agar operasional HR tidak terhambat." },
      { number: "20.4", title: "Enhancement & Bug Intake Process", content: "Mekanisme pengajuan perbaikan atau fitur tambahan di masa depan." },
      { number: "20.5", title: "System Performance Monitoring", content: "Pemantauan kesehatan sistem secara *real-time* untuk mencegah *downtime*." },
      { number: "20.6", title: "SAP Annual Version Upgrade Management", content: "Rencana pembaruan rutin versi SAP agar tetap mendapatkan dukungan vendor." },
      { number: "20.7", title: "Continuous Improvement Cadence", content: "Jadwal evaluasi rutin untuk terus meningkatkan efektivitas sistem." },
      { number: "20.8", title: "Post-Implementation Review (PIR)", content: "Audit pasca proyek untuk mengevaluasi apakah target awal roadmap tercapai." },
      { number: "20.9", title: "Knowledge Transfer & Documentation", content: "Dokumentasi teknis dan fungsional sebagai aset pengetahuan organisasi." },
    ],
    outputs: ["Hypercare Plan", "Support Model Document", "PIR Report Template"],
    frameworks: ["ITIL v4 Service Management", "SAP Activate Run Phase"],
  },

  // ─── BAB 21 ──────────────────────────────────────────────────────────────
  {
    id: 21,
    bab: "BAB 21",
    title: "Conclusion & Next Steps",
    subtitle: "Kesimpulan",
    description: "Bagian penutup berisi key takeaways, immediate actions, dan roadmap governance kick-off.",
    icon: "🏁",
    color: "from-violet-500 to-indigo-500",
    gradient: "from-violet-900/40 to-indigo-900/40",
    sections: [
      { number: "21.1", title: "Key Takeaways", content: "Pesan utama dan kesimpulan dari seluruh rangkaian dokumen roadmap." },
      { number: "21.2", title: "Immediate Actions (0–3 Bulan)", content: "Langkah-langkah mendesak yang harus dilakukan segera setelah roadmap disetujui." },
      { number: "21.3", title: "Roadmap Governance Kick-off", content: "Peresmian struktur tata kelola untuk memulai pelaksanaan transformasi digital." },
    ],
  },
];

export const appendix = [
  { code: "A", title: "HR Capability Map" },
  { code: "B", title: "HR Process Maps (Hire-to-Retire)" },
  { code: "C", title: "Application Portfolio" },
  { code: "D", title: "Data Dictionary" },
  { code: "E", title: "Integration Diagram" },
  { code: "F", title: "Technology Standards" },
  { code: "G", title: "Glossary" },
  { code: "H", title: "RACI Matrix" },
  { code: "I", title: "Data Privacy Impact Assessment (DPIA)" },
  { code: "J", title: "Vendor Evaluation Scorecard" },
  { code: "K", title: "Hire-to-Retire Process Blueprint" },
  { code: "L", title: "Service Blueprint Master (HR Services)" },
];

export const timelinePhases = [
  { year: "2026", label: "Foundation", color: "bg-blue-500", desc: "Assessment & Core HR Setup" },
  { year: "2027", label: "Build", color: "bg-indigo-500", desc: "Module Development & Pilot" },
  { year: "2028", label: "Integrate", color: "bg-purple-500", desc: "SAP–IHCMIS Integration" },
  { year: "2029", label: "Optimize", color: "bg-violet-500", desc: "AI, Analytics & Intelligence" },
  { year: "2030", label: "Transform", color: "bg-fuchsia-500", desc: "Full Hire-to-Retire" },
];
