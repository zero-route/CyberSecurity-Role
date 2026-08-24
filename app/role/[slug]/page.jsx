import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllRolesFlat, getRoleBySlug } from "@/data/teamsData";
import { hexToRgba } from "@/lib/utils";

export function generateStaticParams() {
  return getAllRolesFlat().map((role) => ({ slug: role.slug }));
}

export function generateMetadata({ params }) {
  const role = getRoleBySlug(params.slug);
  if (!role) return { title: "Role tidak ditemukan" };
  return {
    title: `${role.title} — ${role.teamName} | Cyber Security Wheel`,
    description: role.shortDescription,
  };
}

export default function RoleDetailPage({ params }) {
  const role = getRoleBySlug(params.slug);
  if (!role) notFound();

  const color = role.teamColor;

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <Link
        href="/"
        className="mb-6 inline-block text-sm text-neutral-400 hover:text-neutral-100"
      >
        &larr; Kembali ke daftar role
      </Link>

      <div
        className="rounded-2xl border p-6 sm:p-8"
        style={{
          borderColor: hexToRgba(color, 0.35),
          backgroundColor: hexToRgba(color, 0.06),
          boxShadow: `0 0 40px -20px ${hexToRgba(color, 0.7)}`,
        }}
      >
        <div className="mb-5 flex flex-wrap items-center gap-2">
          <span
            className="rounded-full px-3 py-1 text-xs font-semibold"
            style={{ backgroundColor: color, color: "#0a0a0a" }}
          >
            {role.teamName}
          </span>
          <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-neutral-300">
            Level: {role.level}
          </span>
        </div>

        <h1 className="mb-4 flex items-center gap-3 text-2xl font-bold text-neutral-50 sm:text-3xl">
          <span className="text-3xl">{role.icon}</span>
          {role.title}
        </h1>

        <p className="mb-10 leading-relaxed text-neutral-400">{role.longDescription}</p>

        <Section title="Tanggung Jawab Utama">
          <ul className="space-y-2">
            {role.responsibilities.map((item) => (
              <li key={item} className="flex gap-2 text-sm text-neutral-300">
                <span className="text-neutral-600">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Skill yang Dibutuhkan">
          <TagList items={role.skills} color={color} />
        </Section>

        <Section title="Tools yang Umum Dipakai">
          <TagList items={role.tools} color={color} />
        </Section>

        <Section title="Sertifikasi Relevan">
          <TagList items={role.certifications} color={color} />
        </Section>

        <Section title="Jenjang Karier" last={role.relatedRoles?.length === 0}>
          <div className="flex flex-wrap items-center gap-2">
            {role.careerPath.map((step, idx) => (
              <span key={step} className="flex items-center gap-2">
                <span className="rounded-lg border border-white/15 px-3 py-1.5 text-sm text-neutral-300">
                  {step}
                </span>
                {idx < role.careerPath.length - 1 && (
                  <span className="text-neutral-600">&rarr;</span>
                )}
              </span>
            ))}
          </div>
        </Section>

        {role.relatedRoles?.length > 0 && (
          <Section title="Role Terkait" last>
            <div className="flex flex-wrap gap-2">
              {role.relatedRoles.map((slug) => (
                <Link
                  key={slug}
                  href={`/role/${slug}`}
                  className="rounded-lg border border-white/15 px-3 py-1.5 text-sm text-neutral-300 hover:border-white/30 hover:text-neutral-100"
                >
                  {slug}
                </Link>
              ))}
            </div>
          </Section>
        )}
      </div>
    </div>
  );
}

function Section({ title, children, last = false }) {
  return (
    <section className={last ? "" : "mb-8"}>
      <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-neutral-400">
        {title}
      </h2>
      {children}
    </section>
  );
}

function TagList({ items, color }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full border px-3 py-1 text-xs text-neutral-200"
          style={{ borderColor: hexToRgba(color, 0.35), backgroundColor: hexToRgba(color, 0.1) }}
        >
          {item}
        </span>
      ))}
    </div>
  );
}
