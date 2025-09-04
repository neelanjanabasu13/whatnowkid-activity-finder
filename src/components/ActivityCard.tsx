import { Activity } from "@/data/activities";
import { Badge } from "@/components/ui/badge";
import { Clock, Timer, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface ActivityCardProps {
  activity: Activity;
  className?: string;
}

export const ActivityCard = ({ activity, className }: ActivityCardProps) => {
  const getEnergyColor = (level: string) => {
    switch (level) {
      case 'Low': return 'bg-secondary-soft text-secondary';
      case 'Medium': return 'bg-accent-soft text-accent-foreground';
      case 'High': return 'bg-gradient-warm text-primary-foreground';
      default: return 'bg-surface text-text-secondary';
    }
  };

  const getCostColor = (cost: string) => {
    return cost === 'Free' ? 'bg-success/20 text-success' : 'bg-warning/20 text-warning';
  };

  return (
    <div className={cn(
      "bg-card border border-card-border rounded-xl p-6 shadow-card",
      "hover:shadow-glow hover:scale-105 transition-all duration-300 ease-smooth",
      "hover:border-primary/30",
      className
    )}>
      <div className="space-y-4">
        {/* Header */}
        <div>
          <h3 className="text-lg font-bold text-text-primary mb-2">{activity.title}</h3>
          <p className="text-text-secondary text-sm leading-relaxed">{activity.description}</p>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="bg-primary-soft text-primary border-primary/30">
            Ages {activity.age.join(', ')}
          </Badge>
          <Badge variant="outline" className="bg-info/20 text-info border-info/30">
            {activity.environment}
          </Badge>
          <Badge variant="outline" className={getCostColor(activity.cost)}>
            {activity.cost}
          </Badge>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-3 gap-4 py-3 border-t border-card-border">
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <Clock className="w-4 h-4 text-text-muted" />
            </div>
            <div className="text-xs text-text-muted">Duration</div>
            <div className="text-sm font-medium text-text-primary">{activity.duration}</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <Timer className="w-4 h-4 text-text-muted" />
            </div>
            <div className="text-xs text-text-muted">Setup</div>
            <div className="text-sm font-medium text-text-primary">{activity.setupTime}</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <Zap className="w-4 h-4 text-text-muted" />
            </div>
            <div className="text-xs text-text-muted">Energy</div>
            <Badge className={cn("text-xs", getEnergyColor(activity.energyLevel))}>
              {activity.energyLevel}
            </Badge>
          </div>
        </div>

        {/* Materials */}
        <div>
          <div className="text-xs font-medium text-text-muted mb-2">Materials needed:</div>
          <div className="flex flex-wrap gap-1">
            {activity.materials.map((material, index) => (
              <span
                key={index}
                className="text-xs bg-surface px-2 py-1 rounded-md text-text-secondary border border-card-border"
              >
                {material}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};