import React from 'react'
import { ragChat } from "../../lib/rag-chat"
import { redis } from "../../lib/redis"
import ChatWrapper from "../_components/ChatWrapper"

function reconstructUrl(url) {
    // The first part is 'https:', so we join with a single '/' after 'https:'
    const decodedComponents = url?.map((component, index) => {
        if (index === 0) {
            return decodeURIComponent(component);  // The 'https:' part
        }
        return decodeURIComponent(component);
    });

    // Ensure proper URL construction like 'https://en.wikipedia.org/wiki/Dubai'
    return decodedComponents.join('/');
}
const page = async ({ params }) => {
    const reconstructedUrl = reconstructUrl(params.url);
    const isAlreadyIndexed = await redis.sismember("indexed-urls", reconstructedUrl);
    const sessionId = "mock-session-id";
    if (!isAlreadyIndexed) {
        await ragChat.context.add({
            type: "html",
            source: reconstructedUrl,
            config: { chunkOverlap: 50, chunkSize: 200 },
        });

        await redis.sadd("indexed-urls", reconstructedUrl);
    }

    return (
        <ChatWrapper sessionId={sessionId} />
    )
}

export default page;
