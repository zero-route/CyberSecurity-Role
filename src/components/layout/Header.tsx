import { ShieldHalf } from "lucide-react";
import { Container } from "@/components/layout/Container";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-900 bg-zinc-950/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900">
            <ShieldHalf className="h-[18px] w-[18px] text-zinc-200" strokeWidth={2} />
          </div>
          <span className="font-display text-sm font-semibold tracking-tight text-zinc-100 sm:text-base">
            Cyber Security Roles
            <span className="ml-1.5 hidden text-zinc-500 sm:inline">&amp; Spectrum</span>
          </span>
        </div>

        <nav className="hidden items-center gap-6 text-sm text-zinc-400 md:flex">
          <a href="#spectrum" className="transition-colors hover:text-zinc-100">
            Spektrum Tim
          </a>
          <a href="#roles" className="transition-colors hover:text-zinc-100">
            Profesi
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-zinc-800 px-3 py-1.5 text-zinc-300 transition-colors hover:border-zinc-700 hover:text-zinc-100"
          >
            GitHub
          </a>
        </nav>
      </Container>
    </header>
  );
}
