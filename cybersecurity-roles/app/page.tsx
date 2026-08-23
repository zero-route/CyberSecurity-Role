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
import type { TeamId } from "@/types/team";
import { cn, getTeamAccent } from "@/lib/utils";

export default function Home() {
  const [activeTeam, setActiveTeam] = useState<TeamId>("red");
  const [query, setQuery] = useState("");

  const team = useMemo(
    () => teamsData.find((t) => t.id === activeTeam) ?? teamsData[0],
    [activeTeam]
  );

  const accent = getTeamAccent(team.color);
  const Icon =
    (LucideIcons[team.icon as keyof typeof LucideIcons] as LucideIcon) ?? LucideIcons.Shield;

  const filteredRoles = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return team.roles;

    return team.roles.filter((role) => {
      const haystack = [role.title, role.description, ...role.skills, ...role.tags]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [team, query]);

  // When searching, surface matches across every team, not just the active tab,
  // so the search bar behaves like a global instant search.
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
        <section className="border-b border-zinc-900 py-14 sm:py-20">
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
          </Container>
        </section>

        {/* Controls: search + tabs */}
        <section id="spectrum" className="py-8 sm:py-10">
          <Container className="space-y-6">
            <SearchBar value={query} onChange={setQuery} />
            {!isSearching && <TeamSelector activeTeam={activeTeam} onSelect={setActiveTeam} />}
          </Container>
        </section>

        {/* Team mission banner (hidden while actively searching globally) */}
        {!isSearching && (
          <section>
            <Container>
              <div
                className={cn(
                  "flex flex-col gap-4 rounded-2xl border bg-zinc-900/30 p-6 sm:flex-row sm:items-center",
                  accent.border
                )}
              >
                <div
                  className={cn(
                    "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border bg-zinc-950",
                    accent.border
                  )}
                >
                  <Icon className={cn("h-5 w-5", accent.text)} strokeWidth={2} />
                </div>
                <div>
                  <div className="flex flex-wrap items-baseline gap-2">
                    <h2 className="font-display text-lg font-semibold text-zinc-100">
                      {team.name}
                    </h2>
                    <span className={cn("text-sm font-medium", accent.text)}>
                      {team.tagline}
                    </span>
                  </div>
                  <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-zinc-400">
                    {team.mission}
                  </p>
                </div>
              </div>
            </Container>
          </section>
        )}

        {/* Role grid */}
        <section id="roles" className="py-10 sm:py-14">
          <Container>
            {isSearching ? (
              <>
                <p className="mb-5 text-sm text-zinc-500">
                  {globalMatches?.length ?? 0} hasil untuk{" "}
                  <span className="text-zinc-300">&ldquo;{query}&rdquo;</span>
                </p>
                {globalMatches && globalMatches.length > 0 ? (
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {globalMatches.map(({ role, team: matchTeam }) => (
                      <RoleCard key={role.id} role={role} teamColor={matchTeam.color} />
                    ))}
                  </div>
                ) : (
                  <EmptyState query={query} />
                )}
              </>
            ) : filteredRoles.length > 0 ? (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {filteredRoles.map((role) => (
                  <RoleCard key={role.id} role={role} teamColor={team.color} />
                ))}
              </div>
            ) : (
              <EmptyState query={query} />
            )}
          </Container>
        </section>

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
