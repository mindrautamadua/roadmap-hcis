import { chapters } from "@/data/chapters";
import { notFound } from "next/navigation";
import Link from "next/link";
import BottomNav from "@/components/BottomNav";

interface Props {
  params: Promise<{ id: string; section: string }>;
}

export async function generateStaticParams() {
  const params = [];
  for (const chapter of chapters) {
    for (const section of chapter.sections) {
      params.push({ id: String(chapter.id), section: section.number });
    }
  }
  return params;
}

export default async function SectionPage({ params }: Props) {
  const { id, section: sectionNumber } = await params;
  const chapter = chapters.find((c) => c.id === Number(id));
  if (!chapter) notFound();

  const section = chapter.sections.find((s) => s.number === sectionNumber);
  if (!section) notFound();

  return (
    <div className="min-h-screen dot-grid pb-28">
      {/* Header */}
      <div className="header-blur sticky top-0 z-40 px-4 py-3 max-w-lg mx-auto flex items-center gap-3">
        <Link href={`/bab/${chapter.id}`} className="w-9 h-9 rounded-xl glass flex items-center justify-center text-slate-300 flex-shrink-0">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M19 12H5M5 12l7 7M5 12l7-7" />
          </svg>
        </Link>
        <div className="flex-1 min-w-0">
          <p className="text-xs text-slate-500">{chapter.bab} — Section {section.number}</p>
          <p className="text-sm font-semibold text-white truncate">{section.title}</p>
        </div>
      </div>

      <div className="px-4 max-w-lg mx-auto pt-6">
        <div className="animate-fade-in">
          <div className="flex items-center gap-2 mb-6">
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md bg-gradient-to-r ${chapter.color} text-white uppercase tracking-wider`}>
              Detail Content
            </span>
            <div className="h-[1px] flex-1 bg-slate-800" />
          </div>

          <h1 className="text-2xl font-bold text-white mb-6 leading-tight">
            {section.title}
          </h1>

          <div className="glass rounded-2xl p-6 mb-8 relative overflow-hidden">
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${chapter.gradient} blur-3xl opacity-20 -mr-16 -mt-16`} />
            
            {section.content ? (
              <div className="relative z-10">
                <div className="prose prose-invert max-w-none">
                  <p className="text-slate-300 leading-relaxed text-lg">
                    {section.content}
                  </p>
                </div>
              </div>
            ) : (
              <div className="relative z-10 py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mx-auto mb-4 text-2xl">
                  📝
                </div>
                <h3 className="text-white font-semibold mb-2">Belum ada konten detail</h3>
                <p className="text-slate-500 text-sm">
                  Konten untuk sub-bab {section.number} sedang dalam proses penyusunan.
                </p>
              </div>
            )}
          </div>

          {/* Quick Info / Call to Action */}
          <div className="grid grid-cols-1 gap-4">
            <div className="glass-light rounded-xl p-4 border border-slate-800">
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${chapter.color} flex items-center justify-center text-sm shadow-lg`}>
                  💡
                </div>
                <p className="text-sm font-bold text-white">Insight Strategis</p>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Implementasi {section.title} merupakan langkah krusial dalam mencapai target digitalisasi HR 2030. Fokus pada standarisasi dan skalabilitas.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation back */}
        <div className="mt-10">
          <Link href={`/bab/${chapter.id}`}>
            <div className="glass rounded-xl p-4 flex items-center justify-center gap-2 group transition-all hover:bg-white/5 border border-white/5 hover:border-white/10">
              <span className="text-sm font-medium text-slate-400 group-hover:text-white transition-colors">Kembali ke Daftar Isi Bab</span>
            </div>
          </Link>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
