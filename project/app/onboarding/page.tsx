"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { 
  ChevronLeft, 
  ChevronRight, 
  FileText, 
  Target, 
  Settings, 
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle 
} from "@/components/ui/card";
import { Steps, Step } from "@/components/ui/steps";
import OnboardingHeader from "@/components/onboarding/onboarding-header";
import ResumeUpload from "@/components/onboarding/resume-upload";
import JobPreferences from "@/components/onboarding/job-preferences";
import AutomationSettings from "@/components/onboarding/automation-settings";
import Success from "@/components/onboarding/success";

const steps = [
  {
    id: "resume",
    name: "Upload Resume",
    icon: FileText,
    description: "Upload your master resume",
  },
  {
    id: "preferences",
    name: "Job Preferences",
    icon: Target,
    description: "Set your job search criteria",
  },
  {
    id: "automation",
    name: "Automation",
    icon: Settings,
    description: "Configure automation settings",
  },
  {
    id: "success",
    name: "Ready!",
    icon: CheckCircle2,
    description: "Your account is set up",
  },
];

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const router = useRouter();

  const goToNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const finishOnboarding = () => {
    router.push("/dashboard");
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return <ResumeUpload onComplete={goToNextStep} />;
      case 1:
        return <JobPreferences onComplete={goToNextStep} />;
      case 2:
        return <AutomationSettings onComplete={goToNextStep} />;
      case 3:
        return <Success onComplete={finishOnboarding} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-muted/30 flex flex-col">
      <OnboardingHeader />
      
      <main className="flex-grow py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <Steps currentStep={currentStep} className="mb-8">
            {steps.map((step, index) => (
              <Step 
                key={step.id}
                id={step.id} 
                name={step.name} 
                description={step.description}
                icon={step.icon}
                isActive={currentStep === index}
                isCompleted={currentStep > index}
              />
            ))}
          </Steps>
          
          <Card className="w-full">
            <CardHeader>
              <CardTitle>{steps[currentStep].name}</CardTitle>
              <CardDescription>{steps[currentStep].description}</CardDescription>
            </CardHeader>
            <CardContent>
              {renderStepContent()}
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button
                variant="outline"
                onClick={goToPreviousStep}
                disabled={currentStep === 0}
              >
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
              
              {currentStep < steps.length - 1 ? (
                <Button onClick={goToNextStep}>
                  Next
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button onClick={finishOnboarding}>
                  Go to Dashboard
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              )}
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
}