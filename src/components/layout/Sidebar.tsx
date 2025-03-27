'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  LayoutDashboard,
  Edit,
  Send,
  BarChart,
  MessageSquare,
  Settings,
  LogOut
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

interface NavItem {
  name: string;
  href: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  {
    name: 'Dashboard',
    href: '/',
    icon: <LayoutDashboard className="w-5 h-5 mr-3" />,
  },
  {
    name: 'Content Creation',
    href: '/content-creation',
    icon: <Edit className="w-5 h-5 mr-3" />,
  },
  {
    name: 'Publishing',
    href: '/publishing',
    icon: <Send className="w-5 h-5 mr-3" />,
  },
  {
    name: 'Analytics',
    href: '/analytics',
    icon: <BarChart className="w-5 h-5 mr-3" />,
  },
  {
    name: 'Chat Management',
    href: '/chat-management',
    icon: <MessageSquare className="w-5 h-5 mr-3" />,
  },
  {
    name: 'Settings',
    href: '/settings',
    icon: <Settings className="w-5 h-5 mr-3" />,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col h-screen">
      <div className="p-6 border-b border-gray-200">
        <h1 className="font-pacifico text-2xl text-primary">AiContent</h1>
      </div>

      <nav className="flex-1 overflow-y-auto p-4">
        <div className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`sidebar-link flex items-center px-4 py-2.5 text-sm rounded-lg ${
                  isActive ? 'active' : ''
                }`}
              >
                {item.icon}
                {item.name}
              </Link>
            );
          })}
        </div>
      </nav>

      <div className="p-4 border-t border-gray-200">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="w-full flex items-center justify-start p-0 hover:bg-transparent">
              <div className="flex items-center">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarImage src="https://public.readdy.ai/ai/img_res/2864fd012a190276ec328dae4b14c009.jpg" alt="Profile" />
                  <AvatarFallback>EJ</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium text-gray-700 text-left">Emily Johnson</p>
                  <p className="text-xs text-gray-500 text-left">Content Manager</p>
                </div>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Profile Settings</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </aside>
  );
}
