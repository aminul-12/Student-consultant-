import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const getAiConsultation = async (userMessage: string, history: string[]) => {
  if (!apiKey) {
    return "I'm sorry, my connection to the server is currently limited. Please contact support.";
  }

  try {
    const model = 'gemini-3-flash-preview';
    const systemInstruction = `
      You are an expert Study Abroad Consultant for EduCanada. 
      Your goal is to assist students interested in studying in Canada.
      
      Key Information you have access to:
      - Top Universities: U of Toronto, UBC, McGill, Waterloo.
      - Common intakes: Fall (Sept), Winter (Jan), Summer (May).
      - Visa requirements: Acceptance letter, Proof of funds ($20,635 + tuition), Medical exam, Police certificate.
      - Post-Graduation Work Permit (PGWP) allows students to work up to 3 years.
      
      Tone: Professional, encouraging, helpful, and concise.
      If a user asks about something unrelated to studying in Canada, politely steer them back to the topic.
      Do not invent specific tuition fees if not known, give ranges.
    `;

    // Construct a simple prompt with history context
    const conversation = history.join('\n');
    const fullPrompt = `${conversation}\nUser: ${userMessage}\nConsultant:`;

    const response = await ai.models.generateContent({
      model: model,
      contents: fullPrompt,
      config: {
        systemInstruction: systemInstruction,
        thinkingConfig: { thinkingBudget: 0 } // Flash model usually doesn't need thinking budget, disabling for speed
      }
    });

    return response.text || "I apologize, I couldn't process that request right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the knowledge base. Please try again later.";
  }
};
