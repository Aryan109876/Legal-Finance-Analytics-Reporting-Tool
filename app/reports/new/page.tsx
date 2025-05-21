"use client"

import { useState } from 'react';
import { DashboardHeader } from '@/components/dashboard/dashboard-header';
import { DashboardShell } from '@/components/dashboard/dashboard-shell';
import { ReportTemplateSelector } from '@/components/reports/report-template-selector';
import { ReportForm } from '@/components/reports/report-form';
import { ReportPreview } from '@/components/reports/report-preview';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function NewReportPage() {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Generate New Report"
        text="Create a new financial report for stakeholders."
      />
      
      {!selectedTemplate ? (
        <ReportTemplateSelector onSelect={setSelectedTemplate} />
      ) : (
        <Tabs defaultValue="edit" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="edit">Edit</TabsTrigger>
            <TabsTrigger value="preview">Preview</TabsTrigger>
          </TabsList>
          <TabsContent value="edit" className="mt-6">
            <ReportForm template={selectedTemplate} />
          </TabsContent>
          <TabsContent value="preview" className="mt-6">
            <ReportPreview template={selectedTemplate} />
          </TabsContent>
        </Tabs>
      )}
    </DashboardShell>
  );
}