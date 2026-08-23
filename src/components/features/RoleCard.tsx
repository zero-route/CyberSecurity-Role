import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { GraduationCap, Wrench } from "lucide-react";
import type { CareerRole } from "@/types/team";
import { Badge } from "@/components/ui/Badge";
import { cn, getTeamAccent } from "@/lib/utils";

interface RoleCardProps {
  role: CareerRole;
  teamColor: string;
}

export function RoleCard({ role, teamColor }: RoleCardProps) {
  const accent = getTeamAccent(teamColor);
  const RoleIcon =
    (LucideIcons[role.icon as keyof typeof LucideIcons] as LucideIcon) ?? LucideIcons.Circle;

  return (
    <div
      className={cn(
        "group flex h-full flex-col gap-4 rounded-xl border border-zinc-800/70 bg-zinc-950/50 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:bg-zinc-950/80",
        accent.borderHover
      )}
    >
      <div className="flex items-start gap-3">
        <div
          className={cn(
            "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border bg-zinc-900",
            accent.border
          )}
        >
          <RoleIcon className={cn("h-4 w-4", accent.text)} strokeWidth={2} />
        </div>
        <h3 className="pt-1.5 font-display text-base font-semibold leading-snug text-zinc-100">
          {role.title}
        </h3>
      </div>

      <p className="text-sm leading-relaxed text-zinc-400">{role.description}</p>

      <div className="mt-auto space-y-4 pt-1">
        <div>
          <div className="mb-1.5 flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-zinc-500">
            <Wrench className="h-3.5 w-3.5" />
            Skills
          </div>
          <div className="flex flex-wrap gap-1.5">
            {role.skills.map((skill) => (
              <Badge key={skill} className="text-[11px]">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-1.5 flex items-center gap-1.5 text-xs font-medium uppercase tracking-wide text-zinc-500">
            <GraduationCap className="h-3.5 w-3.5" />
            Sertifikasi
          </div>
          <div className="flex flex-wrap gap-1.5">
            {role.certifications.map((cert) => (
              <Badge key={cert} className={cn("text-[11px]", accent.text, accent.border)}>
                {cert}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}