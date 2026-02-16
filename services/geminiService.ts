import { GoogleGenAI } from "@google/genai";

// Initialize the API client
// Ensure process.env.API_KEY is available in your environment
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export interface ConceptResult {
  title: string;
  visualStyle: string;
  musicVibe: string;
  pacing: string;
}

export const generateCreativeConcept = async (userIdea: string): Promise<ConceptResult | null> => {
  try {
    const model = "gemini-3-flash-preview";
    
    const prompt = `
      Ты — опытный креативный директор видеопродакшна. 
      Пользователь даст тебе идею или описание видеоматериала. 
      Твоя задача — предложить креативную концепцию монтажа.
      
      Ввод пользователя: "${userIdea}"
      
      Ответь строго в формате JSON без markdown форматирования.
      Структура JSON:
      {
        "title": "Краткое, цепляющее название концепции",
        "visualStyle": "Описание визуального стиля и цветокоррекции (1-2 предложения)",
        "musicVibe": "Рекомендация по музыке и звуковому дизайну",
        "pacing": "Описание темпа и ритма монтажа"
      }
      Отвечай на русском языке.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      }
    });

    const text = response.text;
    if (!text) return null;

    const parsed = JSON.parse(text) as ConceptResult;
    return parsed;

  } catch (error) {
    console.error("Gemini API Error:", error);
    return null;
  }
};