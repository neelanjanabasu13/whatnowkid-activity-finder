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
      "inline-flex rounded-full p-1 bg-surface-soft border border-card-border shadow-soft",
      className
    )}>
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onChange(option)}
          className={cn(
            "px-6 py-3 rounded-full text-sm font-semibold font-fredoka transition-all duration-300 ease-bounce min-w-20",
            "hover:scale-105 active:scale-95",
            value === option
              ? "bg-gradient-primary text-white shadow-button"
              : "text-text-secondary hover:text-text-primary hover:bg-hover/50"
          )}
        >
          {option}
        </button>
      ))}
    </div>
  );
};