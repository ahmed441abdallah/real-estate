import React from 'react'

const Message = ({ content, isUserMessage }) => {
    function getCurrentTime() {
        const now = new Date();
        let hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;

        return `${hours}:${minutes} ${ampm}`;
    }
    return (
        <div className={` ${isUserMessage ? "bg-slate-200 rounded-sm p-8 sm:px-16" : "bg-slate-400/40 shadow-md rounded-sm p-8 sm:px-16"}  rounded-sm p-8 sm:px-16`}>
            <div className="flex items-start gap-2.5">
                <img className="w-8 h-8 rounded-full" src={`${isUserMessage ? "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfTCJeuJUmoaIOazKhLYvbVkMnidBtRpJpWA&s"}`} alt="avatar image" />
                <div className="flex flex-col  w-full  leading-1.5">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <span className="text-sm font-semibold text-gray-900 ">{isUserMessage ? "You" : "Chat Bot"}</span>
                        <span className="text-sm font-normal text-gray-500 ">{getCurrentTime()}</span>
                    </div>
                    <p className="text-sm  font-normal py-2 text-gray-900 "> {content}</p>
                </div>
            </div>
        </div>
    )
}

export default Message
