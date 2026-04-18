import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();
    
    // Initialize Gemini AI
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY || 'AIzaSyDGXt8W_your_api_key_here';
    
    if (!GEMINI_API_KEY || GEMINI_API_KEY === 'AIzaSyDGXt8W_your_api_key_here') {
      return NextResponse.json({ 
        response: "⚠️ Gemini API key not configured. Please add your API key to .env.local file. Get it free from: https://makersuite.google.com/app/apikey" 
      });
    }

    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    const prompt = `You are SportLight AI, an intelligent sports assistant for the SportLight platform (a sports networking app for athletes, clubs, and recruiters).

Your capabilities:
- Answer ANY sports-related questions with accurate, up-to-date information
- Provide training tips, diet plans, workout routines for athletes
- Explain rules, tactics, and strategies for all sports
- Discuss players, teams, tournaments, and sports history
- Give advice on sports careers, recruitment, and professional development
- Help with app features when asked (profile management, dashboard, settings)

Be conversational, friendly, and concise (2-4 sentences). Use emojis occasionally for engagement.

User question: ${message}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ response: text });
    
  } catch (error: any) {
    console.error('Gemini API error:', error);
    
    // Handle specific errors
    if (error?.message?.includes('API_KEY_INVALID')) {
      return NextResponse.json({ 
        response: "❌ Invalid API key. Please check your Gemini API key in .env.local file." 
      });
    }
    
    if (error?.message?.includes('RATE_LIMIT')) {
      return NextResponse.json({ 
        response: "⏳ Rate limit reached. Please wait a moment and try again." 
      });
    }
    
    return NextResponse.json({ 
      response: "⚠️ AI service temporarily unavailable. Please ensure your Gemini API key is configured correctly in .env.local" 
    });
  }
}
