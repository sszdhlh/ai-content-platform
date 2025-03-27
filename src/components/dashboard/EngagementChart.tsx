'use client';

import { useState } from 'react';
import ReactEcharts from 'echarts-for-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

type TimePeriod = 'week' | 'month' | 'year';

export function EngagementChart() {
  const [timePeriod, setTimePeriod] = useState<TimePeriod>('month');

  // Sample data for different time periods
  const data = {
    week: {
      dates: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      values: [820, 932, 901, 934, 1290, 1330, 1320]
    },
    month: {
      dates: Array.from({ length: 30 }, (_, i) => `${i + 1}`),
      values: Array.from({ length: 30 }, () => Math.floor(Math.random() * 1000) + 500)
    },
    year: {
      dates: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      values: [620, 732, 801, 934, 1090, 1130, 1020, 1240, 1230, 1310, 1250, 1430]
    }
  };

  const option = {
    animation: false,
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      borderColor: '#e5e7eb',
      textStyle: {
        color: '#1f2937'
      }
    },
    grid: {
      top: 10,
      right: 30,
      bottom: 30,
      left: 40
    },
    xAxis: {
      type: 'category',
      data: data[timePeriod].dates,
      axisLine: {
        lineStyle: {
          color: '#e5e7eb'
        }
      },
      axisLabel: {
        color: '#1f2937'
      }
    },
    yAxis: {
      type: 'value',
      axisLine: {
        show: false
      },
      axisLabel: {
        color: '#1f2937'
      },
      splitLine: {
        lineStyle: {
          color: '#e5e7eb'
        }
      }
    },
    series: [
      {
        name: 'Engagement',
        type: 'line',
        smooth: true,
        data: data[timePeriod].values,
        itemStyle: {
          color: 'rgba(87, 181, 231, 1)'
        },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: 'rgba(99, 102, 241, 0.2)'
              },
              {
                offset: 1,
                color: 'rgba(99, 102, 241, 0.01)'
              }
            ]
          }
        },
        showSymbol: false
      }
    ]
  };

  return (
    <Card className="col-span-2">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-medium text-gray-700">Engagement Overview</CardTitle>
        <div className="flex items-center space-x-2">
          <Button
            variant={timePeriod === 'week' ? 'default' : 'outline'}
            size="sm"
            className="text-xs h-8 px-3 rounded-full"
            onClick={() => setTimePeriod('week')}
          >
            Week
          </Button>
          <Button
            variant={timePeriod === 'month' ? 'default' : 'outline'}
            size="sm"
            className="text-xs h-8 px-3 rounded-full"
            onClick={() => setTimePeriod('month')}
          >
            Month
          </Button>
          <Button
            variant={timePeriod === 'year' ? 'default' : 'outline'}
            size="sm"
            className="text-xs h-8 px-3 rounded-full"
            onClick={() => setTimePeriod('year')}
          >
            Year
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <ReactEcharts
          option={option}
          style={{ height: '320px', width: '100%' }}
          opts={{ renderer: 'svg' }}
        />
      </CardContent>
    </Card>
  );
}
