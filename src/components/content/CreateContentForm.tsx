'use client';

import { useState } from 'react';
import { Check, Loader2, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { toast } from 'sonner';

interface CreateContentFormProps {
  onClose: () => void;
}

const MAX_TOKEN_LENGTH = 400;

export function CreateContentForm({ onClose }: CreateContentFormProps) {
  const [prompt, setPrompt] = useState('');
  const [platform, setPlatform] = useState('');
  const [contentType, setContentType] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState('');

  const promptLength = prompt.length;
  const percentFilled = Math.min((promptLength / MAX_TOKEN_LENGTH) * 100, 100);
  const isPromptValid = promptLength > 0 && promptLength <= MAX_TOKEN_LENGTH;
  const isFormValid = isPromptValid && platform && contentType;

  const handleGenerate = () => {
    if (!isFormValid) return;

    setIsGenerating(true);
    // Simulate AI content generation
    setTimeout(() => {
      const content = generateSampleContent(prompt, platform, contentType);
      setGeneratedContent(content);
      setIsGenerating(false);
    }, 2000);
  };

  const handleSave = () => {
    toast.success('Content saved and ready for publishing!');
    onClose();
  };

  // This is just a placeholder function to simulate AI content generation
  const generateSampleContent = (prompt: string, platform: string, contentType: string) => {
    const platformResponses: Record<string, string> = {
      facebook: 'Perfect for your Facebook audience! 💯',
      instagram: 'This will look great on your Instagram feed! 📸',
      twitter: 'Concise and engaging for Twitter! 🐦',
      tiktok: 'Ready to go viral on TikTok! 🔥'
    };

    const typeIntros: Record<string, string> = {
      post: 'Here\'s your engaging post:\n\n',
      caption: 'Your eye-catching caption:\n\n',
      story: 'Your story content:\n\n'
    };

    return `${typeIntros[contentType]}${prompt}\n\n${platformResponses[platform] || 'Content ready!'}\n\nHashtags: #AIGenerated #ContentAutomation #DigitalMarketing`;
  };

  return (
    <div className="space-y-6 py-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">
          Select Platform
        </label>
        <Select value={platform} onValueChange={setPlatform}>
          <SelectTrigger>
            <SelectValue placeholder="Choose a platform" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="facebook">Facebook</SelectItem>
            <SelectItem value="instagram">Instagram</SelectItem>
            <SelectItem value="twitter">Twitter</SelectItem>
            <SelectItem value="tiktok">TikTok</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">
          Content Type
        </label>
        <Select value={contentType} onValueChange={setContentType}>
          <SelectTrigger>
            <SelectValue placeholder="Choose content type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="post">Post</SelectItem>
            <SelectItem value="caption">Caption</SelectItem>
            <SelectItem value="story">Story</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between">
          <label className="text-sm font-medium">
            Describe what content you want
          </label>
          <span className={`text-xs ${promptLength > MAX_TOKEN_LENGTH ? 'text-red-500' : 'text-gray-500'}`}>
            {promptLength}/{MAX_TOKEN_LENGTH}
          </span>
        </div>
        <Textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="e.g., Create a post about mindfulness and its benefits for mental health"
          className="min-h-[120px]"
        />
        <div className="w-full bg-gray-200 rounded-full h-1.5">
          <div
            className={`h-1.5 rounded-full ${promptLength > MAX_TOKEN_LENGTH ? 'bg-red-500' : 'bg-primary'}`}
            style={{ width: `${percentFilled}%` }}
          ></div>
        </div>
      </div>

      {generatedContent && (
        <div className="space-y-2 mt-4">
          <label className="text-sm font-medium">
            Generated Content
          </label>
          <div className="border border-gray-200 rounded-md p-4 bg-gray-50 whitespace-pre-line">
            {generatedContent}
          </div>
        </div>
      )}

      <div className="flex justify-end space-x-2">
        <Button type="button" variant="outline" onClick={onClose}>
          Cancel
        </Button>
        {!generatedContent ? (
          <Button
            type="button"
            onClick={handleGenerate}
            disabled={!isFormValid || isGenerating}
          >
            {isGenerating ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                Generate Content
              </>
            )}
          </Button>
        ) : (
          <Button type="button" onClick={handleSave}>
            <Check className="mr-2 h-4 w-4" />
            Save Content
          </Button>
        )}
      </div>
    </div>
  );
}
