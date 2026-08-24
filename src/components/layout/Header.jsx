import Link from "next/link";
import Container from "./Container";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-black/30 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-lg font-bold tracking-tight text-neutral-50">
            Cyber<span className="text-cyan-400">Security</span>
          </span>
        </Link>

        <nav className="flex items-center gap-4 text-sm text-neutral-400">
          <Link href="/" className="hover:text-neutral-100 transition">
            Beranda
          </Link>
          <Link href="/compare" className="hover:text-neutral-100 transition">
            Bandingkan Tim
          </Link>
        </nav>
      </Container>
    </header>
  );
}
