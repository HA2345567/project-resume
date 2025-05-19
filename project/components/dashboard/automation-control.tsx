import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X, Plus, Save } from "lucide-react";

interface AutomationControlProps {
  enabled: boolean;
  onToggle: () => void;
  jobAlertFrequency: string;
  locationPreferences: string[];
  jobTypes: string[];
  keywordFilters: string[];
}

export default function AutomationControl({
  enabled,
  onToggle,
  jobAlertFrequency,
  locationPreferences,
  jobTypes,
  keywordFilters
}: AutomationControlProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Automation Settings</CardTitle>
          <CardDescription>
            Control when and how the automation system runs.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="automation-toggle">Enable Automation</Label>
              <p className="text-sm text-muted-foreground">
                When enabled, we'll automatically apply to matching jobs.
              </p>
            </div>
            <Switch 
              id="automation-toggle" 
              checked={enabled} 
              onCheckedChange={onToggle}
            />
          </div>
          
          <div className="space-y-2 pt-2">
            <Label htmlFor="job-alert-frequency">Job Alert Frequency</Label>
            <Select defaultValue={jobAlertFrequency}>
              <SelectTrigger id="job-alert-frequency">
                <SelectValue placeholder="Select frequency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Instant">Instant</SelectItem>
                <SelectItem value="Hourly">Hourly</SelectItem>
                <SelectItem value="Daily">Daily</SelectItem>
                <SelectItem value="Weekly">Weekly</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2 pt-2">
            <Label htmlFor="daily-limit">Daily Application Limit</Label>
            <Select defaultValue="10">
              <SelectTrigger id="daily-limit">
                <SelectValue placeholder="Select limit" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5">5 applications</SelectItem>
                <SelectItem value="10">10 applications</SelectItem>
                <SelectItem value="25">25 applications</SelectItem>
                <SelectItem value="50">50 applications</SelectItem>
                <SelectItem value="unlimited">Unlimited</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-muted-foreground mt-1">
              Pro plan allows up to 50 applications per day.
            </p>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">
            <Save className="h-4 w-4 mr-2" />
            Save Settings
          </Button>
        </CardFooter>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Job Filters</CardTitle>
          <CardDescription>
            Define criteria for jobs you want to automatically apply to.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Location Preferences</Label>
            <div className="flex flex-wrap gap-2 pt-1">
              {locationPreferences.map((location, index) => (
                <Badge key={index} variant="secondary" className="px-2 py-1">
                  {location}
                  <Button variant="ghost" size="icon" className="h-4 w-4 ml-1 p-0">
                    <X className="h-3 w-3" />
                  </Button>
                </Badge>
              ))}
              <Button variant="outline" size="sm" className="h-7">
                <Plus className="h-3 w-3 mr-1" /> Add
              </Button>
            </div>
          </div>
          
          <div className="space-y-2 pt-2">
            <Label>Job Types</Label>
            <div className="flex flex-wrap gap-2 pt-1">
              {jobTypes.map((type, index) => (
                <Badge key={index} variant="secondary" className="px-2 py-1">
                  {type}
                  <Button variant="ghost" size="icon" className="h-4 w-4 ml-1 p-0">
                    <X className="h-3 w-3" />
                  </Button>
                </Badge>
              ))}
              <Button variant="outline" size="sm" className="h-7">
                <Plus className="h-3 w-3 mr-1" /> Add
              </Button>
            </div>
          </div>
          
          <div className="space-y-2 pt-2">
            <Label>Keyword Filters</Label>
            <div className="flex flex-wrap gap-2 pt-1">
              {keywordFilters.map((keyword, index) => (
                <Badge key={index} variant="secondary" className="px-2 py-1">
                  {keyword}
                  <Button variant="ghost" size="icon" className="h-4 w-4 ml-1 p-0">
                    <X className="h-3 w-3" />
                  </Button>
                </Badge>
              ))}
              <Button variant="outline" size="sm" className="h-7">
                <Plus className="h-3 w-3 mr-1" /> Add
              </Button>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">
            <Save className="h-4 w-4 mr-2" />
            Save Filters
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}