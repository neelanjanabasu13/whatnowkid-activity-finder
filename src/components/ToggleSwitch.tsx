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
      "inline-flex rounded-full p-1 bg-surface-soft border border-card-border shadow-soft w-full",
      className
    )}>
      <button
        onClick={() => onChange('left')}
        className={cn(
          "flex-1 px-6 py-3 rounded-full text-sm font-semibold font-fredoka transition-all duration-300 ease-bounce",
          "hover:scale-105 active:scale-95",
          value === 'left'
            ? "bg-gradient-primary text-white shadow-button"
            : "text-text-secondary hover:text-text-primary hover:bg-hover/50"
        )}
      >
        {leftLabel}
      </button>
      <button
        onClick={() => onChange('right')}
        className={cn(
          "flex-1 px-6 py-3 rounded-full text-sm font-semibold font-fredoka transition-all duration-300 ease-bounce",
          "hover:scale-105 active:scale-95",
          value === 'right'
            ? "bg-gradient-to-r from-purple to-pink text-white shadow-button"
            : "text-text-secondary hover:text-text-primary hover:bg-hover/50"
        )}
      >
        {rightLabel}
      </button>
    </div>
  );
};