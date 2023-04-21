import { HiArrowNarrowRight } from 'react-icons/hi';

export const navLinks = [
    { id: 1, text: 'about', path: '#about' },
    { id: 2, text: 'technologies', path: '#technologies' },
    { id: 3, text: 'projects', path: '#projects' },
];

export const projects = [
    {
        url: 'https://jobit-dd.vercel.app/',
        details: 'front end application',
        image: '/jobit.png',
        imageInfo: 'job search',
        title: 'jobit application',
        icon: <HiArrowNarrowRight />,
    },
    {
        url: 'https://morerent.vercel.app/',
        details: 'MERN application',
        image: '/morent.png',
        imageInfo: 'car rent search',
        title: 'morent car rental',
        icon: <HiArrowNarrowRight />,
    },
];
