import { cn, hexToRgba } from "@/lib/utils";

/**
 * Card dasar dengan border tipis + soft glow sesuai `color` (hex).
 * Dipakai sebagai pembungkus section tim maupun RoleCard individual.
 */
export default function Card({ children, color, className, as: Tag = "div" }) {
  const style = color
    ? {
        borderColor: hexToRgba(color, 0.35),
        boxShadow: `0 0 32px -18px ${hexToRgba(color, 0.6)}`,
        backgroundColor: hexToRgba(color, 0.05),
      }
    : undefined;

  return (
    <Tag
      style={style}
      className={cn(
        "rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm transition",
        className
      )}
    >
      {children}
    </Tag>
  );
}
