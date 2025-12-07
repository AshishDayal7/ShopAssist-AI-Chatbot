# ShopAssist AI 🤖🛒

**ShopAssist AI** is an intelligent, multi-brand AI shopping assistant designed to help users in the Indian market find the perfect smartphone for their needs. It leverages the power of Google's Gemini API with Function Calling to provide impartial, data-driven recommendations in a user-friendly conversational interface.

<a href="https://shop-assist-ai-chatbot.vercel.app/">ShopAssist AI Chatbot</a>




## Core Idea

The smartphone market is saturated with options, making it difficult for consumers to make informed decisions. Users often have vague requirements like "a phone with a good camera" or "a fast phone for gaming." ShopAssist bridges the gap between this natural human language and technical specifications. It acts as an impartial expert, understanding user intent, querying its database, and presenting the best options, complete with affiliate links to purchase.

---

## ✨ Features

- **🗣️ Conversational AI Search**: Ask for recommendations in natural language (e.g., _"Show me reliable phones under ₹25,000 with a long battery life"_).
- **🧠 Smart Intent Recognition**: The backend intelligently translates subjective user requests ("good camera", "high performance") into technical signals (OIS, Sony sensors, Snapdragon 8-series) and "social proof" (high ratings, review counts) for highly relevant results.
- **🔁 Side-by-Side Comparison**: Select up to 4 products from the search results and compare their specifications in a detailed, easy-to-read modal view.
- **🔖 Save Search Criteria**: Bookmark complex search filters (price, brand, features) and restore them later with a single click.
- **🎨 Dynamic & Animated UI**:
  - Product cards dynamically highlight specs that match the user's query.
  - Smooth, subtle animations on product cards and modals provide a polished user experience.
  - Brand logos are displayed for easy recognition.
- **🛒 Amazon Affiliate Links**: Each product includes a "Buy on Amazon" button, directing users to the Amazon.in search page for the selected product.
- **🔌 Extensive Database**: Features a comprehensive, up-to-date database of popular smartphones available in the Indian market, from budget to flagship.

---

## 🛠️ Tech Stack

This project is built as a modern, client-side-rendered web application that simulates a full-stack architecture.

- **Frontend**:
  - **React**: For building the component-based user interface.
  - **TypeScript**: For static typing and improved developer experience.
  - **Tailwind CSS**: For rapid, utility-first styling.
  - **Lucide React**: For beautiful and consistent icons.

- **AI & "Backend" Logic**:
  - **Google Gemini API (`gemini-2.5-flash`)**: The core of the AI, used for natural language understanding, conversational responses, and logical reasoning.
  - **Function Calling**: Gemini's ability to call pre-defined functions (`searchProducts`) is used to interact with the local database, simulating the behavior of a more complex AI agent (like one built with LangChain/LangGraph).
  - **Local "Database"**: A comprehensive `services/productData.ts` module acts as a static, in-memory database of smartphone products and their specifications.

---

## ⚙️ How It Works

The application follows an agentic loop, where the AI model can use tools to gather information before answering the user.

1.  **User Input**: The user types a query into the chat interface.
2.  **API Call**: The query is sent to the **Gemini API**.
3.  **Tool Decision**: Gemini's model analyzes the text. Guided by its system prompt and the provided tool definition (`searchProducts`), it determines that it needs to search the product database. It then generates a **function call** with the appropriate arguments (e.g., `{ maxPrice: 25000, features: ["long battery", "reliable"] }`).
4.  **Tool Execution**: The client-side code receives this function call and executes the local `searchProducts` function with the provided arguments. This function contains the smart scoring and filtering logic.
5.  **Return to Model**: The results from the `searchProducts` function (a list of matching products) are sent back to the Gemini API as the result of the function call.
6.  **Final Response**: The Gemini model now has the context of both the user's original query and the specific data from the database. It uses this information to generate a helpful, natural language summary and provides the product data back to the frontend.
7.  **UI Rendering**: The React UI renders the bot's text response and the interactive product carousel.

This entire process creates a seamless experience where the AI appears to have deep knowledge of the product catalog.
