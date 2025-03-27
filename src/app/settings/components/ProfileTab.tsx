'use client';

import { useState } from 'react';
import { Save } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface ProfileTabProps {
  onSave: () => void;
}

export default function ProfileTab({ onSave }: ProfileTabProps) {
  const [profile, setProfile] = useState({
    firstName: 'Emily',
    lastName: 'Johnson',
    email: 'emily.johnson@example.com',
    jobTitle: 'Content Manager',
    bio: 'Content manager with 5+ years of experience in digital marketing and social media strategy.'
  });

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="max-w-3xl">
      <h2 className="text-xl font-semibold mb-6">Profile Settings</h2>

      <div className="flex items-center gap-6 mb-8">
        <Avatar className="h-24 w-24">
          <AvatarImage src="https://public.readdy.ai/ai/img_res/2864fd012a190276ec328dae4b14c009.jpg" alt="Profile" />
          <AvatarFallback>EJ</AvatarFallback>
        </Avatar>
        <div>
          <Button variant="outline" size="sm" className="mb-2">
            Change Avatar
          </Button>
          <p className="text-sm text-gray-500">
            Recommended size: 400x400px. Max size: 2MB.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">First Name</label>
            <input
              type="text"
              name="firstName"
              value={profile.firstName}
              onChange={handleProfileChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={profile.lastName}
              onChange={handleProfileChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleProfileChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Job Title</label>
          <input
            type="text"
            name="jobTitle"
            value={profile.jobTitle}
            onChange={handleProfileChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Bio</label>
          <textarea
            rows={4}
            name="bio"
            value={profile.bio}
            onChange={handleProfileChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
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
