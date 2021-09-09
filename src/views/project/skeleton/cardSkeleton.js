import React from 'react';

export default function CardSkeleton() {
    return(
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 animate-pulse">
            <div className="bg-gray-300 h-36"></div>
            <div className="space-y-3">
                <div className="bg-gray-300 h-10 w-52"></div>
                <div className="bg-gray-300 h-6"></div>
                <div className="bg-gray-300 h-6"></div>
                <div className="flex flex-items space-x-3">
                    <div className="bg-gray-300 h-8 w-10"></div>
                    <div className="bg-gray-300 h-8 w-16"></div>
                </div>
            </div>
        </div>
    );
}