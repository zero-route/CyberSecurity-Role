"use client";

import { useMemo, useState } from "react";
import { getAllRolesFlat } from "@/data/teamsData";

/**
 * Hook untuk filter role berdasarkan beberapa kriteria sekaligus:
 * - teamId (satu atau lebih tim)
 * - domain (network, application, cloud, dst)
 * - level (beginner/intermediate/advanced)
 * - search query (judul, skill, tools)
 */
export function useFilteredTeams() {
  const [selectedTeams, setSelectedTeams] = useState([]); // array teamId, kosong = semua
  const [selectedDomains, setSelectedDomains] = useState([]); // array domain, kosong = semua
  const [selectedLevel, setSelectedLevel] = useState(null); // single level, null = semua
  const [query, setQuery] = useState("");

  const allRoles = useMemo(() => getAllRolesFlat(), []);

  const filteredRoles = useMemo(() => {
    return allRoles.filter((role) => {
      const matchTeam =
        selectedTeams.length === 0 || selectedTeams.includes(role.teamId);

      const matchDomain =
        selectedDomains.length === 0 || selectedDomains.includes(role.domain);

      const matchLevel = !selectedLevel || role.level === selectedLevel;

      const q = query.trim().toLowerCase();
      const matchQuery =
        q === "" ||
        role.title.toLowerCase().includes(q) ||
        role.shortDescription.toLowerCase().includes(q) ||
        role.skills.some((s) => s.toLowerCase().includes(q)) ||
        role.tools.some((t) => t.toLowerCase().includes(q));

      return matchTeam && matchDomain && matchLevel && matchQuery;
    });
  }, [allRoles, selectedTeams, selectedDomains, selectedLevel, query]);

  function toggleTeam(teamId) {
    setSelectedTeams((prev) =>
      prev.includes(teamId) ? prev.filter((t) => t !== teamId) : [...prev, teamId]
    );
  }

  function toggleDomain(domain) {
    setSelectedDomains((prev) =>
      prev.includes(domain) ? prev.filter((d) => d !== domain) : [...prev, domain]
    );
  }

  function resetFilters() {
    setSelectedTeams([]);
    setSelectedDomains([]);
    setSelectedLevel(null);
    setQuery("");
  }

  return {
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
  };
}
