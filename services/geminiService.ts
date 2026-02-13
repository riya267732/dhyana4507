
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getStylingAdvice = async (userDescription: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are the "Courtside Consultant" for HOOP, a performance-driven basketball streetwear brand. 
      The user wants styling advice for the following: "${userDescription}". 
      Respond with a short, punchy advice block (max 3 sentences) and suggest which HOOP gear (Jersey, Hoodie, Joggers, or Shorts) would best fit this vibe.
      Keep it urban, athletic, and confident.`,
      config: {
        thinkingConfig: { thinkingBudget: 0 }
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The Courtside Consultant is taking a breather. Please try again later.";
  }
};

export const getGeneralChatResponse = async (userMessage: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        {
          role: 'user',
          parts: [{ text: `You are HOOP-Bot, the official digital assistant for HOOP. 
          HOOP is a basketball-inspired sportswear brand. 
          Mission: Empower athletes and creators with high-performance gear. 
          Vibe: Urban, bold, performance-driven, authentic.
          Tone: Energetic, helpful, street-smart.
          Context: We have Drop 01 live featuring Elite Pro Jerseys, Velocity Court Shoes, Aero-Lift Sports Bras, and Vertical Hoodies. 
          Always keep answers concise and hype up the brand.` }]
        },
        ...history,
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        maxOutputTokens: 200,
        temperature: 0.7,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Chat Error:", error);
    return "I hit a foul. Try sending that message again.";
  }
};
