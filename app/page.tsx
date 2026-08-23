"use client";

import { useMemo, useState } from "react";
import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SearchX } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/layout/Container";
import { TeamSelector } from "@/components/features/TeamSelector";
import { SearchBar } from "@/components/features/SearchBar";
import { RoleCard } from "@/components/features/RoleCard";
import { teamsData } from "@/data/teamsData";
import { overviewItems } from "@/data/overviewData";
import { cn, getTeamAccent } from "@/lib/utils";

const totalRoles = teamsData.reduce((sum, team) => sum + team.roles.length, 0);

const heroStats = [
  { label: "Tim Utama", value: "7" },
  { label: "Spesialisasi Karir", value: `${totalRoles}+` },
  { label: "Fokus Respons", value: "24/7" },
  { label: "Ancaman Berkembang", value: "∞" },
];

export default function Home() {
  const [query, setQuery] = useState("");

  const globalMatches = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return null;

    return teamsData.flatMap((t) =>
      t.roles
        .filter((role) => {
          const haystack = [role.title, role.description, ...role.skills, ...role.tags]
            .join(" ")
            .toLowerCase();
          return haystack.includes(q);
        })
        .map((role) => ({ role, team: t }))
    );
  }, [query]);

  const isSearching = query.trim().length > 0;

  return (
    <div className="relative min-h-screen bg-zinc-950">
      <div className="pointer-events-none fixed inset-0 bg-grid-fade bg-grid opacity-40" />

      <div className="relative">
        <Header />

        {/* Hero */}
        <section className="pb-4 pt-14 sm:pb-6 sm:pt-20">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-xs font-medium text-zinc-400">
                Spektrum Divisi Cyber Security
              </span>
              <h1 className="mt-5 font-display text-3xl font-semibold tracking-tight text-zinc-50 sm:text-5xl">
                Satu peta untuk memahami{" "}
                <span className="text-zinc-400">setiap warna tim keamanan siber</span>
              </h1>
              <p className="mx-auto mt-4 max-w-xl text-balance text-sm leading-relaxed text-zinc-400 sm:text-base">
                Telusuri tujuh divisi — White, Red, Blue, Purple, Yellow, Green, dan Orange
                Team — beserta profesi, keterampilan, dan sertifikasi yang relevan di
                masing-masing bidang.
              </p>
            </div>

            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-zinc-800/70 bg-zinc-900/40 px-3 py-4 text-center"
                >
                  <div className="font-display text-2xl font-semibold text-zinc-100 sm:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-wide text-zinc-500">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Overview: Apa itu Cyber Security */}
        <section className="pt-14 sm:pt-20">
          <Container>
            <div className="mb-6">
              <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">
                // Overview
              </p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-zinc-100 sm:text-3xl">
                Apa itu Cyber Security?
              </h2>
              <p className="mt-2 max-w-xl text-sm text-zinc-400 sm:text-base">
                Bidang multidisiplin yang menjaga aset digital dari ancaman yang terus
                berkembang.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {overviewItems.map((item) => {
                const Icon =
                  (LucideIcons[item.icon as keyof typeof LucideIcons] as LucideIcon) ??
                  LucideIcons.Info;
                return (
                  <div
                    key={item.title}
                    className="rounded-xl border border-zinc-800/70 bg-zinc-900/40 p-5"
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className="h-4 w-4 text-zinc-400" strokeWidth={2} />
                      <h3 className="font-display text-sm font-semibold text-zinc-100">
                        {item.title}
                      </h3>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Search + quick jump nav */}
        <section id="spectrum" className="pt-14 sm:pt-20">
          <Container className="space-y-5">
            <SearchBar value={query} onChange={setQuery} />
            {!isSearching && <TeamSelector />}
          </Container>
        </section>

        {/* Search results (global, across every team) */}
        {isSearching && (
          <section className="pt-8 sm:pt-10">
            <Container>
              <p className="mb-5 text-sm text-zinc-500">
                {globalMatches?.length ?? 0} hasil untuk{" "}
                <span className="text-zinc-300">&ldquo;{query}&rdquo;</span>
              </p>
              {globalMatches && globalMatches.length > 0 ? (
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                  {globalMatches.map(({ role, team: matchTeam }) => (
                    <RoleCard key={role.id} role={role} teamColor={matchTeam.color} />
                  ))}
                </div>
              ) : (
                <EmptyState query={query} />
              )}
            </Container>
          </section>
        )}

        {/* Struktur Tim: every team stacked as its own tinted panel */}
        {!isSearching && (
          <section id="roles" className="pb-20 pt-14 sm:pb-24 sm:pt-20">
            <Container>
              <div className="mb-8">
                <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">
                  // Struktur Tim
                </p>
                <h2 className="mt-2 font-display text-2xl font-semibold text-zinc-100 sm:text-3xl">
                  Tim &amp; Divisi Cyber Security
                </h2>
                <p className="mt-2 max-w-xl text-sm text-zinc-400 sm:text-base">
                  Setiap tim memiliki peran unik — dari menyerang, mempertahankan, mengelola,
                  hingga menumbuhkan budaya keamanan.
                </p>
              </div>

              <div className="space-y-8">
                {teamsData.map((team) => {
                  const accent = getTeamAccent(team.color);
                  const Icon =
                    (LucideIcons[team.icon as keyof typeof LucideIcons] as LucideIcon) ??
                    LucideIcons.Shield;

                  return (
                    <div
                      key={team.id}
                      id={`team-${team.id}`}
                      className={cn(
                        "scroll-mt-24 rounded-2xl border p-6 sm:p-8",
                        accent.border,
                        accent.bg
                      )}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={cn(
                            "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border bg-zinc-950",
                            accent.border
                          )}
                        >
                          <Icon className={cn("h-5 w-5", accent.text)} strokeWidth={2} />
                        </div>
                        <div>
                          <div className="flex flex-wrap items-baseline gap-2">
                            <h3 className="font-display text-xl font-semibold text-zinc-100">
                              {team.name}
                            </h3>
                          </div>
                          <p className={cn("mt-0.5 font-mono text-xs uppercase tracking-wide", accent.text)}>
                            // {team.tagline}
                          </p>
                          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-400">
                            {team.mission}
                          </p>
                        </div>
                      </div>

                      <div className="my-6 h-px w-full bg-zinc-800/70" />

                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {team.roles.map((role) => (
                          <RoleCard key={role.id} role={role} teamColor={team.color} />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </Container>
          </section>
        )}

        <Footer />
      </div>
    </div>
  );
}

function EmptyState({ query }: { query: string }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-zinc-800 py-16 text-center">
      <SearchX className="h-8 w-8 text-zinc-600" />
      <p className="mt-3 text-sm text-zinc-400">
        Tidak ada profesi yang cocok dengan{" "}
        <span className="text-zinc-200">&ldquo;{query}&rdquo;</span>.
      </p>
      <p className="mt-1 text-xs text-zinc-600">Coba kata kunci lain, misalnya "forensik" atau "OSCP".</p>
    </div>
  );
}