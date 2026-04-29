import Link from "next/link";
import BottomNav from "@/components/BottomNav";
import GlossaryContent from "@/components/GlossaryContent";
import { glossaryTerms, glossaryCategories } from "@/data/glossary";

export const metadata = {
  title: "Glossary | Roadmap HCIS 2026–2030",
  description: "Kamus istilah global untuk seluruh keyword yang digunakan dalam Roadmap HCIS 2026–2030",
};

export default function GlossaryPage() {
  return (
    <div className="min-h-screen dot-grid pb-28">

      {/* Header */}
      <div className="header-blur sticky top-0 z-40 px-4 py-3 max-w-lg mx-auto flex items-center gap-3">
        <Link href="/" className="w-9 h-9 rounded-xl glass flex items-center justify-center text-slate-300 flex-shrink-0">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M19 12H5M5 12l7 7M5 12l7-7" />
          </svg>
        </Link>
        <div className="flex-1 min-w-0">
          <p className="text-xs text-slate-500">Roadmap HCIS 2026–2030</p>
          <p className="text-sm font-semibold text-white">Glossary</p>
        </div>
        <span className="text-xs text-slate-500 glass-light px-2 py-1 rounded-lg flex-shrink-0">
          {glossaryTerms.length} istilah
        </span>
      </div>

      <div className="px-4 max-w-lg mx-auto pt-4">

        {/* Hero */}
        <div className="mb-5 animate-fade-in">
          <h1 className="text-2xl font-bold gradient-text mb-1">Glossary</h1>
          <p className="text-sm text-slate-400 leading-relaxed">
            Kamus istilah global dari seluruh keyword yang digunakan dalam Roadmap HCIS — mencakup terminologi HR, teknologi, AI, service management, governance, regulasi Indonesia, dan metrik.
          </p>

          {/* Category quick stats */}
          <div className="grid grid-cols-4 gap-2 mt-4">
            {glossaryCategories.map((cat) => {
              const count = glossaryTerms.filter((t) => t.category === cat.id).length;
              return (
                <div key={cat.id} className="glass-light rounded-xl p-2 text-center">
                  <div className="text-base mb-0.5">{cat.icon}</div>
                  <div className={`text-sm font-bold ${cat.textColor}`}>{count}</div>
                  <div className="text-[9px] text-slate-600 leading-tight">{cat.id.split(" ")[0]}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Glossary content (client component) */}
        <GlossaryContent />

      </div>
      <BottomNav />
    </div>
  );
}
