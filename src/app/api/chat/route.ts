import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { getPersonalContext } from '@/config/personal';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'OpenAI API key not configured' },
        { status: 500 }
      );
    }

    const { message, messages } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Prepare the conversation history
    const conversationMessages = [
      {
        role: 'system' as const,
        content: `You are Chandan C R's personal AI assistant. You are knowledgeable, proactive, and helpful. 

Your capabilities include:
- Answering questions on any topic
- Helping with coding and technical problems
- Providing productivity tips and advice
- Assisting with planning and organization
- Offering creative ideas and brainstorming
- Explaining complex concepts simply
- Helping with writing and communication
- Providing current information and research assistance

Your personality:
- Professional yet friendly
- Proactive in offering additional help
- Detail-oriented and thorough
- Encouraging and supportive
- Always ready to learn about Chandan's preferences and adapt

Remember to:
- Be conversational and personable
- Ask clarifying questions when needed
- Offer follow-up suggestions
- Maintain context from previous conversations
- Be respectful of time and priorities

You are here to make Chandan's life easier and more productive. Always strive to provide value in every interaction.

${getPersonalContext()}`
      },
      ...(messages || []),
      {
        role: 'user' as const,
        content: message
      }
    ];

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini', // Using GPT-4o-mini for better performance and cost efficiency
      messages: conversationMessages,
      max_tokens: 1000,
      temperature: 0.7,
    });

    const assistantMessage = completion.choices[0]?.message?.content || 'Sorry, I could not generate a response.';

    return NextResponse.json({
      message: assistantMessage,
      usage: completion.usage
    });

  } catch (error) {
    console.error('OpenAI API error:', error);
    
    if (error instanceof Error) {
      return NextResponse.json(
        { error: `OpenAI API error: ${error.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
} 