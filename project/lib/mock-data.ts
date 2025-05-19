import { Application } from "./types";

// Generate dates for the past week
const getDaysAgo = (daysAgo: number) => {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  return date.toISOString();
};

export const mockApplicationData: Application[] = [
  {
    id: "app-1",
    jobTitle: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    date: getDaysAgo(0),
    status: "applied",
    location: "San Francisco, CA"
  },
  {
    id: "app-2",
    jobTitle: "React Developer",
    company: "Innovate Solutions",
    date: getDaysAgo(1),
    status: "interview",
    location: "Remote",
    messagesSent: 2
  },
  {
    id: "app-3",
    jobTitle: "Full-Stack Engineer",
    company: "Growth Startup",
    date: getDaysAgo(2),
    status: "rejected",
    location: "New York, NY",
    messagesSent: 1
  },
  {
    id: "app-4",
    jobTitle: "Frontend Lead",
    company: "FinTech Partners",
    date: getDaysAgo(3),
    status: "applied",
    location: "Austin, TX"
  },
  {
    id: "app-5",
    jobTitle: "UI Developer",
    company: "Design Systems Co.",
    date: getDaysAgo(3),
    status: "applied",
    location: "Remote"
  },
  {
    id: "app-6",
    jobTitle: "JavaScript Engineer",
    company: "Web Solutions",
    date: getDaysAgo(4),
    status: "interview",
    location: "Seattle, WA",
    messagesSent: 1
  },
  {
    id: "app-7",
    jobTitle: "Software Engineer II",
    company: "Cloud Technologies",
    date: getDaysAgo(5),
    status: "applied",
    location: "Denver, CO"
  },
  {
    id: "app-8",
    jobTitle: "Frontend Architect",
    company: "Platform Inc.",
    date: getDaysAgo(6),
    status: "applied",
    location: "Boston, MA"
  }
];