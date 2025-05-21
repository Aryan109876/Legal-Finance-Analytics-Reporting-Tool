import { DashboardHeader } from '@/components/dashboard/dashboard-header';
import { DashboardShell } from '@/components/dashboard/dashboard-shell';
import { CasesList } from '@/components/cases/cases-list';
import { CaseFilters } from '@/components/cases/case-filters';

export default function CasesPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Case Portfolio"
        text="Manage and analyze your legal case portfolio."
      />
      
      <div className="grid gap-6">
        <CaseFilters />
        <CasesList />
      </div>
    </DashboardShell>
  );
}