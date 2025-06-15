# Quick Setup Instructions

## 🚀 Add Your OpenAI API Key

**Follow these steps to get your chatbot working:**

### 1. Get Your OpenAI API Key
1. Go to [OpenAI Platform](https://platform.openai.com/api-keys)
2. Sign in or create an account
3. Click "Create new secret key"
4. Copy the generated key (it starts with `sk-`)

### 2. Create Environment File
1. In your project root directory, create a file named `.env.local`
2. Add this line to the file:
   ```
   OPENAI_API_KEY=your_actual_api_key_here
   ```
   Replace `your_actual_api_key_here` with the key you copied from OpenAI

### 3. Restart the Server
If the development server is already running, restart it:
```bash
# Stop the server (Ctrl+C) then run:
npm run dev
```

### 4. Test Your Chatbot
1. Open [http://localhost:3000](http://localhost:3000)
2. Start chatting with your AI assistant!

---

**⚠️ Important Notes:**
- Never share your API key publicly
- Add `.env.local` to your `.gitignore` file (already included)
- Make sure you have credits in your OpenAI account

**💡 Need Help?**
- Check the main README.md for detailed instructions
- Make sure the `.env.local` file is in the root directory (same level as package.json)
- Restart the development server after adding the API key 