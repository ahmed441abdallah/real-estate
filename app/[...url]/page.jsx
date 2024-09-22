import React from 'react';
import { ragChat } from "../../lib/rag-chat";
import { redis } from "../../lib/redis";
import ChatWrapper from "../_components/ChatWrapper";

function reconstructUrl(url) {
    if (!url || url.length === 0) return '';

    const decodedComponents = url.map((component) => decodeURIComponent(component));

    const protocol = decodedComponents[0]; // This should be 'https:'
    const restOfUrl = decodedComponents.slice(1).join('/'); // Join the rest with '/'

    return `${protocol}//${restOfUrl}`; // Combine to form the full URL
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
    );
};

export default page;
