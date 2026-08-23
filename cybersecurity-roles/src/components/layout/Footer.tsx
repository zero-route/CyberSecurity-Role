import { Container } from "@/components/layout/Container";

export function Footer() {
  return (
    <footer className="border-t border-zinc-900 py-10">
      <Container className="flex flex-col items-center justify-between gap-4 text-sm text-zinc-500 sm:flex-row">
        <p>
          &copy; {new Date().getFullYear()} Cyber Security Roles &amp; Spectrum. Dibuat untuk
          tujuan edukasi.
        </p>
        <p className="text-zinc-600">Dibangun dengan Next.js, TypeScript &amp; Tailwind CSS.</p>
      </Container>
    </footer>
  );
}
