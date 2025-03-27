'use client';

import { useState } from 'react';
import { Save } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface IntegrationsTabProps {
  onSave: () => void;
}

export default function IntegrationsTab({ onSave }: IntegrationsTabProps) {
  const [integrations, setIntegrations] = useState({
    wordpress: true,
    medium: false,
    twitter: true,
    instagram: true,
    linkedin: true,
    facebook: true,
    apiKey: 'sk-abc123def456ghi789jkl',
    webhookUrl: 'https://example.com/webhook'
  });

  const handleIntegrationsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked, type, value } = e.target;
    setIntegrations(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="max-w-3xl">
      <h2 className="text-xl font-semibold mb-6">Integrations</h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-4">Connected Platforms</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="wordpress"
                name="wordpress"
                checked={integrations.wordpress}
                onChange={handleIntegrationsChange}
                className="mr-3 h-4 w-4"
              />
              <label htmlFor="wordpress" className="text-sm">
                WordPress
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="medium"
                name="medium"
                checked={integrations.medium}
                onChange={handleIntegrationsChange}
                className="mr-3 h-4 w-4"
              />
              <label htmlFor="medium" className="text-sm">
                Medium
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="twitter"
                name="twitter"
                checked={integrations.twitter}
                onChange={handleIntegrationsChange}
                className="mr-3 h-4 w-4"
              />
              <label htmlFor="twitter" className="text-sm">
                Twitter
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="instagram"
                name="instagram"
                checked={integrations.instagram}
                onChange={handleIntegrationsChange}
                className="mr-3 h-4 w-4"
              />
              <label htmlFor="instagram" className="text-sm">
                Instagram
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="linkedin"
                name="linkedin"
                checked={integrations.linkedin}
                onChange={handleIntegrationsChange}
                className="mr-3 h-4 w-4"
              />
              <label htmlFor="linkedin" className="text-sm">
                LinkedIn
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="facebook"
                name="facebook"
                checked={integrations.facebook}
                onChange={handleIntegrationsChange}
                className="mr-3 h-4 w-4"
              />
              <label htmlFor="facebook" className="text-sm">
                Facebook
              </label>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">API Configuration</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">API Key</label>
              <input
                type="text"
                name="apiKey"
                value={integrations.apiKey}
                onChange={handleIntegrationsChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <p className="text-xs text-gray-500">Your API key for external services</p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Webhook URL</label>
              <input
                type="text"
                name="webhookUrl"
                value={integrations.webhookUrl}
                onChange={handleIntegrationsChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <p className="text-xs text-gray-500">URL to receive webhook notifications</p>
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
