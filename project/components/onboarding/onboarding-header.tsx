import Link from "next/link";
import { Zap } from "lucide-react";

export default function OnboardingHeader() {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link 
            href="/" 
            className="flex items-center gap-2 font-bold text-xl"
          >
            <Zap className="h-6 w-6 text-primary" />
            <span>ResumeRush</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              Need help? <a href="#" className="text-primary hover:underline">Contact support</a>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}