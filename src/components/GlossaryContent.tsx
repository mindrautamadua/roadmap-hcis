"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { glossaryTerms, glossaryCategories, type GlossaryCategory } from "@/data/glossary";

export default function GlossaryContent() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<GlossaryCategory | "Semua">("Semua");

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return glossaryTerms.filter((t) => {
      const matchCat = activeCategory === "Semua" || t.category === activeCategory;
      if (!matchCat) return false;
      if (!q) return true;
      return (
        t.term.toLowerCase().includes(q) ||
        (t.acronym?.toLowerCase().includes(q) ?? false) ||
        t.definition.toLowerCase().includes(q) ||
        t.category.toLowerCase().includes(q)
      );
    });
  }, [search, activeCategory]);

  // Group alphabetically
  const grouped = useMemo(() => {
    const map: Record<string, typeof filtered> = {};
    for (const term of filtered) {
      const letter = term.term[0].toUpperCase();
      if (!map[letter]) map[letter] = [];
      map[letter].push(term);
    }
    return Object.entries(map).sort(([a], [b]) => a.localeCompare(b));
  }, [filtered]);

  const catInfo = (cat: GlossaryCategory) =>
    glossaryCategories.find((c) => c.id === cat) ?? glossaryCategories[0];

  return (
    <div className="space-y-4">

      {/* Search */}
      <div className="relative animate-fade-in-up">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Cari istilah atau akronim..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-9 pr-4 py-3 glass rounded-xl text-sm text-white placeholder-slate-500 outline-none focus:ring-1 focus:ring-blue-500/50 transition-all"
        />
        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Category filter */}
      <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none animate-fade-in-up delay-100">
        <button
          onClick={() => setActiveCategory("Semua")}
          className={`flex-shrink-0 text-xs font-bold px-3 py-1.5 rounded-full transition-all ${
            activeCategory === "Semua"
              ? "bg-blue-500 text-white"
              : "glass-light text-slate-400 hover:text-white"
          }`}
        >
          Semua ({glossaryTerms.length})
        </button>
        {glossaryCategories.map((cat) => {
          const count = glossaryTerms.filter((t) => t.category === cat.id).length;
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex-shrink-0 flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-full transition-all ${
                isActive
                  ? `bg-gradient-to-r ${cat.color} text-white`
                  : "glass-light text-slate-400 hover:text-white"
              }`}
            >
              <span>{cat.icon}</span>
              <span className="hidden sm:inline">{cat.id}</span>
              <span className="opacity-60">({count})</span>
            </button>
          );
        })}
      </div>

      {/* Results count */}
      <div className="flex items-center justify-between animate-fade-in-up delay-150">
        <p className="text-xs text-slate-500">
          {filtered.length === glossaryTerms.length
            ? `${glossaryTerms.length} istilah`
            : `${filtered.length} dari ${glossaryTerms.length} istilah`}
        </p>
        {search && (
          <p className="text-xs text-blue-400">Hasil untuk &ldquo;{search}&rdquo;</p>
        )}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="glass rounded-2xl p-8 text-center">
          <div className="text-3xl mb-2">🔍</div>
          <p className="text-sm font-semibold text-white mb-1">Tidak ditemukan</p>
          <p className="text-xs text-slate-500">Coba kata kunci lain atau reset filter.</p>
        </div>
      )}

      {/* Alphabetical groups */}
      {grouped.map(([letter, terms]) => (
        <div key={letter} className="animate-fade-in-up">
          <div className="flex items-center gap-2 mb-2 sticky top-[56px] z-10 bg-[#060b18]/80 backdrop-blur-sm py-1">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/20 flex items-center justify-center">
              <span className="text-xs font-black text-blue-400">{letter}</span>
            </div>
            <span className="text-xs text-slate-600">{terms.length} istilah</span>
          </div>

          <div className="flex flex-col gap-2">
            {terms.map((term) => {
              const cat = catInfo(term.category);
              return (
                <div key={term.term} className="glass rounded-xl overflow-hidden">
                  {/* Header */}
                  <div className="px-4 pt-3.5 pb-2">
                    <div className="flex items-start gap-2 flex-wrap mb-1">
                      <h3 className="text-sm font-bold text-white leading-tight flex-1">{term.term}</h3>
                      {term.acronym && (
                        <span className={`text-xs font-black px-2 py-0.5 rounded-lg bg-gradient-to-r ${cat.color} text-white flex-shrink-0`}>
                          {term.acronym}
                        </span>
                      )}
                    </div>
                    <span className={`inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full glass-light border ${cat.borderColor} ${cat.textColor}`}>
                      {cat.icon} {term.category}
                    </span>
                  </div>

                  {/* Definition */}
                  <div className="px-4 pb-3">
                    <p className="text-xs text-slate-300 leading-relaxed mb-2">{term.definition}</p>

                    {/* Context */}
                    {term.context && (
                      <div className="flex items-start gap-1.5 mb-2">
                        <span className="text-xs text-amber-400 flex-shrink-0 mt-0.5">→</span>
                        <p className="text-[11px] text-amber-300/80 leading-snug italic">{term.context}</p>
                      </div>
                    )}

                    {/* Footer: related babs + related terms */}
                    <div className="flex items-center gap-2 flex-wrap">
                      {term.relatedBabs && term.relatedBabs.length > 0 && (
                        <div className="flex items-center gap-1 flex-wrap">
                          <span className="text-[10px] text-slate-600">Lihat:</span>
                          {term.relatedBabs.map((bab) => (
                            <Link key={bab} href={`/bab/${bab}`}>
                              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md glass-light border ${cat.borderColor} ${cat.textColor} hover:opacity-80 transition-opacity`}>
                                BAB {bab}
                              </span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                    {term.relatedTerms && term.relatedTerms.length > 0 && (
                      <div className="flex items-center gap-1 flex-wrap mt-1.5">
                        <span className="text-[10px] text-slate-600">Terkait:</span>
                        {term.relatedTerms.map((rt) => (
                          <span
                            key={rt}
                            onClick={() => setSearch(rt)}
                            className="text-[10px] text-slate-500 hover:text-blue-400 cursor-pointer transition-colors underline underline-offset-2"
                          >
                            {rt}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
