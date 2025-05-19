export interface Application {
  id: string;
  jobTitle: string;
  company: string;
  date: string;
  status: 'applied' | 'interview' | 'rejected' | 'pending';
  location: string;
  jobUrl?: string;
  recruiterId?: string;
  messagesSent?: number;
  resumeVersion?: string;
}

export interface Resume {
  id: string;
  title: string;
  lastUpdated: string;
  technologies: string[];
  strength: number;
  fileUrl?: string;
}

export interface AutomationSettings {
  enabled: boolean;
  jobAlertFrequency: 'Instant' | 'Hourly' | 'Daily' | 'Weekly';
  dailyLimit: number;
  locationPreferences: string[];
  jobTypes: string[];
  keywordFilters: string[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  plan: 'Free' | 'Pro' | 'Enterprise';
  linkedInUrl?: string;
  automationEnabled: boolean;
}