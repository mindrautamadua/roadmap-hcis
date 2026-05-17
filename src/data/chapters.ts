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
      { number: "1.1", title: "The Burning Platform & Cost of Inaction", content: "Menarasikan urgensi transformasi (\"Why Now\"), tekanan bisnis, ancaman disrupsi operasional, dan konsekuensi fatal (*cost of inaction*) jika organisasi menunda perubahan." },
      { number: "1.2", title: "Executive Transformation Narrative", content: "Menghadirkan *storyline* strategis untuk memenangkan keyakinan emosional Direksi; mengubah persepsi dari sekadar \"proyek IT HR\" menjadi \"agenda transformasi kelangsungan bisnis dan kesiapan *future workforce*\"." },
      { number: "1.3", title: "Ruang Lingkup Roadmap HCIS", content: "Membatasi area fungsional HR (seperti *Hire-to-Retire*) dan batasan sistem (SAP, IHCMIS, middleware) yang masuk dalam roadmap." },
      { number: "1.4", title: "Prinsip Utama & Strategic Trade-offs", content: "Menetapkan panduan dasar (*guiding principles*) serta ketegasan keputusan (*decision sharpness*); secara eksplisit menyatakan apa yang diprioritaskan dan kompromi desain yang disepakati." },
      { number: "1.5", title: "Highlight Roadmap 2026–2030", content: "Menyajikan secara visual dan ringkas perjalanan transformasi, fase-fase penting, dan tonggak waktu utama (*milestone*) dalam 5 tahun." },
      { number: "1.6", title: "Manfaat Strategis bagi Organisasi", content: "Merangkum dampak positif (efisiensi operasional, keunggulan *data analytics*, peningkatan *Employee Experience*) yang langsung mendukung daya saing perusahaan." },
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
      { number: "2.1", title: "Visi dan Misi Human Capital", content: "Mendeskripsikan arah jangka panjang divisi Human Capital agar sejalan dengan visi korporasi." },
      { number: "2.2", title: "Strategic Objectives Human Capital", content: "Menjabarkan target-target terukur HR (misal: mencetak *digital talent*, menekan tingkat *turnover* karyawan kunci)." },
      { number: "2.3", title: "Alignment dengan Corporate Strategy", content: "Menunjukkan pemetaan (benang merah) yang jelas antara target korporasi dengan inisiatif divisi HR." },
      { number: "2.4", title: "Peran HCIS dalam Mendukung Strategi", content: "Menjelaskan secara spesifik bagaimana teknologi HCIS menjembatani dan mempercepat pencapaian strategi korporasi." },
      { number: "2.5", title: "Key Business Drivers", content: "Faktor-faktor pendorong bisnis (perubahan regulasi, ekspansi pasar, dinamika demografi karyawan) yang memaksa HR untuk mendigitalisasi operasionalnya." },
      { number: "2.6", title: "HR Transformation Vision 2030", content: "Visi masa depan operasional dan layanan ideal HR pada akhir tahun 2030 setelah transformasi diselesaikan." },
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
      { number: "3.1", title: "Gambaran Umum Sistem HC Saat Ini", content: "Narasi dan visual makro arsitektur sistem pendukung HC eksisting." },
      { number: "3.2", title: "Daftar Aplikasi HR Eksisting", content: "Inventaris komprehensif seluruh sistem (termasuk *shadow IT* seperti spreadsheet/portal lokal) yang digunakan oleh HR saat ini." },
      { number: "3.3", title: "Landscape SAP HR", content: "Pemetaan spesifik modul-modul SAP HR (jika ada) yang telah beroperasi beserta efektivitas penggunaannya." },
      { number: "3.4", title: "Landscape IHCMIS Eksisting", content: "Analisis portal lokal (*in-house/custom*) penunjang HR yang ada di luar SAP." },
      { number: "3.5", title: "HR Process Assessment", content: "Evaluasi proses bisnis; melihat adopsi SOP, redundansi birokrasi, dan masih banyaknya proses manual (*paper-based*)." },
      { number: "3.6", title: "HR Data Assessment", content: "Evaluasi kualitas (*integrity*), keamanan, serta isu duplikasi pencatatan pada data pegawai di lintas sistem." },
      { number: "3.7", title: "Integration Assessment", content: "Menilai sejauh mana aliran data antar aplikasi sudah berjalan otomatis, atau masih dilakukan dengan cara pertukaran data manual (*flat file export/import*)." },
      { number: "3.8", title: "Infrastruktur & Teknologi", content: "Diagnosis kesiapan peranti keras, keandalan server, serta topologi *network* pendukung aplikasi HR eksisting." },
      { number: "3.9", title: "HR Digital Maturity Assessment", content: "Pengukuran skor tingkat \"kematangan digital\" (berdasarkan standar industri) guna menakar kesiapan kultur dan teknologi HR saat ini." },
      { number: "3.10", title: "Pain Points & Issues", content: "Kompilasi keluhan dan permasalahan terbesar dari sisi operasional dan sistem yang dirasakan pengguna (*user*), manajemen, hingga karyawan." },
      { number: "3.11", title: "HR Organization Assessment", content: "Evaluasi desain struktur organisasi HR saat ini dalam memfasilitasi transformasi digital, termasuk kesiapan kompetensi digital staf HR." },
      { number: "3.12", title: "Voice of Employee (VoE) Survey", content: "Pendataan opini/sentimen langsung dari karyawan terkait pengalaman dan kesulitan mereka mengakses layanan HR saat ini." },
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
      { number: "4.1", title: "HR Capability Map", content: "Taksonomi logis dari keseluruhan fungsi/layanan dasar yang harus bisa diakomodasi oleh HR." },
      { number: "4.2", title: "HR Value Chain (Hire-to-Retire)", content: "Pemetaan rantai nilai siklus hidup karyawan mulai dari fase ketertarikan bergabung hingga tahap pemisahan (pensiun/keluar)." },
      { number: "4.3", title: "HR Process Standardization", content: "Metodologi pembakuan langkah kerja untuk memastikan tidak ada perbedaan cara operasional antar unit atau antar cabang." },
      { number: "4.4", title: "Core HR Capability", content: "Area kapabilitas fundamental/transaksional seperti pencatatan data induk, pencatatan waktu kehadiran, dan pemrosesan penggajian (*payroll*)." },
      { number: "4.5", title: "Talent Management & Skills-Based Organization", content: "Area kapabilitas yang bertransisi dari pengorganisasian berbasis jabatan (*job-centric*) menuju *skills-centric*, mencakup implementasi *skills ontology*, *talent marketplace* internal, serta mobilitas karir berbasis keahlian." },
      { number: "4.6", title: "Learning Capability", content: "Area kapabilitas untuk memfasilitasi pembelajaran, pelatihan, dan pengelolaan kompetensi." },
      { number: "4.7", title: "Workforce Analytics Capability", content: "Area kapabilitas dalam pengolahan data pegawai menjadi *insight* analitik, pelaporan dinamis, dan model prediktif." },
      { number: "4.8", title: "Employee Experience Capability", content: "Area kapabilitas yang secara proaktif mendesain interaksi kerja yang memuaskan dan *engaging* bagi karyawan (mengelola iklim dan budaya)." },
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
        number: "5.1", title: "HR Service Delivery Framework", content: "Konsep model layanan yang diadopsi (misal: *Tiered Model*)."
      },
      { 
        number: "5.2", title: "Tier 0 — Employee & Manager Self-Service (ESS/MSS)", content: "Otomatisasi lini pertama, layanan di mana karyawan dapat membantu diri sendiri tanpa kontak dengan petugas HR."
      },
      { 
        number: "5.3", title: "Tier 1 — HR Shared Services Center (SSC)", content: "Tim *helpdesk* (pelayanan terpusat) untuk transaksi administratif HR yang bervolume tinggi dengan kompleksitas rendah."
      },
      { 
        number: "5.4", title: "Tier 2 — Center of Excellence (CoE)", content: "Pusat tenaga pakar spesifik HR (misal: ahli regulasi *payroll*, *Organization Design*) untuk konsultasi kebijakan dan isu strategis."
      },
      { 
        number: "5.5", title: "Tier 3 — HR Business Partner & Specialist", content: "Partner HR bagi kepala unit bisnis untuk masalah taktis-strategis yang menuntut keputusan *tailor-made*."
      },
      { 
        number: "5.6", title: "Service Catalog & SLA Definition", content: "Daftar lengkap produk layanan HR beserta kepastian durasi/waktu penyelesaiannya (*Service Level Agreement*)."
      },
      { 
        number: "5.7", title: "Case Management & HR Ticketing Model", content: "Implementasi platform (*ticketing*) pencatatan, distribusi, eskalasi, dan pelacakan permintaan atau masalah karyawan."
      },
      { 
        number: "5.8", title: "HR Contact Center Strategy", content: "Desain akses saluran bantuan (email, *chatbot*, portal) guna menjamin respons HR *multi-channel*."
      },
      { 
        number: "5.9", title: "Continuous Service Improvement", content: "Pendekatan sistematis berbasis metrik layanan untuk terus memperbaiki dan merampingkan performa layanan HR secara inkremental."
      },
      {
        number: "5.10", title: "HR Service Experience Level Agreement (XLA)", content: "Indikator baru yang fokus mengukur seberapa positif pengalaman yang dirasakan karyawan saat meminta bantuan HR, bukan hanya seberapa cepat tiket ditutup.",
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
        number: "5.11", title: "Service Cost Transparency Model", content: "Sistem kalkulasi analitik biaya untuk mengidentifikasi ongkos unit (*unit cost*) pada setiap jenis penyelesaian administrasi atau tiket dari sisi HR.",
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
        number: "6.1", title: "Employee Experience Vision & Principles", content: "Visi budaya yang menjadikan aplikasi HR nyaman, interaktif, transparan, dan dapat dinikmati layaknya aplikasi konsumen populer (*consumer-grade app*)."
      },
      { 
        number: "6.2", title: "Employee Persona Development", content: "Rekayasa karakter/profil fiktif representasi pegawai nyata dari berbagai rentang umur atau lokasi untuk menguji kecocokan alur aplikasi."
      },
      { 
        number: "6.3", title: "Employee Journey Mapping (Hire-to-Retire)", content: "Reka ulang perjalanan emosional dan interaksi sentuhan karyawan bersama organisasi untuk setiap tahapan masa kerja."
      },
      {
        number: "6.4", title: "Service Blueprint Design", content: "Dokumentasi arsitektur layanan yang mengkoneksikan perjalanan pengguna secara visual (*frontstage*) dengan cara kerja sistem internal dan petugas (*backstage*).",
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
        number: "6.5", title: "Moment-That-Matters Analysis", content: "Proses mengidentifikasi momen puncak/krusial (misal: hari pertama kerja, cuti sakit) agar sistem difokuskan memberikan performa dan responsivitas terbaik pada situasi tersebut."
      },
      {
        number: "6.6", title: "ESS/MSS UX Design Principles", content: "Pedoman penyusunan desain *interface* (seperti kejelasan navigasi, panduan interaktif, warna) agar layanan mandiri tidak membuat bingung."
      },
      {
        number: "6.7", title: "Conversational HR & Mobile-First Interaction", content: "Strategi interaksi digital melalui kanal yang paling akrab bagi karyawan Indonesia (seperti integrasi *WhatsApp Business API* untuk permintaan cuti dan slip gaji) guna mendorong kemudahan akses tanpa harus menginstal aplikasi tambahan."
      },
      {
        number: "6.8", title: "eNPS & EX Measurement Framework", content: "Formulasi untuk mengukur tingkat kepuasan holistik (*Employee Net Promoter Score*) melalui metode survei berkesinambungan."
      },
      {
        number: "6.9", title: "Well-being & Digital Ergonomics", content: "Pertimbangan teknis agar antarmuka tidak mendistraksi (*notification overload*) atau menekan psikologis karyawan (*digital burn-out*)."
      },
      {
        number: "6.10", title: "EX Feedback Loop & Continuous Listening", content: "Pemasangan mekanisme di aplikasi yang menangkap sentimen cepat (*pulse survey*, rating bintang 5) untuk mendengarkan masukan pegawai setiap saat secara *real-time*."
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
      { number: "7.1", title: "Target HCIS Vision", content: "Gambaran paripurna dan nilai utama arsitektur ekosistem sistem yang baru pada 2030 (misal: terpadu, otomatis, adaptif)." },
      { number: "7.2", title: "Target HR Operating Model", content: "Desain model operasional tata laksana HR yang telah sepenuhnya mengadopsi integrasi ekosistem baru tersebut." },
      { number: "7.3", title: "Target Application Architecture", content: "Diagram interkoneksi logis dan portofolio aplikasi, menyatakan mana sistem transaksional utama (*System of Record*) dan platform interaktif pengguna (*System of Engagement*)." },
      { number: "7.4", title: "SAP Role as System of Record", content: "Penunjukan peran SAP HR sebagai repositori tulang punggung kebenaran sentral data administratif." },
      { number: "7.5", title: "IHCMIS Role as System of Engagement", content: "Penunjukan peran IHCMIS sebagai jembatan interaksi *front-end*, antarmuka yang cepat diakses, intuitif dan terkostumisasi tanpa membebani performa SAP." },
      { number: "7.6", title: "ESS/MSS Architecture", content: "Konsep arsitektur yang mengisolasi proses mandiri menjadi komponen tangguh di sistem portal lokal yang sinkronisasi instan ke basis data." },
      { number: "7.7", title: "Mobile-First Design Principles", content: "Konsep integrasi sistem khusus untuk akses ekosistem secara optimal menggunakan *native app* atau *PWA (Progressive Web App)* seluler." },
      { number: "7.8", title: "Integration Architecture", content: "Konstruksi standardisasi pola pertukaran data menggunakan *Integration Platform as a Service (iPaaS)* untuk membentuk *composable HR architecture*, mencegah penumpukan utang integrasi permanen (*integration debt*) antara SAP dan portal lokal." },
      { number: "7.9", title: "Data Architecture", content: "Rancang bangun pemodelan tata kelola data master, pembentukan *Data Warehouse / Data Lake*, untuk keperluan manajemen data masif." },
      { number: "7.10", title: "Technology Architecture", content: "Spefisikasi arsitektur fisik seperti alokasi klaster *server*, komponen *cloud*, jaringan dan infrastruktur." },
      { number: "7.11", title: "Security Architecture", content: "Kebijakan model arsitektur sistem keamanan logis, proteksi jaringan (*Firewall/WAF*), lapisan autentikasi (MFA), hingga standardisasi enkripsi *database*." },
      {
        number: "7.12", title: "Experience Architecture Mapping", content: "Metodologi untuk merelasikan kerangka EX (pengalaman karyawan) secara eksplisit ke modul spesifik pada lapis arsitektur teknis/aplikasi (*translating experience to features*).",
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
      { number: "8.1", title: "Capability Gap Analysis", content: "Kesenjangan kelengkapan keahlian atau layanan fungsional HR yang ada dibanding standar ideal." },
      { number: "8.2", title: "Process Gap Analysis", content: "Kesenjangan proses (proses mana yang harus di-*reengineer* atau distandarkan)." },
      { number: "8.3", title: "Application Gap Analysis", content: "Kesenjangan aplikasi perangkat lunak (*software*), sistem mana yang uzur/obsolet dan perlu dekomisioning, atau fitur krusial yang belum tersokong sistem." },
      { number: "8.4", title: "Data Gap Analysis", content: "Kesenjangan pada keseragaman atribut, kelengkapan formasi data (*missing values*), serta integritas antar-database silo." },
      { number: "8.5", title: "Technology Gap Analysis", content: "Kesenjangan teknis arsitektur komputasi; kapabilitas *server* atau latensi *network* yang tak memadai untuk sistem masa depan." },
      { number: "8.6", title: "Organizational Gap Analysis", content: "Kesenjangan pada model pengorganisasian struktural yang terlalu kaku dan menghambat agilitas operasional adaptasi digital staf." },
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
      { number: "9.1", title: "Program Framework", content: "Kerangka logis untuk mendistribusikan inisiatif/tugas agar terstruktur." },
      { number: "9.2", title: "Initiative Identification", content: "Proses identifikasi ide-ide inisiatif perbaikan sistem dan proses." },
      { number: "9.3", title: "Initiative Categorization", content: "Mengkategorikan usulan inisiatif ke dalam kelompok (misal: Infrastruktur, Proses bisnis, atau Aplikasi)." },
      { number: "9.4", title: "Quick Wins Identification", content: "Ekstraksi proyek berskala kecil, biaya rendah, tapi memberikan perubahan nyata dalam jangka pendek (*3-6 bulan*)." },
      { number: "9.5", title: "Strategic Programs", content: "Prioritas inisiatif fundamental dan masif (seperti implementasi sistem inti / *core HR*) yang berjangka menengah/panjang." },
      { number: "9.6", title: "Dependency Mapping", content: "Pemetaan ketergantungan antar inisiatif (contoh: \"Pembersihan data\" wajib tuntas sebelum \"Sistem baru go-live\")." },
      { number: "9.7", title: "Benefit Definition", content: "Menentukan nilai manfaat secara eksplisit yang akan dihasilkan oleh setiap inisiatif program." },
      { number: "9.8", title: "Vendor Landscape Comparison & Selection", content: "Kajian komparasi objektif antar penyedia platform HR terkemuka (SAP, Workday, Oracle, Darwinbox) dan vendor implementor, memastikan keputusan berdasar pada analisa *fit-gap* yang jujur, bukan sekadar penetapan *predetermined outcome*." },
      { number: "9.9", title: "Implementation Partner Evaluation Criteria", content: "Rubrik kriteria penilaian untuk menyeleksi mitra implementasi/vendor IT yang andal." },
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
      { number: "10.1", title: "Roadmap Principles & Guardrails", content: "Panduan pedoman (*rules*) dan batasan ketat penyusunan *timeline*." },
      { number: "10.2", title: "What We Will NOT Do (De-prioritization Strategy)", content: "Pernyataan ketegasan (*decision sharpness*) mengenai kapabilitas atau inisiatif spesifik yang dengan sengaja *ditunda* atau tidak dilakukan, menjaga fokus pada prioritas inti dan menghindari jebakan \"menyediakan semua kemungkinan\"." },
      { number: "10.3", title: "Year-by-Year Roadmap", content: "Peta jalan komprehensif dari seluruh program dan iterasi sistem per tahun." },
      { number: "10.4", title: "Domain-Based Roadmap", content: "Pemecahan peta jalan berdasar domain spesifik (*Recruitment, Training, Payroll*) agar fokus pengerjaannya jelas." },
      { number: "10.5", title: "Module Implementation Timeline", content: "Linimasa spesifik penjadwalan implementasi per Modul aplikasi (terutama modul SAP dan IHCMIS)." },
      { number: "10.6", title: "Integration Timeline", content: "Linimasa pengembangan integrasi (API/Middleware) penghubung antar sistem." },
      { number: "10.7", title: "Data Migration Strategy & Timeline", content: "Urutan waktu penjadwalan fase migrasi data (Ekstraksi, Transformasi, dan *Load*)." },
      { number: "10.8", title: "Legacy Data Cleansing & Mapping", content: "Jadwal pembersihan data dari pangkalan sistem lama yang kotor (*Legacy system*) sebelum pemindahan." },
      { number: "10.9", title: "Cutover Planning & Go-Live Checklist", content: "Perencanaan gladi resik transisi akhir peralihan pemutusan sistem lama (*Cutover*) serta daftar periksa wajib." },
      { number: "10.10", title: "Rollout Strategy", content: "Pemetaan strategi peluncuran sistem — apakah dilakukan bertahap per wilayah (*Phased Rollout*) atau serentak ke seluruh organisasi (*Big Bang*)." },
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
      { number: "11.1", title: "HCIS Governance Structure", content: "Penentuan arsitektur otoritas komando pengawasan transformasi." },
      { number: "11.2", title: "Steering Committee Charter", content: "Definisi *Steering Committee* (Komite Pengarah level Direksi) yang berfungsi sebagai pengambil kebijakan strategis dan penyelesai kebuntuan (*deadlock*)." },
      { number: "11.3", title: "Project Management Office (PMO) Setup", content: "Pengadaan tim/kantor PMO untuk pelacakan efisiensi proyek, jadwal, dan kontrol dokumen pelaporan secara terpusat." },
      { number: "11.4", title: "Roles & Responsibilities", content: "Definisi gamblang wewenang tim pendukung seperti *Business Owner*, *Project Manager*, *Technical Lead*." },
      { number: "11.5", title: "RACI Matrix", content: "Tabel alokasi spesifik penanggung jawab (*Responsible, Accountable, Consulted, Informed*) setiap tahap pelaksanaan program." },
      { number: "11.6", title: "Decision Framework", content: "Pendelegasian hierarki eskalasi persetujuan bilamana proyek menghadapi hambatan struktural atau permintaan perubahan drastis." },
      { number: "11.7", title: "HR Organizational Redesign & Future Workforce Model", content: "Rekonstruksi struktur organisasi HR untuk beradaptasi dengan cara kerja digital; memindahkan peran administratif yang tergantikan sistem menuju peran strategis bernilai tinggi (*human-transformation-centric*)." },
      { number: "11.8", title: "Leadership Transformation & Digital Culture", content: "Program evolusi *mindset* para pimpinan unit agar tangkas dan proaktif dalam mengelola pegawai di era *hybrid* dan *AI-augmented workforce*." },
      { number: "11.9", title: "Change Management Structure", content: "Tim peredam *shock* kultur, pelaksana komunikasi, serta pendamping edukasi (*Change Champions*)." },
      { number: "11.10", title: "Data Governance Model", content: "Tata kepengurusan penjamin integritas *Data Master*, mengatur otoritas pemilik ranah jenis data pegawai (*Data Steward*)." },
      { number: "11.11", title: "Vendor Governance", content: "Instrumen tata kelola evaluasi kinerja penyerahan perangkat lunak pihak vendor, termasuk manajemen sanksi pelanggaran (*SLA Breach*)." },
      { number: "11.12", title: "Quality Assurance Framework", content: "Mekanisme pengujian kualitatif terstandar untuk memverifikasi kesesuaian produk rilis *developer* dengan cetak biru yang diminta." },
      {
        number: "11.13", title: "Digital HR Platform Governance", content: "Tata tertib yang mengatur siklus hidup keseluruhan arsitektur portal IHCMIS; mencegah penambahan fitur aplikasi tanpa koordinasi terpusat.",
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
        number: "11.14", title: "Digital HR Product Management Model", content: "Transisi konsep IHCMIS dari sekadar IT-Proyek menjadi komoditas \"Product\", melalui mekanisme kerja tangkas/Agile yang dikelola *Product Owner*.",
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
      { number: "12.1", title: "SAP HCM Transition & Core Strategy", content: "Strategi mitigasi risiko terkait *end of mainstream maintenance* SAP HCM on-premise (sekitar 2027), mencakup perbandingan opsi transisi ke SAP SuccessFactors, S/4HANA HXM, atau pola operasi hibrida untuk menjaga *core* tetap bersih (*keep core clean*)." },
      { number: "12.2", title: "IHCMIS Strategy", content: "Pemosisian IHCMIS sebagai portal garda terdepan karyawan dengan antarmuka dinamis dan *agile* (*System of Engagement*)." },
      { number: "12.3", title: "Middleware Strategy", content: "Pola strategis penyisipan layer integrasi terpusat untuk menjembatani komunikasi data lintas sistem tanpa interkoneksi semrawut (*Spaghetti Connection*)." },
      { number: "12.4", title: "API Strategy", content: "Standardisasi pembangunan pustaka pertukaran *Microservices* API yang universal." },
      { number: "12.5", title: "Cloud Strategy", content: "Strategi migrasi server menuju infrastruktur layanan komputasi awan." },
      { number: "12.6", title: "Security Strategy", content: "Skema arsitektur penerapan lapis otorisasi *Single-Sign On (SSO)*, MFA (*Multi Factor Auth*), dan enkripsi privasi *database*." },
      { number: "12.7", title: "Backup & Disaster Recovery", content: "Metodologi cadangan data dan skenario *Failover* ke *Disaster Recovery Center* saat terjadi malapetaka putus jaringan utama." },
      { number: "12.8", title: "AI-Powered HR Operating Model", content: "Elevasi AI dari sekadar fitur pelengkap menjadi fondasi tata operasi HR baru, mengorkestrasi alur kerja otonom (*autonomous workflows*) melalui fungsi *Agentic AI*." },
      { number: "12.9", title: "RAG-Based Knowledge Management & GenAI", content: "Pemanfaatan *Generative AI* dengan arsitektur *Retrieval-Augmented Generation (RAG)* untuk pencarian pintar dokumen kebijakan HR dan resolusi instan portal bantuan layanan." },
      { number: "12.10", title: "AI Ethics, Bias Detection & Shadow AI", content: "Kerangka identifikasi prioritas (*MoSCoW × Risk × Value*), standar etika pencegahan algoritma diskriminatif, dan mitigasi risiko operasional dari inisiatif AI tak resmi karyawan (*Shadow AI*)." },
      { number: "12.11", title: "Emerging Technology Vision 2028–2030", content: "Identifikasi visi adaptif potensi penerapan teknologi imersif lanjutan masa depan untuk korporasi pasca 2028." },
      {
        number: "12.12", title: "Responsible AI Operations", content: "Standar operasional eksekusi di mana kontrol finalitas tindakan (*Human-in-the-loop*) diberlakukan tegas pada setiap rekomendasi mesin kecerdasan buatan.",
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
      { number: "13.1", title: "Regulatory Landscape & PSE Registration", content: "Rangkuman payung regulasi negara terkait kewajiban pendaftaran Penyelenggara Sistem Elektronik (PSE) Kominfo bagi aplikasi yang memproses data pegawai WNI." },
      { number: "13.2", title: "UU PDP & SNI ISO 27701 Compliance", content: "Pemenuhan standar privasi merujuk UU PDP turunan ke kontrol sertifikasi SNI ISO 27001/27701 mengatur persetujuan sirkulasi informasi medis dan data pribadi karyawan." },
      { number: "13.3", title: "Data Privacy Impact Assessment (DPIA)", content: "Kewajiban perancangan pengisian formulir evaluasi resiko pelanggaran privasi tiap pengaktifan layanan/fitur fungsional sistem baru." },
      { number: "13.4", title: "UU Ketenagakerjaan & K3 Compliance", content: "Pemenuhan presisi formula kewajiban operasional seperti pesangon, cuti dari UU Cipta Kerja, serta keselarasan modul pengaduan Kesehatan dan Keselamatan Kerja (K3) standar Permenaker." },
      { number: "13.5", title: "BPJS Ketenagakerjaan & Kesehatan Integration", content: "Fusi perhitungan jaminan BPJS serta otomasi portal regulasi data peserta BPJS dari HCIS eksisting." },
      { number: "13.6", title: "PPh 21 & DJP Reporting Integration", content: "Otomatisasi integrasi sistem sinkronisasi potong TER (*Tarif Efektif Rata-rata*) skema regulasi perpajakan yang dinamis." },
      { number: "13.7", title: "Audit Trail & Regulatory Reporting", content: "Pencatatan jejak audit atas setiap perubahan data di sistem, memungkinkan auditor menelusuri modifikasi tidak sah pada data penggajian atau kepegawaian." },
      { number: "13.8", title: "Data Residency & Sovereignty Requirements", content: "Konfigurasi ketaatan agar domisili *server cloud / datacenter* tetap di ranah hukum fisik Republik Indonesia sesuai perundang-undangan." },
      { number: "13.9", title: "Compliance Monitoring Framework", content: "Konfigurasi pemantauan sinyal indikator pada saat suatu data penggajian tersetting melenceng dari batas terendah regulasi kompensasi." },
      { number: "13.10", title: "Legal Hold & eDiscovery", content: "Protokol pengumpulan data/dokumen kepegawaian dalam mode non-hapus (*Legal-Hold*) untuk dipertanggungjawabkan pada saat litigas persidangan hukum terkait (*Dispute case*)." },
      { number: "13.11", title: "UU ITE & Digital Signature Kepatuhan", content: "Pemenuhan validasi hukum UU ITE pada pengesahan kontrak *e-sign* HR dan validitas laporan elektronik operasional." },
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
      { number: "14.1", title: "HR Data Model", content: "Skema entitas tabel dasar hierarki referensial jabatan unit fungsi HR." },
      { number: "14.2", title: "Master Data Strategy", content: "Protokol penyelarasan entitas data sentral referensi primer (Satu kebenaran tunggal)." },
      { number: "14.3", title: "Data Quality Framework", content: "Prosedur pembersihan duplikasi / pembakuan kesesuaian parameter pengisian di sistem baru agar menjamin pelaporan yang tidak *garbage-in/garbage-out*." },
      { number: "14.4", title: "Data Governance", content: "Tata laksana organisasi *Stewardship* yang berwewenang menstandarkan arti definisi, glosarium metrik dasbor." },
      { number: "14.5", title: "Workforce Analytics Strategy", content: "Skema representasi agregasi pola statistik untuk mengungkap korelasi (Misal kaitan tingkat kehadiran dengan hasil performa tahunan spesifik)." },
      { number: "14.6", title: "Reporting Framework", content: "Kerangka pemisahan platform pencetakan rekapitulasi data (*Reporting transaksional*) versus *Dashboard BI interaktif*." },
      { number: "14.7", title: "Prescriptive Analytics & Causal Inference", content: "Evolusi tingkatan analitik yang tak sekadar memprediksi masalah (seperti potensi *turnover*), melainkan menyuguhkan intervensi resep tindakan sebab-akibat (*causal inference*) yang akurat untuk mencegah hal tersebut terjadi." },
      {
        number: "14.8", title: "Data & AI Governance", content: "Tata kelola model analitik Machine Learning. Mengatur pengawasan model AI algoritma model, penelusuran galur dataset model pelatih AI, penanganan kasus mitigasi akurasi (*AI Auditability*).",
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
      { number: "15.1", title: "Stakeholder Analysis", content: "Pemetaan blok persetujuan vs penolakan resistensi grup pemangku fungsi manajerial SDM." },
      { number: "15.2", title: "Communication Strategy", content: "Rencana kampanye penyampaian *Roadshow* literasi pembaruan IT." },
      { number: "15.3", title: "Training Strategy", content: "Agenda kurikulum diklat teknikal pemakaian sistem dari skala pengenalan fungsional esensial ke level modifikasi administrator." },
      { number: "15.4", title: "Adoption Strategy", content: "Strategi *gamification* / pemantauan *Dashboard* adopsi log-in pegawai sesaat setelah operasional rilis harian." },
      { number: "15.5", title: "Digital Adoption Platform (DAP) Strategy", content: "Pemanfaatan instalasi *popup* balonisasi pemandu navigasi instruksional mandiri (*On-screen Walkthrough*)." },
      { number: "15.6", title: "Super User Network", content: "Pemberdayaan jejaring asisten mandiri/kader fungsional di tiap regional fungsi staf korporasi sebagai lini edukasi lapis 1 terdekat." },
      { number: "15.7", title: "AI-Workforce Coexistence & Human Transition", content: "Penanganan aspek psikologis dalam menavigasi kecemasan (*job displacement anxiety*) akibat masuknya otomasi dan *Agentic AI*, berfokus pada kolaborasi harmonis mesin dan manusia." },
      { number: "15.8", title: "Resistance Management", content: "Pendekatan taktis dalam persuasi/negosiasi keluhan khusus pengguna kritis skeptis (Kubu Anti-Perubahan)." },
      { number: "15.9", title: "Change Impact Assessment", content: "Parameter dokumentatif pemetaan mendetail yang menjelaskan poin sentral proses *Before vs After* harian manajer setelah integrasi penuh." },
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
      { number: "16.1", title: "Risk Identification", content: "Mengidentifikasi dan mendokumentasikan seluruh potensi risiko yang dapat menghambat eksekusi Roadmap." },
      { number: "16.2", title: "Risk Assessment", content: "Menilai tingkat kemungkinan terjadinya dan besaran dampak finansial dari setiap risiko yang telah diidentifikasi." },
      { number: "16.3", title: "Risk Mitigation Plan", content: "Rencana jaring penyelamatan taktis untuk mencegah risiko *Preventif* dan menanggulangi sesaat sesudah krisis eksis *Korektif*." },
      { number: "16.4", title: "Dependency Risk", content: "Risiko efek domino jika satu inisiatif mandek akan memblokir 3 jadwal eksekusi selanjutnya." },
      { number: "16.5", title: "Operational Risk", content: "Ancaman lumpuhnya unit layanan HR (contoh proses pengupahan terhenti sewaktu hari Cutover migrasi) akibat kegagapan sistemasi." },
      { number: "16.6", title: "Data Risk", content: "Tingkat kemungkinan pencurian insidental, pergeseran rekam medis tak sengaja saat fase importasi sinkronisasi master data pegawai." },
      { number: "16.7", title: "Cybersecurity Risk", content: "Mengkaji celah penyusupan siber ekstrak *database* karena kelalaian penerapan portal enkripsi yang lemah di fase eksekusi API *Mobile-app* perusahaan." },
      { number: "16.8", title: "Regulatory & Compliance Risk", content: "Risiko penindakan / klaim penalti regulasi yurisdiksi BPJS/Perpajakan dari entitas legal negara apabila arsitektur HRIS melalaikan penarikan tarif valid." },
      { number: "16.9", title: "Third-Party & Vendor Risk", content: "Antisipasi penanganan terhadap bahaya pengunduran *Timeline* jika spesifikasi Vendor Konsultan mangkir kualifikasi janji di ranah rilis *Production*." },
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
      { number: "17.1", title: "TCO & Cloud FinOps Analysis", content: "Menghitung perhitungan menyeluruh pengeluaran 5 tahunan, mengukur transisi beban *CAPEX* bergeser ke *OPEX* awan bulanan, lengkap bersama strategi orkestrasi kendali bayar awan (*FinOps*)." },
      { number: "17.2", title: "Make vs Buy Analysis", content: "Kajian perbandingan antara membangun sistem secara internal (*Make*) versus mengadopsi solusi SaaS yang sudah tersedia di pasaran (*Buy*)." },
      { number: "17.3", title: "Cost Estimation", content: "Rekapitulasi agregat harga jasa implementasi konsultasi dan ongkos server pada saat penganggaran proposal modal." },
      { number: "17.4", title: "Investment Phasing", content: "Dokumen strategis perancangan pembagian penyebaran pencairan pendanaan per tahun fiskal agar tak menyiksa alokasi likuiditas belanja modal rutin (*Capital Expenditure / Capex*)." },
      { number: "17.5", title: "Budget Projection", content: "Perumusan angka estimasi penarikan komitmen dana kas tahunan untuk diinput secara presisi pada kalender kerja IT." },
      { number: "17.6", title: "Financial Rigor (NPV, IRR & Sensitivity)", content: "Pembuktian rasionalisasi *Business Case* lewat metrik teruji dewan komisaris — memaparkan *Net Present Value (NPV)*, *Internal Rate of Return (IRR)*, serta melakukan simulasi skenario pesimis/optimis pada variabel anggaran proyek (*Sensitivity Analysis*)." },
      { number: "17.7", title: "Benefit Realization Plan", content: "Dokumentasi pengawasan pencapaian *Benefit* aktual kuantitatif yang akan ditagih kembali saat inisiatif tersebut genap aktif 1 tahun pasca instalasi penuh." },
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
      { number: "18.1", title: "HCIS Success Metrics", content: "Indikator utama keberhasilan proyek: ketepatan waktu rilis, kepatuhan anggaran (*on-budget*), dan pemenuhan spesifikasi fitur yang disepakati." },
      { number: "18.2", title: "Operational KPI", content: "Indikator *Availability/Uptime* teknikal arsitektur layanan IT (contoh respons komputasi di bawah 3 detik / insiden tiket terselesaikan maksimum dalam 2x24 jam)." },
      { number: "18.3", title: "Strategic KPI", content: "Pengukuran valid atas capaian fungsional SDM yang mendadak meningkat kapasitas strategisnya (*Contoh efisiensi biaya pemenuhan waktu Lowongan Kandidat*)." },
      { number: "18.4", title: "Adoption Metrics", content: "Pantauan metrik penggunaan / Log akses masuk frekuensi aktivasi portal harian/bulanan mandiri di *smartphone* milik pegawai." },
      { number: "18.5", title: "Value-Based Metrics", content: "Paramater reduksi atas kerugian biaya komersil unit, memantau *Man-hour cost saving* pasca hilangnya kertas birokrasi dan rekap absensi harian manual HR." },
      { number: "18.6", title: "ESG & Workforce Diversity Metrics", content: "Format indikator persentase demografis inklusivitas rasio proporsional kepemimpinan *Gender/Minoritas* yang diperlukan langsung bagi korporasi di perihal audit sosial *Environment, Social, and Governance (ESG)*." },
      {
        number: "18.7", title: "Value Realization Tracking", content: "Dasbor komparasi retrospektif atas laporan realisasi fungsional inisiatif vs rasio metrik prediksi awal proposal *Business Case*.",
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
      { number: "19.1", title: "Bimodal Implementation Approach (Two-Speed IT)", content: "Pendekatan metodologi hibrida di mana arsitektur transaksional stabil dikembangkan lewat jalur sekuensial panjang (SAP Activate), berbarengan dengan kerangka lincah cepat (*Scrum/Agile*) khusus pengembangan lini interaksi dinamis portal aplikasi." },
      { number: "19.2", title: "Rollout Strategy", content: "Pemetaan transisi geografis adaptasi instalasi cabang / wilayah dari pusat secara kompartemental (Tahapan Parsial)." },
      { number: "19.3", title: "Pilot Strategy", content: "Rencana uji terbatas / Beta rilis operasional spesifik departemen pengawal untuk meminimalisasi kerusakan ekosistem operasional korporat riil." },
      { number: "19.4", title: "Deployment Strategy & DevSecOps", content: "Mekanisme penyerahan piranti ke wilayah *Production* memanfaatkan automasi peluncuran integrasi kontinu serta penegakan gerbang proteksi (*DevSecOps CI/CD*) guna mempercepat ritme rilis aman tanpa celah." },
      { number: "19.5", title: "UAT Framework & Test Scenarios", content: "Panduan parameter serangkaian sesi inspeksi validasi penerimaan aplikasi *UAT* dengan permutasi skenario khusus." },
      { number: "19.6", title: "Performance & Load Testing", content: "Simulasi penyiksaan ketahanan performa batas memori ketika arus lalu-lintas 10,000 interaksi login pegawai tersinkron dalam sekejap pukul 08.00 pagi." },
      { number: "19.7", title: "Security Penetration Testing", content: "Kewajiban pengujian penetrasi / pembongkaran intrusi aplikasi oleh unit spesialis keamanan (*Hacker Etis / Red team*) memastikan *Source Code* kebal injeksi." },
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
      { number: "20.1", title: "Hypercare Model (90 Hari Pasca Go-Live)", content: "Fase dukungan intensif selama 90 hari pertama pasca *go-live*, di mana tim vendor/konsultan siaga penuh menangani kendala teknis pengguna yang baru bertransisi dari sistem lama." },
      { number: "20.2", title: "L1/L2/L3 Support Tiering", content: "Hierarki model *Helpdesk HR* per tingkat (Level 1 Pertanyaan Administratif mandiri, L2 Isu operasional *Error*, dan L3 Cacat Skrip program bagi spesialis pengembang piranti)." },
      { number: "20.3", title: "Incident & Problem Management", content: "Prosedur standar penanganan dan eskalasi insiden layanan — dari deteksi awal hingga investigasi akar masalah (*Root-Cause Analysis*) dan restorasi layanan." },
      { number: "20.4", title: "Enhancement & Bug Intake Process", content: "Mekanisme prosedur komite bagi persetujuan fungsional / usulan tambahan modifikasi layar atau kalkulasi modul jika terindikasi galat pasca selesainya proyek utama." },
      { number: "20.5", title: "System Performance Monitoring", content: "Konfigurasi pemantauan visibilitas kapasitas respons perantara RAM/Storage/Trafik akses latensi *cloud server API* di dasbor *Monitoring* IT terpusat." },
      { number: "20.6", title: "SAP Annual Version Upgrade Management", content: "Standardisasi penanganan sinkronisasi adaptasi penginstalan fitur SAP/versi *Software Cloud* baru demi mitigasi arsitektur dari *Obsolescence* masa waktu fungsionalitasnya." },
      { number: "20.7", title: "Continuous Improvement Cadence", content: "Kultur evaluatif untuk penyetelan kualitas kapabilitas ulang fungsi teknis (tuning fungsional *Microservices* portal) sesuai laju dinamika perubahan kebijakan baru operasional direksi HCIS." },
      { number: "20.8", title: "Post-Implementation Review (PIR)", content: "Eksekusi asesmen interogatif penutup proyek bagi anggota PMO sebagai bekal portofolio pengalaman proyek integrasi berikutnya terkait ketidakakuratan anggaran / timeline." },
      { number: "20.9", title: "Knowledge Transfer & Documentation", content: "Panduan transfer pewarisan kapabilitas pengetahuan pengelolaan sistem dan manual pelatihan *Configuration Document* dari Tim Konsultan Implementator lepas menuju tim Pengelola IT fungsional mandiri." },
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
      { number: "21.1", title: "Key Takeaways", content: "Ringkasan intisari mutlak dan penekanan pada kapabilitas strategis korporasi setelah berhasil diakselerasinya penyelesaian *roadmapping*." },
      { number: "21.2", title: "Immediate Actions (0–3 Bulan)", content: "Daftar instruksional tahapan darurat pelantikan *Steering Committee PMO*, seleksi rilis formulasi penunjukan implementasi *Vendor*, serta mobilisasi internal di bulan berjalan pertama purna desain HCIS disahkan." },
      { number: "21.3", title: "Roadmap Governance Kick-off", content: "Langkah final peresmian deklarasi pengesahan mandat eksekusi fungsional dan anggaran integrasi menuju eksekusi *Project Deployment* di pangkalan komputasi operasional." },
    ],
  },
];

export const appendix = [
  { code: "A", title: "HR Capability Map", description: "Peta visual yang mengelompokkan seluruh kapabilitas HR ke dalam hierarki fungsi yang terstruktur." },
  { code: "B", title: "HR Process Maps (Hire-to-Retire)", description: "Diagram alur *BPMN* untuk setiap proses HR dari rekrutmen hingga pensiun (*To-Be state*)." },
  { code: "C", title: "Application Portfolio", description: "Katalog inventaris semua aplikasi HR eksisting yang dievaluasi pada tahap *As-Is Assessment*." },
  { code: "D", title: "Data Dictionary", description: "Kamus istilah teknis — mendefinisikan field data, atribut tabel, dan standar pengisian untuk menjamin konsistensi antar sistem (contoh: \"Rentang Golongan Staf\" vs \"Job-Grade Level\")." },
  { code: "E", title: "Integration Diagram", description: "Diagram topologi yang menggambarkan aliran data antar sistem melalui layer *Middleware*." },
  { code: "F", title: "Technology Standards", description: "Standar teknis yang mengatur versi *software*, protokol keamanan, dan izin penggunaan *library open-source* yang disetujui organisasi." },
  { code: "G", title: "Glossary", description: "Kamus singkatan dan jargon teknis untuk membantu pembaca non-teknis memahami dokumen." },
  { code: "H", title: "RACI Matrix", description: "Matriks yang mendefinisikan penanggung jawab setiap tugas di setiap fase implementasi (*Planning, Build, Test, Deploy*)." },
  { code: "I", title: "Data Privacy Impact Assessment (DPIA)", description: "Formulir evaluasi risiko privasi yang wajib diisi untuk setiap fitur baru yang memproses data pribadi karyawan." },
  { code: "J", title: "Vendor Evaluation Scorecard", description: "Lembar penilaian terstandar untuk mengevaluasi dan membandingkan calon vendor implementor secara objektif." },
  { code: "K", title: "Hire-to-Retire Process Blueprint", description: "Blueprint proses HR versi *To-Be* — alur kerja target setelah *Business Process Reengineering* selesai." },
  { code: "L", title: "Service Blueprint Master (HR Services)", description: "Kanvas *Service Design* yang menghubungkan perjalanan pengguna (*frontstage*) dengan sistem dan proses pendukung di balik layar (*backstage*)." },
];

export const timelinePhases = [
  { year: "2026", label: "Foundation", color: "bg-blue-500", desc: "Assessment & Core HR Setup" },
  { year: "2027", label: "Build", color: "bg-indigo-500", desc: "Module Development & Pilot" },
  { year: "2028", label: "Integrate", color: "bg-purple-500", desc: "SAP–IHCMIS Integration" },
  { year: "2029", label: "Optimize", color: "bg-violet-500", desc: "AI, Analytics & Intelligence" },
  { year: "2030", label: "Transform", color: "bg-fuchsia-500", desc: "Full Hire-to-Retire" },
];
