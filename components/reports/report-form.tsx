"use client"

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { Calendar as CalendarIcon, Check, ChevronsUpDown } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';

const recipients = [
  { label: 'Alex Johnson', value: 'alex.johnson@example.com' },
  { label: 'Sarah Williams', value: 'sarah.williams@example.com' },
  { label: 'David Chen', value: 'david.chen@example.com' },
  { label: 'Maria Rodriguez', value: 'maria.rodriguez@example.com' },
  { label: 'James Wilson', value: 'james.wilson@example.com' },
  { label: 'Emily Taylor', value: 'emily.taylor@example.com' },
];

const formSchema = z.object({
  title: z.string().min(2, {
    message: 'Title must be at least 2 characters.',
  }),
  description: z.string().min(10, {
    message: 'Description must be at least 10 characters.',
  }),
  date: z.date({
    required_error: 'A date is required.',
  }),
  period: z.string({
    required_error: 'Please select a reporting period.',
  }),
  caseTypes: z.string().optional(),
  recipients: z.array(z.string()).optional(),
});

interface ReportFormProps {
  template: string;
}

export function ReportForm({ template }: ReportFormProps) {
  const [open, setOpen] = useState(false);
  const [selectedRecipients, setSelectedRecipients] = useState<string[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: getDefaultTitle(template),
      description: '',
      period: 'quarterly',
      recipients: [],
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Here you would typically send the data to your API
    alert('Report generated successfully!');
  }

  function getDefaultTitle(templateId: string) {
    const titles: Record<string, string> = {
      'financial-summary': 'Financial Summary Report',
      'case-performance': 'Case Performance Analysis',
      'roi-analysis': 'ROI Analysis Report',
      'success-rates': 'Success Rates Overview',
    };
    
    return titles[templateId] || 'New Report';
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create {getDefaultTitle(template)}</CardTitle>
        <CardDescription>
          Fill in the details to generate your report.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Report Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter report title" {...field} />
                  </FormControl>
                  <FormDescription>
                    This will be displayed at the top of your report.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Enter a brief description of this report" 
                      className="resize-none" 
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription>
                    Provide context for the report's purpose and contents.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid gap-6 md:grid-cols-2">
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Report Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormDescription>
                      When the report was generated.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="period"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Reporting Period</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select reporting period" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="monthly">Monthly</SelectItem>
                        <SelectItem value="quarterly">Quarterly</SelectItem>
                        <SelectItem value="biannual">Bi-Annual</SelectItem>
                        <SelectItem value="annual">Annual</SelectItem>
                        <SelectItem value="custom">Custom Period</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      The time period covered by this report.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="caseTypes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Case Types</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select case types to include" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="all">All Cases</SelectItem>
                      <SelectItem value="commercial">Commercial</SelectItem>
                      <SelectItem value="ip">Intellectual Property</SelectItem>
                      <SelectItem value="employment">Employment</SelectItem>
                      <SelectItem value="tax">Tax</SelectItem>
                      <SelectItem value="property">Property</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Filter the report to specific case types.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="recipients"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Recipients</FormLabel>
                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          role="combobox"
                          className={cn(
                            "justify-between",
                            !field.value?.length && "text-muted-foreground"
                          )}
                        >
                          {field.value?.length
                            ? `${field.value.length} recipient${field.value.length > 1 ? "s" : ""} selected`
                            : "Select recipients"}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="p-0">
                      <Command>
                        <CommandInput placeholder="Search recipients..." />
                        <CommandList>
                          <CommandEmpty>No recipients found.</CommandEmpty>
                          <CommandGroup>
                            {recipients.map((recipient) => (
                              <CommandItem
                                key={recipient.value}
                                value={recipient.value}
                                onSelect={() => {
                                  const newRecipients = selectedRecipients.includes(recipient.value)
                                    ? selectedRecipients.filter((r) => r !== recipient.value)
                                    : [...selectedRecipients, recipient.value];
                                  
                                  setSelectedRecipients(newRecipients);
                                  form.setValue("recipients", newRecipients);
                                }}
                              >
                                <Check
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    selectedRecipients.includes(recipient.value)
                                      ? "opacity-100"
                                      : "opacity-0"
                                  )}
                                />
                                <div className="flex flex-col">
                                  <span>{recipient.label}</span>
                                  <span className="text-muted-foreground text-xs">{recipient.value}</span>
                                </div>
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  <FormDescription>
                    Select who will receive this report.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="flex justify-end space-x-4">
              <Button type="button" variant="outline">Cancel</Button>
              <Button type="submit">Generate Report</Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}