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
import { Eye, MoreHorizontal, TrendingUp, TrendingDown } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Progress } from '@/components/ui/progress';

interface Case {
  id: number;
  title: string;
  client: string;
  type: string;
  status: 'Active' | 'Pending' | 'Closed' | 'Won' | 'Lost';
  startDate: string;
  investment: number;
  expectedROI: number;
  currentROI: number;
  progress: number;
}

export function CasesList() {
  // Mock data for cases
  const [cases, setCases] = useState<Case[]>([
    { 
      id: 1, 
      title: 'Smith v. Johnson', 
      client: 'Smith LLC', 
      type: 'Commercial', 
      status: 'Active',
      startDate: 'Jan 15, 2025',
      investment: 250000,
      expectedROI: 15,
      currentROI: 12.5,
      progress: 60
    },
    { 
      id: 2, 
      title: 'Patent Infringement - Tech Solutions', 
      client: 'Innovative Tech Inc.', 
      type: 'IP', 
      status: 'Active',
      startDate: 'Mar 10, 2025',
      investment: 350000,
      expectedROI: 25,
      currentROI: 18.3,
      progress: 40
    },
    { 
      id: 3, 
      title: 'Wilson Wrongful Termination', 
      client: 'Wilson', 
      type: 'Employment', 
      status: 'Pending',
      startDate: 'Apr 22, 2025',
      investment: 120000,
      expectedROI: 18,
      currentROI: 0,
      progress: 15
    },
    { 
      id: 4, 
      title: 'Roberts Tax Dispute', 
      client: 'Roberts Holdings', 
      type: 'Tax', 
      status: 'Closed',
      startDate: 'Nov 5, 2024',
      investment: 180000,
      expectedROI: 12,
      currentROI: 14.8,
      progress: 100
    },
    { 
      id: 5, 
      title: 'Davis Property Acquisition', 
      client: 'Davis Enterprises', 
      type: 'Property', 
      status: 'Won',
      startDate: 'Dec 12, 2024',
      investment: 420000,
      expectedROI: 20,
      currentROI: 23.5,
      progress: 100
    },
  ]);

  const getStatusBadgeVariant = (status: string) => {
    switch(status) {
      case 'Active': return 'default';
      case 'Pending': return 'secondary';
      case 'Closed': return 'outline';
      case 'Won': return 'success';
      case 'Lost': return 'destructive';
      default: return 'outline';
    }
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Case</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Investment</TableHead>
            <TableHead>ROI</TableHead>
            <TableHead>Progress</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cases.map((legalCase) => (
            <TableRow key={legalCase.id}>
              <TableCell>
                <div className="font-medium">{legalCase.title}</div>
                <div className="text-sm text-muted-foreground">{legalCase.client}</div>
              </TableCell>
              <TableCell>{legalCase.type}</TableCell>
              <TableCell>
                <Badge variant={getStatusBadgeVariant(legalCase.status)}>
                  {legalCase.status}
                </Badge>
              </TableCell>
              <TableCell>£{legalCase.investment.toLocaleString()}</TableCell>
              <TableCell>
                <div className="flex items-center space-x-2">
                  <span className="font-medium">{legalCase.currentROI}%</span>
                  {legalCase.currentROI > 0 && (
                    <div className={`flex items-center ${
                      legalCase.currentROI >= legalCase.expectedROI 
                        ? 'text-green-600 dark:text-green-400' 
                        : 'text-amber-600 dark:text-amber-400'
                    }`}>
                      {legalCase.currentROI >= legalCase.expectedROI ? (
                        <TrendingUp className="h-4 w-4" />
                      ) : (
                        <TrendingDown className="h-4 w-4" />
                      )}
                    </div>
                  )}
                </div>
                {legalCase.currentROI > 0 && (
                  <div className="text-xs text-muted-foreground">
                    Expected: {legalCase.expectedROI}%
                  </div>
                )}
              </TableCell>
              <TableCell>
                <div className="w-full flex items-center space-x-2">
                  <Progress value={legalCase.progress} className="h-2" />
                  <span className="text-xs text-muted-foreground">{legalCase.progress}%</span>
                </div>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex items-center justify-end space-x-1">
                  <Button variant="ghost" size="icon">
                    <Eye className="h-4 w-4" />
                    <span className="sr-only">View</span>
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
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Edit Case</DropdownMenuItem>
                      <DropdownMenuItem>Generate Report</DropdownMenuItem>
                      <DropdownMenuItem>Update Status</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">
                        Archive Case
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