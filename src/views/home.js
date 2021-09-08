import React from 'react';
import Navbar from './templates/navbar';
import HeroSection from './blog/hero';
import ProjectSection from './project/section';
import ProjectContent from './project/content';
import ContactSection from './contact/contact';
import Footer from './templates/footer';


export default function Home() {
    return(
        <div>
            <Navbar />
            <HeroSection />
            <ProjectSection />
            <ProjectContent />
            <ContactSection />
            <Footer />
        </div>
    );
}