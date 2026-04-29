import { appendix } from "@/data/chapters";
import BottomNav from "@/components/BottomNav";
import Link from "next/link";

const appendixColors = [
  { color: "from-blue-500 to-cyan-500", bg: "from-blue-900/40 to-cyan-900/40", text: "text-blue-400", border: "border-blue-500/30" },
  { color: "from-purple-500 to-pink-500", bg: "from-purple-900/40 to-pink-900/40", text: "text-purple-400", border: "border-purple-500/30" },
  { color: "from-amber-500 to-orange-500", bg: "from-amber-900/40 to-orange-900/40", text: "text-amber-400", border: "border-amber-500/30" },
  { color: "from-teal-500 to-emerald-500", bg: "from-teal-900/40 to-emerald-900/40", text: "text-teal-400", border: "border-teal-500/30" },
  { color: "from-indigo-500 to-blue-500", bg: "from-indigo-900/40 to-blue-900/40", text: "text-indigo-400", border: "border-indigo-500/30" },
  { color: "from-rose-500 to-red-500", bg: "from-rose-900/40 to-red-900/40", text: "text-rose-400", border: "border-rose-500/30" },
  { color: "from-violet-500 to-purple-500", bg: "from-violet-900/40 to-purple-900/40", text: "text-violet-400", border: "border-violet-500/30" },
];

const appendixIcons = ["🗺️", "🔄", "📦", "🗃️", "🔗", "⚡", "📚", "📋", "🔏", "🏆", "🗂️", "🔵"];
// Lampiran G (index 6) = Glossary → terhubung ke halaman /glossary
// Lampiran L (index 11) = Service Blueprint Master → terhubung ke /bab/6/6.4
const appendixLinks: Record<string, string> = {
  G: "/glossary",
  L: "/bab/6/6.4",
};

export default function LampiranPage() {
  return (
    <div className="min-h-screen dot-grid pb-28">
      {/* Header */}
      <div className="header-blur sticky top-0 z-40 px-4 py-3 max-w-lg mx-auto flex items-center gap-3">
        <Link href="/" className="w-9 h-9 rounded-xl glass flex items-center justify-center text-slate-300">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M19 12H5M5 12l7 7M5 12l7-7" />
          </svg>
        </Link>
        <div>
          <p className="text-xs text-slate-500">Roadmap HCIS 2026–2030</p>
          <p className="text-sm font-semibold text-white">Lampiran (Appendix)</p>
        </div>
      </div>

      <div className="px-4 max-w-lg mx-auto pt-4">
        {/* Title */}
        <div className="mb-6 animate-fade-in">
          <h1 className="text-2xl font-bold gradient-text mb-1">Lampiran</h1>
          <p className="text-sm text-slate-400">Dokumen pendukung dan referensi teknis</p>
        </div>

        {/* Appendix grid */}
        <div className="grid grid-cols-1 gap-3">
          {appendix.map((item, i) => {
            const style = appendixColors[i % appendixColors.length];
            const icon = appendixIcons[i % appendixIcons.length];
            const href = appendixLinks[item.code];
            const cardContent = (
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${style.color} flex items-center justify-center text-2xl flex-shrink-0 shadow-lg`}>
                  {icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full bg-gradient-to-r ${style.color} text-white`}>
                      Lampiran {item.code}
                    </span>
                    {href && (
                      <span className="text-[10px] text-green-400 glass-light px-1.5 py-0.5 rounded-md border border-green-500/30">
                        Tersedia →
                      </span>
                    )}
                  </div>
                  <h3 className="text-sm font-semibold text-white mt-1.5">{item.title}</h3>
                </div>
                <div className={`w-8 h-8 rounded-xl glass-light border ${style.border} flex items-center justify-center flex-shrink-0`}>
                  {href ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={style.text}>
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={style.text}>
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                  )}
                </div>
              </div>
            );
            return href ? (
              <Link key={item.code} href={href}>
                <div className={`glass rounded-2xl p-4 card-hover animate-fade-in-up`} style={{ animationDelay: `${i * 80}ms` }}>
                  {cardContent}
                </div>
              </Link>
            ) : (
              <div key={item.code} className={`glass rounded-2xl p-4 animate-fade-in-up`} style={{ animationDelay: `${i * 80}ms` }}>
                {cardContent}
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <div className="mt-6 glass rounded-2xl p-4 animate-fade-in-up delay-500">
          <div className="flex items-start gap-3">
            <div className="text-2xl">💡</div>
            <div>
              <p className="text-sm font-semibold text-white mb-1">Tentang Lampiran</p>
              <p className="text-xs text-slate-400 leading-relaxed">
                Lampiran merupakan dokumen pendukung yang akan dikembangkan seiring dengan progres implementasi roadmap.
                Setiap lampiran mendukung analisis dan keputusan dalam bab-bab utama dokumen Roadmap HCIS 2026–2030.
              </p>
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
