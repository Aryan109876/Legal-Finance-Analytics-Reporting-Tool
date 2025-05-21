"use client"

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';

const data = [
  { month: 'Jan', roi: 8.4 },
  { month: 'Feb', roi: 9.1 },
  { month: 'Mar', roi: 10.5 },
  { month: 'Apr', roi: 12.2 },
  { month: 'May', roi: 14.8 },
  { month: 'Jun', roi: 16.1 },
  { month: 'Jul', roi: 15.6 },
  { month: 'Aug', roi: 17.2 },
  { month: 'Sep', roi: 18.7 },
  { month: 'Oct', roi: 17.9 },
  { month: 'Nov', roi: 18.3 },
  { month: 'Dec', roi: 19.1 },
];

export function ROIChart() {
  const [period, setPeriod] = useState('all');
  
  // Filter data based on selected period
  const filteredData = period === 'all' 
    ? data 
    : data.slice(-parseInt(period.replace('m', '')));

  return (
    <Card className="col-span-1">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>ROI Performance</CardTitle>
          <Tabs defaultValue="all" onValueChange={setPeriod} className="w-auto">
            <TabsList>
              <TabsTrigger value="3m">3M</TabsTrigger>
              <TabsTrigger value="6m">6M</TabsTrigger>
              <TabsTrigger value="all">1Y</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <CardDescription>Return on investment over time</CardDescription>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={filteredData}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="roiGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.8} />
                <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="month" 
              tick={{ fontSize: 12 }} 
              tickLine={false}
              axisLine={false}
            />
            <YAxis 
              tickFormatter={(value) => `${value}%`}
              tick={{ fontSize: 12 }}
              tickLine={false}
              axisLine={false}
              domain={[0, 'dataMax + 5']}
            />
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
            <Tooltip 
              formatter={(value) => [`${value}%`, 'ROI']}
              contentStyle={{ 
                backgroundColor: 'hsl(var(--background))', 
                borderColor: 'hsl(var(--border))',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
              }}
            />
            <Area 
              type="monotone" 
              dataKey="roi" 
              stroke="hsl(var(--chart-1))" 
              strokeWidth={2}
              fillOpacity={1} 
              fill="url(#roiGradient)" 
              activeDot={{ r: 6 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}