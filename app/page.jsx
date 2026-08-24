"use client";

import Container from "@/components/layout/Container";
import SearchBar from "@/components/features/SearchBar";
import TeamSelector from "@/components/features/TeamSelector";
import FilterPanel from "@/components/features/FilterPanel";
import RoleCard from "@/components/features/RoleCard";
import { teamsData, getAllDomains } from "@/data/teamsData";
import { heroData, heroStats, overviewData, teamSectionIntro } from "@/data/overviewData";
import { useFilteredTeams } from "@/hooks/useFilteredTeams";
import { hexToRgba } from "@/lib/utils";

export default function HomePage() {
  const {
    filteredRoles,
    selectedTeams,
    selectedDomains,
    selectedLevel,
    query,
    toggleTeam,
    toggleDomain,
    setSelectedLevel,
    setQuery,
    resetFilters,
  } = useFilteredTeams();

  const availableDomains = getAllDomains();
  const isFiltering =
    query.trim() !== "" || selectedTeams.length > 0 || selectedDomains.length > 0 || selectedLevel;

  return (
    <>
      {/* ===== HERO ===== */}
      <Container className="pt-16 pb-10 text-center">
        <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-cyan-400/80">
          {heroData.eyebrow}
        </p>
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl">
          <span className="text-neutral-50">{heroData.titlePrefix}</span>
          <span className="text-cyan-400 neon-text">{heroData.titleHighlight}</span>
        </h1>
        <p className="mx-auto max-w-xl text-sm leading-relaxed text-neutral-400 sm:text-base">
          {heroData.description}
        </p>

        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {heroStats.map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl font-bold text-cyan-400 sm:text-3xl">{stat.value}</p>
              <p className="mt-1 text-[10px] tracking-widest text-neutral-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>

      {/* ===== OVERVIEW ===== */}
      <Container className="py-10">
        <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-cyan-400/80">
          {overviewData.eyebrow}
        </p>
        <h2 className="mb-2 text-2xl font-bold text-neutral-50 sm:text-3xl">{overviewData.title}</h2>
        <p className="mb-8 text-sm text-neutral-400">{overviewData.subtitle}</p>

        <div className="grid gap-4 sm:grid-cols-2">
          {overviewData.cards.map((card) => (
            <div
              key={card.title}
              className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-sm"
            >
              <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold text-cyan-300">
                <span>{card.icon}</span>
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed text-neutral-400">{card.description}</p>
            </div>
          ))}
        </div>
      </Container>

      {/* ===== FILTER & SEARCH ===== */}
      <Container className="py-10">
        <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-cyan-400/80">
          {teamSectionIntro.eyebrow}
        </p>
        <h2 className="mb-2 text-2xl font-bold text-neutral-50 sm:text-3xl">
          {teamSectionIntro.title}
        </h2>
        <p className="mb-6 text-sm text-neutral-400">{teamSectionIntro.subtitle}</p>

        <div className="mb-6">
          <SearchBar value={query} onChange={setQuery} />
        </div>

        <div className="mb-6">
          <TeamSelector teams={teamsData} selectedTeams={selectedTeams} onToggle={toggleTeam} />
        </div>

        <details className="mb-4 rounded-xl border border-white/10 bg-white/[0.02] p-4">
          <summary className="cursor-pointer text-sm font-medium text-neutral-300">
            Filter lanjutan (domain & level)
          </summary>
          <div className="mt-4">
            <FilterPanel
              selectedTeams={selectedTeams}
              selectedDomains={selectedDomains}
              selectedLevel={selectedLevel}
              query={query}
              toggleTeam={toggleTeam}
              toggleDomain={toggleDomain}
              setSelectedLevel={setSelectedLevel}
              setQuery={setQuery}
              resetFilters={resetFilters}
              availableDomains={availableDomains}
            />
          </div>
        </details>
      </Container>

      {/* ===== HASIL FILTER (jika sedang memfilter) ===== */}
      {isFiltering && (
        <Container className="pb-10">
          <p className="mb-4 text-sm text-neutral-400">
            Menampilkan {filteredRoles.length} role
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredRoles.map((role) => (
              <RoleCard key={role.slug} role={role} color={role.teamColor} />
            ))}
          </div>
        </Container>
      )}

      {/* ===== DAFTAR TIM (tampilan default, dikelompokkan per tim) ===== */}
      {!isFiltering && (
        <Container className="space-y-8 pb-16">
          {teamsData.map((team) => (
            <section
              key={team.id}
              className="rounded-2xl border p-6"
              style={{
                borderColor: hexToRgba(team.color, 0.3),
                backgroundColor: hexToRgba(team.color, 0.04),
                boxShadow: `0 0 40px -22px ${hexToRgba(team.color, 0.7)}`,
              }}
            >
              <div className="mb-6 flex items-center gap-3">
                <span
                  className="h-8 w-8 shrink-0 rounded-full"
                  style={{
                    backgroundColor: team.color,
                    boxShadow: `0 0 16px 2px ${hexToRgba(team.color, 0.6)}`,
                  }}
                />
                <div>
                  <h3
                    className="text-xl font-bold tracking-wide"
                    style={{ color: team.color }}
                  >
                    {team.name.toUpperCase()}
                  </h3>
                  <p className="text-xs tracking-wide text-neutral-500">// {team.mission}</p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {team.roles.map((role) => (
                  <RoleCard key={role.slug} role={role} color={team.color} />
                ))}
              </div>
            </section>
          ))}
        </Container>
      )}
    </>
  );
}
