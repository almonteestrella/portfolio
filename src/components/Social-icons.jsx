import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi';
import styled from 'styled-components';

const SocialIcons = () => {
    const socialLinks = [
        {
            id: 1,
            name: 'Github',
            icon: <FiGithub />,
            link: 'https://www.github.com',
        },

        { id: 2, name: 'LinkedIn', icon: <FiLinkedin />, link: '#' },
        { id: 3, name: 'Instagram', icon: <FiInstagram />, link: '#' },
        { id: 4, name: 'Twitter', icon: <FiTwitter />, link: '#' },
    ];
    return (
        <Wrapper>
            <motion.div
                className='social-icons'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.3,
                    ease: 'easeInOut',
                    delay: 1.95,
                }}
            >
                <ul className='ul-list'>
                    {socialLinks.map(({ id, name, icon, link }) => (
                        <li key={id} title={name} className='li-item'>
                            <Link
                                href={link}
                                className='link-item'
                                target='_blank'
                            >
                                {icon}
                            </Link>
                        </li>
                    ))}
                </ul>
            </motion.div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: fixed;
    bottom: 0;
    left: 4rem;

    .ul-list {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .li-item {
        display: flex;
        justify-content: center;
        align-items: center;
        transition: var(--transition);
    }

    .link-item {
        padding: 10px;
        transition: var(--transition);
        outline: 2px dashed transparent;
        &:focus {
            transform: translateY(-4px);
        }
        &:hover {
            transform: translateY(-4px);
        }

        &:last-child {
            margin-bottom: 2rem;
        }
    }

    &::after {
        content: '';
        display: block;
        width: 2px;
        height: 90px;
        margin: 0px auto;
        background: var(--primary-color);
    }
`;

export default SocialIcons;

// .social-icons {
//   position: fixed;
//   bottom: 0;
//   left: 4rem;
//   &-list {
//     list-style-type: none;
//     display: flex;
//     flex-direction: column;
//     gap: 0.5rem;
//     &-item {
//       font-size: var(--tlarge2);
//       transition: 0.3s ease-in-out;
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       &-link {
//         padding: 10px;
//         color: var(--lightest-slate);
//         transition: 0.3s ease-in-out;
//         outline: 2px dashed transparent;
//         &:hover {
//           color: var(--theme-color);
//         }
//         &:focus {
//           outline-color: var(--theme-color);
//           transform: translateY(-4px);
//           color: var(--theme-color);
//         }
//       }
//       &:hover {
//         transform: translateY(-4px);
//       }
//       &:last-child {
//         margin-bottom: 2rem;
//       }
//     }

//   }
//   @media screen and (max-width: 1080px) {
//     left: 2rem;
//   }
//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// }
