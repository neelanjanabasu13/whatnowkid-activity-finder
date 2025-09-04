import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface FilterChipProps {
  children: ReactNode;
  selected: boolean;
  onClick: () => void;
  className?: string;
}

export const FilterChip = ({ children, selected, onClick, className }: FilterChipProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ease-smooth",
        "border-2 hover:scale-105 active:scale-95",
        selected
          ? "bg-selected border-primary text-primary shadow-button transform"
          : "bg-card border-card-border text-text-secondary hover:border-primary/30 hover:bg-hover",
        className
      )}
    >
      {children}
    </button>
  );
};