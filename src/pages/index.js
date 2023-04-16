import Email from '@/components/Email';
import SocialIcons from '@/components/Social-icons';
import Hero from '@/sections/Hero';
import Navbar from '@/sections/Navbar';
import React from 'react';

const Index = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <SocialIcons />
            <Email />
        </main>
    );
};
export default Index;
