import { Bot } from 'lucide-react';
import React, { useEffect, useState } from 'react'

const HelpMenu = () => {
    const [open, setOpen] = useState(false);
    const [tooltip, setTooltip] = useState(false);
    const handleScroll = () => {
        if (window.scrollY > 300) {
            setTooltip(true);
        } else {
            setTooltip(false);
        }
    };
    const handleShare = async () => {
        try {
            const shareData = {
                title: 'RealState',
                text: 'Check out this awesome content!',
                url: 'https://example.com',
            };
            await navigator.share(shareData);
            console.log('Share successful');
        } catch (error) {
            console.error('Error sharing:', error);
        }
    };
    const handleBot = () => {
        window.location.href = '/chat'
    }


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div data-dial-init className={`${!tooltip ? "hidden" : "fixed end-6 bottom-6 group"}  `} onClick={() => setOpen((prev) => !prev)}>
            <div id="speed-dial-menu-default" className={`${!open ? "hidden" : "flex flex-col items-center"}  mb-4 space-y-2`}>
                <button onClick={handleShare} type="button" data-tooltip-target="tooltip-share" data-tooltip-placement="left" className="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400">
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                        <path d="M14.419 10.581a3.564 3.564 0 0 0-2.574 1.1l-4.756-2.49a3.54 3.54 0 0 0 .072-.71 3.55 3.55 0 0 0-.043-.428L11.67 6.1a3.56 3.56 0 1 0-.831-2.265c.006.143.02.286.043.428L6.33 6.218a3.573 3.573 0 1 0-.175 4.743l4.756 2.491a3.58 3.58 0 1 0 3.508-2.871Z" />
                    </svg>
                    <span className="sr-only">Share</span>
                </button>
                <div id="tooltip-share" role="tooltip" className="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Share
                    <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
                <button onClick={handleBot} type="button" data-tooltip-target="tooltip-print" data-tooltip-placement="left" className="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400">

                    <Bot />
                    <span className="sr-only">Bot</span>
                </button>
            </div>
            <button type="button" data-dial-toggle="speed-dial-menu-default" aria-controls="speed-dial-menu-default" aria-expanded="false" className="flex items-center justify-center text-white bg-gray-700 rounded-full w-14 h-14 hover:bg-gray-800  focus:ring-4 focus:ring-ray-300 focus:outline-none ">
                <svg className="w-5 h-5 transition-transform group-hover:rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                </svg>
                <span className="sr-only">Open actions menu</span>
            </button>
        </div>
    )
}

export default HelpMenu
