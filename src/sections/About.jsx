import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Info from '@/components/Info';
import Link from 'next/link';

const About = () => {
    return (
        <AboutContainer>
            <main id='about'>
                <div className='title'>
                    <h2>let's have a lot to my working process</h2>
                    <p>
                        I am committed to develop web applications, writing
                        clean code, follow design pattern, sstrategy to the
                        design process, keep learning and improving the code.
                    </p>
                </div>

                <Link
                    href='http://localhost:3000/juan-almonte-resume.pdf'
                    color='transparent'
                    target='_blank'
                    download
                    className='download'
                >
                    download my resume
                </Link>

                <div className='grid-container'>
                    <div className='about-img-container'>
                        <Image
                            src={'/web-developer.svg'}
                            alt='web developer'
                            width={0}
                            height={0}
                            className='about-photo'
                        />
                    </div>
                    <div className='about-info'>
                        <Info
                            number={1}
                            title={'application design and logic'}
                            color={'#58f9bf'}
                            description={
                                'understand the project requirements and logic for its operation.'
                            }
                        />
                        <Info
                            number={2}
                            title={
                                'UI/UX design, frontend and backend implementacion'
                            }
                            color={'#D3FE57'}
                            description={
                                'creating user interfaces that matches the most updates front end trending.'
                            }
                        />
                        <Info
                            number={3}
                            title={'interactive design and functionality'}
                            color={'#A78BFF'}
                            description={
                                'acomplishing what the web applications are meant to do'
                            }
                        />
                    </div>
                </div>
            </main>
        </AboutContainer>
    );
};

const AboutContainer = styled.div`
    background: var(--white);
    padding-bottom: 5rem;

    padding-top: 3rem;

    main {
        width: 80%;
        margin: 0 auto;
    }
    .title {
        position: relative;
        margin-bottom: 3rem;
        text-align: center;

        & h2 {
            margin-bottom: 1.5rem;
            text-transform: capitalize;
        }

        & p {
            max-width: var(--fixed-width);
            letter-spacing: var(--spacing);
        }
    }

    .download {
        text-transform: capitalize;
        background: var(--primary-color);
        padding: 0.5rem 0.8rem;
        display: inline-block;
        font-weight: 400;
        transition: var(--transition);
        font-size: 0.875rem;
        cursor: pointer;
        box-shadow: var(--light-shadow);
        border-radius: var(--radius);
        letter-spacing: var(--spacing);
        color: var(--white);
        margin-bottom: 3rem;
        border-color: transparent;
        border: var(--primary-color) 2px solid;

        &:hover {
            background: var(--white);
            color: var(--text-color);
        }
    }

    .grid-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        position: relative;
    }

    .about-photo {
        object-fit: cover;
        width: 100%;
        height: auto;
        position: relative;
    }

    .about-img-container {
        background: #f3f4f6;
        border-radius: 10px;
        position: relative;
        height: 200px;
    }

    .process-info {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
    }

    .process-title,
    .process-title h2 {
        margin-bottom: 1.5rem;
    }

    @media (min-width: 992px) {
        .about-img-container::after {
            content: '';
            position: absolute;
            border: 3px solid var(--primary-color);
            width: 100%;
            height: 100%;
            top: 2rem;
            right: 2rem;
            border-radius: var(--radius);
        }

        .about-img-container {
            height: auto;
        }

        .grid-container {
            gap: 5rem;
        }

        .title {
            text-align: left;
            &::after {
                content: '';
                display: block;
                position: absolute;
                top: 20px;
                width: 300px;
                height: 2px;
                left: 500px;
                background-color: var(--primary-color);
            }
        }
    }
`;
export default About;
