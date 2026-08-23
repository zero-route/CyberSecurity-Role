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
import { cn } from "@/lib/utils";

const totalRoles = teamsData.reduce((sum, team) => sum + team.roles.length, 0);

const heroStats = [
  { label: "Tim Utama", value: "7" },
  { label: "Spesialisasi Karir", value: `${totalRoles}+` },
  { label: "Fokus Respons", value: "24/7" },
  { label: "Ancaman Berkembang", value: "∞" },
];

const teamContainerStyles: Record<
  string,
  { frameBg: string; border: string; dotBg: string; glow: string; text: string }
> = {
  white: { frameBg: "bg-zinc-900/30", border: "border-zinc-800", dotBg: "bg-zinc-200", glow: "shadow-[0_0_12px_rgba(228,228,231,0.4)]", text: "text-zinc-200" },
  red: { frameBg: "bg-red-950/10", border: "border-red-900/40", dotBg: "bg-red-500", glow: "shadow-[0_0_12px_rgba(239,68,68,0.5)]", text: "text-red-500" },
  blue: { frameBg: "bg-blue-950/10", border: "border-blue-900/40", dotBg: "bg-blue-500", glow: "shadow-[0_0_12px_rgba(59,130,246,0.5)]", text: "text-blue-500" },
  purple: { frameBg: "bg-purple-950/10", border: "border-purple-900/40", dotBg: "bg-purple-500", glow: "shadow-[0_0_12px_rgba(168,85,247,0.5)]", text: "text-purple-500" },
  yellow: { frameBg: "bg-yellow-950/10", border: "border-yellow-900/40", dotBg: "bg-yellow-500", glow: "shadow-[0_0_12px_rgba(234,179,8,0.5)]", text: "text-yellow-500" },
  green: { frameBg: "bg-emerald-950/10", border: "border-emerald-900/40", dotBg: "bg-emerald-500", glow: "shadow-[0_0_12px_rgba(34,197,94,0.5)]", text: "text-emerald-500" },
  orange: { frameBg: "bg-orange-950/10", border: "border-orange-900/40", dotBg: "bg-orange-500", glow: "shadow-[0_0_12px_rgba(249,115,22,0.5)]", text: "text-orange-500" },
};

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
    <div className="relative min-h-screen bg-black font-sans text-zinc-100">
      <Header />

      {/* Hero Section */}
      <section className="pb-4 pt-6 sm:pt-10">
        <Container className="px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/30 px-3 py-1 font-mono text-[10px] text-cyan-400">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
              SPEKTRUM DIVISI CYBER SECURITY
            </div>

            <h1 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-white leading-snug sm:text-4xl lg:text-5xl">
              Satu Peta Untuk Memahami <br className="hidden sm:block" />
              <span className="text-cyan-400">Setiap Warna Tim Security</span>
            </h1>

            <p className="mx-auto mt-2.5 max-w-xl text-xs text-zinc-400 leading-relaxed sm:text-sm">
              Telusuri 7 divisi utama beserta profesi, keterampilan, dan sertifikasi yang relevan.
            </p>
          </div>

          {/* Stats Bar 2x2 Mobile */}
          <div className="mx-auto mt-6 grid max-w-2xl grid-cols-2 gap-2 sm:grid-cols-4">
            {heroStats.map((stat) => (
              <div key={stat.label} className="rounded-lg border border-zinc-800 bg-zinc-950 p-2.5 text-center">
                <div className="font-mono text-lg font-bold text-cyan-400 sm:text-2xl">{stat.value}</div>
                <div className="mt-0.5 font-mono text-[9px] text-zinc-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Overview Section */}
      <section className="py-6 sm:py-10">
        <Container className="px-4">
          <div className="mb-4">
            <p className="font-mono text-[10px] uppercase tracking-widest text-cyan-500">// Overview</p>
            <h2 className="mt-1 font-display text-xl font-bold text-white sm:text-2xl">Apa itu Cyber Security?</h2>
            <p className="text-xs text-zinc-400 mt-1">Bidang multidisiplin yang menjaga aset digital dari ancaman yang terus berkembang.</p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {overviewItems.map((item) => {
              const Icon = (LucideIcons[item.icon as keyof typeof LucideIcons] as LucideIcon) ?? LucideIcons.Info;
              return (
                <div key={item.title} className="rounded-xl border border-zinc-800/80 bg-zinc-950/80 p-4">
                  <div className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-cyan-400" />
                    <h3 className="font-bold text-sm text-white">{item.title}</h3>
                  </div>
                  <p className="mt-2 text-xs text-zinc-400 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Search & Team Selector */}
      <section id="spectrum" className="py-2">
        <Container className="space-y-3 px-4">
          <SearchBar value={query} onChange={setQuery} />
          {!isSearching && <TeamSelector />}
        </Container>
      </section>

      {/* Search Results */}
      {isSearching && (
        <section className="py-6">
          <Container className="px-4">
            <p className="mb-4 text-xs text-zinc-500">
              {globalMatches?.length ?? 0} hasil untuk &ldquo;{query}&rdquo;
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
          </Container>
        </section>
      )}

      {/* Main Roles Section */}
      {!isSearching && (
        <section id="roles" className="py-8 sm:py-10">
          <Container className="px-4">
            <div className="mb-6">
              <p className="font-mono text-[10px] uppercase tracking-widest text-cyan-500">// STRUKTUR TIM</p>
              <h2 className="mt-1 font-display text-xl font-bold text-white sm:text-2xl">Tim & Divisi Cyber Security</h2>
              <p className="text-xs text-zinc-400 mt-1">
                Setiap tim memiliki peran unik — dari menyerang, mempertahankan, hingga mengelola budaya keamanan.
              </p>
            </div>

            <div className="space-y-8">
              {teamsData.map((team) => {
                const style = teamContainerStyles[team.color] || teamContainerStyles.white;

                return (
                  <div
                    key={team.id}
                    id={`team-${team.id}`}
                    className={cn(
                      "rounded-2xl border p-4 sm:p-6 transition-all",
                      style.frameBg,
                      style.border
                    )}
                  >
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className={cn("h-3.5 w-3.5 rounded-full shrink-0", style.dotBg, style.glow)} />
                      <h3 className={cn("font-display text-base sm:text-lg font-extrabold uppercase tracking-wide", style.text)}>
                        {team.name}
                      </h3>
                    </div>

                    <p className="font-mono text-[11px] text-zinc-400 mb-5 pl-6 leading-relaxed">
                      // {team.tagline} — {team.mission}
                    </p>

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
  );
}

function EmptyState({ query }: { query: string }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-zinc-800 py-12 text-center">
      <SearchX className="h-6 w-6 text-zinc-600" />
      <p className="mt-2 text-xs text-zinc-400">
        Tidak ada profesi yang cocok dengan &ldquo;{query}&rdquo;.
      </p>
    </div>
  );
}
