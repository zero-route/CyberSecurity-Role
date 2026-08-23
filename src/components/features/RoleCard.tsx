import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { GraduationCap, Wrench } from "lucide-react";
import type { CareerRole } from "@/types/team";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

interface RoleCardProps {
  role: CareerRole;
  teamColor: string; // "white" | "red" | "blue" | "purple" | "yellow" | "green" | "orange"
}

// Map warna subtle (garis aksen kiri & teks icon tipis)
const accentStyles: Record<string, { borderLeft: string; iconBg: string; iconText: string; certTag: string }> = {
  white: { borderLeft: "border-l-zinc-300", iconBg: "bg-zinc-800/60", iconText: "text-zinc-200", certTag: "border-zinc-700 text-zinc-300" },
  red: { borderLeft: "border-l-red-500", iconBg: "bg-red-950/30", iconText: "text-red-400", certTag: "border-red-900/50 bg-red-950/30 text-red-300" },
  blue: { borderLeft: "border-l-blue-500", iconBg: "bg-blue-950/30", iconText: "text-blue-400", certTag: "border-blue-900/50 bg-blue-950/30 text-blue-300" },
  purple: { borderLeft: "border-l-purple-500", iconBg: "bg-purple-950/30", iconText: "text-purple-400", certTag: "border-purple-900/50 bg-purple-950/30 text-purple-300" },
  yellow: { borderLeft: "border-l-amber-500", iconBg: "bg-amber-950/30", iconText: "text-amber-400", certTag: "border-amber-900/50 bg-amber-950/30 text-amber-300" },
  green: { borderLeft: "border-l-emerald-500", iconBg: "bg-emerald-950/30", iconText: "text-emerald-400", certTag: "border-emerald-900/50 bg-emerald-950/30 text-emerald-300" },
  orange: { borderLeft: "border-l-orange-500", iconBg: "bg-orange-950/30", iconText: "text-orange-400", certTag: "border-orange-900/50 bg-orange-950/30 text-orange-300" },
};

export function RoleCard({ role, teamColor }: RoleCardProps) {
  const accent = accentStyles[teamColor] || accentStyles.white;
  const RoleIcon =
    (LucideIcons[role.icon as keyof typeof LucideIcons] as LucideIcon) ?? LucideIcons.Circle;

  return (
    <div
      className={cn(
        "group flex h-full flex-col justify-between rounded-lg border border-zinc-800/80 bg-zinc-900/30 p-5 border-l-2 transition-colors duration-200 hover:border-zinc-700 hover:bg-zinc-900/60",
        accent.borderLeft
      )}
    >
      <div>
        {/* Card Header */}
        <div className="flex items-center gap-3 mb-3">
          <div className={cn("flex h-8 w-8 items-center justify-center rounded-md border border-zinc-800", accent.iconBg)}>
            <RoleIcon className={cn("h-4 w-4", accent.iconText)} strokeWidth={1.75} />
          </div>
          <h3 className="font-sans text-sm font-semibold text-zinc-100">
            {role.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-xs leading-relaxed text-zinc-400 mb-6">
          {role.description}
        </p>
      </div>

      {/* Footer Skills & Certs */}
      <div className="space-y-3 pt-3 border-t border-zinc-800/50">
        <div>
          <div className="mb-1.5 flex items-center gap-1.5 text-[11px] font-medium text-zinc-500">
            <Wrench className="h-3 w-3" />
            <span>Skills</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {role.skills.map((skill) => (
              <Badge key={skill} className="text-[10px] text-zinc-400 border-zinc-800 bg-zinc-900/40">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-1.5 flex items-center gap-1.5 text-[11px] font-medium text-zinc-500">
            <GraduationCap className="h-3 w-3" />
            <span>Sertifikasi</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {role.certifications.map((cert) => (
              <Badge key={cert} className={cn("text-[10px]", accent.certTag)}>
                {cert}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
