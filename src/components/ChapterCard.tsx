"use client";
import Link from "next/link";
import type { Chapter } from "@/data/chapters";

interface Props {
  chapter: Chapter;
  index: number;
}

export default function ChapterCard({ chapter, index }: Props) {
  const delay = Math.min(index * 75, 600);

  return (
    <Link href={`/bab/${chapter.id}`}>
      <div
        className={`glass rounded-2xl p-4 card-hover cursor-pointer animate-fade-in-up`}
        style={{ animationDelay: `${delay}ms` }}
      >
        <div className="flex items-start gap-3">
          {/* Icon & number */}
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${chapter.color} flex items-center justify-center flex-shrink-0 shadow-lg text-xl`}>
            {chapter.icon}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 mb-0.5 flex-wrap">
              <span className={`text-xs font-bold px-2 py-0.5 rounded-full bg-gradient-to-r ${chapter.color} text-white opacity-90`}>
                {chapter.bab}
              </span>
              {chapter.isNew && (
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-green-500/20 border border-green-500/50 text-green-400 uppercase tracking-wide">
                  NEW
                </span>
              )}
              {chapter.isExpanded && (
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/50 text-amber-400 uppercase tracking-wide">
                  +
                </span>
              )}
            </div>
            <h3 className="text-sm font-semibold text-white leading-tight mt-1 line-clamp-1">
              {chapter.title}
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">{chapter.subtitle}</p>
          </div>

          {/* Arrow */}
          <div className="flex-shrink-0 text-slate-500 mt-1">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </div>
        </div>

        {/* Section count */}
        <div className="mt-3 flex items-center gap-3">
          <div className="flex -space-x-1">
            {chapter.sections.slice(0, 5).map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full bg-gradient-to-r ${chapter.color} opacity-${100 - i * 15} border border-[#060b18]`}
              />
            ))}
            {chapter.sections.length > 5 && (
              <div className="w-2 h-2 rounded-full bg-slate-600 border border-[#060b18]" />
            )}
          </div>
          <span className="text-xs text-slate-500">{chapter.sections.length} sub-bab</span>
          {chapter.outputs && (
            <span className="text-xs text-slate-500 ml-auto">
              {chapter.outputs.length} output
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
