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

export const teamMembers = [
    {
        id: 1,
        image: '/cong.svg',
        name: 'cong',
        title: 'full stack developer',
        quote: 'Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.',
    },
    {
        id: 2,
        image: '/derek.svg',
        name: 'derek',
        title: 'front end developer',
        quote: 'Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.',
    },
    {
        id: 3,
        image: '/yovanny.svg',
        name: 'yovanny',
        title: 'full stack developer',
        quote: 'Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo.',
    },
];
