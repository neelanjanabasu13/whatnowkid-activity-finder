import { cn } from "@/lib/utils";

interface SegmentedControlProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export const SegmentedControl = ({ options, value, onChange, className }: SegmentedControlProps) => {
  return (
    <div className={cn(
      "inline-flex rounded-xl p-1 bg-surface border border-card-border shadow-soft",
      className
    )}>
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onChange(option)}
          className={cn(
            "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ease-smooth",
            "hover:scale-105 active:scale-95",
            value === option
              ? "bg-gradient-primary text-primary-foreground shadow-button"
              : "text-text-secondary hover:text-text-primary hover:bg-hover"
          )}
        >
          {option}
        </button>
      ))}
    </div>
  );
};