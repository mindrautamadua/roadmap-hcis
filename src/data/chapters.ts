export interface Section {
  number: string;
  title: string;
  content?: string;
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
      { number: "1.1", title: "Latar Belakang Transformasi HC" },
      { number: "1.2", title: "Tujuan Penyusunan Roadmap HCIS" },
      { number: "1.3", title: "Ruang Lingkup Roadmap HCIS" },
      { number: "1.4", title: "Prinsip Utama Pengembangan HCIS" },
      { number: "1.5", title: "Highlight Roadmap 2026–2030" },
      { number: "1.6", title: "Manfaat Strategis bagi Organisasi" },
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
      { number: "2.1", title: "Visi dan Misi Human Capital" },
      { number: "2.2", title: "Strategic Objectives Human Capital" },
      { number: "2.3", title: "Alignment dengan Corporate Strategy" },
      { number: "2.4", title: "Peran HCIS dalam Mendukung Strategi" },
      { number: "2.5", title: "Key Business Drivers" },
      { number: "2.6", title: "HR Transformation Vision 2030" },
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
      { number: "3.1", title: "Gambaran Umum Sistem HC Saat Ini" },
      { number: "3.2", title: "Daftar Aplikasi HR Eksisting" },
      { number: "3.3", title: "Landscape SAP HR" },
      { number: "3.4", title: "Landscape IHCMIS Eksisting" },
      { number: "3.5", title: "HR Process Assessment" },
      { number: "3.6", title: "HR Data Assessment" },
      { number: "3.7", title: "Integration Assessment" },
      { number: "3.8", title: "Infrastruktur & Teknologi" },
      { number: "3.9", title: "HR Digital Maturity Assessment" },
      { number: "3.10", title: "Pain Points & Issues" },
      { number: "3.11", title: "HR Organization Assessment" },
      { number: "3.12", title: "Voice of Employee (VoE) Survey" },
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
      { number: "4.1", title: "HR Capability Map" },
      { number: "4.2", title: "HR Value Chain (Hire-to-Retire)" },
      { number: "4.3", title: "HR Process Standardization" },
      { number: "4.4", title: "Core HR Capability" },
      { number: "4.5", title: "Talent Management Capability" },
      { number: "4.6", title: "Learning Capability" },
      { number: "4.7", title: "Workforce Analytics Capability" },
      { number: "4.8", title: "Employee Experience Capability" },
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
      { number: "5.4", title: "Tier 2 — Center of Excellence (CoE)" },
      { number: "5.5", title: "Tier 3 — HR Business Partner & Specialist" },
      { number: "5.6", title: "Service Catalog & SLA Definition" },
      { number: "5.7", title: "Case Management & HR Ticketing Model" },
      { number: "5.8", title: "HR Contact Center Strategy" },
      { number: "5.9", title: "Continuous Service Improvement" },
    ],
    outputs: ["HR Service Delivery Blueprint", "Service Catalog", "SLA Framework"],
    frameworks: ["ITIL v4 (adapted for HR)", "Gartner HR Service Delivery Model"],
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
      { number: "6.3", title: "Employee Journey Mapping (Hire-to-Retire)" },
      { number: "6.4", title: "Moment-That-Matters Analysis" },
      { number: "6.5", title: "ESS/MSS UX Design Principles" },
      { number: "6.6", title: "Mobile-First Interaction Design" },
      { number: "6.7", title: "eNPS & EX Measurement Framework" },
      { number: "6.8", title: "Well-being & Digital Ergonomics" },
      { number: "6.9", title: "EX Feedback Loop & Continuous Listening" },
    ],
    outputs: ["EX Blueprint", "Employee Persona Catalog", "Journey Maps"],
    frameworks: ["Design Thinking (IDEO)", "Gartner EX Framework", "eNPS Methodology"],
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
      { number: "7.1", title: "Target HCIS Vision" },
      { number: "7.2", title: "Target HR Operating Model" },
      { number: "7.3", title: "Target Application Architecture" },
      { number: "7.4", title: "SAP Role as System of Record" },
      { number: "7.5", title: "IHCMIS Role as System of Engagement" },
      { number: "7.6", title: "ESS/MSS Architecture" },
      { number: "7.7", title: "Mobile-First Design Principles" },
      { number: "7.8", title: "Integration Architecture" },
      { number: "7.9", title: "Data Architecture" },
      { number: "7.10", title: "Technology Architecture" },
      { number: "7.11", title: "Security Architecture" },
    ],
    outputs: ["Target HCIS Blueprint", "Application Architecture Diagram"],
    frameworks: ["TOGAF ADM", "SAP Reference Architecture"],
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
      { number: "8.1", title: "Capability Gap Analysis" },
      { number: "8.2", title: "Process Gap Analysis" },
      { number: "8.3", title: "Application Gap Analysis" },
      { number: "8.4", title: "Data Gap Analysis" },
      { number: "8.5", title: "Technology Gap Analysis" },
      { number: "8.6", title: "Organizational Gap Analysis" },
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
      { number: "9.1", title: "Program Framework" },
      { number: "9.2", title: "Initiative Identification" },
      { number: "9.3", title: "Initiative Categorization" },
      { number: "9.4", title: "Quick Wins Identification" },
      { number: "9.5", title: "Strategic Programs" },
      { number: "9.6", title: "Dependency Mapping" },
      { number: "9.7", title: "Benefit Definition" },
      { number: "9.8", title: "Vendor & Partner Selection Process" },
      { number: "9.9", title: "Implementation Partner Evaluation Criteria" },
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
      { number: "10.1", title: "Roadmap Principles" },
      { number: "10.2", title: "Year-by-Year Roadmap" },
      { number: "10.3", title: "Domain-Based Roadmap" },
      { number: "10.4", title: "Module Implementation Timeline" },
      { number: "10.5", title: "Integration Timeline" },
      { number: "10.6", title: "Data Migration Strategy & Timeline" },
      { number: "10.7", title: "Legacy Data Cleansing & Mapping" },
      { number: "10.8", title: "Cutover Planning & Go-Live Checklist" },
      { number: "10.9", title: "Rollout Strategy" },
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
      { number: "11.1", title: "HCIS Governance Structure" },
      { number: "11.2", title: "Steering Committee Charter" },
      { number: "11.3", title: "Project Management Office (PMO) Setup" },
      { number: "11.4", title: "Roles & Responsibilities" },
      { number: "11.5", title: "RACI Matrix" },
      { number: "11.6", title: "Decision Framework" },
      { number: "11.7", title: "Change Management Structure" },
      { number: "11.8", title: "Data Governance Model" },
      { number: "11.9", title: "Vendor Governance" },
      { number: "11.10", title: "Quality Assurance Framework" },
    ],
    outputs: ["Governance Model", "Steering Committee Charter", "RACI Matrix", "PMO Charter"],
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
      { number: "12.1", title: "SAP Strategy" },
      { number: "12.2", title: "IHCMIS Strategy" },
      { number: "12.3", title: "Middleware Strategy" },
      { number: "12.4", title: "API Strategy" },
      { number: "12.5", title: "Cloud Strategy" },
      { number: "12.6", title: "Security Strategy" },
      { number: "12.7", title: "Backup & Disaster Recovery" },
      { number: "12.8", title: "AI & Machine Learning Roadmap" },
      { number: "12.9", title: "Generative AI untuk HR (Job Description, Screening, Chatbot)" },
      { number: "12.10", title: "AI Ethics & Bias Detection Framework" },
      { number: "12.11", title: "Emerging Technology Vision 2028–2030" },
    ],
    outputs: ["Technology Strategy", "AI Adoption Roadmap", "AI Ethics Guidelines"],
    frameworks: ["Gartner Tech Radar", "SAP BTP Architecture", "NIST AI Risk Framework"],
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
      { number: "13.1", title: "Regulatory Landscape Overview" },
      { number: "13.2", title: "UU PDP (Perlindungan Data Pribadi) Compliance" },
      { number: "13.3", title: "Data Privacy Impact Assessment (DPIA)" },
      { number: "13.4", title: "UU Ketenagakerjaan & UU Cipta Kerja Compliance" },
      { number: "13.5", title: "BPJS Ketenagakerjaan & Kesehatan Integration" },
      { number: "13.6", title: "PPh 21 & DJP Reporting Integration" },
      { number: "13.7", title: "Audit Trail & Regulatory Reporting" },
      { number: "13.8", title: "Data Residency & Sovereignty Requirements" },
      { number: "13.9", title: "Compliance Monitoring Framework" },
      { number: "13.10", title: "Legal Hold & eDiscovery" },
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
      { number: "14.1", title: "HR Data Model" },
      { number: "14.2", title: "Master Data Strategy" },
      { number: "14.3", title: "Data Quality Framework" },
      { number: "14.4", title: "Data Governance" },
      { number: "14.5", title: "Workforce Analytics Strategy" },
      { number: "14.6", title: "Reporting Framework" },
      { number: "14.7", title: "Predictive Analytics Vision" },
    ],
    outputs: ["Workforce Intelligence Model"],
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
      { number: "15.1", title: "Stakeholder Analysis" },
      { number: "15.2", title: "Communication Strategy" },
      { number: "15.3", title: "Training Strategy" },
      { number: "15.4", title: "Adoption Strategy" },
      { number: "15.5", title: "Digital Adoption Platform (DAP) Strategy" },
      { number: "15.6", title: "Super User Network" },
      { number: "15.7", title: "Resistance Management" },
      { number: "15.8", title: "Change Impact Assessment" },
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
      { number: "16.1", title: "Risk Identification" },
      { number: "16.2", title: "Risk Assessment" },
      { number: "16.3", title: "Risk Mitigation Plan" },
      { number: "16.4", title: "Dependency Risk" },
      { number: "16.5", title: "Operational Risk" },
      { number: "16.6", title: "Data Risk" },
      { number: "16.7", title: "Cybersecurity Risk" },
      { number: "16.8", title: "Regulatory & Compliance Risk" },
      { number: "16.9", title: "Third-Party & Vendor Risk" },
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
      { number: "17.1", title: "Total Cost of Ownership (TCO) Analysis" },
      { number: "17.2", title: "Make vs Buy Analysis" },
      { number: "17.3", title: "Cost Estimation" },
      { number: "17.4", title: "Investment Phasing" },
      { number: "17.5", title: "Budget Projection" },
      { number: "17.6", title: "ROI Estimation" },
      { number: "17.7", title: "Benefit Realization Plan" },
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
      { number: "18.1", title: "HCIS Success Metrics" },
      { number: "18.2", title: "Operational KPI" },
      { number: "18.3", title: "Strategic KPI" },
      { number: "18.4", title: "Adoption Metrics" },
      { number: "18.5", title: "Value-Based Metrics" },
      { number: "18.6", title: "ESG & Workforce Diversity Metrics" },
    ],
    outputs: ["KPI Dashboard Framework", "ESG Reporting Template"],
    frameworks: ["Balanced Scorecard", "OKR (Objectives & Key Results)"],
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
      { number: "19.1", title: "Implementation Approach & Methodology" },
      { number: "19.2", title: "Rollout Strategy" },
      { number: "19.3", title: "Pilot Strategy" },
      { number: "19.4", title: "Deployment Strategy" },
      { number: "19.5", title: "UAT Framework & Test Scenarios" },
      { number: "19.6", title: "Performance & Load Testing" },
      { number: "19.7", title: "Security Penetration Testing" },
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
      { number: "20.1", title: "Hypercare Model (90 Hari Pasca Go-Live)" },
      { number: "20.2", title: "L1/L2/L3 Support Tiering" },
      { number: "20.3", title: "Incident & Problem Management" },
      { number: "20.4", title: "Enhancement & Bug Intake Process" },
      { number: "20.5", title: "System Performance Monitoring" },
      { number: "20.6", title: "SAP Annual Version Upgrade Management" },
      { number: "20.7", title: "Continuous Improvement Cadence" },
      { number: "20.8", title: "Post-Implementation Review (PIR)" },
      { number: "20.9", title: "Knowledge Transfer & Documentation" },
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
      { number: "21.1", title: "Key Takeaways" },
      { number: "21.2", title: "Immediate Actions (0–3 Bulan)" },
      { number: "21.3", title: "Roadmap Governance Kick-off" },
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
];

export const timelinePhases = [
  { year: "2026", label: "Foundation", color: "bg-blue-500", desc: "Assessment & Core HR Setup" },
  { year: "2027", label: "Build", color: "bg-indigo-500", desc: "Module Development & Pilot" },
  { year: "2028", label: "Integrate", color: "bg-purple-500", desc: "SAP–IHCMIS Integration" },
  { year: "2029", label: "Optimize", color: "bg-violet-500", desc: "AI, Analytics & Intelligence" },
  { year: "2030", label: "Transform", color: "bg-fuchsia-500", desc: "Full Hire-to-Retire" },
];
