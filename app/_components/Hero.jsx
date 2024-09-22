import React from 'react'
import Link from "next/link";


const Hero = () => {
    return (
        <section
            className="p-4 bg-cover bg-center  flex items-center justify-center "
            style={{
                backgroundImage: `url('/element.png')`,
                height: '100vh',
            }}
        >
            <div className="mx-auto max-w-3xl text-center">
                <h1 className="bg-gradient-to-r from-gray-400 via-slate-400 to-gray-800 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                    Easy Way to Find
                    <span className="sm:block">Your Dream Home </span>
                </h1>

                <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
                    Explore vast property listings by category with our friendly search.
                    Find your perfect match!
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <Link
                        href="/add-listing"
                        className="block  rounded-md border border-slate-700  bg-slate-700 px-14 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-black focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Hero
