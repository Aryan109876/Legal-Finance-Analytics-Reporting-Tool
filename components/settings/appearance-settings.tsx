"use client"

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { useTheme } from 'next-themes';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';

export function AppearanceSettings() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Appearance</h3>
        <p className="text-sm text-muted-foreground">
          Customize how the application looks and feels for you.
        </p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Theme</CardTitle>
          <CardDescription>
            Select your preferred color theme for the interface.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RadioGroup 
            defaultValue={theme || 'system'}
            onValueChange={(value) => setTheme(value)}
            className="grid grid-cols-3 gap-4"
          >
            <div>
              <RadioGroupItem
                value="light"
                id="theme-light"
                className="sr-only"
              />
              <Label
                htmlFor="theme-light"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground cursor-pointer peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <div className="mb-2 rounded-md border border-border bg-background p-2">
                  <div className="h-4 w-full rounded-sm bg-primary/10"></div>
                  <div className="mt-1 h-8 w-full rounded-sm bg-muted"></div>
                  <div className="mt-1 h-3 w-full rounded-sm bg-muted"></div>
                  <div className="mt-1 h-3 w-1/2 rounded-sm bg-muted"></div>
                </div>
                <span className="text-sm font-medium">Light</span>
              </Label>
            </div>
            
            <div>
              <RadioGroupItem
                value="dark"
                id="theme-dark"
                className="sr-only"
              />
              <Label
                htmlFor="theme-dark"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground cursor-pointer peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <div className="mb-2 rounded-md border border-border bg-slate-950 p-2">
                  <div className="h-4 w-full rounded-sm bg-slate-400"></div>
                  <div className="mt-1 h-8 w-full rounded-sm bg-slate-800"></div>
                  <div className="mt-1 h-3 w-full rounded-sm bg-slate-800"></div>
                  <div className="mt-1 h-3 w-1/2 rounded-sm bg-slate-800"></div>
                </div>
                <span className="text-sm font-medium">Dark</span>
              </Label>
            </div>
            
            <div>
              <RadioGroupItem
                value="system"
                id="theme-system"
                className="sr-only"
              />
              <Label
                htmlFor="theme-system"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground cursor-pointer peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <div className="mb-2 rounded-md border border-border p-2 bg-gradient-to-r from-background to-slate-950">
                  <div className="h-4 w-full rounded-sm bg-gradient-to-r from-primary/10 to-slate-400"></div>
                  <div className="mt-1 h-8 w-full rounded-sm bg-gradient-to-r from-muted to-slate-800"></div>
                  <div className="mt-1 h-3 w-full rounded-sm bg-gradient-to-r from-muted to-slate-800"></div>
                  <div className="mt-1 h-3 w-1/2 rounded-sm bg-gradient-to-r from-muted to-slate-800"></div>
                </div>
                <span className="text-sm font-medium">System</span>
              </Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Dashboard Preferences</CardTitle>
          <CardDescription>
            Configure how data is presented on your dashboard.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="chart-style" className="text-sm font-medium">
              Default Chart Style
            </Label>
            <Select defaultValue="modern">
              <SelectTrigger id="chart-style">
                <SelectValue placeholder="Select chart style" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="modern">Modern</SelectItem>
                <SelectItem value="classic">Classic</SelectItem>
                <SelectItem value="minimal">Minimal</SelectItem>
                <SelectItem value="detailed">Detailed</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="data-density" className="text-sm font-medium">
              Data Density
            </Label>
            <Select defaultValue="balanced">
              <SelectTrigger id="data-density">
                <SelectValue placeholder="Select data density" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="compact">Compact</SelectItem>
                <SelectItem value="balanced">Balanced</SelectItem>
                <SelectItem value="comfortable">Comfortable</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Separator />
          
          <div className="space-y-2">
            <Label className="text-sm font-medium">
              Dashboard Features
            </Label>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="show-animations" className="text-sm">
                  Show chart animations
                </Label>
                <Switch id="show-animations" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="show-summary" className="text-sm">
                  Show executive summary
                </Label>
                <Switch id="show-summary" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="real-time-updates" className="text-sm">
                  Real-time data updates
                </Label>
                <Switch id="real-time-updates" />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="show-tooltips" className="text-sm">
                  Show detailed tooltips
                </Label>
                <Switch id="show-tooltips" defaultChecked />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Accessibility</CardTitle>
          <CardDescription>
            Configure accessibility settings for your interface.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="font-size" className="text-sm font-medium">
              Font Size
            </Label>
            <Select defaultValue="medium">
              <SelectTrigger id="font-size">
                <SelectValue placeholder="Select font size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="small">Small</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="large">Large</SelectItem>
                <SelectItem value="x-large">Extra Large</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-center justify-between">
            <Label htmlFor="reduced-motion" className="text-sm">
              Reduce motion
            </Label>
            <Switch id="reduced-motion" />
          </div>
          
          <div className="flex items-center justify-between">
            <Label htmlFor="high-contrast" className="text-sm">
              High contrast mode
            </Label>
            <Switch id="high-contrast" />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Save Appearance Settings</Button>
        </CardFooter>
      </Card>
    </div>
  );
}