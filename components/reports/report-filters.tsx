"use client"

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Calendar } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { useState } from 'react';
import { format } from 'date-fns';
import { 
  Card, 
  CardContent 
} from '@/components/ui/card';

export function ReportFilters() {
  const [date, setDate] = useState<Date | undefined>(undefined);

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex flex-col space-y-4 md:flex-row md:items-end md:space-x-4 md:space-y-0">
          <div className="grid gap-2">
            <label htmlFor="search" className="text-sm font-medium">
              Search Reports
            </label>
            <Input
              id="search"
              placeholder="Search by title or content..."
              className="h-9 w-full md:w-[300px]"
            />
          </div>
          
          <div className="grid gap-2">
            <label htmlFor="type" className="text-sm font-medium">
              Report Type
            </label>
            <Select>
              <SelectTrigger id="type" className="h-9 w-full md:w-[180px]">
                <SelectValue placeholder="All Types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="quarterly">Quarterly</SelectItem>
                <SelectItem value="analysis">Analysis</SelectItem>
                <SelectItem value="cost">Cost</SelectItem>
                <SelectItem value="forecast">Forecast</SelectItem>
                <SelectItem value="annual">Annual</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="grid gap-2">
            <label htmlFor="status" className="text-sm font-medium">
              Status
            </label>
            <Select>
              <SelectTrigger id="status" className="h-9 w-full md:w-[180px]">
                <SelectValue placeholder="All Statuses" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="published">Published</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="archived">Archived</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="grid gap-2">
            <label htmlFor="date" className="text-sm font-medium">
              Date
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="date"
                  variant="outline"
                  className="h-9 w-full justify-start text-left font-normal md:w-[180px]"
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <CalendarComponent
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          
          <Button className="h-9">Apply Filters</Button>
          <Button variant="outline" className="h-9">Reset</Button>
        </div>
      </CardContent>
    </Card>
  );
}