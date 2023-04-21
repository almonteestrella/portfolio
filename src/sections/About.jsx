import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Info from '@/components/Info';

const About = () => {
    return (
        <AboutContainer>
            <main id='about'>
                <div className='title'>
                    <h2>see what I can do for you easily</h2>
                </div>

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
                            title={'application design'}
                            color={'#58f9bf'}
                        />
                        <Info
                            number={2}
                            title={'UI/UX design'}
                            color={'#D3FE57'}
                        />
                        <Info
                            number={3}
                            title={'interactive designs'}
                            color={'#A78BFF'}
                        />
                    </div>
                </div>
                <article className='process'>
                    <div className='process-title'>
                        <h2>let's have a lot to my working process</h2>
                        <p>
                            I am committed to helping you develop your projects
                            from the discovery, strategy to the design process.
                            Suggestions and insight are welcome to improve our
                            works.
                        </p>
                    </div>

                    <div className='process-info'>
                        <Info
                            number={1}
                            title={'discovery'}
                            color={'#D3FE57'}
                        />
                        <Info number={2} title={'strategy'} color={'#58F9BF'} />
                        <Info number={3} title={'design'} color={'#A78BFF'} />
                    </div>
                </article>
            </main>
        </AboutContainer>
    );
};

const AboutContainer = styled.div`
    background: var(--white);

    padding-top: 3rem;

    main {
        width: 80%;
        margin: 0 auto;
    }
    .title {
        position: relative;
        margin-bottom: 3rem;
        &::after {
            content: '';
            display: block;
            position: absolute;
            top: 20px;
            width: 300px;
            height: 2px;
            left: 400px;
            background-color: var(--primary-color);
        }
    }

    .grid-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 5rem;
        position: relative;
        margin-bottom: 3rem;
    }

    .about-photo {
        object-fit: cover;
        width: 100%;
        height: auto;
    }

    .about-img-container {
        background: #f3f4f6;
        border-radius: 10px;
        /* position: relative; */
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
`;
export default About;
