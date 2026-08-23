import { ShieldHalf } from "lucide-react";
import { Container } from "@/components/layout/Container";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-black/80 backdrop-blur-md">
      <Container className="flex h-14 items-center justify-between px-4">
        {/* Logo & Title */}
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-cyan-500/30 bg-cyan-950/40 text-cyan-400">
            <ShieldHalf className="h-4 w-4" strokeWidth={2} />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-1.5">
            <span className="font-display text-sm font-bold tracking-tight text-white">
              Cyber Security Roles
            </span>
            <span className="font-mono text-[10px] text-zinc-500 sm:text-xs">
              // Spectrum
            </span>
          </div>
        </div>

        {/* Navigation - Tetap Tampil & Rapi di Mobile */}
        <nav className="flex items-center gap-3 text-xs font-mono text-zinc-400 sm:gap-6 sm:text-sm">
          <a 
            href="#spectrum" 
            className="transition-colors hover:text-cyan-400 text-[11px] sm:text-xs"
          >
            Spektrum
          </a>
          <a 
            href="#roles" 
            className="transition-colors hover:text-cyan-400 text-[11px] sm:text-xs"
          >
            Profesi
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-zinc-800 bg-zinc-900/80 px-2.5 py-1 text-[11px] text-zinc-300 transition-colors hover:border-zinc-700 hover:text-white"
          >
            GitHub
          </a>
        </nav>
      </Container>
    </header>
  );
}
