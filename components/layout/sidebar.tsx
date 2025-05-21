"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { 
  LayoutDashboard, 
  FileText, 
  Briefcase,
  PieChart,
  Settings,
  ExternalLink,
  BarChart,
  Scale
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Badge } from '@/components/ui/badge';

interface NavItem {
  title: string;
  href: string;
  icon: React.ReactNode;
  badge?: string;
}

export default function Sidebar() {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      setExpanded(!mobile);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  const mainNavItems: NavItem[] = [
    {
      title: 'Dashboard',
      href: '/',
      icon: <LayoutDashboard className="h-5 w-5" />,
    },
    {
      title: 'Reports',
      href: '/reports',
      icon: <FileText className="h-5 w-5" />,
      badge: '3'
    },
    {
      title: 'Cases',
      href: '/cases',
      icon: <Briefcase className="h-5 w-5" />,
    },
    {
      title: 'Analytics',
      href: '/analytics',
      icon: <BarChart className="h-5 w-5" />,
    },
  ];

  const secondaryNavItems: NavItem[] = [
    {
      title: 'Benchmarks',
      href: '/benchmarks',
      icon: <Scale className="h-5 w-5" />,
    },
    {
      title: 'Forecasts',
      href: '/forecasts',
      icon: <PieChart className="h-5 w-5" />,
    },
    {
      title: 'External Data',
      href: '/external-data',
      icon: <ExternalLink className="h-5 w-5" />,
    },
    {
      title: 'Settings',
      href: '/settings',
      icon: <Settings className="h-5 w-5" />,
    },
  ];

  return (
    <aside className={cn(
      "h-screen border-r bg-card fixed left-0 top-0 z-20 flex flex-col transition-all duration-300 ease-in-out",
      expanded ? "w-64" : "w-16"
    )}>
      <div className="flex h-16 items-center justify-between px-4 border-b">
        {expanded ? (
          <div className="flex items-center">
            <Scale className="h-6 w-6 text-primary" />
            <span className="ml-2 font-bold text-lg">LegalFinance</span>
          </div>
        ) : (
          <Scale className="h-6 w-6 mx-auto text-primary" />
        )}
        {!isMobile && (
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setExpanded(!expanded)}
            className="p-0 h-6 w-6"
          >
            {expanded ? (
              <svg width="16" height="16" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.35022 10.7954 7.64949 10.6151 7.84183L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84183C5.94673 3.64037 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
              </svg>
            )}
          </Button>
        )}
      </div>
      <ScrollArea className="flex-1 overflow-auto">
        <nav className="space-y-6 p-4">
          <div className="space-y-1">
            {expanded && <div className="text-xs font-semibold text-muted-foreground mb-2">MAIN</div>}
            {mainNavItems.map((item) => (
              <TooltipProvider key={item.href} delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href={item.href}>
                      <div className={cn(
                        "group flex items-center py-2 px-3 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground transition-colors",
                        pathname === item.href ? "bg-accent text-accent-foreground" : "text-muted-foreground",
                        !expanded && "justify-center px-2"
                      )}>
                        {item.icon}
                        {expanded && (
                          <span className="ml-3 flex-1">{item.title}</span>
                        )}
                        {expanded && item.badge && (
                          <Badge variant="secondary" className="ml-auto">
                            {item.badge}
                          </Badge>
                        )}
                      </div>
                    </Link>
                  </TooltipTrigger>
                  {!expanded && (
                    <TooltipContent side="right">
                      <div className="flex items-center">
                        {item.title}
                        {item.badge && (
                          <Badge variant="secondary" className="ml-2">
                            {item.badge}
                          </Badge>
                        )}
                      </div>
                    </TooltipContent>
                  )}
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
          <div className="space-y-1">
            {expanded && <div className="text-xs font-semibold text-muted-foreground mb-2">ANALYSIS</div>}
            {secondaryNavItems.map((item) => (
              <TooltipProvider key={item.href} delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href={item.href}>
                      <div className={cn(
                        "group flex items-center py-2 px-3 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground transition-colors",
                        pathname === item.href ? "bg-accent text-accent-foreground" : "text-muted-foreground",
                        !expanded && "justify-center px-2"
                      )}>
                        {item.icon}
                        {expanded && (
                          <span className="ml-3">{item.title}</span>
                        )}
                      </div>
                    </Link>
                  </TooltipTrigger>
                  {!expanded && (
                    <TooltipContent side="right">
                      {item.title}
                    </TooltipContent>
                  )}
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </nav>
      </ScrollArea>
      {expanded && (
        <div className="p-4 border-t">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                AJ
              </div>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium">Alex Johnson</p>
              <p className="text-xs text-muted-foreground">Legal Analyst</p>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}

export { Sidebar };