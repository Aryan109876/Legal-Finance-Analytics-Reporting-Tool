"use client"

import { useState } from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Download, FileText, Eye, MoreHorizontal } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface Report {
  id: number;
  title: string;
  type: string;
  date: string;
  author: string;
  status: 'Draft' | 'Published' | 'Archived';
}

export function ReportsList() {
  // Mock data for reports
  const [reports, setReports] = useState<Report[]>([
    { 
      id: 1, 
      title: 'Q1 Financial Performance Report', 
      type: 'Quarterly', 
      date: 'April 15, 2025', 
      author: 'Alex Johnson',
      status: 'Published' 
    },
    { 
      id: 2, 
      title: 'Commercial Case Success Analysis', 
      type: 'Analysis', 
      date: 'May 23, 2025', 
      author: 'Maria Rodriguez',
      status: 'Published' 
    },
    { 
      id: 3, 
      title: 'Litigation Cost Report - IP Cases', 
      type: 'Cost', 
      date: 'June 2, 2025', 
      author: 'David Chen',
      status: 'Draft' 
    },
    { 
      id: 4, 
      title: 'ROI Forecast - Q3 & Q4', 
      type: 'Forecast', 
      date: 'June 10, 2025', 
      author: 'Sarah Williams',
      status: 'Draft' 
    },
    { 
      id: 5, 
      title: 'Annual Portfolio Performance', 
      type: 'Annual', 
      date: 'January 15, 2025', 
      author: 'Alex Johnson',
      status: 'Archived' 
    },
  ]);

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Report</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Author</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {reports.map((report) => (
            <TableRow key={report.id}>
              <TableCell className="font-medium">
                <div className="flex items-center space-x-2">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  <span>{report.title}</span>
                </div>
              </TableCell>
              <TableCell>{report.type}</TableCell>
              <TableCell>{report.date}</TableCell>
              <TableCell>{report.author}</TableCell>
              <TableCell>
                <Badge variant={
                  report.status === 'Published' 
                    ? 'default' 
                    : report.status === 'Draft'
                    ? 'outline'
                    : 'secondary'
                }>
                  {report.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex items-center justify-end space-x-1">
                  <Button variant="ghost" size="icon">
                    <Eye className="h-4 w-4" />
                    <span className="sr-only">View</span>
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Download className="h-4 w-4" />
                    <span className="sr-only">Download</span>
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">More options</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Duplicate</DropdownMenuItem>
                      <DropdownMenuItem>Share</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}