# Setting Up Smart AI Chatbot for SportLight

The SportLight chatbot is now powered by **Google Gemini AI** - giving it intelligence comparable to ChatGPT!

## 🚀 Features

- **Unlimited Knowledge**: Ask about ANY sport, player, tournament, or topic
- **Real AI**: Powered by Google's Gemini Pro model (same tech as Bard)
- **Up-to-date Information**: Current stats, recent events, latest news
- **Conversational**: Natural, context-aware responses
- **Free**: 60 requests/minute, 1,500/day on free tier

## 📋 Setup Instructions (5 minutes)

### Step 1: Get Your Free Gemini API Key

1. Visit: **https://makersuite.google.com/app/apikey**
2. Sign in with your Google account
3. Click **"Create API Key"** button
4. Select **"Create API key in new project"** (or use existing)
5. Copy the generated API key (starts with `AIza...`)

### Step 2: Add API Key to Your Project

1. Open `SportLight-1.0/frontend/.env.local`
2. Find the line: `GEMINI_API_KEY=AIzaSyDGXt8W_your_api_key_here`
3. Replace the placeholder with your actual API key
4. Save the file

Example:
```env
GEMINI_API_KEY=AIzaSyBcDeFgHiJkLmNoPqRsTuVwXyZ1234567890
```

### Step 3: Restart Frontend Server

```bash
# Stop the current server (Ctrl+C in terminal)
# Then restart:
cd SportLight-1.0/frontend
npm run dev
```

### Step 4: Test the Chatbot

Open http://localhost:9002 and click the chatbot icon. Try asking:
- "Who is Pele?"
- "Give me a diet plan for cricket players"
- "What are the best exercises for footballers?"
- "Explain the offside rule"
- "Who won the 2023 Cricket World Cup?"

## ✅ What You Get

### Unlimited Sports Knowledge
- **All Sports**: Cricket, football, basketball, tennis, athletics, swimming, boxing, MMA, rugby, hockey, badminton, volleyball, baseball, golf, F1, cycling, wrestling, gymnastics, etc.
- **Players**: Current and historical athletes from any sport
- **Rules & Tactics**: Detailed explanations of game rules and strategies
- **Training**: Workout routines, diet plans, injury prevention
- **History**: Records, tournaments, legendary moments

### Smart Conversations
- Understands context and follow-up questions
- Provides detailed yet concise answers
- Adapts tone based on the question
- Uses emojis for engagement

### App Integration
- Helps with SportLight features (profile, dashboard, settings)
- Guides users through the platform
- Answers app-specific questions

## 🆓 Free Tier Limits

Google Gemini Free Tier:
- ✅ **60 requests per minute** (more than enough for testing)
- ✅ **1,500 requests per day** (plenty for development)
- ✅ **No credit card required**
- ✅ **No expiration**

## 🔒 Security

- ✅ API key stored in `.env.local` (not committed to Git)
- ✅ Server-side API calls (key never exposed to browser)
- ✅ Error handling prevents key leakage
- ✅ Rate limiting built-in

## 🐛 Troubleshooting

### "API key not configured" error?
- Check that you've added your API key to `.env.local`
- Ensure there are no extra spaces or quotes
- Restart the frontend server after adding the key

### "Invalid API key" error?
- Verify the key is correct (copy-paste from Google AI Studio)
- Check that the key starts with `AIza`
- Try generating a new key

### "Rate limit reached" error?
- Wait 1 minute and try again
- Free tier: 60 requests/minute
- Consider upgrading if you need more

### Chatbot not responding?
1. Check browser console for errors (F12)
2. Verify frontend server is running
3. Test the API directly: `curl http://localhost:9002/api/chat`
4. Check `.env.local` file exists and has the key

## 🎯 Example Conversations

**User**: "Who is Pele?"
**AI**: "Pelé (1940-2022) was a Brazilian football legend, widely considered one of the greatest players of all time. He won three FIFA World Cups (1958, 1962, 1970) and scored over 1,000 career goals. ⚽"

**User**: "Give me a diet plan for cricket"
**AI**: "For cricket players, focus on: 1) Lean proteins (chicken, fish, eggs) for muscle recovery, 2) Complex carbs (brown rice, oats) for sustained energy, 3) Hydration (3-4L water daily), 4) Pre-match: banana + peanut butter, 5) Post-match: protein shake + fruits. Avoid heavy meals before games! 🏏"

**User**: "Best exercises for footballers"
**AI**: "Top exercises for footballers: 1) Squats & lunges for leg power, 2) Plyometrics (box jumps) for explosiveness, 3) Core work (planks, Russian twists), 4) Agility drills (ladder, cones), 5) Interval sprints for stamina. Train 4-5x/week with rest days! ⚽💪"

## 🚀 Next Steps

1. **Get your API key** from https://makersuite.google.com/app/apikey
2. **Add it to `.env.local`**
3. **Restart the server**
4. **Test the chatbot** with any sports question
5. **Deploy to production** when ready

## 📚 Additional Resources

- [Google AI Studio](https://makersuite.google.com/app/apikey) - Get API key
- [Gemini API Docs](https://ai.google.dev/docs) - Full documentation
- [Rate Limits](https://ai.google.dev/pricing) - Pricing & limits

---

**Status**: ✅ Ready to use (just add your API key!)
**Technology**: Google Gemini Pro AI
**Cost**: Free (60 req/min, 1,500 req/day)
**Intelligence**: Comparable to ChatGPT
