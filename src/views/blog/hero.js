import React from 'react';

export default function HeroSection() {
    return(
        <div className="container mx-auto px-12 md:px-24">
            <div className="grid lg:grid-cols-2 md:grid-cols-1">
                <div className="text-right">
                    <img alt="hero" className="w-96" src="/static/images/ilustration/Blogging-bro.svg" />
                </div>
                <div className="flex items-center">
                    <div className="space-y-6 lg:pr-10">
                        <h1 className="font-playfair lg:text-4xl">
                            Our job is not to succeed. Our job is to try, because it is in trying that we find and learn to build opportunities to succeed.
                        </h1>
                        <h1 className="font-playfair font-bold text-sm lg:text-xl">
                            - Buya Hamka
                        </h1>
                    </div>                    
                </div>
            </div>
        </div>
    );
}