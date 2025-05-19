"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ChevronLeft, 
  ChevronRight, 
  LayoutDashboard, 
  FileText, 
  Briefcase, 
  MessageSquare, 
  Settings, 
  HelpCircle, 
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  href: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "My Resumes",
    href: "/dashboard/resumes",
    icon: FileText,
  },
  {
    name: "Applications",
    href: "/dashboard/applications",
    icon: Briefcase,
  },
  {
    name: "Messages",
    href: "/dashboard/messages",
    icon: MessageSquare,
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export default function DashboardSidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside 
      className={cn(
        "bg-card border-r transition-all duration-300 flex flex-col",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="h-16 border-b flex items-center px-4">
        <Link href="/dashboard" className="flex items-center gap-2">
          <Zap className="h-6 w-6 text-primary shrink-0" />
          {!collapsed && <span className="font-bold text-lg">ResumeRush</span>}
        </Link>
      </div>
      
      <nav className="flex-1 p-2 space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors",
              item.href === "/dashboard" && "bg-muted text-foreground font-medium"
            )}
          >
            <item.icon className="h-5 w-5 shrink-0" />
            {!collapsed && <span>{item.name}</span>}
          </Link>
        ))}
      </nav>
      
      <div className="p-2 border-t mt-auto">
        <Link
          href="/dashboard/support"
          className="flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
        >
          <HelpCircle className="h-5 w-5 shrink-0" />
          {!collapsed && <span>Help & Support</span>}
        </Link>
        
        <Button
          variant="ghost"
          size="sm"
          className="w-full justify-center mt-2"
          onClick={() => setCollapsed(!collapsed)}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? (
            <ChevronRight className="h-5 w-5" />
          ) : (
            <ChevronLeft className="h-5 w-5" />
          )}
        </Button>
      </div>
    </aside>
  );
}