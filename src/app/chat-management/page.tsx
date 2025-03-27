'use client';

import { useState } from 'react';
import {
  MessageSquare,
  Search,
  Settings,
  Send,
  MoreHorizontal,
  Sparkles,
  User
} from 'lucide-react';
import AppLayout from '@/components/layout/AppLayout';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

interface ChatMessage {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

interface ChatConversation {
  id: string;
  user: {
    id: string;
    name: string;
    avatar?: string;
    isOnline?: boolean;
  };
  lastMessage: {
    content: string;
    timestamp: Date;
    isRead: boolean;
  };
  messages: ChatMessage[];
}

const conversations: ChatConversation[] = [
  {
    id: '1',
    user: {
      id: 'user1',
      name: 'John Smith',
      avatar: 'https://i.pravatar.cc/150?img=1',
      isOnline: true,
    },
    lastMessage: {
      content: "I'll check out your latest post, thanks!",
      timestamp: new Date('2023-05-19T14:30:00'),
      isRead: false,
    },
    messages: [
      {
        id: 'msg1',
        content: "Hi there! I saw your latest post about mindfulness. Could you recommend some resources?",
        sender: 'user',
        timestamp: new Date('2023-05-19T14:25:00'),
      },
      {
        id: 'msg2',
        content: "Of course! We have a new blog post about mindfulness practices. You can find it on our website under 'Resources'. Let me know if you need anything else!",
        sender: 'ai',
        timestamp: new Date('2023-05-19T14:28:00'),
      },
      {
        id: 'msg3',
        content: "I'll check out your latest post, thanks!",
        sender: 'user',
        timestamp: new Date('2023-05-19T14:30:00'),
      },
    ],
  },
  {
    id: '2',
    user: {
      id: 'user2',
      name: 'Sarah Johnson',
      avatar: 'https://i.pravatar.cc/150?img=5',
      isOnline: false,
    },
    lastMessage: {
      content: "That's perfect, thank you!",
      timestamp: new Date('2023-05-19T10:15:00'),
      isRead: true,
    },
    messages: [
      {
        id: 'msg4',
        content: "Hello! I'm interested in your coaching services. Do you offer group sessions?",
        sender: 'user',
        timestamp: new Date('2023-05-19T10:10:00'),
      },
      {
        id: 'msg5',
        content: "Hi Sarah! Yes, we offer both individual and group coaching sessions. Our group sessions are held twice a week. Would you like more information?",
        sender: 'ai',
        timestamp: new Date('2023-05-19T10:12:00'),
      },
      {
        id: 'msg6',
        content: "That's perfect, thank you!",
        sender: 'user',
        timestamp: new Date('2023-05-19T10:15:00'),
      },
    ],
  },
  {
    id: '3',
    user: {
      id: 'user3',
      name: 'Michael Chen',
      avatar: 'https://i.pravatar.cc/150?img=3',
      isOnline: true,
    },
    lastMessage: {
      content: "Our latest newsletter will be sent tomorrow morning.",
      timestamp: new Date('2023-05-18T16:45:00'),
      isRead: true,
    },
    messages: [
      {
        id: 'msg7',
        content: "When is the next newsletter coming out?",
        sender: 'user',
        timestamp: new Date('2023-05-18T16:40:00'),
      },
      {
        id: 'msg8',
        content: "Our latest newsletter will be sent tomorrow morning.",
        sender: 'ai',
        timestamp: new Date('2023-05-18T16:45:00'),
      },
    ],
  },
];

export default function ChatManagement() {
  const [activeConversationTab, setActiveConversationTab] = useState('all');
  const [selectedConversation, setSelectedConversation] = useState<ChatConversation | null>(conversations[0]);
  const [newMessage, setNewMessage] = useState('');

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const formatDate = (date: Date) => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (date.toDateString() === yesterday.toDateString()) {
      return 'Yesterday';
    } else {
      return date.toLocaleDateString();
    }
  };

  const handleSendMessage = () => {
    if (!newMessage.trim() || !selectedConversation) return;

    // In a real app, you would send the message to the API
    // For now, we'll just update the UI
    setNewMessage('');
  };

  return (
    <AppLayout title="Chat Management">
      <div className="grid grid-cols-3 gap-6 h-[calc(100vh-12rem)]">
        <Card className="col-span-1 overflow-hidden">
          <CardHeader className="px-4 py-3">
            <div className="flex justify-between items-center">
              <CardTitle className="text-lg">Conversations</CardTitle>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
            <div className="relative mt-2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search conversations..."
                className="pl-10 py-2 pr-4 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </CardHeader>

          <Tabs value={activeConversationTab} onValueChange={setActiveConversationTab} className="px-4 pb-2">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="unread">Unread</TabsTrigger>
              <TabsTrigger value="flagged">Flagged</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-2 p-0">
              <div className="divide-y">
                {conversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    className={`p-4 hover:bg-gray-50 cursor-pointer transition-colors ${
                      selectedConversation?.id === conversation.id ? 'bg-gray-50' : ''
                    }`}
                    onClick={() => setSelectedConversation(conversation)}
                  >
                    <div className="flex items-start">
                      <div className="relative">
                        <Avatar className="h-10 w-10 mr-3">
                          <AvatarImage src={conversation.user.avatar} alt={conversation.user.name} />
                          <AvatarFallback>{conversation.user.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        {conversation.user.isOnline && (
                          <span className="absolute bottom-0 right-2 h-3 w-3 rounded-full bg-green-500 border-2 border-white"></span>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center">
                          <h3 className="text-sm font-medium truncate">{conversation.user.name}</h3>
                          <p className="text-xs text-gray-500">{formatTime(conversation.lastMessage.timestamp)}</p>
                        </div>
                        <p className={`text-xs ${
                          conversation.lastMessage.isRead ? 'text-gray-500' : 'font-semibold text-gray-900'
                        } truncate mt-1`}>
                          {conversation.lastMessage.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="unread" className="mt-2 p-0">
              <div className="p-4 text-center text-gray-500">
                No unread messages
              </div>
            </TabsContent>

            <TabsContent value="flagged" className="mt-2 p-0">
              <div className="p-4 text-center text-gray-500">
                No flagged conversations
              </div>
            </TabsContent>
          </Tabs>
        </Card>

        <Card className="col-span-2 overflow-hidden flex flex-col">
          {selectedConversation ? (
            <>
              <CardHeader className="px-6 py-4 border-b">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src={selectedConversation.user.avatar} alt={selectedConversation.user.name} />
                      <AvatarFallback>{selectedConversation.user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-md font-medium">{selectedConversation.user.name}</h3>
                      <p className="text-xs text-gray-500">
                        {selectedConversation.user.isOnline ? 'Online' : 'Offline'}
                      </p>
                    </div>
                  </div>
                  <div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-56">
                        <DropdownMenuLabel>Conversation</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Mark as unread</DropdownMenuItem>
                        <DropdownMenuItem>Flag conversation</DropdownMenuItem>
                        <DropdownMenuItem>Archive conversation</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">
                          Delete conversation
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="flex-1 overflow-y-auto p-6 space-y-4">
                {selectedConversation.messages.map((message, index, array) => {
                  const showDate = index === 0 ||
                    formatDate(message.timestamp) !== formatDate(array[index - 1].timestamp);

                  return (
                    <div key={message.id}>
                      {showDate && (
                        <div className="flex justify-center my-4">
                          <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                            {formatDate(message.timestamp)}
                          </span>
                        </div>
                      )}
                      <div className={`flex ${message.sender === 'user' ? 'justify-start' : 'justify-end'}`}>
                        <div className={`max-w-[80%] ${
                          message.sender === 'user'
                            ? 'bg-gray-100 text-gray-800'
                            : 'bg-primary text-white'
                        } rounded-2xl px-4 py-2`}>
                          <p className="text-sm">{message.content}</p>
                          <p className="text-xs text-right mt-1 opacity-70">
                            {formatTime(message.timestamp)}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </CardContent>

              <div className="p-4 border-t border-gray-200">
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="icon" className="h-10 w-10 rounded-full">
                    <Sparkles className="h-5 w-5" />
                  </Button>
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      placeholder="Type a message..."
                      className="w-full py-2 px-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent pr-10"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          handleSendMessage();
                        }
                      }}
                    />
                  </div>
                  <Button
                    size="icon"
                    className="h-10 w-10 rounded-full"
                    onClick={handleSendMessage}
                    disabled={!newMessage.trim()}
                  >
                    <Send className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-gray-500">
              <MessageSquare className="h-12 w-12 mb-4" />
              <p>Select a conversation to start chatting</p>
            </div>
          )}
        </Card>
      </div>
    </AppLayout>
  );
}
