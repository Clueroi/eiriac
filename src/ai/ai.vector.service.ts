import { Injectable } from "@nestjs/common";

interface VectorDocument {
    id: string
    content: string
    embedding: number[]

}

@Injectable()
export class VectorService {
    private vectors: VectorDocument[] = [];

    async save(document: VectorDocument) {
        this.vectors.push(document);
    }

    async findAll() {
        return this.vectors;
    }

}