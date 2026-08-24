"use client";

import { hexToRgba } from "@/lib/utils";

export default function TeamSelector({ teams, selectedTeams, onToggle }) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {teams.map((team) => {
        const active = selectedTeams.includes(team.id);
        return (
          <button
            key={team.id}
            onClick={() => onToggle(team.id)}
            className="flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium transition"
            style={{
              borderColor: active ? team.color : hexToRgba(team.color, 0.3),
              backgroundColor: active ? hexToRgba(team.color, 0.18) : "transparent",
              color: active ? team.color : "#9ca3af",
            }}
          >
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: team.color }}
            />
            {team.name}
          </button>
        );
      })}
    </div>
  );
}
