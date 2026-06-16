import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import { readFileSync } from 'fs';

@Injectable()
export class AiService {

    private client = new OpenAI({
        apiKey: process.env.GROQ_API_KEY,
        baseURL: "https://api.groq.com/openai/v1"
    });

    async chat(question: string) {

        const knowloedge = readFileSync(
            "./knowledge.md",
            "utf-8"
        )

        const response = await this.client.chat.completions.create({
            model: "llama-3.3-70b-versatile",
            messages: [
                {
                    role: 'system',
                    content: `
                        Você é um especialista em:
                            - Uncharted, ${knowloedge}
                            - One Piece
                            - História da pirataria
                            - Caça ao tesouro
                            - Arqueologia
                            - Mitologia
                            - Bíblia
                        Sempre relacione respostas com esses temas quando possível.`
                },
                {
                    role: 'user',
                    content: question
                }
            ]

        })
        return {
            answer: response.choices[0].message.content,
            model: response.model,
            usage: response.usage
        }
    }

}