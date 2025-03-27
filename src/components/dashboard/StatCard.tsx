import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: LucideIcon;
}

export function StatCard({ title, value, change, isPositive, icon: Icon }: StatCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-gray-700">{title}</h3>
          <Icon className="text-primary h-6 w-6" />
        </div>
        <p className="text-3xl font-semibold text-gray-900">{value}</p>
        <p className="text-sm text-gray-500 mt-2">
          <span className={isPositive ? 'text-green-500' : 'text-red-500'}>
            {isPositive ? '↑' : '↓'} {change}
          </span>{' '}
          vs last month
        </p>
      </CardContent>
    </Card>
  );
}
