import { Body, Controller, Get, Post } from "@nestjs/common";
import { AiService } from "./ai.service";

@Controller("ai")
export class AiController {

    constructor(
        private readonly aiService: AiService
    ) { }
    @Post()
    async ask(
        @Body() body: {
            question: string
        }
    ) {

        return this.aiService.chat(body.question);
    }

}