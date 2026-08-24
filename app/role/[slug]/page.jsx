import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllRolesFlat, getRoleBySlug } from "@/data/teamsData";

/**
 * generateStaticParams: pre-render semua halaman role saat build (SSG),
 * bagus untuk SEO dan performa karena tidak perlu render di client.
 */
export function generateStaticParams() {
  return getAllRolesFlat().map((role) => ({ slug: role.slug }));
}

/**
 * Metadata dinamis per halaman role — penting untuk SEO.
 */
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

  if (!role) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <Link
        href="/"
        className="mb-6 inline-block text-sm text-neutral-400 hover:text-neutral-200"
      >
        &larr; Kembali ke daftar role
      </Link>

      <div className="mb-6 flex items-center gap-3">
        <span
          className="rounded-full px-3 py-1 text-xs font-semibold"
          style={{ backgroundColor: role.teamColor, color: "#0a0a0a" }}
        >
          {role.teamName}
        </span>
        <span className="rounded-full border border-neutral-700 px-3 py-1 text-xs text-neutral-300">
          Level: {role.level}
        </span>
      </div>

      <h1 className="mb-3 text-3xl font-bold text-neutral-50">{role.title}</h1>
      <p className="mb-8 text-neutral-400">{role.longDescription}</p>

      <Section title="Tanggung Jawab Utama">
        <ul className="list-inside list-disc space-y-1 text-neutral-300">
          {role.responsibilities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Section>

      <Section title="Skill yang Dibutuhkan">
        <TagList items={role.skills} />
      </Section>

      <Section title="Tools yang Umum Dipakai">
        <TagList items={role.tools} />
      </Section>

      <Section title="Sertifikasi Relevan">
        <TagList items={role.certifications} />
      </Section>

      <Section title="Jenjang Karier">
        <div className="flex flex-wrap items-center gap-2 text-sm text-neutral-300">
          {role.careerPath.map((step, idx) => (
            <span key={step} className="flex items-center gap-2">
              <span className="rounded-lg border border-neutral-700 px-3 py-1">{step}</span>
              {idx < role.careerPath.length - 1 && <span className="text-neutral-600">&rarr;</span>}
            </span>
          ))}
        </div>
      </Section>

      {role.relatedRoles?.length > 0 && (
        <Section title="Role Terkait">
          <div className="flex flex-wrap gap-2">
            {role.relatedRoles.map((slug) => (
              <Link
                key={slug}
                href={`/role/${slug}`}
                className="rounded-lg border border-neutral-700 px-3 py-1 text-sm text-neutral-300 hover:border-neutral-400 hover:text-neutral-100"
              >
                {slug}
              </Link>
            ))}
          </div>
        </Section>
      )}
    </main>
  );
}

function Section({ title, children }) {
  return (
    <section className="mb-8">
      <h2 className="mb-3 text-lg font-semibold text-neutral-100">{title}</h2>
      {children}
    </section>
  );
}

function TagList({ items }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full bg-neutral-800 px-3 py-1 text-xs text-neutral-300"
        >
          {item}
        </span>
      ))}
    </div>
  );
}
