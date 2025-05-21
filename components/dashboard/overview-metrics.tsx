"use client"

import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  TrendingUp, 
  TrendingDown, 
  Scale, 
  Clock,
  Briefcase
} from "lucide-react";

export function OverviewMetrics() {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium">Portfolio Overview</h2>
        <Tabs defaultValue="30d" className="w-auto">
          <TabsList>
            <TabsTrigger value="7d">7d</TabsTrigger>
            <TabsTrigger value="30d">30d</TabsTrigger>
            <TabsTrigger value="90d">90d</TabsTrigger>
            <TabsTrigger value="1y">1y</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard 
          title="Total Portfolio Value" 
          value="£2.45M" 
          description="↑ 12% from last period"
          icon={<Scale className="h-5 w-5" />}
          trend="up"
        />
        <MetricCard 
          title="Average ROI" 
          value="18.3%" 
          description="↑ 2.4% from last period"
          icon={<TrendingUp className="h-5 w-5" />}
          trend="up"
        />
        <MetricCard 
          title="Success Rate" 
          value="76%" 
          description="↓ 3% from last period"
          icon={<TrendingDown className="h-5 w-5" />}
          trend="down"
        />
        <MetricCard 
          title="Active Cases" 
          value="34" 
          description="↑ 5 new this period"
          icon={<Briefcase className="h-5 w-5" />}
          trend="neutral"
        />
      </div>
    </div>
  );
}

interface MetricCardProps {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
  trend: "up" | "down" | "neutral";
}

function MetricCard({ title, value, description, icon, trend }: MetricCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className={`p-2 rounded-full ${
          trend === "up" 
            ? "bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400" 
            : trend === "down" 
            ? "bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400"
            : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300"
        }`}>
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className={`text-xs ${
          trend === "up" 
            ? "text-green-600 dark:text-green-400" 
            : trend === "down" 
            ? "text-red-600 dark:text-red-400"
            : "text-muted-foreground"
        }`}>
          {description}
        </p>
      </CardContent>
    </Card>
  );
}