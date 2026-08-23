import Link from "next/link";
import { ShieldHalf } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-black/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-3 sm:px-6">
        {/* Logo Title */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-cyan-500/30 bg-cyan-950/50 text-cyan-400">
            <ShieldHalf className="h-4 w-4" strokeWidth={2} />
          </div>
          <span className="font-display text-xs font-bold text-white sm:text-sm tracking-tight whitespace-nowrap">
            Cyber Security <span className="text-zinc-500 font-mono text-[10px] sm:text-xs">// Spectrum</span>
          </span>
        </Link>

        {/* Nav Links Mini untuk Mobile */}
        <nav className="flex items-center gap-2 sm:gap-4 text-[11px] font-mono text-zinc-400">
          <a href="#spectrum" className="hover:text-cyan-400 transition-colors hidden xs:inline-block">
            Spektrum
          </a>
          <a href="#roles" className="hover:text-cyan-400 transition-colors">
            Profesi
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="rounded border border-zinc-800 bg-zinc-900/80 px-2 py-0.5 text-[10px] text-zinc-300 hover:border-zinc-700 hover:text-white"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
