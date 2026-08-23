"use client";

import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { teamsData } from "@/data/teamsData";
import { cn, getTeamAccent } from "@/lib/utils";

export function TeamSelector() {
  const handleJump = (id: string) => {
    document.getElementById(`team-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      role="tablist"
      aria-label="Lompat ke divisi cyber security"
      className="flex snap-x gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:overflow-visible sm:pb-0"
    >
      {teamsData.map((team) => {
        const accent = getTeamAccent(team.color);
        const Icon = (LucideIcons[
          team.icon as keyof typeof LucideIcons
        ] as LucideIcon) ?? LucideIcons.Shield;

        return (
          <button
            key={team.id}
            type="button"
            onClick={() => handleJump(team.id)}
            className={cn(
              "group flex shrink-0 snap-start items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950 px-4 py-2 text-sm font-medium text-zinc-400 transition-all duration-200",
              accent.borderHover,
              "hover:text-zinc-200"
            )}
          >
            <Icon className={cn("h-4 w-4 transition-colors", accent.text)} strokeWidth={2} />
            {team.name}
          </button>
        );
      })}
    </div>
  );
}