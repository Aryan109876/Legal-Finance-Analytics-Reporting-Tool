interface DashboardShellProps {
  children: React.ReactNode;
}

export function DashboardShell({ children }: DashboardShellProps) {
  return (
    <div className="flex flex-col gap-6 pl-0 md:pl-64 transition-all duration-300 ease-in-out">
      <div className="mx-auto w-full max-w-screen-xl space-y-6 px-4 md:px-6">
        {children}
      </div>
    </div>
  );
}