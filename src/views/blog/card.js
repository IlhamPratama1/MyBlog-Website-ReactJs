import React from 'react';

function Card({ img, title, desc, category, min, href }) {
    return(
        <div className="grid gap-x-4 grid-cols-1 lg:grid-cols-2">
            <a href="/"><img alt="content" src={img} /></a>
            <div className="flex items-center">
                <div className="pt-3 lg:pt-0">
                    <div className="flex items-center space-x-3">
                        <a href="/" className="text-xs font-source py-2 px-3 bg-white-third hover:bg-white-second hover:text-black-main transition duration-300">{category}</a>
                        <p className="text-xs font-source opacity-75">{min} min to read</p>
                    </div>
                    <a href="/" className="space-y-3">
                        <h1 className="text-xl font-playfair">{title}</h1>
                        <p className="font-light text-sm font-source">{desc.substr(0, 175)}...</p>
                    </a>
                </div>                
            </div>
        </div>
    );
}

export default Card;