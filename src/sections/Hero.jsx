import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import Button from '@/components/Button';

import { socialLinks } from '@/utils';
import Link from 'next/link';
Link;

const Hero = () => {
    return (
        <Wrapper>
            <main>
                <div className='hero-content'>
                    <div className='hero-info'>
                        <h4>hi, i am juan almonte</h4>
                        <h1 className='hero-title'>
                            professional web developer
                        </h1>
                        <p>
                            Full stack developer, creating client and server web
                            applications, using varius technologies.
                        </p>

                        <div className='flex-box'>
                            <Button text={'contact me'} path={'#contact'} />
                            <div className='icons-container'>
                                {socialLinks.map(({ id, icon, link }) => (
                                    <li key={id} className='li-item'>
                                        <Link
                                            href={link}
                                            className='link-item'
                                            target='_blank'
                                        >
                                            {icon}
                                        </Link>
                                    </li>
                                ))}
                            </div>
                        </div>
                    </div>

                    <Image
                        src={'/hero-img.svg'}
                        width={0}
                        height={0}
                        alt='hero-img'
                        className='hero-img'
                    />
                </div>
            </main>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    main {
        width: 80vw;
        margin: 0 auto;
    }

    .hero-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 5rem;
        min-height: calc(80vh);
    }

    .flex-box {
        display: flex;
        align-items: center;
    }

    .icons-container {
        display: flex;
        justify-content: space-between;
        position: relative;
        margin-left: 1.5rem;
        &::after {
            content: '';
            display: block;
            position: absolute;
            top: 10px;
            width: 100px;
            height: 2px;
            left: 230px;
            background-color: var(--text-color);
        }

        & .li-item {
            list-style-type: none;
            margin: 0 0.5rem;
        }

        .link-item {
            transition: var(--transition);
            font-size: 1.2rem;
            color: var(--text-color);
            &:hover {
                color: #ffbe62;
            }
        }

        & .icons-container {
            margin-left: 1.6rem;
        }
    }

    .hero-info {
        width: 300px;
        text-align: center;
        & h4 {
            text-transform: uppercase;
            color: var(--primary-color);
            margin-bottom: 1rem;
            margin-top: 3rem;
        }
        & p {
            letter-spacing: var(--spacing);
            line-height: 25px;
            margin-bottom: 2rem;
        }
    }

    .hero-img {
        display: none;
    }

    .hero-title {
        font-weight: 700;
        font-size: 40px;
        line-height: 50px;
        text-transform: capitalize;
        margin-bottom: 3rem;
        position: relative;

        &::after {
            content: '';
            display: block;
            position: absolute;
            top: 100px;
            width: 300px;
            height: 16px;
            background: #ffbe62;
            z-index: -1;
        }
    }

    @media (min-width: 992px) {
        .icons-container {
            display: none;
        }

        .hero-img {
            display: block;
            object-fit: cover;
            border-radius: 20px;
            width: 100%;

            height: auto;
        }

        .hero-info {
            text-align: left;
            width: 500px;
        }

        .hero-title {
            font-size: 67px;
            line-height: 75px;
            &::after {
                top: 135px;
                width: 500px;
            }
        }

        .hero-content {
            min-height: calc(100vh - 119px);
        }

        .li-item {
            margin: 0 1rem;
        }
    }
`;

export default Hero;
