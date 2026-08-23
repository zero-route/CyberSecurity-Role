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
      <div className="relative">
        <Header />

        {/* Hero Section */}
        <section className="pb-4 pt-10 sm:pb-6 sm:pt-16">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-xs font-medium text-zinc-400">
                Spektrum Divisi Cyber Security
              </span>
              <h1 className="mt-4 font-display text-2xl font-bold tracking-tight text-zinc-50 sm:text-4xl lg:text-5xl">
                Satu peta untuk memahami{" "}
                <span className="text-zinc-400">setiap warna tim keamanan siber</span>
              </h1>
              <p className="mx-auto mt-3 max-w-xl text-balance text-xs leading-relaxed text-zinc-400 sm:text-sm">
                Telusuri tujuh divisi — White, Red, Blue, Purple, Yellow, Green, dan Orange
                Team — beserta profesi, keterampilan, dan sertifikasi yang relevan.
              </p>
            </div>

            {/* Hero Stats - Clean Bar */}
            <div className="mx-auto mt-8 grid max-w-2xl grid-cols-2 gap-2.5 sm:grid-cols-4">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-zinc-800/80 bg-zinc-900/30 p-3 text-center"
                >
                  <div className="font-display text-xl font-bold text-zinc-100 sm:text-2xl">
                    {stat.value}
                  </div>
                  <div className="mt-0.5 text-[10px] uppercase tracking-wider text-zinc-500">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Overview Section */}
        <section className="pt-10 sm:pt-16">
          <Container>
            <div className="mb-5">
              <p className="font-mono text-[11px] uppercase tracking-widest text-zinc-500">
                // Overview
              </p>
              <h2 className="mt-1 font-display text-xl font-bold text-zinc-100 sm:text-2xl">
                Apa itu Cyber Security?
              </h2>
              <p className="mt-1 max-w-xl text-xs text-zinc-400 sm:text-sm">
                Bidang multidisiplin yang menjaga aset digital dari ancaman yang terus berkembang.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {overviewItems.map((item) => {
                const Icon =
                  (LucideIcons[item.icon as keyof typeof LucideIcons] as LucideIcon) ??
                  LucideIcons.Info;
                return (
                  <div
                    key={item.title}
                    className="rounded-lg border border-zinc-800/80 bg-zinc-900/30 p-4"
                  >
                    <div className="flex items-center gap-2">
                      <Icon className="h-4 w-4 text-zinc-400" strokeWidth={1.75} />
                      <h3 className="font-display text-sm font-semibold text-zinc-100">
                        {item.title}
                      </h3>
                    </div>
                    <p className="mt-1.5 text-xs leading-relaxed text-zinc-400">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Search Bar & Filter */}
        <section id="spectrum" className="pt-10 sm:pt-14">
          <Container className="space-y-4">
            <SearchBar value={query} onChange={setQuery} />
            {!isSearching && <TeamSelector />}
          </Container>
        </section>

        {/* Search Results */}
        {isSearching && (
          <section className="pt-6 sm:pt-8">
            <Container>
              <p className="mb-4 text-xs text-zinc-500">
                {globalMatches?.length ?? 0} hasil untuk{" "}
                <span className="text-zinc-300">&ldquo;{query}&rdquo;</span>
              </p>
              {globalMatches && globalMatches.length > 0 ? (
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
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

        {/* Struktur Tim Section - Hapus Panel Raksasa & Box-in-Box */}
        {!isSearching && (
          <section id="roles" className="pb-16 pt-10 sm:pb-20 sm:pt-14">
            <Container>
              <div className="mb-8">
                <p className="font-mono text-[11px] uppercase tracking-widest text-zinc-500">
                  // Struktur Tim
                </p>
                <h2 className="mt-1 font-display text-xl font-bold text-zinc-100 sm:text-2xl">
                  Tim &amp; Divisi Cyber Security
                </h2>
                <p className="mt-1 max-w-xl text-xs text-zinc-400 sm:text-sm">
                  Setiap tim memiliki peran unik — dari menyerang, mempertahankan, hingga mengelola budaya keamanan.
                </p>
              </div>

              <div className="space-y-10">
                {teamsData.map((team) => {
                  const accent = getTeamAccent(team.color);
                  const Icon =
                    (LucideIcons[team.icon as keyof typeof LucideIcons] as LucideIcon) ??
                    LucideIcons.Shield;

                  return (
                    <div key={team.id} id={`team-${team.id}`} className="scroll-mt-20">
                      {/* Sub-Header Tim Modern Minimalis */}
                      <div className="mb-4 flex items-center justify-between border-b border-zinc-800/80 pb-3">
                        <div className="flex items-center gap-2.5">
                          <div
                            className={cn(
                              "flex h-8 w-8 items-center justify-center rounded-md border bg-zinc-900/60",
                              accent.border
                            )}
                          >
                            <Icon className={cn("h-4 w-4", accent.text)} strokeWidth={2} />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="font-display text-base font-bold text-zinc-100">
                                {team.name}
                              </h3>
                              <span className={cn("font-mono text-[10px] uppercase tracking-wider", accent.text)}>
                                // {team.tagline}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Responsive Grid Card */}
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
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
    <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-zinc-800 py-12 text-center">
      <SearchX className="h-6 w-6 text-zinc-600" />
      <p className="mt-2 text-xs text-zinc-400">
        Tidak ada profesi yang cocok dengan{" "}
        <span className="text-zinc-200">&ldquo;{query}&rdquo;</span>.
      </p>
      <p className="mt-1 text-[11px] text-zinc-600">Coba kata kunci lain, seperti "forensik" atau "OSCP".</p>
    </div>
  );
}
