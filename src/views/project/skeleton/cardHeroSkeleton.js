import React from 'react';

export default function CardHeroSkeleton() {
    return(
        <div className="space-y-3 animate-pulse">
            <div className="bg-gray-300 h-80"></div>
            <div className="bg-gray-300 h-8 w-16"></div>
            <div className="bg-gray-300 h-10 w-52"></div>
            <div className="bg-gray-300 h-6"></div>
            <div className="bg-gray-300 h-6"></div>
            <div className="bg-gray-300 h-6"></div>
        </div>
    );
}