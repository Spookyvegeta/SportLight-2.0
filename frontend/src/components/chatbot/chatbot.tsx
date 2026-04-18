"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

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

  // Enhanced knowledge base
  const getSmartResponse = (userInput: string): string => {
    const input = userInput.toLowerCase().trim();

    // App-specific queries
    if (input.includes('profile') || input.includes('edit profile')) {
      return "To edit your profile, click on your avatar in the top right corner and select 'Edit Profile', or navigate to the Profile section from the sidebar. You can update your personal info, skills, achievements, and performance metrics there!";
    }
    
    if (input.includes('dashboard')) {
      return "The Dashboard shows all players and clubs on SportLight. You can browse profiles, view achievements, and connect with others. Use the filters to find specific sports or locations!";
    }
    
    if (input.includes('settings')) {
      return "Access Settings from the dropdown menu (click your avatar). You can manage notifications, privacy, change password, enable dark mode, and more!";
    }
    
    if (input.includes('delete account') || input.includes('remove account')) {
      return "To delete your account, go to Settings → Account section → Delete Account button. ⚠️ This action is permanent and cannot be undone!";
    }
    
    if (input.includes('logout') || input.includes('sign out')) {
      return "To logout, click your avatar in the top right corner and select 'Logout'. You can also logout from the Settings page.";
    }
    
    if (input.includes('club') && (input.includes('join') || input.includes('contact'))) {
      return "To contact a club, view their profile from the Dashboard and click the 'Contact Club' button. Make sure your player profile is complete to increase your chances!";
    }
    
    if (input.includes('recruiter') || input.includes('scout')) {
      return "Recruiters can browse player profiles, view performance metrics, and contact players directly. Make sure to complete your club profile to appear more professional!";
    }

    if (input.includes('notification')) {
      return "Manage your notifications in Settings. You can enable/disable email notifications, match alerts, and message notifications based on your preferences.";
    }

    if (input.includes('dark mode') || input.includes('theme')) {
      return "Toggle dark mode in Settings → Appearance. Your preference will be saved and applied across all pages!";
    }

    if (input.includes('password') || input.includes('change password')) {
      return "To change your password, go to Settings → Privacy & Security → Change Password. Enter your new password twice and click Update.";
    }

    // Cricket queries
    if (input.includes('virat') || input.includes('kohli')) {
      return "Virat Kohli is one of the greatest cricketers of all time! Former Indian captain, known for his aggressive batting style and incredible consistency. He holds numerous records in all formats of cricket.";
    }
    
    if (input.includes('sachin') || input.includes('tendulkar')) {
      return "Sachin Tendulkar, the 'God of Cricket'! He's the highest run-scorer in international cricket with 100 international centuries. A true legend who inspired millions!";
    }
    
    if (input.includes('dhoni') || input.includes('ms dhoni')) {
      return "MS Dhoni, 'Captain Cool'! One of the greatest cricket captains ever. Led India to victory in the 2011 World Cup, 2007 T20 World Cup, and multiple IPL titles with CSK.";
    }
    
    if (input.includes('ipl')) {
      return "The Indian Premier League (IPL) is the world's most popular T20 cricket league! It features top players from around the globe competing for 8 franchises. The tournament runs annually from March to May.";
    }
    
    if (input.includes('cricket') && (input.includes('rules') || input.includes('how to play'))) {
      return "Cricket basics: Two teams of 11 players each. One team bats while the other bowls and fields. The batting team tries to score runs, while the bowling team tries to get them out. Formats include Test (5 days), ODI (50 overs), and T20 (20 overs).";
    }

    if (input.includes('world cup') && input.includes('cricket')) {
      return "The ICC Cricket World Cup is held every 4 years. Recent winners: 2023 - Australia, 2019 - England, 2015 - Australia, 2011 - India. The T20 World Cup is held every 2 years!";
    }

    // Football queries
    if (input.includes('messi') || input.includes('lionel')) {
      return "Lionel Messi is arguably the greatest footballer of all time! 8-time Ballon d'Or winner, led Argentina to World Cup glory in 2022, and holds countless records. Currently plays for Inter Miami.";
    }
    
    if (input.includes('ronaldo') || input.includes('cristiano')) {
      return "Cristiano Ronaldo, CR7! One of the greatest footballers ever with 5 Ballon d'Or awards. Known for his incredible athleticism, goal-scoring ability, and longevity. All-time top scorer in football history!";
    }
    
    if (input.includes('fifa') || (input.includes('world cup') && input.includes('football'))) {
      return "The FIFA World Cup is the biggest sporting event! Held every 4 years. 2022 winner: Argentina (Messi's dream!), 2018: France, 2014: Germany. Next World Cup: 2026 in USA, Canada, and Mexico!";
    }
    
    if (input.includes('premier league') || input.includes('epl')) {
      return "The English Premier League is the most-watched football league globally! Features top clubs like Manchester City, Liverpool, Arsenal, Chelsea, and Manchester United. Season runs from August to May.";
    }

    if (input.includes('football') && (input.includes('rules') || input.includes('how to play'))) {
      return "Football basics: Two teams of 11 players each try to score goals by getting the ball into the opponent's net. Players can't use their hands (except goalkeepers). Match duration: 90 minutes (2 halves of 45 minutes).";
    }

    // Basketball queries
    if (input.includes('jordan') || input.includes('michael jordan')) {
      return "Michael Jordan, the GOAT! 🐐 6-time NBA champion with the Chicago Bulls, 5-time MVP, and widely considered the greatest basketball player ever. His legacy transcends sports!";
    }
    
    if (input.includes('lebron') || input.includes('james')) {
      return "LeBron James, 'King James'! 4-time NBA champion, 4-time MVP, and one of the greatest all-around players ever. Known for his incredible longevity and basketball IQ. Still dominating at 39!";
    }
    
    if (input.includes('nba')) {
      return "The NBA (National Basketball Association) is the premier professional basketball league! 30 teams compete from October to June. Current champions and top teams battle for the Larry O'Brien Trophy!";
    }

    if (input.includes('basketball') && (input.includes('rules') || input.includes('how to play'))) {
      return "Basketball basics: Two teams of 5 players score by shooting the ball through a 10-foot high hoop. Game has 4 quarters of 12 minutes (NBA) or 10 minutes (FIBA). Dribble to move with the ball!";
    }

    // Tennis queries
    if (input.includes('federer') || input.includes('roger')) {
      return "Roger Federer, the Swiss maestro! 20 Grand Slam titles, known for his elegant playing style and sportsmanship. Retired in 2022 but remains one of tennis's greatest legends!";
    }
    
    if (input.includes('nadal') || input.includes('rafael')) {
      return "Rafael Nadal, the 'King of Clay'! 22 Grand Slam titles, including 14 French Open victories. Known for his incredible fighting spirit and powerful topspin forehand!";
    }
    
    if (input.includes('serena') || input.includes('williams')) {
      return "Serena Williams, the queen of tennis! 23 Grand Slam singles titles, the most in the Open Era. Dominated women's tennis for over two decades with power and determination!";
    }

    if (input.includes('tennis') && (input.includes('rules') || input.includes('how to play'))) {
      return "Tennis basics: Players use rackets to hit a ball over a net. Win points by making the opponent unable to return the ball. Scoring: 15, 30, 40, game. Win 6 games to win a set!";
    }

    // Olympics
    if (input.includes('olympics') || input.includes('olympic')) {
      return "The Olympics is the world's greatest sporting event! Summer and Winter Olympics alternate every 2 years. Features athletes from 200+ countries competing in various sports. Next Summer Olympics: 2028 in Los Angeles!";
    }
    
    if (input.includes('usain bolt') || input.includes('bolt')) {
      return "Usain Bolt, the fastest man ever! 🏃‍♂️ 8-time Olympic gold medalist, world record holder in 100m (9.58s) and 200m (19.19s). The Lightning Bolt from Jamaica!";
    }

    // Training and fitness
    if (input.includes('training') || input.includes('workout')) {
      return "Effective sports training includes:\n1. Regular practice (4-6 days/week)\n2. Strength & conditioning\n3. Proper nutrition & hydration\n4. Adequate rest & recovery\n5. Mental preparation\n6. Skill-specific drills\n7. Video analysis\n\nConsistency is key! 💪";
    }
    
    if (input.includes('diet') || input.includes('nutrition')) {
      return "Athlete nutrition tips:\n• Balanced meals with protein, carbs, and healthy fats\n• Stay hydrated (2-3 liters water daily)\n• Pre-workout: Carbs for energy\n• Post-workout: Protein for recovery\n• Avoid processed foods\n• Time your meals around training\n\nNutrition is 50% of performance!";
    }
    
    if (input.includes('injury') || input.includes('prevent')) {
      return "Injury prevention tips:\n• Always warm up before activity\n• Cool down and stretch after\n• Use proper technique\n• Don't overtrain - rest is crucial\n• Strengthen supporting muscles\n• Listen to your body\n• Use appropriate equipment\n\nStay safe and play smart!";
    }

    if (input.includes('how to') && input.includes('good')) {
      return "To become a great athlete:\n1. Set clear goals\n2. Practice with purpose\n3. Find a good coach/mentor\n4. Study the game\n5. Stay disciplined\n6. Maintain fitness\n7. Learn from failures\n8. Stay mentally strong\n9. Compete regularly\n10. Never stop improving!\n\nDedication beats talent! 🌟";
    }

    // Greetings
    if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
      return "Hello! 👋 I'm your SportLight AI assistant. I can help you with:\n• App features (profile, dashboard, settings)\n• Sports knowledge (cricket, football, basketball, tennis)\n• Training tips and advice\n• Famous athletes and records\n\nWhat would you like to know?";
    }
    
    if (input.includes('help') || input.includes('what can you do')) {
      return "I can help you with:\n\n📱 App Features:\n• Profile management\n• Dashboard navigation\n• Settings & preferences\n\n⚽ Sports Knowledge:\n• Cricket, Football, Basketball, Tennis\n• Famous athletes & records\n• Rules & formats\n\n💪 Training:\n• Workout tips\n• Nutrition advice\n• Injury prevention\n\nJust ask me anything!";
    }

    if (input.includes('thank')) {
      return "You're welcome! 😊 Feel free to ask me anything else about sports or the app. I'm here to help!";
    }

    // Default response with suggestions
    return "I'm not sure about that specific question, but I can help you with:\n\n• App features (profile, dashboard, settings)\n• Cricket (Kohli, Dhoni, IPL, World Cup)\n• Football (Messi, Ronaldo, Premier League)\n• Basketball (Jordan, LeBron, NBA)\n• Tennis (Federer, Nadal, Serena)\n• Training tips & nutrition\n\nTry asking about any of these topics!";
  };

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userText = input.trim();
    setInput("");
    setLoading(true);

    setMessages((prev) => [...prev, { role: "user", text: userText }]);

    // Simulate typing delay
    setTimeout(() => {
      const botReply = getSmartResponse(userText);
      setMessages((prev) => [...prev, { role: "bot", text: botReply }]);
      setLoading(false);
    }, 800);
  };

  // Quick action buttons
  const quickActions = [
    { label: "Edit Profile", action: () => router.push('/profile') },
    { label: "View Dashboard", action: () => router.push('/dashboard') },
    { label: "Settings", action: () => router.push('/settings') },
  ];

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center"
        aria-label="Open chat"
      >
        {/* Robot Icon */}
        <div className="relative w-10 h-10">
          {/* Robot Head */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full"></div>
          <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1 h-1.5 bg-white"></div>
          
          {/* Robot Body */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-8 h-6 bg-white rounded-lg">
            {/* Eyes */}
            <div className="absolute top-1.5 left-1.5 w-1.5 h-1.5 bg-green-500 rounded-full"></div>
            <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-green-500 rounded-full"></div>
            {/* Smile */}
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-1 border-b-2 border-green-500 rounded-full"></div>
          </div>
          
          {/* Robot Ears */}
          <div className="absolute top-4 left-0 w-1.5 h-2 bg-white rounded-l-full"></div>
          <div className="absolute top-4 right-0 w-1.5 h-2 bg-white rounded-r-full"></div>
        </div>
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed inset-0 md:inset-auto md:bottom-20 md:right-5 md:w-[420px] md:h-[600px] bg-white dark:bg-gray-900 z-50 shadow-2xl rounded-none md:rounded-xl flex flex-col border border-gray-200 dark:border-gray-700 animate-in fade-in slide-in-from-bottom-4 duration-300">

          {/* Header */}
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

          {/* Quick Actions */}
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

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 text-sm bg-gray-50 dark:bg-gray-900">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"} animate-in fade-in slide-in-from-bottom-2 duration-300`}
                style={{ animationDelay: `${i * 50}ms` }}
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
              <div className="flex justify-start animate-in fade-in duration-300">
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

          {/* Input */}
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
