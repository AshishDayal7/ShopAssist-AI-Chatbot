import { GoogleGenAI, Chat, FunctionDeclaration, Type } from "@google/genai";
import { PRODUCTS, searchProducts } from "./productData";
import { Product, SearchFilters } from "../types";

// Tool Definition
const searchProductsTool: FunctionDeclaration = {
  name: "searchProducts",
  description: "Search for smartphones in the product database. Use this BEFORE making any recommendations.",
  parameters: {
    type: Type.OBJECT,
    properties: {
      minPrice: { type: Type.NUMBER, description: "Minimum price in Indian Rupees (₹)" },
      maxPrice: { type: Type.NUMBER, description: "Maximum price in Indian Rupees (₹)" },
      brand: { type: Type.STRING, description: "Brand name (e.g., Apple, Samsung, Google, OnePlus, Xiaomi)" },
      minRating: { type: Type.NUMBER, description: "Minimum rating (0-5)" },
      features: { 
        type: Type.ARRAY, 
        items: { type: Type.STRING },
        description: "List of desired features. For specific specs use technical terms (e.g., '5G', '256GB'). For subjective needs, map them to tags: 'best camera', 'high performance', 'long battery', 'good display', 'reliable'." 
      }
    }
  }
};

let chatSession: Chat | null = null;
let genAI: GoogleGenAI | null = null;

export const initializeChat = () => {
  genAI = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  chatSession = genAI.chats.create({
    model: "gemini-2.5-flash",
    config: {
      temperature: 0.7,
      systemInstruction: `You are ShopAssist, an expert, impartial AI shopping assistant specializing in smartphones for the Indian market. 
      
      Your goal is to help Indian users find the perfect phone for their specific needs based on database knowledge and simulated public sentiment.
      
      SEARCH RULES:
      1. Always use the 'searchProducts' tool to find real data.
      2. If the user asks for "good camera", "fast phone", etc., pass those as tags in the 'features' array (e.g. ['best camera', 'high performance']). The tool will interpret them.
      3. If the user asks for "under 20k", ONLY set 'maxPrice': 20000.
      4. All prices are in Indian Rupees (₹).
      
      General Rules:
      1. You are impartial.
      2. If the user's request is vague, you can search for general "reliable" phones or ask clarifying questions.
      3. Summarize results in a friendly way, highlighting *why* a phone matches their specific subjective request (e.g., "This phone is great for photography because it has OIS and a Sony sensor...").
      4. Keep responses concise and formatted with Markdown.
      `,
      tools: [{ functionDeclarations: [searchProductsTool] }],
    }
  });
};

export interface ChatResponse {
  text: string;
  relatedProducts?: Product[];
  usedFilters?: SearchFilters;
}

export const sendMessageToGemini = async (message: string): Promise<ChatResponse> => {
  if (!chatSession) {
    throw new Error("Chat session not initialized");
  }

  let foundProducts: Product[] = [];
  let currentFilters: SearchFilters | undefined;

  try {
    // 1. Send user message
    let result = await chatSession.sendMessage({ message });
    
    // 2. Loop to handle potential function calls (Agentic Loop)
    let maxTurns = 5; 
    
    while (result.functionCalls && result.functionCalls.length > 0 && maxTurns > 0) {
      maxTurns--;
      const call = result.functionCalls[0];
      
      if (call.name === "searchProducts") {
        const args = call.args as unknown as SearchFilters;
        console.log("Agent Calling Tool: searchProducts with", args);
        currentFilters = args;
        
        // Execute Tool
        const products = searchProducts(args);
        foundProducts = [...products]; 
        
        // Pass result back to model
        const toolResult = {
          products: products.map(p => ({
            id: p.id,
            name: p.name,
            brand: p.brand,
            price: p.price,
            rating: p.rating,
            reviews: p.reviews,
            features: p.features,
            specs: p.specs 
          }))
        };

        result = await chatSession.sendMessage({
            message: [{
                functionResponse: {
                    name: call.name,
                    id: call.id,
                    response: { result: toolResult }
                }
            }]
        });
      }
    }

    return {
      text: result.text || "I'm having trouble connecting to the database right now.",
      relatedProducts: foundProducts.length > 0 ? foundProducts : undefined,
      usedFilters: currentFilters
    };

  } catch (error) {
    console.error("Gemini Error:", error);
    return {
      text: "I'm sorry, I encountered an error while processing your request. Please try again."
    };
  }
};