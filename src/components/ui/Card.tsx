import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-zinc-800/80 bg-zinc-900/50 shadow-glow-sm backdrop-blur-sm",
        className
      )}
    >
      {children}
    </div>
  );
}