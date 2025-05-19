import { Button } from "@/components/ui/button";
import { CheckCircle2, BarChart2, ChevronRight } from "lucide-react";

interface SuccessProps {
  onComplete: () => void;
}

export default function Success({ onComplete }: SuccessProps) {
  return (
    <div className="text-center py-6 space-y-6">
      <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
        <CheckCircle2 className="h-10 w-10 text-primary" />
      </div>
      
      <div className="space-y-2">
        <h3 className="text-2xl font-bold">You're all set!</h3>
        <p className="text-muted-foreground">
          Your ResumeRush account is now configured and ready to help you land your next role.
        </p>
      </div>
      
      <div className="border rounded-lg p-4 bg-muted/20 max-w-sm mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-medium">Pro Plan</p>
            <p className="text-sm text-muted-foreground">50 applications/day</p>
          </div>
          <BarChart2 className="h-8 w-8 text-primary/70" />
        </div>
        <div className="mt-4 text-left">
          <p className="text-sm font-medium mb-1">What's next:</p>
          <ul className="text-sm space-y-1 text-muted-foreground">
            <li>• Review your dashboard</li>
            <li>• Enable automation</li>
            <li>• Get ready for interviews!</li>
          </ul>
        </div>
      </div>
      
      <Button onClick={onComplete} className="mt-8" size="lg">
        Go to Dashboard
        <ChevronRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
}