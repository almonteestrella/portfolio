'use client';

import { FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { navLinks } from '../utils';
import styled from 'styled-components';
import { useState } from 'react';

const Sidebar = () => {
    return (
        <Wrapper>
            <aside>
                <div className='sidebar-header'>
                    <Link href={'/'}>
                        <Image
                            src={'/brand.svg'}
                            width={50}
                            height={50}
                            alt='logo'
                        />
                        <span>portfolio</span>
                    </Link>
                    <button className='close-btn'>
                        <FaTimes />
                    </button>
                </div>

                <ul className='links'>
                    {navLinks.map(({ id, path, text }) => {
                        return (
                            <li key={id}>
                                <Link href={path}>{text}</Link>
                            </li>
                        );
                    })}
                </ul>
            </aside>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    .sidebar-header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .close-btn {
            background: none;
            border: none;
            transition: var(--transition);
            font-size: 2rem;
            color: var(--clr-red-dark);
            cursor: pointer;
            &:hover {
                color: var(--clr-red-light);
            }
        }
    }

    .links a {
        display: block;
        font-size: 1rem;
        text-transform: capitalize;
        color: var(--text-color);
        padding: 1rem 1.5rem;
        transition: var(--transition);
        letter-spacing: var(--spacing);
    }
    .links a:hover {
        padding-left: 2rem;

        background: var(--hoverLink);
    }

    .sidebar {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: var(--white);
        transition: var(--transition);
        transform: translate(-100%);
        z-index: -1;
    }

    .show-sidebar {
        transform: translate(0);
        z-index: 1;
    }
`;

export default Sidebar;
