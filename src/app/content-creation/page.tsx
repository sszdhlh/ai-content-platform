'use client';

import { useState } from 'react';
import {
  ArrowUpDown,
  Filter,
  MoreHorizontal,
  Plus,
  Search
} from 'lucide-react';
import AppLayout from '@/components/layout/AppLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { CreateContentForm } from '@/components/content/CreateContentForm';

interface ContentItem {
  id: string;
  title: string;
  type: string;
  platform: string;
  status: 'draft' | 'scheduled' | 'published';
  date: string;
}

const contentItems: ContentItem[] = [
  {
    id: '1',
    title: 'The Art of Mindful Living',
    type: 'Post',
    platform: 'Facebook',
    status: 'published',
    date: '2023-05-20'
  },
  {
    id: '2',
    title: 'Finding Peace in Chaos',
    type: 'Caption',
    platform: 'Instagram',
    status: 'published',
    date: '2023-05-18'
  },
  {
    id: '3',
    title: 'Embracing Change',
    type: 'Story',
    platform: 'Twitter',
    status: 'published',
    date: '2023-05-15'
  },
  {
    id: '4',
    title: 'Morning Routine for Success',
    type: 'Post',
    platform: 'LinkedIn',
    status: 'scheduled',
    date: '2023-05-25'
  },
  {
    id: '5',
    title: 'How to Stay Motivated',
    type: 'Post',
    platform: 'Facebook',
    status: 'draft',
    date: '2023-05-22'
  },
  {
    id: '6',
    title: 'Healthy Recipes for Summer',
    type: 'Story',
    platform: 'Instagram',
    status: 'draft',
    date: '2023-05-21'
  }
];

export default function ContentCreation() {
  const [open, setOpen] = useState(false);

  return (
    <AppLayout title="Content Creation">
      <Card>
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search content..."
                className="pl-10 py-2 pr-4 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                <ArrowUpDown className="h-4 w-4 mr-2" />
                Sort
              </Button>
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    New Content
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px]">
                  <DialogHeader>
                    <DialogTitle>Create New Content</DialogTitle>
                    <DialogDescription>
                      Create AI-generated content for your social media channels.
                    </DialogDescription>
                  </DialogHeader>
                  <CreateContentForm onClose={() => setOpen(false)} />
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Platform</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contentItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.title}</TableCell>
                  <TableCell>{item.type}</TableCell>
                  <TableCell>{item.platform}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      item.status === 'published'
                        ? 'bg-green-100 text-green-800'
                        : item.status === 'scheduled'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-gray-100 text-gray-800'
                    }`}>
                      {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                    </span>
                  </TableCell>
                  <TableCell>{new Date(item.date).toLocaleDateString()}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Duplicate</DropdownMenuItem>
                        <DropdownMenuItem>Schedule</DropdownMenuItem>
                        <DropdownMenuItem>View Analytics</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </AppLayout>
  );
}
