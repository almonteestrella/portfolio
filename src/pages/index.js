import Email from '@/components/Email';
import SocialIcons from '@/components/Social-icons';
import About from '@/sections/About';
import Hero from '@/sections/Hero';
import Navbar from '@/sections/Navbar';
import React from 'react';

const Index = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <About />
            <SocialIcons />
            <Email />
        </main>
    );
};
export default Index;
