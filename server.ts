import express from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// Initialize Gemini API client if key exists
const apiKey = process.env.GEMINI_API_KEY;
let aiClient: GoogleGenAI | null = null;
if (apiKey && apiKey !== 'MY_GEMINI_API_KEY') {
  aiClient = new GoogleGenAI({ apiKey });
}

// AI Concierge Endpoint
app.post('/api/concierge', async (req, res) => {
  try {
    const { question, language } = req.body;
    if (!question) {
      return res.status(400).json({ error: 'Question is required' });
    }

    if (!aiClient) {
      // Intelligent fallback answer if key is not configured
      const fallbackAnswer = language === 'ar'
        ? `مرحباً بك في فندق لافونا الدمام. تسعدنا خدمتك! هاتف الفندق المباشر: +966 13 843 0111، العنوان: حي الضباب، الدمام. نقدم أجنحة ملكية، مطعم فاخر، واي فاي مجاني، ومواقف سيارات.`
        : `Welcome to Lavona Hotel Dammam! How may we assist you? You can reach our front desk directly at +966 13 843 0111. We are located in Al Dabab, Dammam 32261, offering royal suites, fine dining, free Wi-Fi, and free parking.`;
      return res.json({ reply: fallbackAnswer });
    }

    const systemInstruction = `
You are the elite Virtual Concierge for Lavona Hotel (فندق لافونا) located in Al Dabab, Dammam 32261, Saudi Arabia. Phone: +966 13 843 0111.
Your tone is exceptionally polite, hospitable, warm, and luxurious.
Hotel Details:
- Location: Al Dabab, Dammam 32261, Saudi Arabia
- Phone: +966 13 843 0111
- Amenities: Royal Suites, Executive Suites, Deluxe Rooms, Family Suites, Free Fiber Wi-Fi (300Mbps), Free Covered Parking & Valet, 24-Hr Reception, Fine Dining Restaurant (Arabic & International), Silent Climate Control AC, Private Airport Shuttle to King Fahd International Airport (25 min).
- Nearby Attractions: Dammam Corniche (12 mins), Ithra Cultural Center (18 mins), Al Danah Mall (8 mins), Half Moon Bay (30 mins).
- Traditional Hospitality: Arabian coffee (Gahwa) and organic Saudi dates served in the lobby.

Respond in ${language === 'ar' ? 'Arabic' : 'English'}. Keep responses concise (2-4 sentences max), elegant, helpful, and hospitable.
    `;

    const response = await aiClient.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        { role: 'user', parts: [{ text: `${systemInstruction}\n\nGuest Question: ${question}` }] }
      ]
    });

    const replyText = response.text || (language === 'ar' ? 'نسعد بخدمتكم في فندق لافونا.' : 'We are delighted to serve you at Lavona Hotel.');
    return res.json({ reply: replyText });
  } catch (error) {
    console.error('Error in concierge API:', error);
    return res.status(500).json({
      reply: req.body.language === 'ar'
        ? 'عذراً، حدث خطأ مؤقت. يسعدنا استقبال اتصالاتكم المباشرة على +966 13 843 0111'
        : 'Apologies, a temporary system glitch occurred. Please reach our desk at +966 13 843 0111'
    });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Lavona Hotel Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
