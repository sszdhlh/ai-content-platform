'use client';

import { Heart, MessageSquare, MoreHorizontal } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  image: string;
  postedAt: string;
  likes: number;
  comments: number;
}

const recentContent: ContentItem[] = [
  {
    id: '1',
    title: 'The Art of Mindful Living',
    image: 'https://public.readdy.ai/ai/img_res/30e882b309704f7ae5d3ac02b00a8aa2.jpg',
    postedAt: '2 hours ago',
    likes: 1200,
    comments: 234
  },
  {
    id: '2',
    title: 'Finding Peace in Chaos',
    image: 'https://public.readdy.ai/ai/img_res/b0f69052ffaf8c14bf408e96e1bf07e6.jpg',
    postedAt: '5 hours ago',
    likes: 856,
    comments: 167
  },
  {
    id: '3',
    title: 'Embracing Change',
    image: 'https://public.readdy.ai/ai/img_res/79de21f2db4576a19dfe6cc055c64c3e.jpg',
    postedAt: '8 hours ago',
    likes: 723,
    comments: 145
  }
];

export function RecentContent() {
  function formatNumber(num: number): string {
    return num >= 1000 ? `${(num / 1000).toFixed(1)}k` : num.toString();
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-medium text-gray-700">Recent Content</CardTitle>
        <Button variant="link" size="sm" asChild>
          <Link href="/content-creation">View All</Link>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentContent.map((item) => (
            <div key={item.id} className="flex items-start p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div className="ml-4 flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium text-gray-900">{item.title}</h4>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Repost</DropdownMenuItem>
                      <DropdownMenuItem>View Analytics</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <p className="text-sm text-gray-500 mt-1">Posted {item.postedAt}</p>
                <div className="flex items-center mt-2">
                  <span className="flex items-center text-sm text-gray-500">
                    <Heart className="mr-1 h-4 w-4" />
                    {formatNumber(item.likes)}
                  </span>
                  <span className="flex items-center text-sm text-gray-500 ml-4">
                    <MessageSquare className="mr-1 h-4 w-4" />
                    {formatNumber(item.comments)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
