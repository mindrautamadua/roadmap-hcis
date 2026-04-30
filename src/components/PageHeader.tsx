"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

interface Props {
  backHref?: string;
  title: string;
  subtitle?: string;
  rightText?: string;
}

export default function PageHeader({ backHref = "/", title, subtitle, rightText }: Props) {
  return (
    <div className="header-blur sticky top-0 z-40 px-4 py-3 max-w-lg mx-auto flex items-center gap-3">
      <Link
        href={backHref}
        className="w-9 h-9 rounded-xl glass flex items-center justify-center text-slate-300 flex-shrink-0"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M19 12H5M5 12l7 7M5 12l7-7" />
        </svg>
      </Link>

      <div className="flex-1 min-w-0">
        {subtitle && <p className="text-xs text-slate-500 truncate">{subtitle}</p>}
        <p className="text-sm font-semibold truncate" style={{ color: "var(--text-primary)" }}>
          {title}
        </p>
      </div>

      {rightText && (
        <span className="text-xs text-slate-500 flex-shrink-0">{rightText}</span>
      )}

      <ThemeToggle />
    </div>
  );
}
