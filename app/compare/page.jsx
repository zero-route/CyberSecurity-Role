import Container from "@/components/layout/Container";
import TeamMatrix from "@/components/features/TeamMatrix";

export const metadata = {
  title: "Bandingkan Tim — Cyber Security",
};

export default function ComparePage() {
  return (
    <Container className="py-16">
      <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-cyan-400/80">// PERBANDINGAN</p>
      <h1 className="mb-2 text-2xl font-bold text-neutral-50 sm:text-3xl">
        Bandingkan 7 Tim Cyber Security
      </h1>
      <p className="mb-8 text-sm text-neutral-400">
        Lihat perbedaan fokus, jumlah role, tools, dan sertifikasi umum di tiap tim.
      </p>

      <TeamMatrix />
    </Container>
  );
}
