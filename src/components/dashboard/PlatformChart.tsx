'use client';

import ReactEcharts from 'echarts-for-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function PlatformChart() {
  const option = {
    animation: false,
    tooltip: {
      trigger: 'item',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      borderColor: '#e5e7eb',
      textStyle: {
        color: '#1f2937'
      }
    },
    series: [
      {
        name: 'Platform Distribution',
        type: 'pie',
        radius: ['40%', '70%'],
        itemStyle: {
          borderRadius: 8
        },
        label: {
          show: true,
          color: '#1f2937',
          formatter: '{b}: {d}%'
        },
        data: [
          { value: 1048, name: 'Facebook', itemStyle: { color: '#1877F2' } },
          { value: 735, name: 'Instagram', itemStyle: { color: '#E4405F' } },
          { value: 580, name: 'Twitter', itemStyle: { color: '#1DA1F2' } },
          { value: 300, name: 'TikTok', itemStyle: { color: '#000000' } },
          { value: 184, name: 'Others', itemStyle: { color: '#6c757d' } }
        ]
      }
    ]
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-medium text-gray-700">Platform Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <ReactEcharts
          option={option}
          style={{ height: '320px', width: '100%' }}
          opts={{ renderer: 'svg' }}
        />
      </CardContent>
    </Card>
  );
}
