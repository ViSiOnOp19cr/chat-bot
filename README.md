# AI Chatbot

A modern, responsive AI chatbot built with Next.js, TypeScript, and OpenAI API.

## Features

- 💬 Real-time chat interface
- 🤖 Powered by OpenAI's GPT-3.5-turbo
- 📱 Fully responsive design
- ⚡ Built with Next.js and TypeScript
- 🎨 Modern UI with Tailwind CSS
- 🔄 Conversation history support
- ⏳ Typing indicators
- 🧹 Clear chat functionality

## Getting Started

### Prerequisites

- Node.js 18+ installed
- An OpenAI API key

### Setup

1. **Clone the repository** (or continue with your existing project)

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   
   Create a `.env.local` file in the root directory and add your OpenAI API key:
   ```env
   OPENAI_API_KEY=your_openai_api_key_here
   ```

   **How to get your OpenAI API key:**
   - Visit [OpenAI Platform](https://platform.openai.com/api-keys)
   - Sign in to your account
   - Click "Create new secret key"
   - Copy the key and paste it in your `.env.local` file

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to see your chatbot!

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts          # OpenAI API endpoint
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx                  # Main page with chatbot
├── components/
│   └── Chatbot.tsx               # Main chatbot component
```

## API Endpoints

- `POST /api/chat` - Send a message to the chatbot

## Configuration

You can customize the chatbot behavior by modifying the system prompt in `src/app/api/chat/route.ts`:

```typescript
const conversationMessages = [
  {
    role: 'system' as const,
    content: 'You are a helpful AI assistant. Provide helpful, accurate, and friendly responses.'
  },
  // ... rest of messages
];
```

## Deployment

### Deploy on Vercel

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add your OpenAI API key to the environment variables in Vercel dashboard
4. Deploy!

### Environment Variables for Production

Make sure to add these environment variables in your deployment platform:

- `OPENAI_API_KEY` - Your OpenAI API key

## Customization

### Styling
The chatbot uses Tailwind CSS for styling. You can customize the appearance by modifying the classes in `src/components/Chatbot.tsx`.

### AI Model
You can change the AI model by updating the `model` parameter in the API route:

```typescript
const completion = await openai.chat.completions.create({
  model: 'gpt-4', // Change to gpt-4 or other models
  messages: conversationMessages,
  max_tokens: 1000,
  temperature: 0.7,
});
```

## Troubleshooting

### Common Issues

1. **"OpenAI API key not configured" error:**
   - Make sure you've created a `.env.local` file
   - Verify your API key is correctly set
   - Restart the development server

2. **API key not working:**
   - Check if your OpenAI account has available credits
   - Verify the API key is active and not expired

3. **Build errors:**
   - Make sure all dependencies are installed: `npm install`
   - Check that TypeScript types are properly configured

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [OpenAI API Documentation](https://platform.openai.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

This project is open source and available under the [MIT License](LICENSE).
