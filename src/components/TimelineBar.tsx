"use client";
import { timelinePhases } from "@/data/chapters";

const phaseColors = [
  { bar: "bg-blue-500", glow: "shadow-blue-500/40", text: "text-blue-400", border: "border-blue-500/30" },
  { bar: "bg-indigo-500", glow: "shadow-indigo-500/40", text: "text-indigo-400", border: "border-indigo-500/30" },
  { bar: "bg-purple-500", glow: "shadow-purple-500/40", text: "text-purple-400", border: "border-purple-500/30" },
  { bar: "bg-violet-500", glow: "shadow-violet-500/40", text: "text-violet-400", border: "border-violet-500/30" },
  { bar: "bg-fuchsia-500", glow: "shadow-fuchsia-500/40", text: "text-fuchsia-400", border: "border-fuchsia-500/30" },
];

export default function TimelineBar() {
  return (
    <div className="w-full">
      <div className="flex items-center gap-1 mb-3">
        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse-slow" />
        <span className="text-xs font-medium text-blue-400 uppercase tracking-wider">Timeline 2026–2030</span>
      </div>
      <div className="relative">
        {/* Connector line */}
        <div className="absolute top-5 left-5 right-5 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-fuchsia-500 opacity-30 z-0" />
        <div className="flex gap-2 relative z-10">
          {timelinePhases.map((phase, i) => (
            <div key={phase.year} className="flex-1 flex flex-col items-center gap-2">
              <div className={`w-10 h-10 rounded-full ${phaseColors[i].bar} flex items-center justify-center shadow-lg ${phaseColors[i].glow} text-white text-xs font-bold flex-shrink-0`}>
                {phase.year.slice(2)}
              </div>
              <div className={`w-full rounded-lg px-1.5 py-2 glass-light border ${phaseColors[i].border} text-center`}>
                <p className={`text-xs font-semibold ${phaseColors[i].text}`}>{phase.label}</p>
                <p className="text-[10px] text-slate-400 leading-tight mt-0.5 hidden sm:block">{phase.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
