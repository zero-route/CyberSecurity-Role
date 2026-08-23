import Link from "next/link";
import { ShieldHalf } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800/80 bg-black/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        {/* Logo & Title Simetris */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-cyan-500/40 bg-cyan-950/60 text-cyan-400">
            <ShieldHalf className="h-4 w-4" strokeWidth={2} />
          </div>
          <span className="font-display text-xs font-bold tracking-tight text-white sm:text-sm">
            Cyber Security
          </span>
        </Link>

        {/* Menu Navigasi Kanan Rapi */}
        <nav className="flex items-center gap-3 font-mono text-[11px] text-zinc-400">
          <a href="#spectrum" className="hover:text-cyan-400 transition-colors">
            Spektrum
          </a>
          <a href="#roles" className="hover:text-cyan-400 transition-colors">
            Profesi
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="rounded border border-zinc-800 bg-zinc-900/90 px-2 py-0.5 text-[10px] text-zinc-300 hover:border-zinc-700 hover:text-white"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
