# 🤖 Smart AI Chatbot - Quick Start

Your SportLight chatbot is now powered by **Google Gemini AI** - as smart as ChatGPT!

## ⚡ 3-Step Setup (5 minutes)

### 1️⃣ Get Free API Key
Visit: **https://makersuite.google.com/app/apikey**
- Sign in with Google
- Click "Create API Key"
- Copy the key (starts with `AIza...`)

### 2️⃣ Add to Project
Open: `SportLight-1.0/frontend/.env.local`

Replace this line:
```env
GEMINI_API_KEY=AIzaSyDGXt8W_your_api_key_here
```

With your actual key:
```env
GEMINI_API_KEY=AIzaSyBcDeFgHiJkLmNoPqRsTuVwXyZ1234567890
```

### 3️⃣ Restart Server
```bash
# Press Ctrl+C to stop
# Then restart:
cd SportLight-1.0/frontend
npm run dev
```

## ✅ Done! Test It

Open http://localhost:9002 and ask:
- "Who is Pele?"
- "Give me a diet plan for cricket"
- "Best exercises for footballers"
- "Explain the offside rule"

## 🎯 What You Get

✅ **Unlimited Knowledge** - Ask about ANY sport, player, or topic
✅ **Real AI** - Powered by Google Gemini Pro (like ChatGPT)
✅ **Up-to-date Info** - Current stats, recent events, latest news
✅ **Free** - 60 requests/minute, 1,500/day
✅ **Smart** - Understands context, gives detailed answers

## 🆓 Free Forever

- No credit card required
- No expiration
- 60 requests per minute
- 1,500 requests per day

## 🐛 Issues?

**"API key not configured"**
→ Add your key to `.env.local` and restart server

**"Invalid API key"**
→ Check the key is correct (copy-paste from Google AI Studio)

**Still not working?**
→ Check `GEMINI_SETUP.md` for detailed troubleshooting

---

**Get your API key now**: https://makersuite.google.com/app/apikey
