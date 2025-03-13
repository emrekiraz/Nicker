import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the Gemini API with your API key
// In production, you would store this in an environment variable
let genAI: GoogleGenerativeAI | undefined;

// Initialize the API with a key
export function initGeminiAPI(apiKey: string) {
  genAI = new GoogleGenerativeAI(apiKey);
}

// Generate brand name suggestions based on product idea and keywords
export async function generateBrandNames(
  productIdea: string,
  keywords: string,
  count: number = 10
): Promise<string[]> {
  if (!genAI) {
    throw new Error("Gemini API not initialized. Call initGeminiAPI first.");
  }

  try {
    // Use the gemini-1.5-pro model - make sure this is a supported model
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

    const prompt = `
      Generate ${count} unique, creative, and marketable brand names for a product or service described as:
      
      Product/Service Idea: ${productIdea}
      
      Keywords: ${keywords}
      
      Guidelines:
      - Names should be concise (preferably 1-2 words)
      - Easy to pronounce and spell
      - Memorable and distinctive
      - Avoid obvious trademark conflicts
      - Could potentially be available as a domain name
      
      Please return ONLY the brand names, one per line, without any explanations, ratings, or additional text.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Split the text by new lines and filter out any empty lines
    const brandNames = text
      .split("\n")
      .map((name) => name.trim())
      .filter((name) => name.length > 0)
      .slice(0, count); // Make sure we only return the requested number of names

    return brandNames;
  } catch (error) {
    console.error("Error generating brand names:", error);
    throw error;
  }
} 