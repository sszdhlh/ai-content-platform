'use client';

import { useState } from 'react';
import { Save } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AISettingsTabProps {
  onSave: () => void;
}

export default function AISettingsTab({ onSave }: AISettingsTabProps) {
  const [aiSettings, setAiSettings] = useState({
    defaultModel: 'gpt-4',
    temperature: '0.7',
    maxTokens: '2048',
    language: 'English',
    contentTone: 'Professional',
    contentLength: 'Medium',
    saveHistory: true
  });

  const handleAISettingsChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, type, checked, value } = e.target as HTMLInputElement;
    setAiSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="max-w-3xl">
      <h2 className="text-xl font-semibold mb-6">AI Configuration</h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-4">Model Settings</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Default AI Model</label>
              <select
                name="defaultModel"
                value={aiSettings.defaultModel}
                onChange={handleAISettingsChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="gpt-3.5">GPT-3.5 (Faster)</option>
                <option value="gpt-4">GPT-4 (More Capable)</option>
                <option value="claude-3">Claude 3 (Balanced)</option>
                <option value="llama-3">Llama 3 (Open Source)</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Temperature</label>
              <input
                type="range"
                name="temperature"
                min="0"
                max="1"
                step="0.1"
                value={aiSettings.temperature}
                onChange={handleAISettingsChange}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>More Focused (0.0)</span>
                <span>Current: {aiSettings.temperature}</span>
                <span>More Creative (1.0)</span>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Max Tokens</label>
              <input
                type="text"
                name="maxTokens"
                value={aiSettings.maxTokens}
                onChange={handleAISettingsChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <p className="text-xs text-gray-500">Maximum length of generated content</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-4">Content Settings</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Preferred Language</label>
              <select
                name="language"
                value={aiSettings.language}
                onChange={handleAISettingsChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
                <option>German</option>
                <option>Chinese</option>
                <option>Japanese</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Content Tone</label>
              <select
                name="contentTone"
                value={aiSettings.contentTone}
                onChange={handleAISettingsChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option>Professional</option>
                <option>Casual</option>
                <option>Friendly</option>
                <option>Formal</option>
                <option>Technical</option>
                <option>Conversational</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Default Content Length</label>
              <select
                name="contentLength"
                value={aiSettings.contentLength}
                onChange={handleAISettingsChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option>Short</option>
                <option>Medium</option>
                <option>Long</option>
                <option>Extra Long</option>
              </select>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="saveHistory"
                name="saveHistory"
                checked={aiSettings.saveHistory}
                onChange={handleAISettingsChange}
                className="mr-3 h-4 w-4"
              />
              <label htmlFor="saveHistory" className="text-sm">
                Save AI Conversation History
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
