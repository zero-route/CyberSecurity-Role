import { GraduationCap, Wrench } from "lucide-react";
import type { CareerRole } from "@/types/team";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { cn, getTeamAccent } from "@/lib/utils";

interface RoleCardProps {
  role: CareerRole;
  teamColor: string;
}

export function RoleCard({ role, teamColor }: RoleCardProps) {
  const accent = getTeamAccent(teamColor);

  return (
    <Card
      className={cn(
        "group flex h-full flex-col gap-4 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:bg-zinc-900/70 hover:shadow-glow-sm",
        accent.borderHover
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-base font-semibold leading-snug text-zinc-100">
          {role.title}
        </h3>
        <span
          className={cn("mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full", accent.dot)}
          aria-hidden="true"
        />
      </div>

      <p className="text-sm leading-relaxed text-zinc-400">{role.description}</p>

      <div className="mt-auto space-y-3 pt-2">
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
    </Card>
  );
}
