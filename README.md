# 🤖 Nest AI Chat API

🚀 API de Inteligência Artificial desenvolvida com **NestJS**, utilizando uma arquitetura limpa e preparada para integração com múltiplos modelos de LLM.

Atualmente integrada com **Groq** utilizando a SDK compatível com a API da OpenAI.

---

# ✨ Features

* ✅ Arquitetura baseada em NestJS
* ✅ Integração simples com modelos LLM
* ✅ Compatível com API OpenAI
* ✅ Utilização do Groq como provedor
* ✅ Injeção de dependência
* ✅ Separação de responsabilidades
* ✅ Fácil troca de modelos
* ✅ Estrutura pronta para RAG e Agents

---

# 🏗 Arquitetura

```text
                Cliente

                   │

                   ▼

        POST /ai/chat

                   │

                   ▼

        AiController

                   │

                   ▼

          AiService

                   │

                   ▼

       OpenAI SDK Client

                   │

                   ▼

      Groq OpenAI Endpoint

                   │

                   ▼

            Llama Model
```

---

# 📂 Estrutura do projeto

```bash
src/

 ├── ai/
 │    ├── ai.controller.ts
 │    ├── ai.service.ts
 │    └── ai.module.ts
 │
 ├── app.module.ts
 │
 └── main.ts
```

---

# ⚡ Instalação

```bash
git clone <seu-repositorio>

cd nest-ai-chat

npm install
```

---

# 🔑 Configuração

Crie um arquivo:

```bash
.env
```

e adicione:

```env
GROQ_API_KEY=sua_api_key
```

---

# 🚀 Executando

```bash
npm run start:dev
```

Servidor:

```
http://localhost:3000
```

---

# 📤 Exemplo de requisição

```http
POST /ai/chat
```

Body:

```json
{
    "question":"Explique o que é Clean Architecture."
}
```

Resposta:

```json
{
    "answer":"Clean Architecture é um padrão..."
}
```

---

# 💻 Exemplo de implementação

```typescript
const response = await client.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
        {
            role: "user",
            content: question
        }
    ]
});
```

---

# 🔮 Próximos passos

* [ ] Streaming de respostas
* [ ] Histórico de conversas
* [ ] Memória persistente
* [ ] Function Calling
* [ ] RAG
* [ ] Vector Database
* [ ] Agents
* [ ] Upload de documentos
* [ ] Suporte a múltiplos provedores
* [ ] Observabilidade
* [ ] Rate Limiting

---

# 🛠 Tecnologias

* NestJS
* TypeScript
* Node.js
* OpenAI SDK
* Groq API
* dotenv

---

# 📈 Objetivo

Este projeto foi criado para estudar integrações modernas com modelos de IA utilizando uma arquitetura escalável e preparada para evoluir para soluções como copilotos, agentes inteligentes e sistemas RAG.

---

# ⭐ Se este projeto te ajudou

Deixe uma ⭐ no repositório e fique à vontade para contribuir com melhorias.
