import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    // Use Gemini API
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY || 'AIzaSyDGXt8W_your_api_key_here';
    
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `You are SportLight AI, a helpful sports assistant for the SportLight app. 

Context: SportLight is a platform connecting athletes with clubs and recruiters. Users can create profiles, showcase achievements, and connect with opportunities.

Your role:
1. Answer ANY sports-related questions with accurate, concise information
2. Cover all sports: cricket, football, basketball, tennis, athletics, swimming, boxing, MMA, rugby, hockey, badminton, table tennis, volleyball, baseball, American football, golf, F1, cycling, wrestling, gymnastics, etc.
3. Provide information about: players, rules, history, records, tournaments, training tips, nutrition, injury prevention
4. Be precise but friendly
5. If asked about the app, mention features like profile management, dashboard, settings

User question: ${message}

Provide a helpful, accurate response in 2-4 sentences. Be conversational and engaging.`
            }]
          }],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 200,
          }
        }),
      }
    );

    if (!response.ok) {
      throw new Error('Gemini API error');
    }

    const data = await response.json();
    const botResponse = data.candidates[0]?.content?.parts[0]?.text || 
      "I'm here to help with sports questions! Try asking about any sport, player, or training topic.";

    return NextResponse.json({ response: botResponse });
  } catch (error) {
    console.error('Chat API error:', error);
    
    // Fallback response
    return NextResponse.json({ 
      response: "I'm your sports assistant! Ask me about any sport - cricket, football, basketball, tennis, athletics, or training tips. I'm here to help!" 
    });
  }
}
