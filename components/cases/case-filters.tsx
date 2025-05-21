"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { 
  Card, 
  CardContent 
} from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';

export function CaseFilters() {
  const [roiRange, setRoiRange] = useState([0, 30]);

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex flex-col space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="grid gap-2">
              <label htmlFor="search" className="text-sm font-medium">
                Search Cases
              </label>
              <Input
                id="search"
                placeholder="Search by case title or client..."
                className="h-9"
              />
            </div>
            
            <div className="grid gap-2">
              <label htmlFor="type" className="text-sm font-medium">
                Case Type
              </label>
              <Select>
                <SelectTrigger id="type" className="h-9">
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="commercial">Commercial</SelectItem>
                  <SelectItem value="ip">Intellectual Property</SelectItem>
                  <SelectItem value="employment">Employment</SelectItem>
                  <SelectItem value="tax">Tax</SelectItem>
                  <SelectItem value="property">Property</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid gap-2">
              <label htmlFor="status" className="text-sm font-medium">
                Status
              </label>
              <Select>
                <SelectTrigger id="status" className="h-9">
                  <SelectValue placeholder="All Statuses" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="closed">Closed</SelectItem>
                  <SelectItem value="won">Won</SelectItem>
                  <SelectItem value="lost">Lost</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="grid gap-2">
            <Label className="text-sm font-medium">ROI Range (%)</Label>
            <div className="pt-2 px-2">
              <Slider
                defaultValue={[0, 30]}
                max={50}
                step={1}
                value={roiRange}
                onValueChange={setRoiRange}
              />
            </div>
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>{roiRange[0]}%</span>
              <span>{roiRange[1]}%</span>
            </div>
          </div>
          
          <div className="flex justify-end space-x-2">
            <Button variant="outline">Reset</Button>
            <Button>Apply Filters</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}