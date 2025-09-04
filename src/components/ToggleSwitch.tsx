import { cn } from "@/lib/utils";

interface ToggleSwitchProps {
  leftLabel: string;
  rightLabel: string;
  value: 'left' | 'right';
  onChange: (value: 'left' | 'right') => void;
  className?: string;
}

export const ToggleSwitch = ({ leftLabel, rightLabel, value, onChange, className }: ToggleSwitchProps) => {
  return (
    <div className={cn(
      "inline-flex rounded-xl p-1 bg-surface border border-card-border shadow-soft",
      className
    )}>
      <button
        onClick={() => onChange('left')}
        className={cn(
          "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ease-bounce",
          "hover:scale-105 active:scale-95",
          value === 'left'
            ? "bg-gradient-secondary text-secondary-foreground shadow-button"
            : "text-text-secondary hover:text-text-primary hover:bg-hover"
        )}
      >
        {leftLabel}
      </button>
      <button
        onClick={() => onChange('right')}
        className={cn(
          "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ease-bounce",
          "hover:scale-105 active:scale-95",
          value === 'right'
            ? "bg-gradient-secondary text-secondary-foreground shadow-button"
            : "text-text-secondary hover:text-text-primary hover:bg-hover"
        )}
      >
        {rightLabel}
      </button>
    </div>
  );
};