'use client';

import { useState } from 'react';
import { Save } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NotificationsTabProps {
  onSave: () => void;
}

export default function NotificationsTab({ onSave }: NotificationsTabProps) {
  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    contentUpdates: true,
    marketingEmails: false,
    publishingAlerts: true,
    weeklyDigest: true,
    desktopNotifications: true,
    pushNotifications: false
  });

  const handleNotificationsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked, type, value } = e.target;
    setNotifications(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="max-w-3xl">
      <h2 className="text-xl font-semibold mb-6">Notification Settings</h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-4">Email Notifications</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="emailNotifications"
                name="emailNotifications"
                checked={notifications.emailNotifications}
                onChange={handleNotificationsChange}
                className="mr-3 h-4 w-4"
              />
              <label htmlFor="emailNotifications" className="text-sm">
                Email Notifications (All)
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="contentUpdates"
                name="contentUpdates"
                checked={notifications.contentUpdates}
                onChange={handleNotificationsChange}
                className="mr-3 h-4 w-4"
              />
              <label htmlFor="contentUpdates" className="text-sm">
                Content Creation & Updates
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="publishingAlerts"
                name="publishingAlerts"
                checked={notifications.publishingAlerts}
                onChange={handleNotificationsChange}
                className="mr-3 h-4 w-4"
              />
              <label htmlFor="publishingAlerts" className="text-sm">
                Publishing Alerts
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="weeklyDigest"
                name="weeklyDigest"
                checked={notifications.weeklyDigest}
                onChange={handleNotificationsChange}
                className="mr-3 h-4 w-4"
              />
              <label htmlFor="weeklyDigest" className="text-sm">
                Weekly Performance Digest
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="marketingEmails"
                name="marketingEmails"
                checked={notifications.marketingEmails}
                onChange={handleNotificationsChange}
                className="mr-3 h-4 w-4"
              />
              <label htmlFor="marketingEmails" className="text-sm">
                Marketing & Product Updates
              </label>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Other Notifications</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="desktopNotifications"
                name="desktopNotifications"
                checked={notifications.desktopNotifications}
                onChange={handleNotificationsChange}
                className="mr-3 h-4 w-4"
              />
              <label htmlFor="desktopNotifications" className="text-sm">
                Desktop Notifications
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="pushNotifications"
                name="pushNotifications"
                checked={notifications.pushNotifications}
                onChange={handleNotificationsChange}
                className="mr-3 h-4 w-4"
              />
              <label htmlFor="pushNotifications" className="text-sm">
                Mobile Push Notifications
              </label>
            </div>
          </div>
        </div>

        <div className="pt-4 flex justify-end">
          <Button onClick={onSave}>
            <Save className="mr-2 h-4 w-4" />
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
}
