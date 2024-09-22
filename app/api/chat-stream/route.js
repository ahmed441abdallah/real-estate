import { ragChat } from "../../../lib/rag-chat";
import { aiUseChatAdapter } from "@upstash/rag-chat/nextjs";
export const POST = async (req) => {
    try {
        const { messages, sessionId } = await req.json();
        const lastMessage = messages[messages.length - 1]?.content;
        const response = await ragChat.chat(lastMessage, { streaming: true, sessionId });

        return aiUseChatAdapter(response);
    } catch (error) {
        console.error("Error in POST API:", error);
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
};
