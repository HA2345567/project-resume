import * as React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface StepsProps {
  currentStep: number;
  className?: string;
  children: React.ReactNode;
}

export function Steps({ currentStep, className, children }: StepsProps) {
  const steps = React.Children.toArray(children);
  
  return (
    <div className={cn("space-y-2", className)}>
      <nav aria-label="Progress">
        <ol role="list" className="flex space-x-2">
          {steps.map((step, index) => (
            <li key={index} className="flex-1">
              {index < currentStep ? (
                // Completed step
                <div className="group flex w-full flex-col border-l-4 border-primary py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                  <span className="text-sm font-medium text-primary transition-colors">
                    {React.isValidElement(step) ? step.props.name : `Step ${index + 1}`}
                  </span>
                  <span className="text-sm font-medium">
                    {React.isValidElement(step) ? step.props.description : ''}
                  </span>
                </div>
              ) : index === currentStep ? (
                // Current step
                <div
                  className="flex w-full flex-col border-l-4 border-primary py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
                  aria-current="step"
                >
                  <span className="text-sm font-medium text-primary">
                    {React.isValidElement(step) ? step.props.name : `Step ${index + 1}`}
                  </span>
                  <span className="text-sm font-medium">
                    {React.isValidElement(step) ? step.props.description : ''}
                  </span>
                </div>
              ) : (
                // Upcoming step
                <div className="group flex w-full flex-col border-l-4 border-muted py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                  <span className="text-sm font-medium text-muted-foreground transition-colors">
                    {React.isValidElement(step) ? step.props.name : `Step ${index + 1}`}
                  </span>
                  <span className="text-sm font-medium">
                    {React.isValidElement(step) ? step.props.description : ''}
                  </span>
                </div>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}

interface StepProps {
  id: string;
  name: string;
  description?: string;
  icon?: React.ElementType;
  isActive?: boolean;
  isCompleted?: boolean;
}

export function Step({
  id,
  name,
  description,
  icon: Icon,
  isActive,
  isCompleted,
}: StepProps) {
  return (
    <div id={id} role="tabpanel" className="hidden">
      <span className="sr-only">{name}</span>
      <span className="sr-only">{description}</span>
      {Icon && (
        <span className="sr-only">
          <Icon className="h-4 w-4" />
        </span>
      )}
      <span className="sr-only">
        {isActive ? "Active" : ""}
        {isCompleted ? "Completed" : ""}
      </span>
    </div>
  );
}