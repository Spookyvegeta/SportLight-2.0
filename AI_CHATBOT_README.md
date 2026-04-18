# 🤖 SportLight AI Chatbot - Powered by Google Gemini

## Overview

Your SportLight chatbot is now powered by **Google Gemini AI**, giving it intelligence comparable to ChatGPT. It can answer ANY question about sports, training, diet, players, rules, and more - with unlimited, up-to-date knowledge.

## 🚀 Key Features

### Unlimited Sports Knowledge
- **All Sports**: Cricket, football, basketball, tennis, athletics, swimming, boxing, MMA, rugby, hockey, badminton, volleyball, baseball, golf, F1, cycling, wrestling, gymnastics, and more
- **Any Player**: Current and historical athletes from any sport
- **Rules & Tactics**: Detailed explanations of game rules and strategies
- **Training & Diet**: Workout routines, meal plans, injury prevention
- **History**: Records, tournaments, legendary moments
- **Current Events**: Latest news, recent matches, up-to-date stats

### Smart AI Capabilities
- ✅ Understands context and follow-up questions
- ✅ Provides detailed yet concise answers (2-4 sentences)
- ✅ Adapts tone based on the question
- ✅ Uses emojis for engagement
- ✅ Never gives generic "I don't know" responses
- ✅ Learns from conversation context

### App Integration
- Helps with SportLight features (profile, dashboard, settings)
- Guides users through the platform
- Answers app-specific questions instantly

## 📋 Setup (5 Minutes)

### Step 1: Get Your Free API Key
1. Visit: https://makersuite.google.com/app/apikey
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the generated key

### Step 2: Configure Your Project
1. Open `SportLight-1.0/frontend/.env.local`
2. Find: `GEMINI_API_KEY=AIzaSyDGXt8W_your_api_key_here`
3. Replace with your actual key
4. Save the file

### Step 3: Restart Server
```bash
cd SportLight-1.0/frontend
npm run dev
```

### Step 4: Test
Open http://localhost:9002 and click the chatbot icon!

## 💬 Example Conversations

### Sports Questions
**Q**: "Who is Pele?"
**A**: "Pelé (1940-2022) was a Brazilian football legend, widely considered one of the greatest players of all time. He won three FIFA World Cups (1958, 1962, 1970) and scored over 1,000 career goals. ⚽"

**Q**: "What's the offside rule in football?"
**A**: "A player is offside if they're closer to the opponent's goal than both the ball and the second-last defender when the ball is played to them. However, you can't be offside in your own half or from throw-ins, goal kicks, and corner kicks. ⚽"

### Training & Diet
**Q**: "Give me a diet plan for cricket players"
**A**: "For cricket players, focus on: 1) Lean proteins (chicken, fish, eggs) for muscle recovery, 2) Complex carbs (brown rice, oats) for sustained energy, 3) Hydration (3-4L water daily), 4) Pre-match: banana + peanut butter, 5) Post-match: protein shake + fruits. Avoid heavy meals before games! 🏏"

**Q**: "Best exercises for footballers"
**A**: "Top exercises for footballers: 1) Squats & lunges for leg power, 2) Plyometrics (box jumps) for explosiveness, 3) Core work (planks, Russian twists), 4) Agility drills (ladder, cones), 5) Interval sprints for stamina. Train 4-5x/week with rest days! ⚽💪"

### Current Events
**Q**: "Who won the 2023 Cricket World Cup?"
**A**: "Australia won the 2023 ICC Cricket World Cup, defeating India in the final at Ahmedabad. It was Australia's 6th World Cup title, making them the most successful team in ODI World Cup history. 🏆"

### App Help
**Q**: "How do I edit my profile?"
**A**: "To edit your profile, click on your avatar in the top right corner and select 'Edit Profile', or navigate to the Profile section from the sidebar!"

## 🆓 Free Tier (More Than Enough!)

Google Gemini Free Tier includes:
- ✅ **60 requests per minute**
- ✅ **1,500 requests per day**
- ✅ **No credit card required**
- ✅ **No expiration**
- ✅ **Unlimited knowledge**

Perfect for development, testing, and even production use!

## 🔒 Security & Privacy

- ✅ API key stored in `.env.local` (never committed to Git)
- ✅ Server-side API calls (key never exposed to browser)
- ✅ Error handling prevents key leakage
- ✅ Rate limiting built-in
- ✅ No user data sent to Google (only questions)

## 🎯 Technical Details

### Architecture
```
User Question
    ↓
App-related? → Instant Response (no API call)
    ↓
Sports/General? → Gemini AI API
    ↓
Response to User
```

### Technology Stack
- **AI Model**: Google Gemini Pro
- **SDK**: @google/generative-ai
- **API**: REST (server-side)
- **Frontend**: Next.js 16 + React
- **Styling**: Tailwind CSS

### Files Modified
- `frontend/src/app/api/chat/route.ts` - Gemini AI integration
- `frontend/src/components/chatbot/chatbot.tsx` - UI component
- `frontend/.env.local` - API key configuration

## 🐛 Troubleshooting

### "API key not configured" Error
**Solution**: Add your Gemini API key to `.env.local` and restart the server

### "Invalid API key" Error
**Solution**: 
1. Verify the key is correct (copy-paste from Google AI Studio)
2. Check that the key starts with `AIza`
3. Try generating a new key

### "Rate limit reached" Error
**Solution**: Wait 1 minute and try again (free tier: 60 requests/minute)

### Chatbot Not Responding
**Solution**:
1. Check browser console for errors (F12)
2. Verify frontend server is running
3. Check `.env.local` file exists and has the key
4. Restart the server

### Still Having Issues?
Check the detailed guide: `GEMINI_SETUP.md`

## 📚 Documentation

- **Quick Start**: `CHATBOT_QUICK_START.md` - 3-step setup guide
- **Detailed Setup**: `GEMINI_SETUP.md` - Complete documentation
- **Features**: `CHATBOT_FEATURES.md` - Feature overview
- **Implementation**: `CHATBOT_IMPLEMENTATION.md` - Technical details

## 🚀 Deployment

### Environment Variables
When deploying to production, add the `GEMINI_API_KEY` environment variable to your hosting platform:

**Vercel**:
```bash
vercel env add GEMINI_API_KEY
```

**Netlify**:
Add to Site Settings → Environment Variables

**Docker**:
```dockerfile
ENV GEMINI_API_KEY=your_key_here
```

### Rate Limits
For production with high traffic, consider:
- Implementing request caching
- Adding user-based rate limiting
- Upgrading to Gemini API paid tier if needed

## 🎉 What Makes This Special

### vs Fixed Dataset Chatbots
- ❌ Fixed: Limited to pre-programmed responses
- ✅ AI: Unlimited knowledge, understands context

### vs Other AI Integrations
- ❌ Others: Often require paid APIs (OpenAI, Claude)
- ✅ Gemini: Free tier is generous (1,500 requests/day)

### vs Generic Chatbots
- ❌ Generic: Doesn't understand sports context
- ✅ SportLight AI: Optimized for sports + app features

## 📈 Future Enhancements (Optional)

- Voice input/output
- Multi-language support
- Conversation history persistence
- User feedback system
- Analytics dashboard
- Custom training on SportLight data
- Image analysis (player photos, game screenshots)

## 🤝 Support

Need help? Check these resources:
1. `CHATBOT_QUICK_START.md` - Quick setup
2. `GEMINI_SETUP.md` - Detailed guide
3. [Google AI Studio](https://makersuite.google.com/app/apikey) - Get API key
4. [Gemini API Docs](https://ai.google.dev/docs) - Official documentation

---

**Status**: ✅ Production Ready (just add your API key!)
**Technology**: Google Gemini Pro AI
**Cost**: Free (60 req/min, 1,500 req/day)
**Intelligence**: Comparable to ChatGPT
**Setup Time**: 5 minutes

**Get Started**: https://makersuite.google.com/app/apikey
