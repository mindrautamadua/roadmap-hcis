"use client";
import ThemeToggle from "./ThemeToggle";

export default function HomeHeader() {
  return (
    <div className="header-blur sticky top-0 z-40 px-4 py-3 max-w-lg mx-auto flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-black">
          HC
        </div>
        <span className="text-sm font-bold" style={{ color: "var(--text-primary)" }}>
          Roadmap HCIS
        </span>
      </div>
      <ThemeToggle />
    </div>
  );
}
