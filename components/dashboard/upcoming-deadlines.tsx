import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CalendarIcon, Clock, ArrowRight } from 'lucide-react';

export function UpcomingDeadlines() {
  // Mock data for deadlines
  const deadlines = [
    { 
      id: 1, 
      title: 'Smith v. Johnson Brief Due', 
      date: 'June 15, 2025', 
      priority: 'high',
      daysLeft: 3
    },
    { 
      id: 2, 
      title: 'Q2 Financial Review', 
      date: 'June 20, 2025', 
      priority: 'medium',
      daysLeft: 8 
    },
    { 
      id: 3, 
      title: 'Wilson LLC Settlement', 
      date: 'June 25, 2025', 
      priority: 'medium',
      daysLeft: 13
    },
  ];

  return (
    <Card className="col-span-1">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Upcoming Deadlines</CardTitle>
          <Button variant="ghost" size="sm" className="h-8 gap-1">
            View all <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {deadlines.map((deadline) => (
            <div key={deadline.id} className="flex items-start space-x-3 p-3 rounded-md hover:bg-accent transition-colors">
              <div className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${
                deadline.priority === 'high' 
                  ? 'bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400' 
                  : deadline.priority === 'medium'
                  ? 'bg-amber-100 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400'
                  : 'bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400'
              }`}>
                <Clock className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium truncate">{deadline.title}</p>
                  <Badge variant={
                    deadline.priority === 'high' 
                      ? 'destructive' 
                      : deadline.priority === 'medium'
                      ? 'default'
                      : 'outline'
                  }>
                    {deadline.daysLeft} days
                  </Badge>
                </div>
                <p className="mt-1 text-xs text-muted-foreground flex items-center">
                  <CalendarIcon className="mr-1 h-3 w-3" /> {deadline.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}