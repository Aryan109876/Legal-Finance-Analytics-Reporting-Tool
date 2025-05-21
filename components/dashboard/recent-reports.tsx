import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Download, Eye, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function RecentReports() {
  // Mock data for recent reports
  const reports = [
    { 
      id: 1, 
      title: 'Q1 Financial Performance', 
      date: 'April 15, 2025', 
      type: 'quarterly'
    },
    { 
      id: 2, 
      title: 'Case Success Analysis', 
      date: 'May 23, 2025', 
      type: 'analysis'
    },
    { 
      id: 3, 
      title: 'Litigation Cost Report', 
      date: 'June 2, 2025', 
      type: 'cost'
    },
  ];

  return (
    <Card className="col-span-1">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Recent Reports</CardTitle>
          <Button variant="ghost" size="sm" className="h-8 gap-1" asChild>
            <Link href="/reports">
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {reports.map((report) => (
            <div key={report.id} className="flex items-start space-x-3 p-3 rounded-md hover:bg-accent transition-colors">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400 flex items-center justify-center">
                <FileText className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium truncate">{report.title}</p>
                  <div className="flex space-x-1">
                    <Button variant="ghost" size="icon" className="h-7 w-7">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-7 w-7">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">{report.date}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}