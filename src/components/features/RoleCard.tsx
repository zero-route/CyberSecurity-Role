import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { GraduationCap, Wrench } from "lucide-react";
import type { CareerRole } from "@/types/team";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

interface RoleCardProps {
  role: CareerRole;
  teamColor: string;
}

// Color palette presisi sesuai gambar referensi
const teamTheme: Record<string, { cardBg: string; border: string; text: string; badgeBg: string }> = {
  white: { cardBg: "bg-zinc-900/60", border: "border-zinc-700/60", text: "text-zinc-200", badgeBg: "bg-zinc-800 text-zinc-300 border-zinc-700" },
  red: { cardBg: "bg-red-950/30", border: "border-red-900/50", text: "text-red-400", badgeBg: "bg-red-900/40 text-red-300 border-red-800/60" },
  blue: { cardBg: "bg-blue-950/30", border: "border-blue-900/50", text: "text-blue-400", badgeBg: "bg-blue-900/40 text-blue-300 border-blue-800/60" },
  purple: { cardBg: "bg-purple-950/30", border: "border-purple-900/50", text: "text-purple-400", badgeBg: "bg-purple-900/40 text-purple-300 border-purple-800/60" },
  yellow: { cardBg: "bg-yellow-950/30", border: "border-yellow-900/50", text: "text-yellow-400", badgeBg: "bg-yellow-900/40 text-yellow-300 border-yellow-800/60" },
  green: { cardBg: "bg-emerald-950/30", border: "border-emerald-900/50", text: "text-emerald-400", badgeBg: "bg-emerald-900/40 text-emerald-300 border-emerald-800/60" },
  orange: { cardBg: "bg-orange-950/30", border: "border-orange-900/50", text: "text-orange-400", badgeBg: "bg-orange-900/40 text-orange-300 border-orange-800/60" },
};

export function RoleCard({ role, teamColor }: RoleCardProps) {
  const theme = teamTheme[teamColor] || teamTheme.white;
  const RoleIcon =
    (LucideIcons[role.icon as keyof typeof LucideIcons] as LucideIcon) ?? LucideIcons.Circle;

  return (
    <div
      className={cn(
        "group flex h-full flex-col justify-between rounded-xl border p-4 sm:p-5 transition-all duration-200",
        theme.cardBg,
        theme.border
      )}
    >
      <div>
        {/* Header Title + Icon */}
        <div className="flex items-center gap-3 mb-3">
          <RoleIcon className={cn("h-5 w-5 shrink-0", theme.text)} strokeWidth={2} />
          <h3 className={cn("font-bold text-sm sm:text-base leading-snug", theme.text)}>
            {role.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm leading-relaxed text-zinc-400 mb-5">
          {role.description}
        </p>
      </div>

      {/* Footer Info */}
      <div className="space-y-3 pt-3 border-t border-zinc-800/40">
        <div>
          <div className="mb-1.5 flex items-center gap-1.5 text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
            <Wrench className="h-3 w-3" />
            Skills
          </div>
          <div className="flex flex-wrap gap-1.5">
            {role.skills.map((skill) => (
              <span key={skill} className="rounded border border-zinc-800 bg-zinc-900/80 px-2 py-0.5 text-[10px] text-zinc-400">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-1.5 flex items-center gap-1.5 text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
            <GraduationCap className="h-3 w-3" />
            Sertifikasi
          </div>
          <div className="flex flex-wrap gap-1.5">
            {role.certifications.map((cert) => (
              <span key={cert} className={cn("rounded border px-2 py-0.5 text-[10px] font-mono font-semibold uppercase tracking-wider", theme.badgeBg)}>
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
