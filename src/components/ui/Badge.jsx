import { cn } from "@/lib/utils";

/**
 * Badge kecil, dipakai untuk tag di RoleCard atau label level/domain.
 * `color` opsional (hex), default abu-abu netral.
 */
export default function Badge({ children, color, className }) {
  const style = color
    ? { color, borderColor: `${color}55`, backgroundColor: `${color}14` }
    : undefined;

  return (
    <span
      style={style}
      className={cn(
        "inline-block rounded-full border px-2.5 py-0.5 text-[10px] font-semibold tracking-wide",
        !color && "border-white/10 bg-white/5 text-neutral-400",
        className
      )}
    >
      {children}
    </span>
  );
}
