"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, BarChart, LineChart, Activity, Copy } from 'lucide-react';

interface ReportTemplateProps {
  onSelect: (templateId: string) => void;
}

export function ReportTemplateSelector({ onSelect }: ReportTemplateProps) {
  const templates = [
    {
      id: 'financial-summary',
      title: 'Financial Summary',
      description: 'A comprehensive overview of financial performance for the selected period.',
      icon: <FileText className="h-8 w-8" />,
    },
    {
      id: 'case-performance',
      title: 'Case Performance',
      description: 'Analyze performance metrics for specific case types or categories.',
      icon: <BarChart className="h-8 w-8" />,
    },
    {
      id: 'roi-analysis',
      title: 'ROI Analysis',
      description: 'Detailed breakdown of return on investment for the legal portfolio.',
      icon: <LineChart className="h-8 w-8" />,
    },
    {
      id: 'success-rates',
      title: 'Success Rates',
      description: 'Track success rates across different practice areas and case types.',
      icon: <Activity className="h-8 w-8" />,
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {templates.map((template) => (
        <Card key={template.id} className="overflow-hidden transition-all hover:shadow-md">
          <CardHeader className="p-6 pb-3">
            <div className="p-2 w-fit rounded-md bg-primary/10 mb-3">
              {template.icon}
            </div>
            <CardTitle>{template.title}</CardTitle>
            <CardDescription className="mt-2">{template.description}</CardDescription>
          </CardHeader>
          <CardFooter className="p-6 pt-3 flex gap-2">
            <Button 
              variant="default" 
              onClick={() => onSelect(template.id)}
              className="flex-1"
            >
              Select
            </Button>
            <Button variant="outline" size="icon">
              <Copy className="h-4 w-4" />
              <span className="sr-only">Copy template</span>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}