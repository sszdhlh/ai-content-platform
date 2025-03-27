'use client';

import { useState } from 'react';
import { Key, Save } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AccountTabProps {
  onSave: () => void;
}

export default function AccountTab({ onSave }: AccountTabProps) {
  const [account, setAccount] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleAccountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAccount(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="max-w-3xl">
      <h2 className="text-xl font-semibold mb-6">Account Settings</h2>

      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-medium mb-4">Password</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Current Password</label>
              <input
                type="password"
                name="currentPassword"
                value={account.currentPassword}
                onChange={handleAccountChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">New Password</label>
              <input
                type="password"
                name="newPassword"
                value={account.newPassword}
                onChange={handleAccountChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Confirm New Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={account.confirmPassword}
                onChange={handleAccountChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <Button variant="outline">
              <Key className="mr-2 h-4 w-4" />
              Change Password
            </Button>
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
