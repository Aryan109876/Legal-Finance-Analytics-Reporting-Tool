"use client"

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Copy, Plus, Key, ExternalLink } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function ApiSettings() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">API Integration Settings</h3>
        <p className="text-sm text-muted-foreground">
          Configure external API connections and access tokens for data integration.
        </p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>API Access Keys</CardTitle>
          <CardDescription>
            Manage your API keys for accessing the platform's data and services.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium">Personal API Key</h4>
                  <p className="text-xs text-muted-foreground">
                    Use this key for your own integrations
                  </p>
                </div>
                <Button variant="outline" size="sm">
                  <Key className="mr-2 h-4 w-4" />
                  Generate New Key
                </Button>
              </div>
              <div className="flex items-center space-x-2">
                <Input 
                  value="••••••••••••••••••••••••••••••"
                  readOnly
                  className="font-mono text-sm"
                />
                <Button variant="ghost" size="icon">
                  <Copy className="h-4 w-4" />
                  <span className="sr-only">Copy API key</span>
                </Button>
              </div>
            </div>
            
            <Separator />
            
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Active API Keys</h4>
              <div className="rounded-md border">
                <div className="flex items-center justify-between p-4">
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">Reporting Tool Integration</span>
                      <Badge>Production</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Created on May 15, 2025 • Last used 2 days ago
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">Revoke</Button>
                    <Button variant="outline" size="sm">Rotate</Button>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center justify-between p-4">
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">Court Data API</span>
                      <Badge variant="outline">Development</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Created on June 2, 2025 • Last used 5 hours ago
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">Revoke</Button>
                    <Button variant="outline" size="sm">Rotate</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">
            <Plus className="mr-2 h-4 w-4" />
            Create API Key
          </Button>
          <Button variant="ghost">View API Documentation</Button>
        </CardFooter>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>External API Connections</CardTitle>
          <CardDescription>
            Configure connections to third-party data sources.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
                  <ExternalLink className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="text-sm font-medium">UK Court Database API</h4>
                  <p className="text-xs text-muted-foreground">Connected since April 2025</p>
                </div>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                  <ExternalLink className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h4 className="text-sm font-medium">Financial Data Provider</h4>
                  <p className="text-xs text-muted-foreground">Connected since May 2025</p>
                </div>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="h-10 w-10 rounded-full bg-amber-100 dark:bg-amber-900/20 flex items-center justify-center">
                  <ExternalLink className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <h4 className="text-sm font-medium">Legal Precedent Database</h4>
                  <p className="text-xs text-muted-foreground">Not connected</p>
                </div>
              </div>
              <Switch />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">
            <Plus className="mr-2 h-4 w-4" />
            Add New API Connection
          </Button>
        </CardFooter>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Data Refresh Settings</CardTitle>
          <CardDescription>
            Configure how often external data is synchronized.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid gap-2">
              <label htmlFor="refresh-court" className="text-sm font-medium">
                Court Data Refresh Interval
              </label>
              <Select defaultValue="daily">
                <SelectTrigger id="refresh-court">
                  <SelectValue placeholder="Select interval" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hourly">Hourly</SelectItem>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid gap-2">
              <label htmlFor="refresh-financial" className="text-sm font-medium">
                Financial Data Refresh Interval
              </label>
              <Select defaultValue="hourly">
                <SelectTrigger id="refresh-financial">
                  <SelectValue placeholder="Select interval" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hourly">Hourly</SelectItem>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-center space-x-2">
              <Switch id="auto-sync" />
              <label htmlFor="auto-sync" className="text-sm font-medium">
                Enable automatic data synchronization
              </label>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button>Save Refresh Settings</Button>
        </CardFooter>
      </Card>
    </div>
  );
}