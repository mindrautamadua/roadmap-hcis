// ─── HCIS Roadmap Meta-Model ─────────────────────────────────────────────────
// Peta hubungan struktural seluruh bab dalam Roadmap HCIS 2026–2030

export interface MetaDomain {
  id: string;
  label: string;
  sublabel: string;
  color: string;
  textColor: string;
  borderColor: string;
  dotColor: string;
  chapters: number[];
  description: string;
}

export interface MetaRelationship {
  from: string;       // domain id
  to: string;         // domain id
  label: string;
  type: "feeds" | "enables" | "governs" | "bridges" | "validates";
  chapters?: string;  // contoh: "BAB 8 menerima output dari BAB 3 & 7"
}

export interface SubModel {
  title: string;
  icon: string;
  color: string;
  description: string;
  elements: { label: string; bab: string; chapId: number; role: string }[];
  insight: string;
}

export interface CrossCuttingConcern {
  title: string;
  icon: string;
  color: string;
  description: string;
  spansBabs: number[];
}

// ─── 8 DOMAIN LAYER ──────────────────────────────────────────────────────────

export const metaDomains: MetaDomain[] = [
  {
    id: "strategy",
    label: "Strategy & Context",
    sublabel: "Lapisan Strategi",
    color: "from-blue-600 to-blue-500",
    textColor: "text-blue-400",
    borderColor: "border-blue-500/40",
    dotColor: "bg-blue-500",
    chapters: [1, 2],
    description: "Mendefinisikan 'mengapa' transformasi ini dilakukan — visi, misi, dan alignment dengan strategi korporat.",
  },
  {
    id: "assessment",
    label: "Assessment & Capability",
    sublabel: "Lapisan Penilaian",
    color: "from-amber-600 to-orange-500",
    textColor: "text-amber-400",
    borderColor: "border-amber-500/40",
    dotColor: "bg-amber-500",
    chapters: [3, 4],
    description: "Memotret kondisi saat ini (As-Is) dan memetakan kapabilitas HR yang perlu didigitalisasi.",
  },
  {
    id: "service_ex",
    label: "Service & Experience Design",
    sublabel: "Lapisan Desain Layanan",
    color: "from-rose-600 to-pink-500",
    textColor: "text-rose-400",
    borderColor: "border-rose-500/40",
    dotColor: "bg-rose-500",
    chapters: [5, 6],
    description: "Merancang model layanan HR (Tier 0–3, SLA, XLA, Cost) dan pengalaman karyawan (EX Design, Service Blueprint).",
  },
  {
    id: "architecture",
    label: "Target Architecture",
    sublabel: "Lapisan Arsitektur",
    color: "from-indigo-600 to-blue-500",
    textColor: "text-indigo-400",
    borderColor: "border-indigo-500/40",
    dotColor: "bg-indigo-500",
    chapters: [7],
    description: "Mendesain kondisi To-Be: SAP sebagai System of Record, IHCMIS sebagai System of Engagement, dan Experience Architecture.",
  },
  {
    id: "planning",
    label: "Gap, Program & Roadmap",
    sublabel: "Lapisan Perencanaan",
    color: "from-cyan-600 to-teal-500",
    textColor: "text-cyan-400",
    borderColor: "border-cyan-500/40",
    dotColor: "bg-cyan-500",
    chapters: [8, 9, 10],
    description: "Menganalisis gap As-Is vs To-Be, mendefinisikan program & inisiatif, dan menyusun roadmap 5 tahun.",
  },
  {
    id: "governance_tech",
    label: "Governance, Technology & Compliance",
    sublabel: "Lapisan Tata Kelola",
    color: "from-slate-500 to-slate-600",
    textColor: "text-slate-300",
    borderColor: "border-slate-500/40",
    dotColor: "bg-slate-400",
    chapters: [11, 12, 13, 14],
    description: "Menetapkan tata kelola (Governance, PMO, Product Management), strategi teknologi & AI, kepatuhan regulasi, dan data/analytics.",
  },
  {
    id: "execution",
    label: "Execution & Measurement",
    sublabel: "Lapisan Eksekusi",
    color: "from-violet-600 to-purple-500",
    textColor: "text-violet-400",
    borderColor: "border-violet-500/40",
    dotColor: "bg-violet-500",
    chapters: [15, 16, 17, 18, 19, 20],
    description: "Menjalankan transformasi: Change Management, Risk, Finance, KPI, Implementasi, dan Post Go-Live Support.",
  },
  {
    id: "conclusion",
    label: "Conclusion & Next Steps",
    sublabel: "Lapisan Penutup",
    color: "from-fuchsia-600 to-violet-500",
    textColor: "text-fuchsia-400",
    borderColor: "border-fuchsia-500/40",
    dotColor: "bg-fuchsia-500",
    chapters: [21],
    description: "Key takeaways, immediate actions, dan kick-off governance roadmap.",
  },
];

// ─── HUBUNGAN KUNCI ANTAR DOMAIN ──────────────────────────────────────────────

export const metaRelationships: MetaRelationship[] = [
  {
    from: "strategy",
    to: "assessment",
    label: "Mengarahkan fokus assessment",
    type: "feeds",
    chapters: "BAB 2 Strategic Objectives → menentukan prioritas BAB 3 Assessment",
  },
  {
    from: "assessment",
    to: "service_ex",
    label: "VoE & Pain Points → input desain layanan",
    type: "feeds",
    chapters: "BAB 3.10 Pain Points + 3.12 VoE → informasi desain BAB 5 & 6",
  },
  {
    from: "assessment",
    to: "planning",
    label: "As-Is → Gap Analysis",
    type: "feeds",
    chapters: "BAB 3 (As-Is) + BAB 7 (To-Be) → BAB 8 Gap Analysis",
  },
  {
    from: "service_ex",
    to: "architecture",
    label: "Service Blueprint → Experience Architecture",
    type: "bridges",
    chapters: "BAB 6.4 Service Blueprint → BAB 7.12 Experience Architecture Mapping",
  },
  {
    from: "architecture",
    to: "planning",
    label: "To-Be → Gap & Inisiatif",
    type: "feeds",
    chapters: "BAB 7 Target Architecture → BAB 8 Gap Analysis → BAB 9 Initiative Catalog",
  },
  {
    from: "planning",
    to: "execution",
    label: "Roadmap → Pelaksanaan",
    type: "enables",
    chapters: "BAB 10 Roadmap → BAB 15 Change + BAB 19 Implementation",
  },
  {
    from: "governance_tech",
    to: "execution",
    label: "Governance mengatur eksekusi",
    type: "governs",
    chapters: "BAB 11 Governance + BAB 13 Compliance → mengatur seluruh BAB 15–20",
  },
  {
    from: "governance_tech",
    to: "planning",
    label: "Technology Strategy → Roadmap",
    type: "feeds",
    chapters: "BAB 12 AI & Tech Strategy → mempengaruhi prioritas BAB 10 Roadmap",
  },
  {
    from: "execution",
    to: "governance_tech",
    label: "Value Realization → KPI feedback",
    type: "validates",
    chapters: "BAB 18.7 Value Realization Tracking → memvalidasi BAB 17 ROI Estimation",
  },
  {
    from: "execution",
    to: "conclusion",
    label: "Hasil eksekusi → kesimpulan",
    type: "feeds",
    chapters: "BAB 20 Post Go-Live → BAB 21 Key Takeaways & Next Steps",
  },
];

// ─── SUB-MODEL (MODEL BERSARANG) ──────────────────────────────────────────────

export const subModels: SubModel[] = [
  {
    title: "Service Management Trinity",
    icon: "⚖️",
    color: "from-rose-500 to-pink-500",
    description: "Tiga dimensi wajib manajemen layanan HR: Quality, Experience, dan Cost — tanpa ketiganya, SSC beroperasi buta.",
    elements: [
      { label: "SLA", bab: "5.6", chapId: 5, role: "Quality — standar teknis layanan" },
      { label: "XLA", bab: "5.10", chapId: 5, role: "Experience — pengalaman karyawan" },
      { label: "Cost", bab: "5.11", chapId: 5, role: "Cost — biaya per transaksi layanan" },
    ],
    insight: "SLA tanpa XLA → 'hijau di dashboard, merah di hati karyawan'. Cost tanpa SLA/XLA → efisiensi yang mengorbankan kualitas.",
  },
  {
    title: "AI Governance 3-Layer",
    icon: "🤖",
    color: "from-violet-500 to-purple-500",
    description: "Kerangka lengkap tata kelola AI HCIS yang mencakup tiga lapisan berbeda — policy, governance, dan operations.",
    elements: [
      { label: "AI Ethics & Bias", bab: "12.10", chapId: 12, role: "Policy — aturan main & prinsip etika AI" },
      { label: "Data & AI Governance", bab: "14.8", chapId: 14, role: "Governance — siklus hidup model AI" },
      { label: "Responsible AI Ops", bab: "12.12", chapId: 12, role: "Operations — HITL, fallback, eskalasi" },
    ],
    insight: "Tanpa layer Operations (12.12), policy dan governance tidak akan terimplementasi di lapangan sehari-hari.",
  },
  {
    title: "Digital HR Platform Stack",
    icon: "🏗️",
    color: "from-indigo-500 to-blue-500",
    description: "Dua sistem utama HCIS dengan peran yang berbeda namun saling melengkapi dalam ekosistem HR.",
    elements: [
      { label: "SAP (SoR)", bab: "7.4", chapId: 7, role: "System of Record — single source of truth data" },
      { label: "IHCMIS (SoE)", bab: "7.5", chapId: 7, role: "System of Engagement — antarmuka karyawan" },
      { label: "Product Governance", bab: "11.12", chapId: 11, role: "IHCMIS sebagai produk: backlog, roadmap, release" },
    ],
    insight: "IHCMIS bukan sekadar sistem IT — ia adalah produk digital yang memerlukan Product Owner, Backlog, dan Release Cycle.",
  },
  {
    title: "EX–Architecture Bridge",
    icon: "🌉",
    color: "from-teal-500 to-emerald-500",
    description: "Rantai metodologis yang menghubungkan desain pengalaman karyawan hingga ke keputusan arsitektur aplikasi.",
    elements: [
      { label: "Journey Map", bab: "6.3", chapId: 6, role: "Visualisasi perjalanan karyawan end-to-end" },
      { label: "Service Blueprint", bab: "6.4", chapId: 6, role: "Peta frontstage + backstage + support processes" },
      { label: "Experience Architecture", bab: "7.12", chapId: 7, role: "Mapping touchpoint EX → komponen aplikasi" },
    ],
    insight: "Tanpa rantai ini, arsitektur aplikasi tidak berakar pada kebutuhan nyata karyawan — hanya berbasis asumsi teknis.",
  },
  {
    title: "Value Measurement Chain",
    icon: "📈",
    color: "from-green-500 to-emerald-500",
    description: "Rangkaian pengukuran nilai dari perencanaan investasi hingga bukti realisasi manfaat nyata.",
    elements: [
      { label: "TCO & ROI Plan", bab: "17.1/17.6", chapId: 17, role: "Rencana — berapa investasi & prediksi return" },
      { label: "KPI Framework", bab: "18.1–18.5", chapId: 18, role: "Pengukuran — indikator operasional & strategis" },
      { label: "Value Realization", bab: "18.7", chapId: 18, role: "Bukti — benefit aktual vs. yang direncanakan" },
    ],
    insight: "KPI mengukur kinerja sistem. Value Realization membuktikan ROI ke Direksi. Keduanya wajib ada dan berbeda fungsinya.",
  },
];

// ─── CROSS-CUTTING CONCERNS ───────────────────────────────────────────────────

export const crossCuttingConcerns: CrossCuttingConcern[] = [
  {
    title: "Compliance & Regulatory",
    icon: "⚖️",
    color: "text-emerald-400",
    description: "UU PDP, Ketenagakerjaan, BPJS, DJP — berlaku di setiap layer yang menyentuh data karyawan.",
    spansBabs: [3, 7, 10, 12, 14, 19],
  },
  {
    title: "Risk Management",
    icon: "🛡️",
    color: "text-red-400",
    description: "Dari dependency risk (perencanaan) hingga cybersecurity & vendor risk (eksekusi) — mengawasi semua lapisan.",
    spansBabs: [9, 10, 12, 13, 15, 19, 20],
  },
  {
    title: "Change Management",
    icon: "🔄",
    color: "text-fuchsia-400",
    description: "Adoption, komunikasi, DAP, Super User Network — menopang keberhasilan di semua fase implementasi.",
    spansBabs: [5, 6, 10, 15, 19, 20],
  },
  {
    title: "Data Governance",
    icon: "🗄️",
    color: "text-blue-400",
    description: "Dari data quality hingga AI model governance — memastikan data sebagai aset strategis di semua layer.",
    spansBabs: [3, 7, 10, 11, 14],
  },
];

// ─── METODOLOGI TRANSFORMASI ──────────────────────────────────────────────────

export const transformationMethodology = {
  name: "HCIS Transformation Framework",
  version: "v2.7",
  phases: [
    {
      phase: "DIAGNOSE",
      color: "from-amber-500 to-orange-500",
      textColor: "text-amber-400",
      babs: [1, 2, 3, 4],
      description: "Pahami kondisi saat ini dan tentukan arah transformasi",
    },
    {
      phase: "DESIGN",
      color: "from-rose-500 to-pink-500",
      textColor: "text-rose-400",
      babs: [5, 6, 7],
      description: "Rancang layanan, pengalaman, dan arsitektur masa depan",
    },
    {
      phase: "PLAN",
      color: "from-cyan-500 to-blue-500",
      textColor: "text-cyan-400",
      babs: [8, 9, 10],
      description: "Analisis gap, definisikan program, dan susun roadmap",
    },
    {
      phase: "GOVERN",
      color: "from-slate-500 to-slate-600",
      textColor: "text-slate-300",
      babs: [11, 12, 13, 14],
      description: "Tetapkan governance, teknologi, kepatuhan, dan data",
    },
    {
      phase: "EXECUTE",
      color: "from-violet-500 to-purple-500",
      textColor: "text-violet-400",
      babs: [15, 16, 17, 18, 19, 20],
      description: "Jalankan, ukur, kendalikan, dan perbaiki secara berkelanjutan",
    },
    {
      phase: "SUSTAIN",
      color: "from-fuchsia-500 to-violet-500",
      textColor: "text-fuchsia-400",
      babs: [21],
      description: "Kesimpulan, pembelajaran, dan persiapan siklus berikutnya",
    },
  ],
};
