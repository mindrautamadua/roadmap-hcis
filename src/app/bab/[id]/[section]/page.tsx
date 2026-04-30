import { chapters } from "@/data/chapters";
import { notFound } from "next/navigation";
import Link from "next/link";
import BottomNav from "@/components/BottomNav";
import ThemeToggle from "@/components/ThemeToggle";

interface Props {
  params: Promise<{ id: string; section: string }>;
}

export async function generateStaticParams() {
  const params: { id: string; section: string }[] = [];
  for (const chapter of chapters) {
    for (const section of chapter.sections) {
      params.push({ id: String(chapter.id), section: section.number });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props) {
  const { id, section } = await params;
  const chapter = chapters.find((c) => c.id === Number(id));
  const sec = chapter?.sections.find((s) => s.number === section);
  if (!chapter || !sec) return { title: "Not Found" };
  return { title: `${sec.number} ${sec.title} | Roadmap HCIS` };
}

const swimlaneStyle: Record<string, { bg: string; border: string; text: string; dot: string }> = {
  slate:  { bg: "bg-slate-800/60",  border: "border-slate-600/40",  text: "text-slate-300",  dot: "bg-slate-400"  },
  blue:   { bg: "bg-blue-900/40",   border: "border-blue-500/40",   text: "text-blue-300",   dot: "bg-blue-400"   },
  yellow: { bg: "bg-yellow-900/30", border: "border-yellow-500/50", text: "text-yellow-300", dot: "bg-yellow-400" },
  purple: { bg: "bg-purple-900/40", border: "border-purple-500/40", text: "text-purple-300", dot: "bg-purple-400" },
  green:  { bg: "bg-green-900/40",  border: "border-green-500/40",  text: "text-green-300",  dot: "bg-green-400"  },
};

export default async function SectionPage({ params }: Props) {
  const { id, section } = await params;
  const chapter = chapters.find((c) => c.id === Number(id));
  if (!chapter) notFound();

  const idx = chapter.sections.findIndex((s) => s.number === section);
  if (idx === -1) notFound();

  const sec = chapter.sections[idx];
  const prevSec = idx > 0 ? chapter.sections[idx - 1] : null;
  const nextSec = idx < chapter.sections.length - 1 ? chapter.sections[idx + 1] : null;

  const hasContent = sec.content || sec.keyPoints?.length || sec.swimlanes?.length;

  return (
    <div className="min-h-screen dot-grid pb-28">

      {/* Sticky Header */}
      <div className="header-blur sticky top-0 z-40 px-4 py-3 max-w-lg mx-auto flex items-center gap-3">
        <Link
          href={`/bab/${chapter.id}`}
          className="w-9 h-9 rounded-xl glass flex items-center justify-center text-slate-300 flex-shrink-0"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M19 12H5M5 12l7 7M5 12l7-7" />
          </svg>
        </Link>
        <div className="flex-1 min-w-0">
          <p className="text-xs text-slate-500 truncate">{chapter.bab} · {chapter.title}</p>
          <p className="text-sm font-semibold text-white truncate">{sec.number} {sec.title}</p>
        </div>
        <span className="text-xs text-slate-500 flex-shrink-0">{idx + 1}/{chapter.sections.length}</span>
        <ThemeToggle />
      </div>

      <div className="px-4 max-w-lg mx-auto pt-4 space-y-4">

        {/* Hero */}
        <div className={`relative rounded-2xl overflow-hidden animate-fade-in`}>
          <div className={`absolute inset-0 bg-gradient-to-br ${chapter.gradient}`} />
          <div className="relative p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${chapter.color} flex items-center justify-center text-xl flex-shrink-0 shadow-lg`}>
                {chapter.icon}
              </div>
              <div>
                <p className="text-[11px] text-slate-400">{chapter.bab}</p>
                <span className="section-badge text-xs font-mono font-bold px-2 py-0.5 rounded-lg text-slate-200">
                  Sub-Bab {sec.number}
                </span>
              </div>
            </div>
            <h1 className="text-xl font-bold text-white leading-tight">{sec.title}</h1>
          </div>
        </div>

        {/* Overview */}
        {sec.content && (
          <div className="glass rounded-2xl p-4 animate-fade-in-up delay-100">
            <div className="flex items-center gap-2 mb-3">
              <div className={`w-1 h-4 rounded-full bg-gradient-to-b ${chapter.color}`} />
              <h2 className="text-sm font-bold text-white">Overview</h2>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">{sec.content}</p>
          </div>
        )}

        {/* Key Points */}
        {sec.keyPoints && sec.keyPoints.length > 0 && (
          <div className="glass rounded-2xl p-4 animate-fade-in-up delay-200">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1 h-4 rounded-full bg-gradient-to-b from-blue-400 to-indigo-500" />
              <h2 className="text-sm font-bold text-white">Komponen Utama</h2>
              <span className="text-xs text-slate-500 ml-auto">{sec.keyPoints.length} item</span>
            </div>
            <div className="flex flex-col gap-2">
              {sec.keyPoints.map((point, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${chapter.color} flex items-center justify-center flex-shrink-0 mt-0.5 text-white text-[10px] font-bold shadow`}>
                    {i + 1}
                  </div>
                  <p className="text-sm text-slate-200 leading-snug">{point}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Service Blueprint Swimlanes */}
        {sec.swimlanes && sec.swimlanes.length > 0 && (
          <div className="animate-fade-in-up delay-300">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1 h-4 rounded-full bg-gradient-to-b from-rose-400 to-pink-500" />
              <h2 className="text-sm font-bold text-white">Service Blueprint</h2>
              <span className="text-xs text-slate-500 ml-auto glass-light px-2 py-0.5 rounded-lg">
                {sec.swimlanes.filter((s) => s.items.length > 0).length} layers
              </span>
            </div>

            <div className="flex flex-col gap-2">
              {sec.swimlanes.map((lane, i) => {
                const style = swimlaneStyle[lane.color] ?? swimlaneStyle.slate;

                if (lane.items.length === 0) {
                  return (
                    <div key={i} className="flex items-center gap-3 py-1.5">
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-yellow-500/60 to-transparent" />
                      <span className="text-[10px] font-bold text-yellow-400 uppercase tracking-widest flex-shrink-0 px-2">
                        {lane.label}
                      </span>
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-yellow-500/60 to-transparent" />
                    </div>
                  );
                }

                return (
                  <div key={i} className={`rounded-xl border ${style.border} ${style.bg} overflow-hidden`}>
                    <div className={`px-3 py-2 flex items-center gap-2 border-b ${style.border}`}>
                      <div className={`w-2 h-2 rounded-full ${style.dot} flex-shrink-0`} />
                      <p className={`text-xs font-bold ${style.text} uppercase tracking-wide`}>{lane.label}</p>
                    </div>
                    <div className="px-3 py-2.5 flex flex-col gap-1.5">
                      {lane.items.map((item, j) => (
                        <div key={j} className="flex items-start gap-2">
                          <span className={`text-[10px] font-bold ${style.text} opacity-60 flex-shrink-0 mt-0.5 w-3`}>{j + 1}.</span>
                          <p className="text-xs text-slate-300 leading-snug">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-3 glass-light rounded-xl p-3 flex items-start gap-2">
              <span className="text-base flex-shrink-0">💡</span>
              <p className="text-xs text-slate-400 leading-relaxed">
                Blueprint ini menjadi jembatan antara{" "}
                <Link href="/bab/6/6.3" className="text-blue-400 font-medium underline underline-offset-2">Employee Journey Map (6.3)</Link>{" "}
                dan{" "}
                <Link href="/bab/5" className="text-purple-400 font-medium underline underline-offset-2">HR Service Delivery Model (BAB 5)</Link>.
                Artefak lengkapnya tersedia di <span className="text-amber-400 font-medium">Lampiran L</span>.
              </p>
            </div>
          </div>
        )}

        {/* Fallback jika belum ada konten */}
        {!hasContent && (
          <div className="glass rounded-2xl p-8 text-center animate-fade-in-up delay-100">
            <div className="text-3xl mb-3">📝</div>
            <p className="text-sm font-semibold text-white mb-1">Konten sedang disiapkan</p>
            <p className="text-xs text-slate-500">Sub-bab {sec.number} akan dilengkapi dalam penyusunan dokumen final.</p>
          </div>
        )}

        {/* Strategic insight box */}
        <div className="glass-light rounded-xl p-4 border border-slate-800 animate-fade-in-up delay-400">
          <div className="flex items-start gap-3">
            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${chapter.color} flex items-center justify-center text-sm flex-shrink-0`}>
              💡
            </div>
            <div>
              <p className="text-xs font-bold text-white mb-1">Insight Strategis</p>
              <p className="text-xs text-slate-400 leading-relaxed">
                Implementasi <span className="text-slate-200 font-medium">{sec.title}</span> merupakan bagian dari {chapter.bab} yang berkontribusi langsung pada target transformasi digital HC 2030.
              </p>
            </div>
          </div>
        </div>

        {/* Prev / Next navigasi dalam satu bab */}
        <div className="grid grid-cols-2 gap-3 animate-fade-in-up delay-500">
          {prevSec ? (
            <Link href={`/bab/${chapter.id}/${prevSec.number}`}>
              <div className="glass rounded-xl p-3 card-hover h-full">
                <p className="text-[10px] text-slate-500 mb-1">← Sebelumnya</p>
                <p className="text-[10px] font-bold text-slate-400">{prevSec.number}</p>
                <p className="text-xs text-white leading-snug mt-0.5 line-clamp-2">{prevSec.title}</p>
              </div>
            </Link>
          ) : (
            <Link href={`/bab/${chapter.id}`}>
              <div className="glass rounded-xl p-3 card-hover h-full flex items-center gap-2">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-slate-500 flex-shrink-0">
                  <path d="M19 12H5M5 12l7 7M5 12l7-7" />
                </svg>
                <p className="text-xs text-slate-400">Ke {chapter.bab}</p>
              </div>
            </Link>
          )}

          {nextSec ? (
            <Link href={`/bab/${chapter.id}/${nextSec.number}`}>
              <div className="glass rounded-xl p-3 card-hover h-full text-right">
                <p className="text-[10px] text-slate-500 mb-1">Berikutnya →</p>
                <p className="text-[10px] font-bold text-slate-400">{nextSec.number}</p>
                <p className="text-xs text-white leading-snug mt-0.5 line-clamp-2">{nextSec.title}</p>
              </div>
            </Link>
          ) : (
            <Link href={`/bab/${chapter.id}`}>
              <div className="glass rounded-xl p-3 card-hover h-full flex items-center justify-end gap-2">
                <p className="text-xs text-slate-400">Ke {chapter.bab}</p>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-slate-500 flex-shrink-0">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </div>
            </Link>
          )}
        </div>

      </div>
      <BottomNav />
    </div>
  );
}
