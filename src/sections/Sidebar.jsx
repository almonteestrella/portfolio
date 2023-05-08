'use client';

import { FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { navLinks } from '../utils';
import styled from 'styled-components';
import { useContext } from 'react';
import { AppContext } from '@/context/context';
import Logo from '@/components/Logo';

const Sidebar = () => {
    const { isSidebarOpen, closeSidebar } = useContext(AppContext);

    return (
        <Wrapper>
            <aside
                className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}
            >
                <div className='sidebar-header'>
                    <Logo />
                    <button className='close-btn' onClick={closeSidebar}>
                        <FaTimes />
                    </button>
                </div>

                <ul className='links'>
                    {navLinks.map(({ id, path, text, icon }) => {
                        return (
                            <li key={id}>
                                <Link href={path} onClick={closeSidebar}>
                                    {icon} {text}
                                </Link>
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
        padding: 1rem 3rem;

        .close-btn {
            background: none;
            border: none;
            transition: var(--transition);
            font-size: 3rem;
            color: var(--clr-red-dark);
            cursor: pointer;
            &:hover {
                color: var(--clr-red-light);
            }
        }
    }

    .links a {
        display: flex;
        align-items: center;

        font-size: 1.25rem;
        text-transform: capitalize;
        padding: 1rem 1.5rem;
        color: var(--text-color);
        padding: 1rem 1.5rem;
        transition: var(--transition);
        letter-spacing: var(--spacing);
    }
    .links a:hover {
        padding-left: 2rem;

        background: var(--hoverLink);
    }

    .links li a svg {
        font-size: 2rem;

        margin-right: 1rem;
        margin-top: 2px;
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

    @media (min-width: 992px) {
        .sidebar {
            display: none;
        }
    }
`;

export default Sidebar;
