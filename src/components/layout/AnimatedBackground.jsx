/**
 * Background statis (server component friendly) berisi beberapa "bola" warna-warni
 * yang bergerak lambat secara acak lewat CSS keyframes. Sengaja tidak pakai state/JS
 * animasi biar ringan & jalan di semua device termasuk HP.
 */
export default function AnimatedBackground() {
  return (
    <div className="blob-container" aria-hidden="true">
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />
      <div className="blob blob-4" />
      <div className="blob blob-5" />
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-black/40 backdrop-blur-3xl" />
    </div>
  );
}
