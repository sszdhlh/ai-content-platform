'use client';

import { useState } from 'react';
import { Calendar, Clock, MoreHorizontal, Plus } from 'lucide-react';
import { format } from 'date-fns';
import AppLayout from '@/components/layout/AppLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

interface ScheduledPost {
  id: string;
  title: string;
  platform: string;
  scheduledDate: Date;
  image?: string;
}

const scheduledPosts: ScheduledPost[] = [
  {
    id: '1',
    title: 'Morning Routine for Success',
    platform: 'LinkedIn',
    scheduledDate: new Date('2023-05-25T09:00:00'),
    image: 'https://public.readdy.ai/ai/img_res/30e882b309704f7ae5d3ac02b00a8aa2.jpg'
  },
  {
    id: '2',
    title: 'How to Stay Motivated',
    platform: 'Facebook',
    scheduledDate: new Date('2023-05-26T14:30:00'),
    image: 'https://public.readdy.ai/ai/img_res/b0f69052ffaf8c14bf408e96e1bf07e6.jpg'
  },
  {
    id: '3',
    title: 'Healthy Recipes for Summer',
    platform: 'Instagram',
    scheduledDate: new Date('2023-05-27T12:00:00'),
    image: 'https://public.readdy.ai/ai/img_res/79de21f2db4576a19dfe6cc055c64c3e.jpg'
  },
  {
    id: '4',
    title: 'Remote Work Productivity Tips',
    platform: 'Twitter',
    scheduledDate: new Date('2023-05-28T11:15:00')
  }
];

export default function Publishing() {
  const [activeTab, setActiveTab] = useState('calendar');

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const todayPosts = scheduledPosts.filter(
    post => post.scheduledDate.toDateString() === today.toDateString()
  );

  const tomorrowPosts = scheduledPosts.filter(
    post => post.scheduledDate.toDateString() === tomorrow.toDateString()
  );

  const laterPosts = scheduledPosts.filter(
    post => post.scheduledDate > tomorrow && new Date(post.scheduledDate).setHours(0, 0, 0, 0) > tomorrow.setHours(0, 0, 0, 0)
  );

  return (
    <AppLayout title="Publishing">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex justify-between items-center mb-6">
          <TabsList>
            <TabsTrigger value="calendar">Calendar View</TabsTrigger>
            <TabsTrigger value="list">List View</TabsTrigger>
          </TabsList>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Schedule Post
          </Button>
        </div>

        <TabsContent value="calendar" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Posts</CardTitle>
              <CardDescription>
                View and manage your scheduled content across all platforms.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium mb-4 flex items-center">
                    <Calendar className="mr-2 h-5 w-5 text-gray-400" />
                    Today ({format(today, 'MMM d, yyyy')})
                  </h3>
                  {todayPosts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {todayPosts.map(post => (
                        <ScheduledPostCard key={post.id} post={post} />
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 italic">No posts scheduled for today.</p>
                  )}
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4 flex items-center">
                    <Calendar className="mr-2 h-5 w-5 text-gray-400" />
                    Tomorrow ({format(tomorrow, 'MMM d, yyyy')})
                  </h3>
                  {tomorrowPosts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {tomorrowPosts.map(post => (
                        <ScheduledPostCard key={post.id} post={post} />
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 italic">No posts scheduled for tomorrow.</p>
                  )}
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4 flex items-center">
                    <Calendar className="mr-2 h-5 w-5 text-gray-400" />
                    Later
                  </h3>
                  {laterPosts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {laterPosts.map(post => (
                        <ScheduledPostCard key={post.id} post={post} />
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 italic">No posts scheduled for later dates.</p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="list" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle>All Scheduled Posts</CardTitle>
              <CardDescription>
                View all your scheduled posts in a list format.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {scheduledPosts
                  .sort((a, b) => a.scheduledDate.getTime() - b.scheduledDate.getTime())
                  .map(post => (
                    <div key={post.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center space-x-4">
                        {post.image && (
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-12 h-12 rounded object-cover"
                          />
                        )}
                        <div>
                          <h4 className="font-medium">{post.title}</h4>
                          <p className="text-sm text-gray-500">{post.platform}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="text-sm font-medium flex items-center">
                            <Calendar className="mr-1 h-4 w-4" />
                            {format(post.scheduledDate, 'MMM d, yyyy')}
                          </p>
                          <p className="text-sm text-gray-500 flex items-center justify-end">
                            <Clock className="mr-1 h-4 w-4" />
                            {format(post.scheduledDate, 'h:mm a')}
                          </p>
                        </div>
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
                            <DropdownMenuItem>Reschedule</DropdownMenuItem>
                            <DropdownMenuItem>Publish Now</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-destructive">Cancel</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </AppLayout>
  );
}

function ScheduledPostCard({ post }: { post: ScheduledPost }) {
  return (
    <Card className="overflow-hidden">
      {post.image && (
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h4 className="font-medium">{post.title}</h4>
            <p className="text-sm text-gray-500">{post.platform}</p>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <Clock className="mr-1 h-4 w-4" />
              {format(post.scheduledDate, 'h:mm a')}
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Reschedule</DropdownMenuItem>
              <DropdownMenuItem>Publish Now</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">Cancel</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardContent>
    </Card>
  );
}
