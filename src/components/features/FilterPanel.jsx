"use client";

import { teamsData } from "@/data/teamsData";

const DOMAIN_LABELS = {
  network: "Network Security",
  application: "Application Security",
  cloud: "Cloud Security",
  governance: "Governance & Compliance",
  "incident-response": "Incident Response",
  "threat-intel": "Threat Intelligence",
  awareness: "Security Awareness",
};

const LEVELS = [
  { value: "beginner", label: "Beginner" },
  { value: "intermediate", label: "Intermediate" },
  { value: "advanced", label: "Advanced" },
];

/**
 * Panel filter multi-kriteria. Menerima state & handler dari useFilteredTeams().
 */
export default function FilterPanel({
  selectedTeams,
  selectedDomains,
  selectedLevel,
  query,
  toggleTeam,
  toggleDomain,
  setSelectedLevel,
  setQuery,
  resetFilters,
  availableDomains,
}) {
  return (
    <div className="w-full space-y-6 rounded-xl border border-neutral-800 bg-neutral-900/50 p-4">
      {/* Search */}
      <div>
        <label className="mb-2 block text-sm font-medium text-neutral-300">
          Cari role, skill, atau tools
        </label>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="misal: pentest, SIEM, threat modeling..."
          className="w-full rounded-lg border border-neutral-700 bg-neutral-950 px-3 py-2 text-sm text-neutral-100 outline-none focus:border-neutral-500"
        />
      </div>

      {/* Filter tim */}
      <div>
        <p className="mb-2 text-sm font-medium text-neutral-300">Tim</p>
        <div className="flex flex-wrap gap-2">
          {teamsData.map((team) => {
            const active = selectedTeams.includes(team.id);
            return (
              <button
                key={team.id}
                onClick={() => toggleTeam(team.id)}
                className="rounded-full border px-3 py-1 text-xs font-medium transition"
                style={{
                  borderColor: team.color,
                  backgroundColor: active ? team.color : "transparent",
                  color: active ? "#0a0a0a" : team.color,
                }}
              >
                {team.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Filter domain */}
      <div>
        <p className="mb-2 text-sm font-medium text-neutral-300">Domain Keahlian</p>
        <div className="flex flex-wrap gap-2">
          {availableDomains.map((domain) => {
            const active = selectedDomains.includes(domain);
            return (
              <button
                key={domain}
                onClick={() => toggleDomain(domain)}
                className={`rounded-full border px-3 py-1 text-xs font-medium transition ${
                  active
                    ? "border-neutral-100 bg-neutral-100 text-neutral-900"
                    : "border-neutral-700 text-neutral-300 hover:border-neutral-500"
                }`}
              >
                {DOMAIN_LABELS[domain] ?? domain}
              </button>
            );
          })}
        </div>
      </div>

      {/* Filter level */}
      <div>
        <p className="mb-2 text-sm font-medium text-neutral-300">Level</p>
        <div className="flex gap-2">
          {LEVELS.map((lvl) => {
            const active = selectedLevel === lvl.value;
            return (
              <button
                key={lvl.value}
                onClick={() => setSelectedLevel(active ? null : lvl.value)}
                className={`rounded-full border px-3 py-1 text-xs font-medium transition ${
                  active
                    ? "border-neutral-100 bg-neutral-100 text-neutral-900"
                    : "border-neutral-700 text-neutral-300 hover:border-neutral-500"
                }`}
              >
                {lvl.label}
              </button>
            );
          })}
        </div>
      </div>

      <button
        onClick={resetFilters}
        className="text-xs font-medium text-neutral-400 underline underline-offset-2 hover:text-neutral-200"
      >
        Reset semua filter
      </button>
    </div>
  );
}
