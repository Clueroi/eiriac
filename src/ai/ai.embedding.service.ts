import { Injectable } from "@nestjs/common";
import { GoogleGenAI } from "@google/genai";

@Injectable()
export class EmbeddingService {

    private ai = new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY
    });

    async generateEmbedding(text: string) {

        const response = await this.ai.models.embedContent({
            model: "gemini-embedding-001",
            contents: text
        });

        return {
            message: response.embeddings ? [0].values:EmbeddingService
        }
    }

}