import Chatbot from '@/components/Chatbot';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="container mx-auto py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Chandan's Personal Assistant
          </h1>
          <p className="text-gray-600">
            Your AI-powered productivity companion - Always ready to help!
          </p>
        </div>
        
        <div className="h-[600px]">
          <Chatbot />
        </div>
        
        <div className="text-center mt-8 text-sm text-gray-500">
          <p>
            Built with Next.js, TypeScript, and OpenAI API
          </p>
        </div>
      </div>
    </main>
  );
}
