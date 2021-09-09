import React from 'react';
import HeroSection from './blog/hero';
import ProjectSection from './project/section';
import ProjectContent from './project/content';
import ContactSection from './contact/contact';

export default function Home() {
    return(
        <div>
            <HeroSection />
            <ProjectSection />
            <ProjectContent />
            <ContactSection />
        </div>
    );
}