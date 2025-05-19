"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DashboardHeader from "@/components/dashboard/dashboard-header";
import DashboardStats from "@/components/dashboard/dashboard-stats";
import JobLogTable from "@/components/dashboard/job-log-table";
import ResumeCard from "@/components/dashboard/resume-card";
import AutomationControl from "@/components/dashboard/automation-control";
import DashboardLayout from "@/components/layout/dashboard-layout";
import { mockApplicationData } from "@/lib/mock-data";

export default function DashboardPage() {
  const [automationEnabled, setAutomationEnabled] = useState(true);
  const [applications, setApplications] = useState(mockApplicationData);

  const toggleAutomation = () => {
    setAutomationEnabled(!automationEnabled);
  };

  return (
    <DashboardLayout>
      <div className="p-6 space-y-8">
        <DashboardHeader 
          username="Alex Johnson"
          automationStatus={automationEnabled}
          plan="Pro"
        />
        
        <DashboardStats 
          applications={applications}
        />
        
        <Tabs defaultValue="recent" className="space-y-4">
          <TabsList>
            <TabsTrigger value="recent">Recent Activity</TabsTrigger>
            <TabsTrigger value="resume">My Resume</TabsTrigger>
            <TabsTrigger value="automation">Automation</TabsTrigger>
          </TabsList>
          
          <TabsContent value="recent" className="space-y-4">
            <h2 className="text-2xl font-bold">Recent Applications</h2>
            <JobLogTable applications={applications} />
          </TabsContent>
          
          <TabsContent value="resume" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">My Resume</h2>
              <div className="flex gap-2">
                <a 
                  href="#" 
                  className="text-primary hover:underline text-sm"
                  onClick={(e) => e.preventDefault()}
                >
                  Upload New
                </a>
                <span className="text-muted-foreground">|</span>
                <a 
                  href="#" 
                  className="text-primary hover:underline text-sm"
                  onClick={(e) => e.preventDefault()}
                >
                  Edit Template
                </a>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ResumeCard 
                title="Software Engineer"
                lastUpdated="Updated 2 days ago"
                technologies={["React", "Node.js", "TypeScript", "AWS"]}
                strength={92}
              />
              
              <ResumeCard 
                title="Frontend Developer"
                lastUpdated="Updated 1 week ago"
                technologies={["React", "JavaScript", "CSS", "HTML", "Tailwind"]}
                strength={87}
              />
            </div>
          </TabsContent>
          
          <TabsContent value="automation" className="space-y-4">
            <h2 className="text-2xl font-bold">Automation Control</h2>
            <AutomationControl 
              enabled={automationEnabled}
              onToggle={toggleAutomation}
              jobAlertFrequency="Instant"
              locationPreferences={["San Francisco, CA", "Remote"]}
              jobTypes={["Full-time", "Contract"]}
              keywordFilters={["React", "Frontend", "JavaScript", "UI/UX"]}
            />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}