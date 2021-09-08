import React from 'react'

export default function Navbar() {
    return (
        <nav>
            <div className="max-w-full mx-auto">
                <div className="py-8 px-8 lg:px-24">
                    <div className="flex justify-between">
                        <div className="flex space-x-4">
                            <a href="/" className="font-playfair flex items-center px-2 text-gray-700 font-bold hover:text-black-main duration-300">My B Log-</a>
                        </div>

                        <div className="flex items-center space-x-4">
                            <a href="/" className="text-xs font-bold font-playfair py-3 px-7 bg-white-third hover:bg-white-main text-black-third hover:text-black-main transition duration-300">Register</a>
                            <a href="/" className="text-xs font-bold font-playfair py-3 px-7 bg-black-second hover:bg-black-third text-white-second hover:text-white-main transition duration-300">Login</a>
                        </div>
                    </div>
                </div>                
            </div>
        </nav>
    );
}