import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface FilterChipProps {
  children: ReactNode;
  selected: boolean;
  onClick: () => void;
  className?: string;
}

export const FilterChip = ({ children, selected, onClick, className }: FilterChipProps) => {
  // Get a colorful style based on the chip content for variety
  const getChipStyle = (content: string) => {
    const text = content.toString().toLowerCase();
    if (text.includes('0-1') || text.includes('calm')) return selected ? 'bg-purple text-white border-purple shadow-lg' : 'border-purple/30 text-purple hover:border-purple hover:bg-purple/10';
    if (text.includes('1-2') || text.includes('burn')) return selected ? 'bg-primary text-white border-primary shadow-lg' : 'border-primary/30 text-primary hover:border-primary hover:bg-primary/10';
    if (text.includes('3-4') || text.includes('beat')) return selected ? 'bg-orange text-white border-orange shadow-lg' : 'border-orange/30 text-orange hover:border-orange hover:bg-orange/10';
    if (text.includes('5-7') || text.includes('connect')) return selected ? 'bg-secondary text-white border-secondary shadow-lg' : 'border-secondary/30 text-secondary hover:border-secondary hover:bg-secondary/10';
    if (text.includes('8-10') || text.includes('quiet')) return selected ? 'bg-pink text-white border-pink shadow-lg' : 'border-pink/30 text-pink hover:border-pink hover:bg-pink/10';
    if (text.includes('10-12')) return selected ? 'bg-lime text-white border-lime shadow-lg' : 'border-lime/30 text-lime hover:border-lime hover:bg-lime/10';
    return selected ? 'bg-accent text-white border-accent shadow-lg' : 'border-accent/30 text-accent hover:border-accent hover:bg-accent/10';
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        "px-4 py-2 rounded-full text-sm font-semibold font-fredoka transition-all duration-300 ease-bounce",
        "border-2 hover:scale-110 active:scale-95 transform",
        getChipStyle(children?.toString() || ''),
        className
      )}
    >
      {children}
    </button>
  );
};