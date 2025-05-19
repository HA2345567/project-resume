import { 
  BarChart3, 
  Briefcase, 
  MessageSquare, 
  Calendar 
} from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer 
} from "recharts";
import { Application } from "@/lib/types";

interface DashboardStatsProps {
  applications: Application[];
}

export default function DashboardStats({
  applications
}: DashboardStatsProps) {
  // Count total applications
  const totalApplications = applications.length;
  
  // Count applications with responses
  const responsesReceived = applications.filter(app => 
    app.status === 'interview' || app.status === 'rejected'
  ).length;
  
  // Count interviews
  const interviews = applications.filter(app => 
    app.status === 'interview'
  ).length;
  
  // Count applications by day for the last 7 days
  const last7Days = [...Array(7)].map((_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - i);
    return date.toISOString().split('T')[0];
  }).reverse();
  
  const applicationsByDay = last7Days.map(day => {
    const count = applications.filter(app => 
      app.date.split('T')[0] === day
    ).length;
    
    // Format date for display
    const dateObj = new Date(day);
    const formattedDate = dateObj.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    });
    
    return {
      name: formattedDate,
      applications: count
    };
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">
            Total Applications
          </CardTitle>
          <Briefcase className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalApplications}</div>
          <p className="text-xs text-muted-foreground mt-1">
            {totalApplications > 0 ? '+12% from last month' : 'Start applying today!'}
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">
            Responses Received
          </CardTitle>
          <MessageSquare className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{responsesReceived}</div>
          <p className="text-xs text-muted-foreground mt-1">
            {responsesReceived > 0 
              ? `${Math.round((responsesReceived / totalApplications) * 100)}% response rate` 
              : 'No responses yet'}
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">
            Interviews Scheduled
          </CardTitle>
          <Calendar className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{interviews}</div>
          <p className="text-xs text-muted-foreground mt-1">
            {interviews > 0 
              ? `${Math.round((interviews / totalApplications) * 100)}% interview rate` 
              : 'No interviews yet'}
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">
            Activity Trend
          </CardTitle>
          <BarChart3 className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent className="p-0">
          <ResponsiveContainer width="100%" height={80}>
            <BarChart data={applicationsByDay}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis 
                dataKey="name" 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10 }}
              />
              <YAxis 
                hide 
                domain={[0, 'dataMax + 1']} 
              />
              <Tooltip 
                contentStyle={{
                  borderRadius: '8px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                }}
              />
              <Bar 
                dataKey="applications" 
                fill="hsl(var(--primary))" 
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}