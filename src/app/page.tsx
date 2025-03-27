'use client';

import { FileText, Heart, MessageSquare, Sparkles } from 'lucide-react';
import AppLayout from '@/components/layout/AppLayout';
import { StatCard } from '@/components/dashboard/StatCard';
import { EngagementChart } from '@/components/dashboard/EngagementChart';
import { PlatformChart } from '@/components/dashboard/PlatformChart';
import { RecentContent } from '@/components/dashboard/RecentContent';
import { ConnectedPlatforms } from '@/components/dashboard/ConnectedPlatforms';

export default function Dashboard() {
  return (
    <AppLayout title="Dashboard">
      <div className="grid grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Posts"
          value="2,847"
          change="12.5%"
          isPositive={true}
          icon={FileText}
        />
        <StatCard
          title="Engagement Rate"
          value="4.8%"
          change="2.1%"
          isPositive={true}
          icon={Heart}
        />
        <StatCard
          title="Auto Replies"
          value="15,234"
          change="8.3%"
          isPositive={true}
          icon={MessageSquare}
        />
        <StatCard
          title="AI Generated"
          value="1,892"
          change="15.7%"
          isPositive={true}
          icon={Sparkles}
        />
      </div>

      <div className="grid grid-cols-3 gap-6 mb-8">
        <EngagementChart />
        <PlatformChart />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <RecentContent />
        <ConnectedPlatforms />
      </div>
    </AppLayout>
  );
}
