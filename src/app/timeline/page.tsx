import { chapters } from "@/data/chapters";
import BottomNav from "@/components/BottomNav";
import Link from "next/link";

const phaseData = [
  {
    year: "2026",
    label: "Foundation",
    color: "from-blue-500 to-blue-600",
    textColor: "text-blue-400",
    borderColor: "border-blue-500/30",
    chapIds: [1, 2, 3, 4, 5],
    description: "Assessment kondisi eksisting, penyusunan roadmap, HR Service Delivery Model, dan governance setup.",
    milestones: [
      "Kick-off HCIS Transformation Program",
      "Current State Assessment selesai",
      "HR Service Delivery Model ditetapkan",
      "Governance & PMO terbentuk",
      "Compliance Framework (UU PDP) divalidasi",
    ],
  },
  {
    year: "2027",
    label: "Build",
    color: "from-indigo-500 to-indigo-600",
    textColor: "text-indigo-400",
    borderColor: "border-indigo-500/30",
    chapIds: [6, 7, 8, 9],
    description: "Employee Experience design, Target Architecture finalized, Gap Analysis, dan Initiative Catalog lengkap.",
    milestones: [
      "EX Blueprint & Journey Maps selesai",
      "Target HCIS Architecture approved",
      "Initiative Catalog & Vendor Shortlist",
      "Pilot Deployment (1 unit) go-live",
    ],
  },
  {
    year: "2028",
    label: "Integrate",
    color: "from-purple-500 to-purple-600",
    textColor: "text-purple-400",
    borderColor: "border-purple-500/30",
    chapIds: [10, 11, 12, 13],
    description: "Full roadmap execution — SAP–IHCMIS integration, AI/GenAI deployment, Compliance & Regulatory automation.",
    milestones: [
      "SAP–IHCMIS Integration Live",
      "BPJS & PPh 21 Integration Automated",
      "AI Chatbot HR Deployed",
      "Enterprise Rollout Phase 1",
    ],
  },
  {
    year: "2029",
    label: "Optimize",
    color: "from-violet-500 to-violet-600",
    textColor: "text-violet-400",
    borderColor: "border-violet-500/30",
    chapIds: [14, 15, 16, 17],
    description: "Workforce Intelligence, Change Management maturity, Risk monitoring, dan ROI realization.",
    milestones: [
      "Workforce Analytics Dashboard Live",
      "Predictive Analytics Phase 1 Active",
      "Data Quality Score ≥ 95%",
      "ROI Target Tercapai (Year 3)",
    ],
  },
  {
    year: "2030",
    label: "Transform",
    color: "from-fuchsia-500 to-fuchsia-600",
    textColor: "text-fuchsia-400",
    borderColor: "border-fuchsia-500/30",
    chapIds: [18, 19, 20, 21],
    description: "Full Hire-to-Retire coverage, KPI achieved, hypercare model aktif, dan sustainable continuous improvement.",
    milestones: [
      "Full Hire-to-Retire Coverage 100%",
      "All Strategic KPI Targets Achieved",
      "Post Go-Live Support Model Active",
      "HCIS 2031+ Planning Begins",
    ],
  },
];

export default function TimelinePage() {
  return (
    <div className="min-h-screen dot-grid pb-28">
      <div className="header-blur sticky top-0 z-40 px-4 py-3 max-w-lg mx-auto flex items-center gap-3">
        <Link href="/" className="w-9 h-9 rounded-xl glass flex items-center justify-center text-slate-300">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M19 12H5M5 12l7 7M5 12l7-7" />
          </svg>
        </Link>
        <div>
          <p className="text-xs text-slate-500">Roadmap HCIS</p>
          <p className="text-sm font-semibold text-white">Timeline 2026–2030</p>
        </div>
      </div>

      <div className="px-4 max-w-lg mx-auto pt-4">
        <div className="mb-6 animate-fade-in">
          <h1 className="text-2xl font-bold gradient-text mb-1">Visual Timeline</h1>
          <p className="text-sm text-slate-400">Peta perjalanan transformasi HCIS selama 5 tahun — 21 Bab · 11 Lampiran</p>
        </div>

        <div className="relative">
          <div className="absolute left-5 top-6 bottom-6 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-fuchsia-500 opacity-30 z-0" />

          <div className="flex flex-col gap-4">
            {phaseData.map((phase, i) => (
              <div key={phase.year} className="animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${phase.color} flex items-center justify-center flex-shrink-0 shadow-lg z-10`}>
                    <span className="text-xs font-bold text-white">{phase.year.slice(2)}</span>
                  </div>

                  <div className="flex-1">
                    <div className="glass rounded-2xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <span className={`text-xs font-bold ${phase.textColor} uppercase tracking-wider`}>{phase.year}</span>
                          <h3 className="text-base font-bold text-white">{phase.label}</h3>
                        </div>
                        <span className={`text-xs px-2 py-1 rounded-full glass-light border ${phase.borderColor} ${phase.textColor}`}>
                          {phase.chapIds.length} Bab
                        </span>
                      </div>

                      <p className="text-xs text-slate-400 mb-3 leading-relaxed">{phase.description}</p>

                      <div className="flex flex-col gap-1.5 mb-3">
                        {phase.milestones.map((m) => (
                          <div key={m} className="flex items-start gap-2">
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${phase.color} mt-1.5 flex-shrink-0`} />
                            <p className="text-xs text-slate-300">{m}</p>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {phase.chapIds.map((chapId) => {
                          const chap = chapters.find((c) => c.id === chapId);
                          if (!chap) return null;
                          return (
                            <Link key={chapId} href={`/bab/${chapId}`}>
                              <span className={`text-xs px-2 py-1 rounded-lg glass-light border ${phase.borderColor} ${phase.textColor} hover:opacity-80 transition-opacity inline-flex items-center gap-1`}>
                                {chap.bab}
                                {chap.isNew && <span className="text-[8px] font-bold text-green-400">●</span>}
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="mt-4 glass rounded-2xl p-4 animate-fade-in-up delay-500">
          <p className="text-xs font-semibold text-slate-300 mb-2">Keterangan</p>
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-green-500/20 border border-green-500/50 text-green-400">NEW</span>
              <span className="text-xs text-slate-400">Bab baru (best practice gap)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/50 text-amber-400">+</span>
              <span className="text-xs text-slate-400">Bab diperluas</span>
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
