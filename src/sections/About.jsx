import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Info from './Info';

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
            </main>
        </AboutContainer>
    );
};

const AboutContainer = styled.div`
    background: var(--white);
    margin-bottom: 3rem;
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
    }

    .about-photo {
        object-fit: contain;
        width: 100%;
        height: auto;
        position: relative;
    }

    .about-img-container {
        background: #f3f4f6;
        border-radius: 10px;
        position: relative;
    }

    .about-img-container::before {
        content: '';
        position: absolute;
        background: var(--primary-color);
        width: 100%;
        height: 100%;
        top: 2rem;
        left: -2rem;

        border-radius: 10px;
    }
`;
export default About;
