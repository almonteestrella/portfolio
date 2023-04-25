import Email from '@/components/Email';
import SocialIcons from '@/components/Social-icons';
import About from '@/sections/About';
import Contact from '@/sections/Contact';

import Hero from '@/sections/Hero';
import Navbar from '@/sections/Navbar';
import Projects from '@/sections/Projects';
import Skills from '@/sections/Skills';
import Testimonials from '@/sections/Testimonials';
import React from 'react';

const Index = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Testimonials />
            <Contact />

            <SocialIcons />
            <Email />
        </main>
    );
};
export default Index;
