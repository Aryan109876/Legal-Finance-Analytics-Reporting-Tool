import { DashboardHeader } from '@/components/dashboard/dashboard-header';
import { DashboardShell } from '@/components/dashboard/dashboard-shell';
import { OverviewMetrics } from '@/components/dashboard/overview-metrics';
import { CaseSuccessChart } from '@/components/dashboard/case-success-chart';
import { RecentReports } from '@/components/dashboard/recent-reports';
import { ROIChart } from '@/components/dashboard/roi-chart';
import { UpcomingDeadlines } from '@/components/dashboard/upcoming-deadlines';
import { CaseTypeDistribution } from '@/components/dashboard/case-type-distribution';

export default function HomePage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Portfolio Dashboard"
        text="View your portfolio performance and key metrics."
      />
      <div className="grid gap-6">
        <OverviewMetrics />
        
        <div className="grid gap-6 md:grid-cols-2">
          <ROIChart />
          <CaseSuccessChart />
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <CaseTypeDistribution />
          <UpcomingDeadlines />
          <RecentReports />
        </div>
      </div>
    </DashboardShell>
  );
}