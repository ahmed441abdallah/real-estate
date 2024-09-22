import React from 'react';
import Message from './Message';
import { Bot, MessageSquare } from 'lucide-react';

const Messages = ({ messages }) => {
    return (
        <div className="flex-1 overflow-y-auto p-4 sm:px-32 flex flex-col gap-2">
            {messages && messages.length > 0 ? (
                messages.map((message, i) => (
                    <Message
                        key={i}
                        content={message.content}
                        isUserMessage={message.role === 'user'}
                    />
                ))
            ) : (
                <div className="flex-1 flex flex-col  items-center justify-center gap-2 p-16 sm:p-32">
                    <Bot className="size-12 text-gary-900" />
                    <h3 className="font-semibold text-2xl text-gary-900 tracking-wider capitalize">You're all set! 🚀</h3>
                    <p className="text-zinc-600 leading-9 capitalize tracking-wider ">Ask your first question to get started.</p>
                </div>
            )}
        </div>
    );
};

export default Messages;
