import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind class names safely, resolving conflicting utility
 * classes (e.g. "p-2 p-4" -> "p-4") while allowing conditional classes.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Maps a team's color token to a consistent set of Tailwind utility
 * classes used across cards, badges, and tabs. Centralizing this avoids
 * repeating long conditional class strings in every component.
 */
export function getTeamAccent(color: string) {
  const accents: Record<
    string,
    {
      border: string;
      borderHover: string;
      text: string;
      bg: string;
      ring: string;
      dot: string;
    }
  > = {
    zinc: {
      border: "border-zinc-300/30",
      borderHover: "hover:border-zinc-300/70",
      text: "text-zinc-200",
      bg: "bg-zinc-300/10",
      ring: "ring-zinc-300/40",
      dot: "bg-zinc-300",
    },
    red: {
      border: "border-red-500/30",
      borderHover: "hover:border-red-500/70",
      text: "text-red-400",
      bg: "bg-red-500/10",
      ring: "ring-red-500/40",
      dot: "bg-red-500",
    },
    blue: {
      border: "border-blue-500/30",
      borderHover: "hover:border-blue-500/70",
      text: "text-blue-400",
      bg: "bg-blue-500/10",
      ring: "ring-blue-500/40",
      dot: "bg-blue-500",
    },
    purple: {
      border: "border-purple-500/30",
      borderHover: "hover:border-purple-500/70",
      text: "text-purple-400",
      bg: "bg-purple-500/10",
      ring: "ring-purple-500/40",
      dot: "bg-purple-500",
    },
    yellow: {
      border: "border-yellow-500/30",
      borderHover: "hover:border-yellow-500/70",
      text: "text-yellow-400",
      bg: "bg-yellow-500/10",
      ring: "ring-yellow-500/40",
      dot: "bg-yellow-500",
    },
    green: {
      border: "border-green-500/30",
      borderHover: "hover:border-green-500/70",
      text: "text-green-400",
      bg: "bg-green-500/10",
      ring: "ring-green-500/40",
      dot: "bg-green-500",
    },
    orange: {
      border: "border-orange-500/30",
      borderHover: "hover:border-orange-500/70",
      text: "text-orange-400",
      bg: "bg-orange-500/10",
      ring: "ring-orange-500/40",
      dot: "bg-orange-500",
    },
  };

  return accents[color] ?? accents.zinc;
}
