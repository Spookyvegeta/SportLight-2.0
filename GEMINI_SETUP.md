# Setting Up Gemini AI for SportLight Chatbot

The SportLight chatbot now uses Google's Gemini AI for intelligent, unlimited sports knowledge!

## Why Gemini?

- **Free tier**: 60 requests per minute
- **Smart responses**: Understands context and nuance
- **Unlimited knowledge**: Can answer ANY sports question
- **Up-to-date**: Has current information
- **Precise**: Gives accurate, concise answers

## How to Get Your Gemini API Key

### Step 1: Visit Google AI Studio
Go to: https://makersuite.google.com/app/apikey

### Step 2: Sign In
- Sign in with your Google account
- Accept the terms of service

### Step 3: Create API Key
1. Click "Create API Key"
2. Select "Create API key in new project" (or use existing project)
3. Copy the generated API key

### Step 4: Add to Your Project
1. Open `SportLight-1.0/frontend/.env.local`
2. Replace `AIzaSyDGXt8W_your_api_key_here` with your actual API key
3. Save the file

Example:
```
GEMINI_API_KEY=AIzaSyBcDeFgHiJkLmNoPqRsTuVwXyZ1234567890
```

### Step 5: Restart Frontend Server
```bash
# Stop the current server (Ctrl+C)
# Then restart
npm run dev
```

## Features

The chatbot can now answer:
- ✅ ANY sports question (cricket, football, basketball, tennis, etc.)
- ✅ Player information and statistics
- ✅ Rules and regulations
- ✅ Historical facts and records
- ✅ Training and fitness advice
- ✅ Nutrition tips
- ✅ Injury prevention
- ✅ Current events and news
- ✅ App-specific help

## Free Tier Limits

- **60 requests per minute**
- **1,500 requests per day**
- More than enough for development and testing!

## Fallback

If the API fails or key is invalid, the chatbot falls back to the built-in knowledge base, so it always works!

## Testing

Try asking:
- "Who won the 2023 Cricket World Cup?"
- "Tell me about Kylian Mbappé"
- "How do I improve my basketball shooting?"
- "What are the rules of badminton?"
- "Best diet for athletes"

The chatbot will provide intelligent, accurate responses!

## Security Note

⚠️ Never commit your API key to GitHub!
- The `.env.local` file is already in `.gitignore`
- Use environment variables in production
- Rotate keys if exposed

## Alternative: Use Without API Key

The chatbot works without Gemini too! It will use the built-in comprehensive sports knowledge base. Just leave the API key as is, and it will automatically fall back to local responses.
