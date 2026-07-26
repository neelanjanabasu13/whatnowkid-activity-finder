import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface FilterChipProps {
  children: ReactNode;
  selected: boolean;
  onClick: () => void;
  className?: string;
  icon?: ReactNode;
}

export const FilterChip = ({ children, selected, onClick, className, icon }: FilterChipProps) => {
  return (
    <button
      onClick={onClick}
      aria-pressed={selected}
      className={cn(
        "inline-flex items-center justify-center gap-2",
        "px-5 h-10 rounded-full text-sm font-semibold font-fredoka whitespace-nowrap",
        "border transition-all duration-200 ease-bounce",
        "hover:-translate-y-0.5 active:scale-95",
        selected
          ? "bg-gradient-primary text-white border-transparent shadow-button"
          : "bg-card text-text-primary border-card-border hover:border-primary/40 hover:text-primary",
        className
      )}
    >
      {icon && <span className="shrink-0 opacity-90">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};
