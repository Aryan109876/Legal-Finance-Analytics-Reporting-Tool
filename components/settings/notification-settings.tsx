"use client"

import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function NotificationSettings() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Notification Preferences</h3>
        <p className="text-sm text-muted-foreground">
          Manage how and when you receive notifications from the platform.
        </p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Email Notifications</CardTitle>
          <CardDescription>
            Configure which updates are sent to your email address.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="case-updates">Case Updates</Label>
              <p className="text-sm text-muted-foreground">
                Receive notifications when cases are updated or status changes
              </p>
            </div>
            <Switch id="case-updates" defaultChecked />
          </div>
          <Separator />
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="financial-alerts">Financial Alerts</Label>
              <p className="text-sm text-muted-foreground">
                Get notified for significant ROI changes or financial updates
              </p>
            </div>
            <Switch id="financial-alerts" defaultChecked />
          </div>
          <Separator />
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="report-notifications">New Reports</Label>
              <p className="text-sm text-muted-foreground">
                Notifications when new reports are published or shared with you
              </p>
            </div>
            <Switch id="report-notifications" defaultChecked />
          </div>
          <Separator />
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="deadline-reminders">Deadline Reminders</Label>
              <p className="text-sm text-muted-foreground">
                Receive advance reminders for approaching deadlines
              </p>
            </div>
            <Switch id="deadline-reminders" defaultChecked />
          </div>
          <Separator />
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="marketing-emails">Marketing & Updates</Label>
              <p className="text-sm text-muted-foreground">
                Platform news, feature updates, and educational content
              </p>
            </div>
            <Switch id="marketing-emails" />
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>In-App Notifications</CardTitle>
          <CardDescription>
            Configure the notifications you receive within the application.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="real-time-alerts">Real-time Alerts</Label>
              <p className="text-sm text-muted-foreground">
                Show real-time notifications for important events
              </p>
            </div>
            <Switch id="real-time-alerts" defaultChecked />
          </div>
          <Separator />
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="success-notifications">Success Rate Alerts</Label>
              <p className="text-sm text-muted-foreground">
                Get notified when case success rates change significantly
              </p>
            </div>
            <Switch id="success-notifications" defaultChecked />
          </div>
          <Separator />
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="roi-thresholds">ROI Threshold Alerts</Label>
              <p className="text-sm text-muted-foreground">
                Alerts when ROI passes critical thresholds (high or low)
              </p>
            </div>
            <Switch id="roi-thresholds" defaultChecked />
          </div>
          <Separator />
          
          <div className="grid gap-2">
            <Label htmlFor="notification-sound" className="text-sm font-medium">
              Notification Sound
            </Label>
            <Select defaultValue="enabled">
              <SelectTrigger id="notification-sound">
                <SelectValue placeholder="Select sound preference" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="enabled">Enabled</SelectItem>
                <SelectItem value="critical-only">Critical Alerts Only</SelectItem>
                <SelectItem value="disabled">Disabled</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Financial Alert Thresholds</CardTitle>
          <CardDescription>
            Set thresholds for when you receive financial notifications.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="roi-change" className="text-sm font-medium">
              ROI Change Threshold
            </Label>
            <Select defaultValue="5">
              <SelectTrigger id="roi-change">
                <SelectValue placeholder="Select threshold" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1% change</SelectItem>
                <SelectItem value="3">3% change</SelectItem>
                <SelectItem value="5">5% change</SelectItem>
                <SelectItem value="10">10% change</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-muted-foreground">
              You'll be notified when ROI changes by this percentage or more.
            </p>
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="deadline-threshold" className="text-sm font-medium">
              Deadline Reminder Interval
            </Label>
            <Select defaultValue="7">
              <SelectTrigger id="deadline-threshold">
                <SelectValue placeholder="Select interval" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 day before</SelectItem>
                <SelectItem value="3">3 days before</SelectItem>
                <SelectItem value="7">1 week before</SelectItem>
                <SelectItem value="14">2 weeks before</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-muted-foreground">
              How far in advance you'll be notified of upcoming deadlines.
            </p>
          </div>
        </CardContent>
        <CardFooter>
          <Button>Save Notification Settings</Button>
        </CardFooter>
      </Card>
    </div>
  );
}