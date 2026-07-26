import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { Check } from "lucide-react";

interface FilterChipProps {
  children: ReactNode;
  selected: boolean;
  onClick: () => void;
  className?: string;
  icon?: ReactNode;
}

export const FilterChip = ({ children, selected, onClick, className, icon }: FilterChipProps) => {
  const getChipStyle = (content: string) => {
    const text = content.toString().toLowerCase();
    if (text.includes('0-1') || text.includes('calm'))
      return selected
        ? 'bg-purple text-white border-purple shadow-lg ring-2 ring-purple/30'
        : 'border-purple/30 text-purple hover:border-purple hover:bg-purple/10';
    if (text.includes('1-3') || text.includes('burn'))
      return selected
        ? 'bg-primary text-white border-primary shadow-lg ring-2 ring-primary/30'
        : 'border-primary/30 text-primary hover:border-primary hover:bg-primary/10';
    if (text.includes('3-6') || text.includes('beat'))
      return selected
        ? 'bg-orange text-white border-orange shadow-lg ring-2 ring-orange/30'
        : 'border-orange/30 text-orange hover:border-orange hover:bg-orange/10';
    if (text.includes('6-10') || text.includes('connect'))
      return selected
        ? 'bg-secondary text-white border-secondary shadow-lg ring-2 ring-secondary/30'
        : 'border-secondary/30 text-secondary hover:border-secondary hover:bg-secondary/10';
    if (text.includes('10+') || text.includes('quiet'))
      return selected
        ? 'bg-pink text-white border-pink shadow-lg ring-2 ring-pink/30'
        : 'border-pink/30 text-pink hover:border-pink hover:bg-pink/10';
    return selected
      ? 'bg-accent text-white border-accent shadow-lg ring-2 ring-accent/30'
      : 'border-accent/30 text-accent hover:border-accent hover:bg-accent/10';
  };

  return (
    <button
      onClick={onClick}
      aria-pressed={selected}
      className={cn(
        "relative w-full h-14 px-3 rounded-2xl text-sm font-semibold font-fredoka",
        "flex items-center justify-center gap-2 text-center leading-tight",
        "border-2 transition-all duration-200 ease-bounce",
        "hover:-translate-y-0.5 active:scale-95",
        getChipStyle(children?.toString() || ''),
        className
      )}
    >
      {icon && <span className="shrink-0 opacity-90">{icon}</span>}
      <span className="truncate">{children}</span>
      {selected && (
        <span className="absolute -top-1.5 -right-1.5 bg-white rounded-full p-0.5 shadow-md">
          <Check className="w-3 h-3 text-foreground" strokeWidth={3} />
        </span>
      )}
    </button>
  );
};
