import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-6 backdrop-blur-md transition-all",
        className
      )}
    >
      {children}
    </div>
  );
}
