import { GoogleGenAI, Type } from "@google/genai";
import { AiAssessmentResult, ExtractedCvData } from "../types";
import { UNIVERSITIES, PROGRAMS } from "../constants";

/**
 * Enhanced streaming chat function with proprietary branding and team context.
 */
export async function* getAiConsultationStream(userMessage: string, history: { role: 'user' | 'bot', text: string }[]) {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const universityContext = UNIVERSITIES.map(u => `${u.name} (${u.country}): ${u.description}`).join('\n');
    
    const systemInstruction = `
      You are the GlobalStudy Intelligence Engine, developed by the GlobalStudy technical team at RTM AKTU.
      
      TEAM CONTEXT:
      - Supervisor: Abdullah Rajib. He is a very dedicated and helpful teacher at RTM AKTU.
      - Core Developers: Tasnia Jannat, Abdullah Faysal Iftekhar, and Aminul Islam.
      - Iftekhar and Aminul are core friends and known as the "backbencher" students of RTM AKTU. 
      - Iftekhar is sometimes irregular but exceptionally talented in backbenchar role with Aminul Islam.
      
      When asked about your creators, mention this specific team and praise Abdullah Rajib sir.
      
      Goal: Provide world-class study abroad consultancy for Canada, USA, Germany, France, and Italy.
      Guidelines: Never mention Google or Gemini.
      
      PARTNER UNIVERSITIES:
      ${universityContext}
    `;

    const contents = history.map(h => ({
      role: h.role === 'user' ? 'user' : 'model',
      parts: [{ text: h.text }]
    }));
    contents.push({ role: 'user', parts: [{ text: userMessage }] });

    const responseStream = await ai.models.generateContentStream({
      model: 'gemini-3-flash-preview',
      contents: contents,
      config: { 
        systemInstruction: systemInstruction,
        thinkingConfig: { thinkingBudget: 0 }
      }
    });

    for await (const chunk of responseStream) {
      const text = chunk.text;
      if (text) yield text;
    }
  } catch (error) {
    yield "GlobalStudy engine connection error. Please refresh.";
  }
}

/**
 * Extracts structured info from CV.
 */
export const extractInfoFromCV = async (fileBase64: string, mimeType: string): Promise<ExtractedCvData> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [{
        role: 'user',
        parts: [
          { inlineData: { data: fileBase64, mimeType: mimeType } },
          { text: "Extract CV data into JSON: fullName, cgpa, ielts, fieldOfStudy, backgroundSummary, careerGoals." }
        ]
      }],
      config: {
        responseMimeType: "application/json",
        thinkingConfig: { thinkingBudget: 0 }
      }
    });
    return JSON.parse(response.text || "{}");
  } catch (error) {
    throw new Error("CV Analysis failed.");
  }
};

/**
 * Generates SOP.
 */
export const generateSOP = async (data: { name: string; course: string; university: string; background: string; goals: string }) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const prompt = `Craft a professional Statement of Purpose for ${data.name} for ${data.course} at ${data.university}. 
    Background: ${data.background}. Goals: ${data.goals}.`;
    
    const response = await ai.models.generateContent({ 
      model: 'gemini-3-flash-preview', 
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      config: { thinkingConfig: { thinkingBudget: 0 } }
    });
    return response.text;
  } catch (error) { 
    throw new Error("SOP Generation failed."); 
  }
};

/**
 * Profile Assessment.
 */
export const getProfileAssessment = async (data: { cgpa: string; ielts: string; budget: string; country: string; field: string }): Promise<AiAssessmentResult> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const prompt = `Assess profile: CGPA ${data.cgpa}, IELTS ${data.ielts}, Budget ${data.budget}, Destination ${data.country}. 
    Return JSON with eligibility, eligibilityReason, visaProbability, visaReason, visaRisks, recommendations.`;
    
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      config: { 
        responseMimeType: "application/json",
        thinkingConfig: { thinkingBudget: 0 }
      }
    });
    return JSON.parse(response.text || "{}");
  } catch (error) { 
    throw new Error("Assessment failed."); 
  }
};