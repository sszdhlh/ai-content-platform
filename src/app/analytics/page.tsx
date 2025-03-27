'use client';

import { useState } from 'react';
import {
  BarChart as BarChartIcon,
  Calendar,
  Download,
  LineChart,
  PieChart,
  SearchIcon
} from 'lucide-react';
import AppLayout from '@/components/layout/AppLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart as RechartsLineChart,
  Line,
  PieChart as RechartsPieChart,
  Pie,
  Cell
} from 'recharts';

// Sample data for charts
const engagementData = [
  { name: 'Jan', likes: 4000, comments: 2400, shares: 1200 },
  { name: 'Feb', likes: 3000, comments: 1398, shares: 900 },
  { name: 'Mar', likes: 2000, comments: 9800, shares: 3200 },
  { name: 'Apr', likes: 2780, comments: 3908, shares: 2000 },
  { name: 'May', likes: 1890, comments: 4800, shares: 2181 },
  { name: 'Jun', likes: 2390, comments: 3800, shares: 2500 },
];

const audienceData = [
  { name: '18-24', value: 20 },
  { name: '25-34', value: 35 },
  { name: '35-44', value: 25 },
  { name: '45-54', value: 15 },
  { name: '55+', value: 5 },
];

const COLORS = ['#6366f1', '#8b5cf6', '#d946ef', '#ec4899', '#f43f5e'];

const performanceData = [
  { name: 'Facebook', posts: 20, engagement: 4.5, reach: 15000 },
  { name: 'Instagram', posts: 35, engagement: 6.8, reach: 28000 },
  { name: 'Twitter', posts: 15, engagement: 3.2, reach: 12000 },
  { name: 'LinkedIn', posts: 10, engagement: 2.9, reach: 8000 },
  { name: 'TikTok', posts: 12, engagement: 8.7, reach: 45000 },
];

export default function Analytics() {
  const [dateRange, setDateRange] = useState('last30days');
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <AppLayout title="Analytics">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-4">
          <Select value={dateRange} onValueChange={setDateRange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select date range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="last7days">Last 7 days</SelectItem>
              <SelectItem value="last30days">Last 30 days</SelectItem>
              <SelectItem value="last90days">Last 90 days</SelectItem>
              <SelectItem value="thisYear">This year</SelectItem>
              <SelectItem value="custom">Custom range</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Export Report
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="overview">
            <LineChart className="h-4 w-4 mr-2" />
            Overview
          </TabsTrigger>
          <TabsTrigger value="audience">
            <PieChart className="h-4 w-4 mr-2" />
            Audience
          </TabsTrigger>
          <TabsTrigger value="performance">
            <BarChartIcon className="h-4 w-4 mr-2" />
            Platform Performance
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Engagement Overview</CardTitle>
              <CardDescription>
                Track likes, comments, and shares across all your content.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsLineChart
                    data={engagementData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="likes" stroke="#6366f1" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="comments" stroke="#8b5cf6" />
                    <Line type="monotone" dataKey="shares" stroke="#ec4899" />
                  </RechartsLineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Total Engagement</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">124,892</div>
                <div className="text-xs text-green-500 flex items-center mt-1">
                  <span>↑ 12.5%</span>
                  <span className="text-gray-500 ml-1">vs. previous period</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Engagement Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">5.7%</div>
                <div className="text-xs text-green-500 flex items-center mt-1">
                  <span>↑ 0.8%</span>
                  <span className="text-gray-500 ml-1">vs. previous period</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Content Published</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">83</div>
                <div className="text-xs text-red-500 flex items-center mt-1">
                  <span>↓ 4.2%</span>
                  <span className="text-gray-500 ml-1">vs. previous period</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="audience">
          <div className="grid grid-cols-3 gap-6">
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Audience Demographics</CardTitle>
                <CardDescription>
                  Age distribution of your audience across all platforms.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsPieChart>
                      <Pie
                        data={audienceData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={120}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {audienceData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </RechartsPieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Total Audience</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">278,392</div>
                  <div className="text-xs text-green-500 flex items-center mt-1">
                    <span>↑ 8.3%</span>
                    <span className="text-gray-500 ml-1">vs. previous period</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Top Countries</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>United States</span>
                      <span className="font-medium">42%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>United Kingdom</span>
                      <span className="font-medium">18%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Canada</span>
                      <span className="font-medium">12%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Australia</span>
                      <span className="font-medium">8%</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Germany</span>
                      <span className="font-medium">5%</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="performance">
          <Card>
            <CardHeader>
              <CardTitle>Platform Performance</CardTitle>
              <CardDescription>
                Compare performance metrics across different social media platforms.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={performanceData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="posts" fill="#6366f1" name="Posts" />
                    <Bar dataKey="engagement" fill="#8b5cf6" name="Engagement Rate (%)" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </AppLayout>
  );
}
