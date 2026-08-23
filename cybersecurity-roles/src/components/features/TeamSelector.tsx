"use client";

import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { teamsData } from "@/data/teamsData";
import type { TeamId } from "@/types/team";
import { cn, getTeamAccent } from "@/lib/utils";

interface TeamSelectorProps {
  activeTeam: TeamId;
  onSelect: (id: TeamId) => void;
}

export function TeamSelector({ activeTeam, onSelect }: TeamSelectorProps) {
  return (
    <div
      role="tablist"
      aria-label="Pilih divisi cyber security"
      className="flex snap-x gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:overflow-visible sm:pb-0"
    >
      {teamsData.map((team) => {
        const accent = getTeamAccent(team.color);
        const Icon = (LucideIcons[
          team.icon as keyof typeof LucideIcons
        ] as LucideIcon) ?? LucideIcons.Shield;
        const isActive = activeTeam === team.id;

        return (
          <button
            key={team.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onSelect(team.id)}
            className={cn(
              "group flex shrink-0 snap-start items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200",
              isActive
                ? cn("bg-zinc-900", accent.border, accent.text)
                : "border-zinc-800 bg-zinc-950 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
            )}
          >
            <Icon
              className={cn(
                "h-4 w-4 transition-colors",
                isActive ? accent.text : "text-zinc-500 group-hover:text-zinc-300"
              )}
              strokeWidth={2}
            />
            {team.name}
          </button>
        );
      })}
    </div>
  );
}
