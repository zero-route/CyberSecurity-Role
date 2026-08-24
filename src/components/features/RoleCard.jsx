import Link from "next/link";
import { hexToRgba } from "@/lib/utils";

/**
 * Kartu satu role. Setiap role punya icon-nya sendiri (role.icon, misal 🐞 untuk
 * Penetration Tester) — beda dari icon tim yang cuma berupa titik warna di header section.
 */
export default function RoleCard({ role, color }) {
  return (
    <Link
      href={`/role/${role.slug}`}
      className="group block rounded-xl border p-5 transition hover:-translate-y-0.5"
      style={{
        borderColor: hexToRgba(color, 0.25),
        backgroundColor: hexToRgba(color, 0.06),
      }}
    >
      <h3 className="mb-2 flex items-center gap-2 text-[15px] font-semibold text-neutral-100">
        <span className="text-lg leading-none">{role.icon}</span>
        <span className="group-hover:underline decoration-1 underline-offset-2">
          {role.title}
        </span>
      </h3>

      <p className="mb-4 text-sm leading-relaxed text-neutral-400">
        {role.shortDescription}
      </p>

      {role.tag && (
        <span
          className="inline-block rounded-full border px-2.5 py-0.5 text-[10px] font-semibold tracking-wide"
          style={{
            color,
            borderColor: hexToRgba(color, 0.4),
            backgroundColor: hexToRgba(color, 0.1),
          }}
        >
          {role.tag}
        </span>
      )}
    </Link>
  );
}
