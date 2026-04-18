import { NextRequest, NextResponse } from 'next/server';
import { getSportsResponse } from '@/components/chatbot/sports-knowledge';

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();
    
    // Use local comprehensive knowledge base - No API required!
    const response = getSportsResponse(message);
    
    return NextResponse.json({ response });
    
  } catch (error: any) {
    console.error('Chat error:', error);
    return NextResponse.json({ 
      response: "I'm your sports assistant! Ask me about any sport, player, training tips, diet plans, or the SportLight app features. 🌟" 
    });
  }
}
