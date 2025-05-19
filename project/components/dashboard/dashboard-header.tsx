import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";

interface DashboardHeaderProps {
  username: string;
  automationStatus: boolean;
  plan: string;
}

export default function DashboardHeader({
  username,
  automationStatus,
  plan
}: DashboardHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
          Welcome back, {username}
        </h1>
        <p className="text-muted-foreground">
          Track your applications and manage your job search automation.
        </p>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-sm">Automation:</span>
          <Switch checked={automationStatus} />
          <span className={`text-sm font-medium ${automationStatus ? 'text-green-600' : 'text-muted-foreground'}`}>
            {automationStatus ? 'Active' : 'Paused'}
          </span>
        </div>
        
        <Badge variant="outline" className="bg-primary/5 text-primary">
          {plan} Plan
        </Badge>
      </div>
    </div>
  );
}