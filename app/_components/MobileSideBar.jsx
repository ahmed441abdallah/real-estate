import { UserButton } from '@clerk/nextjs'
import { XIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button } from '../../components/ui/button'

const MobileSideBar = ({ sidebarOpen, setSidebarOpen, isSignedIn, user }) => {
    return (
        <div
            className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md transition-transform transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
                } sm:hidden z-50`}
        >
            <div className="flex justify-between p-4">
                <XIcon className="cursor-pointer" onClick={() => setSidebarOpen(false)} />
            </div>
            <nav className="flex flex-col gap-4 p-4">
                <Link href="/" onClick={() => setSidebarOpen(false)}>
                    <li className="hover:text-gray-500 font-medium">Home</li>
                </Link>
                <Link href="/listing" onClick={() => setSidebarOpen(false)}>
                    <li className="hover:text-gray-500 font-medium">Listing</li>
                </Link>
                <Link href="/sell" onClick={() => setSidebarOpen(false)}>
                    <li className="hover:text-gray-500 font-medium">For Sell</li>
                </Link>
                <Link href="/rent" onClick={() => setSidebarOpen(false)}>
                    <li className="hover:text-gray-500 font-medium">For Rent</li>
                </Link>
                <Link href="/faq" onClick={() => setSidebarOpen(false)}>
                    <li className="hover:text-gray-500 font-medium">Faq</li>
                </Link>
                {user && (
                    <Link href="/user" onClick={() => setSidebarOpen(false)}>
                        <li className="hover:text-gray-500 font-medium">Your Listing</li>
                    </Link>
                )}
            </nav>
            <div className="flex flex-col gap-4 p-4">
                <Link href="/add-listing">
                    <Button onClick={() => setSidebarOpen(false)}>Post Your Ad</Button>
                </Link>
                {isSignedIn ? (
                    <UserButton />
                ) : (
                    <Link href="/sign-in" onClick={() => setSidebarOpen(false)}>
                        <Button variant="outline">Login</Button>
                    </Link>
                )}
            </div>
        </div>
    )
}

export default MobileSideBar
