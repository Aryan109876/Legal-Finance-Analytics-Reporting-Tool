"use client"

import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from '@/components/ui/card';
import { 
  Download, 
  Mail, 
  Share2, 
  Printer 
} from 'lucide-react';

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const revenueData = [
  { month: 'Jan', revenue: 65000 },
  { month: 'Feb', revenue: 72000 },
  { month: 'Mar', revenue: 85000 },
  { month: 'Apr', revenue: 75000 },
  { month: 'May', revenue: 92000 },
  { month: 'Jun', revenue: 102000 },
];

const successRateData = [
  { month: 'Jan', rate: 72 },
  { month: 'Feb', rate: 75 },
  { month: 'Mar', rate: 78 },
  { month: 'Apr', rate: 74 },
  { month: 'May', rate: 76 },
  { month: 'Jun', rate: 82 },
];

const caseTypeData = [
  { name: 'Commercial', value: 35 },
  { name: 'IP', value: 20 },
  { name: 'Employment', value: 15 },
  { name: 'Tax', value: 10 },
  { name: 'Property', value: 20 },
];

const COLORS = [
  'hsl(var(--chart-1))',
  'hsl(var(--chart-2))',
  'hsl(var(--chart-3))',
  'hsl(var(--chart-4))',
  'hsl(var(--chart-5))',
];

interface ReportPreviewProps {
  template: string;
}

export function ReportPreview({ template }: ReportPreviewProps) {
  return (
    <Card className="border-2 border-dashed">
      <CardHeader className="bg-muted/50 border-b px-6 py-4">
        <div className="flex flex-col space-y-1.5">
          <CardTitle>Financial Summary Report</CardTitle>
          <CardDescription>Generated on June 12, 2025</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="prose max-w-none dark:prose-invert">
          <h2>Executive Summary</h2>
          <p>This report provides a comprehensive analysis of our legal finance portfolio performance during Q2 2025. Key highlights include improved case success rates, increased ROI across commercial cases, and expansion in the IP portfolio.</p>
          
          <h3>Financial Highlights</h3>
          <div className="my-6 h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={revenueData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                <XAxis dataKey="month" />
                <YAxis tickFormatter={(value) => `£${value / 1000}k`} />
                <Tooltip 
                  formatter={(value) => [`£${value.toLocaleString()}`, 'Revenue']}
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--background))', 
                    borderColor: 'hsl(var(--border))',
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="hsl(var(--chart-1))" 
                  activeDot={{ r: 8 }}
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3>Case Success Rate</h3>
              <div className="h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={successRateData}
                    margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                    <XAxis dataKey="month" />
                    <YAxis tickFormatter={(value) => `${value}%`} />
                    <Tooltip 
                      formatter={(value) => [`${value}%`, 'Success Rate']}
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--background))', 
                        borderColor: 'hsl(var(--border))',
                        borderRadius: '8px',
                      }}
                    />
                    <Bar 
                      dataKey="rate" 
                      fill="hsl(var(--chart-2))" 
                      barSize={30}
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div>
              <h3>Case Type Distribution</h3>
              <div className="h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={caseTypeData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={2}
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      labelLine={false}
                    >
                      {caseTypeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(value) => [`${value}%`, 'Percentage']}
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--background))', 
                        borderColor: 'hsl(var(--border))',
                        borderRadius: '8px',
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          
          <h3>Recommendations</h3>
          <ul>
            <li>Increase investment in commercial litigation by 15% to capitalize on high success rates</li>
            <li>Review IP portfolio strategy to improve underperforming cases</li>
            <li>Implement new risk assessment model for tax cases to improve ROI</li>
            <li>Expand team capacity for high-performing employment cases</li>
          </ul>
        </div>
      </CardContent>
      <CardFooter className="bg-muted/50 border-t px-6 py-4">
        <div className="flex justify-between items-center w-full">
          <p className="text-sm text-muted-foreground">Confidential - Internal Use Only</p>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <Printer className="mr-2 h-4 w-4" />
              Print
            </Button>
            <Button variant="outline" size="sm">
              <Mail className="mr-2 h-4 w-4" />
              Email
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
            <Button size="sm">
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}