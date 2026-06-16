import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';

@Injectable()
export class AiService {

    private client = new OpenAI({
        apiKey: process.env.GROQ_API_KEY,
        baseURL: "https://api.groq.com/openai/v1"
    });

    async chat(question: string) {

        const response = await this.client.chat.completions.create({
            model: "llama-3.3-70b-versatile",
            messages: [
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