import { chapters, appendix } from "@/data/chapters";
import ChapterCard from "@/components/ChapterCard";
import TimelineBar from "@/components/TimelineBar";
import StatCard from "@/components/StatCard";
import BottomNav from "@/components/BottomNav";

const totalSections = chapters.reduce((acc, c) => acc + c.sections.length, 0);
const newCount = chapters.filter((c) => c.isNew).length;

export default function Home() {
  return (
    <div className="min-h-screen dot-grid pb-24">
      {/* Hero Header */}
      <div className="relative overflow-hidden">
        {/* Background glow orbs */}
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-blue-600/20 blur-3xl pointer-events-none" />
        <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-purple-600/20 blur-3xl pointer-events-none" />

        <div className="relative px-4 pt-14 pb-8 max-w-lg mx-auto">
          {/* Badge */}
          <div className="flex items-center gap-2 mb-4 animate-fade-in-up">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-light">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse-slow" />
              <span className="text-xs font-medium text-green-400">In Progress · 2026–2030</span>
            </div>
          </div>

          {/* Title */}
          <div className="animate-fade-in-up delay-100">
            <h1 className="text-3xl font-bold leading-tight mb-1">
              <span className="gradient-text">Roadmap HCIS</span>
            </h1>
            <h2 className="text-xl font-semibold text-slate-300 mb-2">2026 – 2030</h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Transformasi <span className="text-blue-400 font-medium">Human Capital Information System</span> berbasis{" "}
              <span className="text-purple-400 font-medium">SAP + IHCMIS</span>, Full{" "}
              <span className="text-fuchsia-400 font-medium">Hire-to-Retire</span>
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-2 mt-6 animate-fade-in-up delay-200">
            <StatCard value={String(chapters.length)} label="Bab" icon="📖" color="text-blue-400" />
            <StatCard value={String(totalSections)} label="Sub-Bab" icon="📋" color="text-purple-400" />
            <StatCard value={String(appendix.length)} label="Lampiran" icon="📎" color="text-amber-400" />
            <StatCard value={`+${newCount}`} label="Baru" icon="✨" color="text-green-400" />
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="px-4 max-w-lg mx-auto mb-6 animate-fade-in-up delay-300">
        <div className="glass rounded-2xl p-4">
          <TimelineBar />
        </div>
      </div>

      {/* Chapter List */}
      <div className="px-4 max-w-lg mx-auto">
        <div className="flex items-center justify-between mb-4 animate-fade-in-up delay-400">
          <div>
            <h2 className="text-base font-bold text-white">Daftar Isi</h2>
            <p className="text-xs text-slate-500">Tap bab untuk melihat detail</p>
          </div>
          <span className="text-xs text-slate-500 glass-light px-2 py-1 rounded-lg">{chapters.length} Bab</span>
        </div>

        <div className="flex flex-col gap-3">
          {chapters.map((chapter, index) => (
            <ChapterCard key={chapter.id} chapter={chapter} index={index} />
          ))}
        </div>

        {/* Appendix teaser */}
        <div className="mt-4 animate-fade-in-up">
          <a href="/lampiran">
            <div className="glass rounded-2xl p-4 card-hover">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-500 to-slate-600 flex items-center justify-center text-xl flex-shrink-0">
                  📎
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-slate-700 text-slate-300">LAMPIRAN</span>
                  <h3 className="text-sm font-semibold text-white mt-1">Appendix</h3>
                  <p className="text-xs text-slate-400">HR Capability Map, Process Maps, Data Dictionary & more</p>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-slate-500 flex-shrink-0">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </div>
            </div>
          </a>
        </div>

        <div className="h-4" />
      </div>

      <BottomNav />
    </div>
  );
}
