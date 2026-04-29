import Link from "next/link";
import BottomNav from "@/components/BottomNav";
import { chapters } from "@/data/chapters";
import {
  metaDomains,
  metaRelationships,
  subModels,
  crossCuttingConcerns,
  transformationMethodology,
} from "@/data/metamodel";

export const metadata = {
  title: "Meta-Model & Peta Hubungan | Roadmap HCIS 2026–2030",
};

const typeStyle: Record<string, { bg: string; text: string; label: string }> = {
  feeds:    { bg: "bg-blue-500/20",   text: "text-blue-400",   label: "Memberi Input" },
  enables:  { bg: "bg-green-500/20",  text: "text-green-400",  label: "Mengaktifkan" },
  governs:  { bg: "bg-amber-500/20",  text: "text-amber-400",  label: "Mengatur" },
  bridges:  { bg: "bg-purple-500/20", text: "text-purple-400", label: "Menjembatani" },
  validates:{ bg: "bg-rose-500/20",   text: "text-rose-400",   label: "Memvalidasi" },
};

export default function MetaModelPage() {
  const totalSections = chapters.reduce((a, c) => a + c.sections.length, 0);

  return (
    <div className="min-h-screen dot-grid pb-28">

      {/* Header */}
      <div className="header-blur sticky top-0 z-40 px-4 py-3 max-w-lg mx-auto flex items-center gap-3">
        <Link href="/" className="w-9 h-9 rounded-xl glass flex items-center justify-center text-slate-300 flex-shrink-0">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M19 12H5M5 12l7 7M5 12l7-7" />
          </svg>
        </Link>
        <div>
          <p className="text-xs text-slate-500">Roadmap HCIS 2026–2030</p>
          <p className="text-sm font-semibold text-white">Meta-Model & Peta Hubungan</p>
        </div>
      </div>

      <div className="px-4 max-w-lg mx-auto pt-4 space-y-5">

        {/* Hero */}
        <div className="animate-fade-in">
          <h1 className="text-2xl font-bold gradient-text mb-1">HCIS Roadmap Meta-Model</h1>
          <p className="text-sm text-slate-400 leading-relaxed">
            Kerangka konseptual yang menunjukkan <span className="text-blue-400 font-medium">hubungan struktural</span> antar-bab,
            <span className="text-purple-400 font-medium"> sub-model bersarang</span>, dan
            <span className="text-fuchsia-400 font-medium"> lintas-domain concerns</span> — referensi navigasi dokumen secara holistik.
          </p>
          <div className="flex gap-3 mt-3">
            <div className="glass-light rounded-lg px-3 py-1.5 text-center">
              <p className="text-base font-bold text-blue-400">{chapters.length}</p>
              <p className="text-[10px] text-slate-500">Bab</p>
            </div>
            <div className="glass-light rounded-lg px-3 py-1.5 text-center">
              <p className="text-base font-bold text-purple-400">{totalSections}</p>
              <p className="text-[10px] text-slate-500">Sub-Bab</p>
            </div>
            <div className="glass-light rounded-lg px-3 py-1.5 text-center">
              <p className="text-base font-bold text-rose-400">{metaDomains.length}</p>
              <p className="text-[10px] text-slate-500">Domain</p>
            </div>
            <div className="glass-light rounded-lg px-3 py-1.5 text-center">
              <p className="text-base font-bold text-amber-400">{subModels.length}</p>
              <p className="text-[10px] text-slate-500">Sub-Model</p>
            </div>
          </div>
        </div>

        {/* ── SECTION 1: Transformation Methodology ── */}
        <div className="animate-fade-in-up delay-100">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1 h-4 rounded-full bg-gradient-to-b from-blue-400 to-purple-500" />
            <h2 className="text-sm font-bold text-white">Metodologi Transformasi</h2>
            <span className="text-xs text-slate-500 ml-auto glass-light px-2 py-0.5 rounded-lg">{transformationMethodology.version}</span>
          </div>
          <div className="glass rounded-2xl p-4">
            <p className="text-xs text-slate-400 mb-3 leading-relaxed">
              Transformasi HCIS mengikuti 6-fase metodologi linier dengan feedback loop — setiap fase menghasilkan output yang menjadi input fase berikutnya.
            </p>
            <div className="flex flex-col gap-2">
              {transformationMethodology.phases.map((phase, i) => {
                const babLabels = phase.babs.map(b => `BAB ${b}`).join(", ");
                return (
                  <div key={phase.phase} className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${phase.color} flex items-center justify-center flex-shrink-0 text-white text-[10px] font-black`}>
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-black tracking-widest ${phase.textColor}`}>{phase.phase}</span>
                        <span className="text-[10px] text-slate-600">{babLabels}</span>
                      </div>
                      <p className="text-xs text-slate-400 leading-snug">{phase.description}</p>
                    </div>
                    {i < transformationMethodology.phases.length - 1 && (
                      <div className="absolute left-[2.25rem] mt-8 w-0.5 h-2 bg-slate-700" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── SECTION 2: Domain Layer Map ── */}
        <div className="animate-fade-in-up delay-200">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1 h-4 rounded-full bg-gradient-to-b from-cyan-400 to-blue-500" />
            <h2 className="text-sm font-bold text-white">Peta Domain (8 Layer)</h2>
          </div>
          <div className="flex flex-col gap-2">
            {metaDomains.map((domain) => {
              const domainChapters = chapters.filter(c => domain.chapters.includes(c.id));
              return (
                <div key={domain.id} className={`glass rounded-xl border ${domain.borderColor} overflow-hidden`}>
                  <div className="px-3 py-2 flex items-center gap-2.5">
                    <div className={`w-2.5 h-2.5 rounded-full ${domain.dotColor} flex-shrink-0`} />
                    <div className="flex-1 min-w-0">
                      <p className={`text-xs font-bold ${domain.textColor}`}>{domain.label}</p>
                      <p className="text-[10px] text-slate-500">{domain.sublabel}</p>
                    </div>
                  </div>
                  <div className="px-3 pb-2.5">
                    <p className="text-[11px] text-slate-400 leading-snug mb-2">{domain.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {domainChapters.map(c => (
                        <Link key={c.id} href={`/bab/${c.id}`}>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-lg bg-gradient-to-r ${c.color} text-white opacity-90 hover:opacity-100 transition-opacity`}>
                            {c.bab}
                            {c.isNew && <span className="ml-1 text-[8px]">★</span>}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── SECTION 3: Key Relationships ── */}
        <div className="animate-fade-in-up delay-300">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1 h-4 rounded-full bg-gradient-to-b from-purple-400 to-pink-500" />
            <h2 className="text-sm font-bold text-white">Hubungan Kunci Antar-Domain</h2>
            <span className="text-xs text-slate-500 ml-auto">{metaRelationships.length} relasi</span>
          </div>
          <div className="flex flex-col gap-2">
            {metaRelationships.map((rel, i) => {
              const fromDomain = metaDomains.find(d => d.id === rel.from);
              const toDomain = metaDomains.find(d => d.id === rel.to);
              const style = typeStyle[rel.type];
              return (
                <div key={i} className="glass rounded-xl p-3">
                  <div className="flex items-start gap-2 mb-1.5">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className={`text-[10px] font-bold ${fromDomain?.textColor}`}>{fromDomain?.label}</span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-slate-600 flex-shrink-0">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                        <span className={`text-[10px] font-bold ${toDomain?.textColor}`}>{toDomain?.label}</span>
                      </div>
                      <p className="text-xs text-white font-medium mt-0.5">{rel.label}</p>
                    </div>
                    <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${style.bg} ${style.text} flex-shrink-0`}>
                      {style.label}
                    </span>
                  </div>
                  {rel.chapters && (
                    <p className="text-[10px] text-slate-500 leading-snug pl-0 italic">{rel.chapters}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ── SECTION 4: Sub-Models ── */}
        <div className="animate-fade-in-up delay-400">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1 h-4 rounded-full bg-gradient-to-b from-amber-400 to-orange-500" />
            <h2 className="text-sm font-bold text-white">Sub-Model Bersarang</h2>
            <span className="text-xs text-slate-500 ml-auto">{subModels.length} model</span>
          </div>
          <div className="flex flex-col gap-3">
            {subModels.map((sm) => (
              <div key={sm.title} className="glass rounded-2xl overflow-hidden">
                <div className={`px-4 pt-4 pb-3 bg-gradient-to-r ${sm.color} bg-opacity-10`}>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xl">{sm.icon}</span>
                    <h3 className="text-sm font-bold text-white">{sm.title}</h3>
                  </div>
                  <p className="text-xs text-white/80 leading-relaxed">{sm.description}</p>
                </div>
                <div className="px-4 py-3">
                  <div className="flex flex-col gap-2 mb-3">
                    {sm.elements.map((el, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <Link href={`/bab/${el.chapId}/${el.bab.split("/")[0]}`}>
                          <span className="section-badge text-[10px] font-mono font-bold px-2 py-0.5 rounded-lg text-slate-300 flex-shrink-0 whitespace-nowrap hover:text-white transition-colors">
                            {el.bab}
                          </span>
                        </Link>
                        <div>
                          <p className="text-xs font-semibold text-white">{el.label}</p>
                          <p className="text-[10px] text-slate-400 leading-snug">{el.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-start gap-2 bg-white/4 rounded-lg p-2.5 border border-white/8">
                    <span className="text-sm flex-shrink-0">💡</span>
                    <p className="text-[11px] text-slate-300 leading-snug italic">{sm.insight}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── SECTION 5: Cross-Cutting Concerns ── */}
        <div className="animate-fade-in-up delay-500">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1 h-4 rounded-full bg-gradient-to-b from-rose-400 to-red-500" />
            <h2 className="text-sm font-bold text-white">Lintas-Domain Concerns</h2>
          </div>
          <p className="text-xs text-slate-400 mb-3 leading-relaxed">
            Empat dimensi ini tidak terbatas pada satu bab — melintasi semua domain dan harus dipertimbangkan di setiap tahap transformasi.
          </p>
          <div className="grid grid-cols-1 gap-2">
            {crossCuttingConcerns.map((cc) => {
              const babLabels = cc.spansBabs.map(b => `BAB ${b}`);
              return (
                <div key={cc.title} className="glass rounded-xl p-3.5">
                  <div className="flex items-start gap-3">
                    <span className="text-xl flex-shrink-0">{cc.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className={`text-xs font-bold ${cc.color} mb-0.5`}>{cc.title}</p>
                      <p className="text-xs text-slate-400 leading-snug mb-2">{cc.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {babLabels.map((label, i) => (
                          <Link key={i} href={`/bab/${cc.spansBabs[i]}`}>
                            <span className="text-[10px] glass-light px-1.5 py-0.5 rounded-md text-slate-400 hover:text-white transition-colors">
                              {label}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── SECTION 6: Quick Reference Matrix ── */}
        <div className="animate-fade-in-up delay-600">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1 h-4 rounded-full bg-gradient-to-b from-green-400 to-emerald-500" />
            <h2 className="text-sm font-bold text-white">Quick Reference — Bab per Domain</h2>
          </div>
          <div className="glass rounded-2xl p-4">
            <div className="flex flex-col gap-2.5">
              {metaDomains.map((domain) => (
                <div key={domain.id} className="flex items-start gap-3">
                  <div className={`w-1.5 rounded-full ${domain.dotColor} flex-shrink-0 mt-1`} style={{ height: "calc(100% - 4px)", minHeight: "16px" }} />
                  <div className="flex-1">
                    <p className={`text-[10px] font-bold ${domain.textColor} mb-1 uppercase tracking-wide`}>{domain.label}</p>
                    <div className="flex flex-wrap gap-1">
                      {domain.chapters.map(chapId => {
                        const chap = chapters.find(c => c.id === chapId);
                        if (!chap) return null;
                        return (
                          <Link key={chapId} href={`/bab/${chapId}`}>
                            <div className={`text-[10px] px-2 py-0.5 rounded-lg glass-light border ${domain.borderColor} ${domain.textColor} hover:opacity-80 transition-opacity`}>
                              {chap.bab}
                              {chap.isNew && <span className="ml-0.5 text-green-400">★</span>}
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-3 pt-3 border-t border-slate-800 flex items-center gap-2">
              <span className="text-[10px] font-bold text-green-400">★</span>
              <span className="text-[10px] text-slate-500">= Bab baru hasil analisis best practice global</span>
            </div>
          </div>
        </div>

      </div>
      <BottomNav />
    </div>
  );
}
