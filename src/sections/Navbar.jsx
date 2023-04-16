import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { navLinks } from '@/utils';
import Button from '@/components/Button';

const Navbar = () => {
    return (
        <Wrapper>
            <div className='div1'>
                <div className='div2'>
                    <Link href={'/'}>
                        <Image
                            src={'/brand.svg'}
                            width={50}
                            height={50}
                            alt='logo'
                        />
                        <span>portfolio</span>
                    </Link>
                    <button className='toggle-btn'>
                        <FaBars />
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
                </ul>

                <Button text={'contact me'} path={'#contact'} />
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;

    .div1 {
        width: 90vw;
        margin: 0 auto;
        max-width: var(--max-width);
    }

    .div2 {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .toggle-btn {
        background: none;
        border: none;
        svg {
            font-size: 2rem;
        }

        cursor: pointer;
        color: var(--primary-color);
    }

    .nav-links,
    .contact-btn {
        display: none;
    }

    @media (min-width: 992px) {
        .toggle-btn {
            display: none;
        }

        .div1 {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .nav-links {
            display: flex;
            gap: 2rem;

            li,
            .contact-btn {
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
    }
`;

export default Navbar;
