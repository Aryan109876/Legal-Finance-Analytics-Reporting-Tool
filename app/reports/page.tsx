import { DashboardHeader } from '@/components/dashboard/dashboard-header';
import { DashboardShell } from '@/components/dashboard/dashboard-shell';
import { ReportsList } from '@/components/reports/reports-list';
import { ReportFilters } from '@/components/reports/report-filters';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import Link from 'next/link';

export default function ReportsPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Reports"
        text="Generate and manage financial reports for stakeholders."
      >
        <Link href="/reports/new">
          <Button size="sm">
            <Plus className="mr-2 h-4 w-4" />
            New Report
          </Button>
        </Link>
      </DashboardHeader>
      
      <div className="grid gap-6">
        <ReportFilters />
        <ReportsList />
      </div>
    </DashboardShell>
  );
}