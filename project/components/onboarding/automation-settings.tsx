"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface AutomationSettingsProps {
  onComplete: () => void;
}

export default function AutomationSettings({ onComplete }: AutomationSettingsProps) {
  const [autoApply, setAutoApply] = useState(true);
  const [autoDM, setAutoDM] = useState(true);
  const [dailyLimit, setDailyLimit] = useState<number[]>([10]);
  const [messageTemplate, setMessageTemplate] = useState(
    `Hi [Recruiter Name],

I recently applied for the [Job Title] position at [Company Name] through LinkedIn. I believe my experience with [Key Skill] and [Key Skill] aligns well with what you're looking for.

I'd love to discuss how my background could be valuable to your team. Would you be available for a brief call this week?

Best regards,
[Your Name]`
  );

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <Label htmlFor="auto-apply">Automatic Job Applications</Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-xs max-w-xs">
                      When enabled, we'll automatically customize your resume and apply to matching jobs.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <p className="text-sm text-muted-foreground">
              Automatically apply to jobs that match your preferences.
            </p>
          </div>
          <Switch 
            id="auto-apply" 
            checked={autoApply}
            onCheckedChange={setAutoApply}
          />
        </div>
        
        <div className="space-y-4 pt-2">
          <div className="space-y-1">
            <Label htmlFor="daily-limit">Daily Application Limit</Label>
            <p className="text-sm text-muted-foreground">
              Control how many applications are sent per day (Pro plan: up to 50)
            </p>
            <div className="pt-4 px-2">
              <Slider
                id="daily-limit"
                defaultValue={[10]}
                max={50}
                step={5}
                value={dailyLimit}
                onValueChange={setDailyLimit}
              />
              <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                <span>5</span>
                <span>25</span>
                <span>50</span>
              </div>
              <p className="text-center font-medium mt-4">
                {dailyLimit[0]} applications per day
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-6">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <Label htmlFor="auto-dm">Automatic Recruiter Messages</Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-xs max-w-xs">
                      Send personalized messages to recruiters after applying to jobs.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <p className="text-sm text-muted-foreground">
              Send follow-up messages to recruiters after applying.
            </p>
          </div>
          <Switch 
            id="auto-dm" 
            checked={autoDM}
            onCheckedChange={setAutoDM}
          />
        </div>
        
        {autoDM && (
          <div className="space-y-2 pt-2">
            <Label htmlFor="message-delay">Message Delay</Label>
            <Select defaultValue="1">
              <SelectTrigger id="message-delay">
                <SelectValue placeholder="Select delay" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">Immediately after applying</SelectItem>
                <SelectItem value="1">1 day after applying</SelectItem>
                <SelectItem value="2">2 days after applying</SelectItem>
                <SelectItem value="3">3 days after applying</SelectItem>
                <SelectItem value="7">1 week after applying</SelectItem>
              </SelectContent>
            </Select>
            
            <div className="pt-4">
              <Label htmlFor="message-template">Message Template</Label>
              <p className="text-sm text-muted-foreground mb-2">
                Customize the message sent to recruiters.
              </p>
              <Textarea 
                id="message-template" 
                rows={8}
                value={messageTemplate}
                onChange={(e) => setMessageTemplate(e.target.value)}
              />
              <p className="text-xs text-muted-foreground mt-1">
                Use [placeholders] to personalize your message.
              </p>
            </div>
          </div>
        )}
      </div>
      
      <div className="flex justify-end pt-4">
        <Button onClick={onComplete}>
          Continue
        </Button>
      </div>
    </div>
  );
}