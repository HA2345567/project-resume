"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UploadCloud, File, X, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ResumeUploadProps {
  onComplete: () => void;
}

export default function ResumeUpload({ onComplete }: ResumeUploadProps) {
  const [dragActive, setDragActive] = useState(false);
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setResumeFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  const removeFile = () => {
    setResumeFile(null);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-1.5">
        <Label htmlFor="resume">Upload your current resume</Label>
        <p className="text-sm text-muted-foreground">
          We'll use this as a starting point to customize for each job application.
        </p>
      </div>
      
      <div
        className={cn(
          "border-2 border-dashed rounded-lg p-10 text-center",
          dragActive ? "border-primary bg-primary/5" : "border-border",
          resumeFile ? "bg-muted/30" : ""
        )}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        {!resumeFile ? (
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="p-3 rounded-full bg-primary/10">
              <UploadCloud className="h-8 w-8 text-primary" />
            </div>
            <div>
              <p className="text-lg font-medium mb-1">Drag & drop your resume here</p>
              <p className="text-sm text-muted-foreground mb-4">Supports PDF, DOCX (Max 5MB)</p>
              
              <Label 
                htmlFor="resume-upload" 
                className="bg-primary text-primary-foreground px-4 py-2 rounded-md cursor-pointer hover:bg-primary/90 transition-colors"
              >
                Browse Files
              </Label>
              <Input 
                id="resume-upload" 
                type="file" 
                accept=".pdf,.docx" 
                className="hidden" 
                onChange={handleFileChange}
              />
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-md bg-primary/10">
                <File className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-medium">{resumeFile.name}</p>
                <p className="text-sm text-muted-foreground">
                  {(resumeFile.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={removeFile}
              >
                <X className="h-5 w-5" />
              </Button>
              <div className="p-1 rounded-full bg-green-100">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div className="space-y-1">
        <Label htmlFor="linkedin">LinkedIn Profile URL (optional)</Label>
        <Input 
          id="linkedin" 
          placeholder="https://linkedin.com/in/yourprofile" 
          type="url"
        />
        <p className="text-xs text-muted-foreground mt-1">
          We'll use this to enhance your application with additional information.
        </p>
      </div>
      
      <div className="flex justify-end pt-4">
        <Button onClick={onComplete}>
          Continue
        </Button>
      </div>
    </div>
  );
}