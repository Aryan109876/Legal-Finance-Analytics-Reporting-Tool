"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';

const data = [
  { category: 'Commercial', success: 82, total: 100 },
  { category: 'IP', success: 67, total: 100 },
  { category: 'Employment', success: 91, total: 100 },
  { category: 'Tax', success: 76, total: 100 },
  { category: 'Property', success: 85, total: 100 },
];

export function CaseSuccessChart() {
  return (
    <Card className="col-span-1">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Case Success Rate</CardTitle>
          <Select defaultValue="all">
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Cases</SelectItem>
              <SelectItem value="commercial">Commercial</SelectItem>
              <SelectItem value="ip">IP</SelectItem>
              <SelectItem value="employment">Employment</SelectItem>
              <SelectItem value="tax">Tax</SelectItem>
              <SelectItem value="property">Property</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <CardDescription>Success rate by case category</CardDescription>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="category" 
              tick={{ fontSize: 12 }} 
              tickLine={false}
              axisLine={false}
            />
            <YAxis 
              tickFormatter={(value) => `${value}%`}
              tick={{ fontSize: 12 }}
              tickLine={false}
              axisLine={false}
              domain={[0, 100]}
            />
            <Tooltip 
              formatter={(value) => [`${value}%`, 'Success Rate']}
              contentStyle={{ 
                backgroundColor: 'hsl(var(--background))', 
                borderColor: 'hsl(var(--border))',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
              }}
            />
            <Bar 
              dataKey="success" 
              fill="hsl(var(--chart-2))" 
              barSize={40}
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}