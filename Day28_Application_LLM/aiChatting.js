const { GoogleGenAI } = require('@google/genai');
require("dotenv").config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY});
// console.log(process.env.GEMINI_API_KEY);

async function main(msg) {
  const response = await ai.models.generateContent({
    model: "gemini-1.5-flash",
    contents: msg
  });
  
  return response.text;
}

module.exports = main; 