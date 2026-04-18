"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { getSportsResponse } from "./sports-knowledge";

type Message = {
  role: "user" | "bot";
  text: string;
};

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "Hi! I'm SportLight AI 🌿 Your sports and profile assistant. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getAppResponse = (input: string): string | null => {
    const query = input.toLowerCase();

    if (query.includes('profile') || query.includes('edit profile')) {
      return "To edit your profile, click on your avatar in the top right corner and select 'Edit Profile', or navigate to the Profile section from the sidebar!";
    }
    
    if (query.includes('dashboard')) {
      return "The Dashboard shows all players and clubs on SportLight. You can browse profiles, view achievements, and connect with others!";
    }
    
    if (query.includes('settings')) {
      return "Access Settings from the dropdown menu (click your avatar). You can manage notifications, privacy, change password, enable dark mode, and more!";
    }
    
    if (query.includes('delete account') || query.includes('remove account')) {
      return "To delete your account, go to Settings → Account section → Delete Account button. ⚠️ This action is permanent!";
    }
    
    if (query.includes('logout') || query.includes('sign out')) {
      return "To logout, click your avatar in the top right corner and select 'Logout'.";
    }

    return null;
  };

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userText = input.trim();
    setInput("");
    setLoading(true);

    setMessages((prev) => [...prev, { role: "user", text: userText }]);

    try {
      const appResponse = getAppResponse(userText);
      if (appResponse) {
        setTimeout(() => {
          setMessages((prev) => [...prev, { role: "bot", text: appResponse }]);
          setLoading(false);
        }, 500);
        return;
      }

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userText }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessages((prev) => [...prev, { role: "bot", text: data.response }]);
        setLoading(false);
        return;
      }
    } catch (error) {
      console.log('Using fallback');
    }

    setTimeout(() => {
      const sportsAnswer = getSportsResponse(userText);
      const fallbackResponse = sportsAnswer || 
        "I can help with sports questions! Ask about cricket, football, basketball, tennis, training tips, or any athlete!";
      
      setMessages((prev) => [...prev, { role: "bot", text: fallbackResponse }]);
      setLoading(false);
    }, 500);
  };

  const quickActions = [
    { label: "Edit Profile", action: () => router.push('/profile') },
    { label: "View Dashboard", action: () => router.push('/dashboard') },
    { label: "Settings", action: () => router.push('/settings') },
  ];

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center"
        aria-label="Open chat"
      >
        <div className="relative w-10 h-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full"></div>
          <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1 h-1.5 bg-white"></div>
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-8 h-6 bg-white rounded-lg">
            <div className="absolute top-1.5 left-1.5 w-1.5 h-1.5 bg-green-500 rounded-full"></div>
            <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-green-500 rounded-full"></div>
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-1 border-b-2 border-green-500 rounded-full"></div>
          </div>
          <div className="absolute top-4 left-0 w-1.5 h-2 bg-white rounded-l-full"></div>
          <div className="absolute top-4 right-0 w-1.5 h-2 bg-white rounded-r-full"></div>
        </div>
      </button>

      {open && (
        <div className="fixed inset-0 md:inset-auto md:bottom-20 md:right-5 md:w-[420px] md:h-[600px] bg-white dark:bg-gray-900 z-50 shadow-2xl rounded-none md:rounded-xl flex flex-col border border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center p-4 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-t-xl">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-300 rounded-full"></div>
              <span className="font-semibold">SportLight AI</span>
            </div>
            <button 
              onClick={() => setOpen(false)}
              className="hover:bg-green-700 rounded-full p-1 transition-colors duration-200"
              aria-label="Close chat"
            >
              ✖
            </button>
          </div>

          <div className="p-3 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
            <div className="flex gap-2 overflow-x-auto">
              {quickActions.map((action, i) => (
                <button
                  key={i}
                  onClick={() => {
                    action.action();
                    setOpen(false);
                  }}
                  className="px-3 py-1.5 bg-white dark:bg-gray-700 text-xs rounded-full border border-gray-300 dark:border-gray-600 hover:bg-green-50 dark:hover:bg-green-900 hover:border-green-500 transition-all duration-200 whitespace-nowrap"
                >
                  {action.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 p-4 overflow-y-auto space-y-3 text-sm bg-gray-50 dark:bg-gray-900">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`p-3 rounded-2xl max-w-[85%] whitespace-pre-line ${
                    m.role === "user"
                      ? "bg-green-600 text-white rounded-br-sm"
                      : "bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700 rounded-bl-sm shadow-sm"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-3 rounded-2xl rounded-bl-sm shadow-sm">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
            <div className="flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Ask about sports or the app..."
                className="flex-1 border border-gray-300 dark:border-gray-600 rounded-full px-4 py-2.5 text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition-shadow duration-200"
              />
              <button
                onClick={sendMessage}
                disabled={loading || !input.trim()}
                className="bg-green-600 text-white px-5 rounded-full hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 font-medium"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
