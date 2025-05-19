"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { X, Plus } from "lucide-react";
import { useState, KeyboardEvent } from "react";

interface JobPreferencesProps {
  onComplete: () => void;
}

export default function JobPreferences({ onComplete }: JobPreferencesProps) {
  const [jobTitles, setJobTitles] = useState<string[]>([
    "Software Engineer", 
    "Frontend Developer"
  ]);
  const [newJobTitle, setNewJobTitle] = useState("");
  
  const [skills, setSkills] = useState<string[]>([
    "React", 
    "TypeScript", 
    "JavaScript", 
    "Node.js"
  ]);
  const [newSkill, setNewSkill] = useState("");
  
  const [locations, setLocations] = useState<string[]>([
    "San Francisco, CA", 
    "Remote"
  ]);
  const [newLocation, setNewLocation] = useState("");

  const addJobTitle = () => {
    if (newJobTitle && !jobTitles.includes(newJobTitle)) {
      setJobTitles([...jobTitles, newJobTitle]);
      setNewJobTitle("");
    }
  };

  const removeJobTitle = (title: string) => {
    setJobTitles(jobTitles.filter(t => t !== title));
  };

  const addSkill = () => {
    if (newSkill && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill]);
      setNewSkill("");
    }
  };

  const removeSkill = (skill: string) => {
    setSkills(skills.filter(s => s !== skill));
  };

  const addLocation = () => {
    if (newLocation && !locations.includes(newLocation)) {
      setLocations([...locations, newLocation]);
      setNewLocation("");
    }
  };

  const removeLocation = (location: string) => {
    setLocations(locations.filter(l => l !== location));
  };

  const handleKeyPress = (
    e: KeyboardEvent<HTMLInputElement>, 
    addFunction: () => void
  ) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addFunction();
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-1">
          <Label htmlFor="job-titles">Job Titles</Label>
          <p className="text-sm text-muted-foreground">
            We'll search for these job titles.
          </p>
          
          <div className="flex flex-wrap gap-2 mt-2">
            {jobTitles.map((title, index) => (
              <Badge key={index} variant="secondary" className="px-2 py-1">
                {title}
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-4 w-4 ml-1 p-0"
                  onClick={() => removeJobTitle(title)}
                >
                  <X className="h-3 w-3" />
                </Button>
              </Badge>
            ))}
          </div>
          
          <div className="flex gap-2 mt-2">
            <Input 
              id="job-titles"
              placeholder="Add job title"
              value={newJobTitle}
              onChange={(e) => setNewJobTitle(e.target.value)}
              onKeyPress={(e) => handleKeyPress(e, addJobTitle)}
            />
            <Button 
              variant="outline" 
              onClick={addJobTitle}
              disabled={!newJobTitle}
            >
              <Plus className="h-4 w-4 mr-1" />
              Add
            </Button>
          </div>
        </div>
        
        <div className="space-y-1 pt-4">
          <Label htmlFor="skills">Key Skills</Label>
          <p className="text-sm text-muted-foreground">
            Add relevant skills that will be highlighted in customized resumes.
          </p>
          
          <div className="flex flex-wrap gap-2 mt-2">
            {skills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="px-2 py-1">
                {skill}
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-4 w-4 ml-1 p-0"
                  onClick={() => removeSkill(skill)}
                >
                  <X className="h-3 w-3" />
                </Button>
              </Badge>
            ))}
          </div>
          
          <div className="flex gap-2 mt-2">
            <Input 
              id="skills"
              placeholder="Add skill"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              onKeyPress={(e) => handleKeyPress(e, addSkill)}
            />
            <Button 
              variant="outline" 
              onClick={addSkill}
              disabled={!newSkill}
            >
              <Plus className="h-4 w-4 mr-1" />
              Add
            </Button>
          </div>
        </div>
        
        <div className="space-y-1 pt-4">
          <Label htmlFor="locations">Preferred Locations</Label>
          <p className="text-sm text-muted-foreground">
            Where would you like to work?
          </p>
          
          <div className="flex flex-wrap gap-2 mt-2">
            {locations.map((location, index) => (
              <Badge key={index} variant="secondary" className="px-2 py-1">
                {location}
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-4 w-4 ml-1 p-0"
                  onClick={() => removeLocation(location)}
                >
                  <X className="h-3 w-3" />
                </Button>
              </Badge>
            ))}
          </div>
          
          <div className="flex gap-2 mt-2">
            <Input 
              id="locations"
              placeholder="Add location"
              value={newLocation}
              onChange={(e) => setNewLocation(e.target.value)}
              onKeyPress={(e) => handleKeyPress(e, addLocation)}
            />
            <Button 
              variant="outline" 
              onClick={addLocation}
              disabled={!newLocation}
            >
              <Plus className="h-4 w-4 mr-1" />
              Add
            </Button>
          </div>
        </div>
        
        <div className="space-y-2 pt-4">
          <Label>Job Types</Label>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="full-time" defaultChecked />
              <label
                htmlFor="full-time"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Full-time
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="contract" defaultChecked />
              <label
                htmlFor="contract"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Contract
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="part-time" />
              <label
                htmlFor="part-time"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Part-time
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="internship" />
              <label
                htmlFor="internship"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Internship
              </label>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-end pt-4">
        <Button onClick={onComplete}>
          Continue
        </Button>
      </div>
    </div>
  );
}