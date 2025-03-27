'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  RiFacebookFill,
  RiInstagramFill,
  RiTwitterXFill,
  RiWechatFill,
  RiWeiboFill,
  RiTiktokFill
} from '@remixicon/react';

interface Platform {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  connected: boolean;
}

const platforms: Platform[] = [
  {
    id: 'facebook',
    name: 'Facebook',
    icon: <RiFacebookFill size={24} />,
    color: '#1877F2',
    connected: true
  },
  {
    id: 'instagram',
    name: 'Instagram',
    icon: <RiInstagramFill size={24} />,
    color: '#E4405F',
    connected: true
  },
  {
    id: 'twitter',
    name: 'Twitter',
    icon: <RiTwitterXFill size={24} />,
    color: '#000000',
    connected: true
  },
  {
    id: 'wechat',
    name: 'WeChat',
    icon: <RiWechatFill size={24} />,
    color: '#07C160',
    connected: true
  },
  {
    id: 'weibo',
    name: 'Weibo',
    icon: <RiWeiboFill size={24} />,
    color: '#E6162D',
    connected: true
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    icon: <RiTiktokFill size={24} />,
    color: '#000000',
    connected: true
  }
];

export function ConnectedPlatforms() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-medium text-gray-700">Connected Platforms</CardTitle>
        <Button variant="link" size="sm">
          Manage
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {platforms.map((platform) => (
            <div key={platform.id} className="platform-card p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center">
                <div style={{ color: platform.color }}>
                  {platform.icon}
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-gray-900">{platform.name}</h4>
                  <p className="text-xs text-gray-500">
                    {platform.connected ? 'Connected' : 'Disconnected'}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
