import Link from 'next/link';
import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import { navLinks } from '@/utils';
import { AppContext } from '@/context/context';
import Logo from '@/components/Logo';

import { FaSun } from 'react-icons/fa';
import { BsFillMoonFill } from 'react-icons/bs';

const Navbar = () => {
    const { openSidebar } = useContext(AppContext);

    const [navbarVisible, setNavbarVisible] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.pageYOffset > 100
                ? setNavbarVisible(true)
                : setNavbarVisible(false);
        });
    }, []);

    return (
        <NavContainer>
            <nav>
                <div className={`div1 ${navbarVisible ? 'blur-nav' : ''}`}>
                    <div className='div2'>
                        <Logo />

                        <button className='toggle-btn'>
                            <GiHamburgerMenu onClick={openSidebar} />
                        </button>
                    </div>

                    <ul className='nav-links'>
                        {navLinks.map(({ id, path, text }) => {
                            return (
                                <li key={id}>
                                    <Link href={path}>{text}</Link>
                                </li>
                            );
                        })}

                        <div>
                            <button className='toggleTheme'>
                                {/* {' '}
                                {theme === 'darkTheme' ? (
                                    <BsFillMoonFill />
                                ) : (
                                    <FaSun />
                                )} */}
                            </button>
                        </div>
                    </ul>
                </div>
            </nav>
        </NavContainer>
    );
};

const NavContainer = styled.nav`
    nav {
        min-height: 60px;
        margin-bottom: 3rem;
        width: 100vw;
        background: ${(props) => props.theme.navBG};
    }
    .div1 {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 70px;
        padding: 0 4rem;
    }

    .div2 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100vw;
    }

    .nav-links {
        display: none;
    }

    .toggleTheme {
        background: none;
        border: none;

        svg {
            font-size: 1.8rem;
        }

        cursor: pointer;
        /* color: var(--primary-color); */
    }

    .nav-responsive {
        width: min(75vw, 400px);
        visibility: visible;
        opacity: 1;
    }
    .toggle-btn {
        background: none;
        border: none;
        transition: var(--transition);
        svg {
            font-size: 3rem;
        }

        cursor: pointer;
        color: var(--primary-color);
    }

    @media (min-width: 992px) {
        .toggle-btn {
            display: none;
        }

        .div1 {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 8rem;
        }

        .div2 {
            width: 0vw;
        }

        .nav-links {
            display: flex;
            gap: 2rem;

            li {
                margin: 0 0.5rem;

                a {
                    text-transform: capitalize;
                    letter-spacing: var(--spacing);
                    font-size: 1rem;
                    color: var(--text-color);

                    transition: color 0.3s ease-in-out,
                        box-shadow 0.3s ease-in-out;
                    padding: 0.5rem;
                    &:hover {
                        box-shadow: inset 150px 0 0 0 #54b3d6;
                        color: white;
                        border-radius: var(--radius);
                    }
                }
            }
        }

        .contact-btn {
            text-transform: capitalize;
            letter-spacing: var(--spacing);
        }

        .contact-btn {
            display: inline;
        }

        .blur-nav {
            height: 80px;
            position: fixed;
            top: 0;
            transition: var(--transition);
            z-index: 100;
            background-color: var(--white);
            opacity: 0.9;
            box-shadow: var(--dark-shadow);
            backdrop-filter: blur(10px);
            width: 100%;
        }
    }
`;

export default Navbar;
