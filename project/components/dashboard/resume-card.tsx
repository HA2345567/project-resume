import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Download, 
  Edit, 
  Clock 
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Progress } from "@/components/ui/progress";

interface ResumeCardProps {
  title: string;
  lastUpdated: string;
  technologies: string[];
  strength: number;
}

export default function ResumeCard({
  title,
  lastUpdated,
  technologies,
  strength
}: ResumeCardProps) {
  // Function to determine the strength indicator color
  const getStrengthColor = (value: number) => {
    if (value >= 90) return "text-green-600";
    if (value >= 70) return "text-amber-600";
    return "text-red-600";
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-muted/50 pb-8">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            <CardTitle>{title}</CardTitle>
          </div>
          
          <div className="text-xs flex items-center text-muted-foreground">
            <Clock className="h-3 w-3 mr-1" />
            {lastUpdated}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-4">
        <div className="space-y-4">
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm">Resume Strength</span>
              <span className={`text-sm font-medium ${getStrengthColor(strength)}`}>
                {strength}%
              </span>
            </div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Progress value={strength} className="h-2" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-xs">How well your resume matches common job requirements</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          
          <div>
            <p className="text-sm mb-2">Key Technologies</p>
            <div className="flex flex-wrap gap-1.5">
              {technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-between border-t pt-4 mt-4">
        <Button variant="outline" size="sm">
          <Edit className="h-4 w-4 mr-2" />
          Edit
        </Button>
        <Button variant="outline" size="sm">
          <Download className="h-4 w-4 mr-2" />
          Download PDF
        </Button>
      </CardFooter>
    </Card>
  );
}