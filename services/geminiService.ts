import { GoogleGenAI } from "@google/genai";
import { AiAssessmentResult } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const modelName = 'gemini-3-flash-preview';

export const getAiConsultation = async (userMessage: string, history: string[]) => {
  try {
    const systemInstruction = `
      You are an expert "Global Higher Studies Consultant" for a platform named "Global Consultancy". 
      Your goal is to assist students interested in studying in Canada, USA, and Germany.
      
      Key Knowledge Base:
      
      1. CANADA:
         - Intakes: Fall (Sept), Winter (Jan).
         - Visa: Study Permit, GIC ($20,635), PGWP (up to 3 years work permit).
         - Top Unis: U of Toronto, UBC, McGill.
         
      2. USA:
         - Intakes: Fall, Spring.
         - Visa: F1 Visa, I-20 Form, SEVIS Fee.
         - Work: CPT (during study), OPT (1 year + 2 years STEM extension).
         - Funding: High chance of RA/TA (Research/Teaching Assistantships).
         
      3. GERMANY:
         - Intakes: Winter (Oct), Summer (April).
         - Cost: Mostly NO Tuition at public universities (only semester fee).
         - Visa: Block Account (~€11,208) required.
         - Top Unis: TUM, RWTH Aachen.
      
      Tone: Professional, encouraging, helpful, and concise.
      Rules:
      - If user asks about "tech programs", mention AI, CS, and Data Science.
      - If user asks about "low budget", suggest Germany.
      - If user asks about "scholarships", mention Fulbright (USA), Vanier (Canada), DAAD (Germany).
    `;

    // Construct a simple prompt with history context
    const conversation = history.join('\n');
    const fullPrompt = `${conversation}\nUser: ${userMessage}\nConsultant:`;

    const response = await ai.models.generateContent({
      model: modelName,
      contents: fullPrompt,
      config: {
        systemInstruction: systemInstruction,
        thinkingConfig: { thinkingBudget: 0 } 
      }
    });

    return response.text || "I apologize, I couldn't process that request right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the knowledge base. Please try again later.";
  }
};

export const generateSOP = async (data: { name: string; course: string; university: string; background: string; goals: string }) => {
  try {
    const prompt = `
      Write a professional, academic Statement of Purpose (SOP) for a student application.
      
      Details:
      - Student Name: ${data.name}
      - Target Course: ${data.course}
      - Target University: ${data.university}
      - Academic Background: ${data.background}
      - Future Goals: ${data.goals}
      
      Structure the SOP with a compelling introduction, academic background, why this course/university, future goals, and a strong conclusion.
      Tone: Formal, persuasive, and authentic.
      Length: Approximately 400-500 words.
      Do not include placeholders like [Date] or [Address], just the body of the SOP.
    `;

    const response = await ai.models.generateContent({
      model: modelName,
      contents: prompt,
    });

    return response.text;
  } catch (error) {
    console.error("Gemini SOP Error:", error);
    throw new Error("Failed to generate SOP");
  }
};

export const getProfileAssessment = async (data: { cgpa: string; ielts: string; budget: string; country: string; field: string }): Promise<AiAssessmentResult> => {
  try {
    const prompt = `
      Analyze the following student profile for Master's admission suitability.
      
      Profile:
      - CGPA: ${data.cgpa} (out of 4.0)
      - IELTS Score: ${data.ielts}
      - Annual Budget: $${data.budget}
      - Preferred Country: ${data.country}
      - Field of Interest: ${data.field}
      
      Provide a JSON response with:
      1. eligibility: "High", "Medium", or "Low".
      2. eligibilityReason: A short explanation of the eligibility status.
      3. visaProbability: A number between 0 and 100 representing the percentage chance of visa success.
         - Consider Country Rules:
           * USA: Strict on intent to return and funding.
           * Germany: Strict on academic matching and blocked account.
           * Canada: Strict on study plan logic and ties to home country.
      4. visaReason: A short explanation of the visa probability.
      5. visaRisks: An array of strings listing specific risk factors (e.g., "Budget below average for USA", "IELTS score borderline").
      6. recommendations: An array of 3 objects, each having "program", "university", and "reason" (why it fits this profile).
    `;

    const response = await ai.models.generateContent({
      model: modelName,
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
      }
    });

    let jsonStr = response.text;
    if (jsonStr) {
      // Clean up markdown code blocks if present
      if (jsonStr.startsWith('```json')) {
        jsonStr = jsonStr.replace(/^```json\n/, '').replace(/\n```$/, '');
      } else if (jsonStr.startsWith('```')) {
        jsonStr = jsonStr.replace(/^```\n/, '').replace(/\n```$/, '');
      }
      return JSON.parse(jsonStr) as AiAssessmentResult;
    }
    throw new Error("Empty response from AI");
  } catch (error) {
    console.error("Gemini Assessment Error:", error);
    throw new Error("Failed to analyze profile");
  }
};