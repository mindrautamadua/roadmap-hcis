import { chapters } from "@/data/chapters";
import { notFound } from "next/navigation";
import Link from "next/link";
import BottomNav from "@/components/BottomNav";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return chapters.map((c) => ({ id: String(c.id) }));
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const chapter = chapters.find((c) => c.id === Number(id));
  if (!chapter) return { title: "Not Found" };
  return { title: `${chapter.bab} — ${chapter.title} | Roadmap HCIS` };
}

export default async function ChapterPage({ params }: Props) {
  const { id } = await params;
  const chapterId = Number(id);
  const chapter = chapters.find((c) => c.id === chapterId);
  if (!chapter) notFound();

  const currentIndex = chapters.findIndex((c) => c.id === chapterId);
  const prevChapter = currentIndex > 0 ? chapters[currentIndex - 1] : undefined;
  const nextChapter = currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : undefined;

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
          <p className="text-sm font-semibold text-white truncate">{chapter.bab}</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-slate-500">{chapterId} / {chapters.length}</p>
        </div>
      </div>

      <div className="px-4 max-w-lg mx-auto pt-4">
        {/* Chapter Hero */}
        <div className={`relative rounded-2xl overflow-hidden mb-5 animate-fade-in`}>
          <div className={`absolute inset-0 bg-gradient-to-br ${chapter.gradient} blur-sm`} />
          <div className={`absolute inset-0 bg-gradient-to-br ${chapter.gradient}`} />
          <div className="relative p-5">
            <div className="flex items-start gap-4">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${chapter.color} flex items-center justify-center text-3xl shadow-xl flex-shrink-0`}>
                {chapter.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${chapter.color} text-white`}>
                    {chapter.bab}
                  </span>
                  {chapter.isNew && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-green-500/30 border border-green-400/60 text-green-300 uppercase tracking-wide">
                      ★ New
                    </span>
                  )}
                  {chapter.isExpanded && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/30 border border-amber-400/60 text-amber-300 uppercase tracking-wide">
                      ↑ Expanded
                    </span>
                  )}
                </div>
                <h1 className="text-lg font-bold text-white mt-2 leading-tight">
                  {chapter.title}
                </h1>
                <p className="text-sm text-slate-300 mt-0.5">{chapter.subtitle}</p>
              </div>
            </div>
            <p className="text-sm text-slate-300 mt-4 leading-relaxed">{chapter.description}</p>
          </div>
        </div>

        {/* Sections */}
        <div className="mb-5 animate-fade-in-up delay-100">
          <div className="flex items-center gap-2 mb-3">
            <div className={`w-1 h-4 rounded-full bg-gradient-to-b ${chapter.color}`} />
            <h2 className="text-sm font-bold text-white">Sub-Bab</h2>
            <span className="text-xs text-slate-500 ml-auto">{chapter.sections.length} section</span>
          </div>

          <div className="flex flex-col gap-2">
            {chapter.sections.map((section, i) => (
              <div
                key={section.number}
                className={`glass rounded-xl px-4 py-3 flex items-center gap-3 animate-fade-in-up`}
                style={{ animationDelay: `${i * 60 + 200}ms` }}
              >
                <span className="section-badge text-xs font-mono font-bold px-2 py-1 rounded-lg text-slate-300 flex-shrink-0 min-w-[3rem] text-center">
                  {section.number}
                </span>
                <p className="text-sm text-slate-200 leading-snug">{section.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Outputs */}
        {chapter.outputs && chapter.outputs.length > 0 && (
          <div className="mb-5 animate-fade-in-up delay-200">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1 h-4 rounded-full bg-gradient-to-b from-green-400 to-emerald-500" />
              <h2 className="text-sm font-bold text-white">Output Utama</h2>
            </div>
            <div className="glass rounded-xl p-4 flex flex-col gap-2">
              {chapter.outputs.map((output) => (
                <div key={output} className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="3">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <p className="text-sm text-slate-200">{output}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Frameworks */}
        {chapter.frameworks && chapter.frameworks.length > 0 && (
          <div className="mb-5 animate-fade-in-up delay-300">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1 h-4 rounded-full bg-gradient-to-b from-amber-400 to-orange-500" />
              <h2 className="text-sm font-bold text-white">Framework</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {chapter.frameworks.map((fw) => (
                <span
                  key={fw}
                  className="text-xs px-3 py-1.5 rounded-full glass-light border border-amber-500/30 text-amber-300 font-medium"
                >
                  {fw}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Navigation between chapters */}
        <div className="grid grid-cols-2 gap-3 mt-6 animate-fade-in-up delay-400">
          {prevChapter ? (
            <Link href={`/bab/${prevChapter.id}`}>
              <div className="glass rounded-xl p-3 card-hover">
                <p className="text-xs text-slate-500 mb-1">← Sebelumnya</p>
                <p className="text-sm font-semibold text-white line-clamp-1">{prevChapter.bab}</p>
                <p className="text-xs text-slate-400 line-clamp-1">{prevChapter.title}</p>
              </div>
            </Link>
          ) : <div />}

          {nextChapter ? (
            <Link href={`/bab/${nextChapter.id}`}>
              <div className="glass rounded-xl p-3 card-hover text-right">
                <p className="text-xs text-slate-500 mb-1">Selanjutnya →</p>
                <p className="text-sm font-semibold text-white line-clamp-1">{nextChapter.bab}</p>
                <p className="text-xs text-slate-400 line-clamp-1">{nextChapter.title}</p>
              </div>
            </Link>
          ) : <div />}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
