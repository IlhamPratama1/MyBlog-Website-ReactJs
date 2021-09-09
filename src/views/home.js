import React from 'react';
import HeroSection from './blog/hero';
import ProjectSection from './project/section';
import ProjectContent from './project/content';

export default function Home() {
    return(
        <div>
            <HeroSection />
            <ProjectSection />
            <ProjectContent />
        </div>
    );
}