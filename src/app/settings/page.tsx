'use client';

import { useState } from 'react';
import {
  Bell,
  Globe,
  Key,
  Lock,
  UserCircle,
  Wallet,
  Share2,
  Database
} from 'lucide-react';
import AppLayout from '@/components/layout/AppLayout';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';

// Import tab components
import ProfileTab from './components/ProfileTab';
import AccountTab from './components/AccountTab';
import NotificationsTab from './components/NotificationsTab';
import IntegrationsTab from './components/IntegrationsTab';
import BillingTab from './components/BillingTab';
import AISettingsTab from './components/AISettingsTab';

const tabItems = [
  { id: 'profile', label: 'Profile', icon: UserCircle },
  { id: 'account', label: 'Account', icon: Lock },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'integrations', label: 'Integrations', icon: Share2 },
  { id: 'billing', label: 'Billing', icon: Wallet },
  { id: 'ai', label: 'AI Settings', icon: Database }
];

export default function Settings() {
  const [activeTab, setActiveTab] = useState('profile');

  const handleSave = () => {
    toast.success('Settings saved successfully!');
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return <ProfileTab onSave={handleSave} />;
      case 'account':
        return <AccountTab onSave={handleSave} />;
      case 'notifications':
        return <NotificationsTab onSave={handleSave} />;
      case 'integrations':
        return <IntegrationsTab onSave={handleSave} />;
      case 'billing':
        return <BillingTab onSave={handleSave} />;
      case 'ai':
        return <AISettingsTab onSave={handleSave} />;
      default:
        return (
          <div className="p-4 text-center text-gray-500">
            Tab content not implemented yet
          </div>
        );
    }
  };

  return (
    <AppLayout title="Settings">
      <Card>
        <CardContent className="p-0">
          <div className="grid grid-cols-5 divide-x h-[calc(100vh-12rem)]">
            <div className="col-span-1 p-6">
              <div className="flex flex-col space-y-2">
                {tabItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                        activeTab === item.id
                          ? 'bg-primary-50 text-primary'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                      onClick={() => setActiveTab(item.id)}
                    >
                      <Icon className="mr-2 h-5 w-5" />
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="col-span-4 p-6 overflow-y-auto">
              {renderTabContent()}
            </div>
          </div>
        </CardContent>
      </Card>
    </AppLayout>
  );
}
