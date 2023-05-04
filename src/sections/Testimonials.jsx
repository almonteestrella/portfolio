import React, { useState } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import { teamMembers } from '@/utils';
import styled from 'styled-components';
import Image from 'next/image';

const Testimonials = () => {
    const [groupMembers, setGroupMembers] = useState(teamMembers);
    const [currentPerson, setCurrentPerson] = useState(0);

    const prevSlide = () => {
        setCurrentPerson((oldPerson) => {
            const result =
                (oldPerson - 1 + groupMembers.length) % groupMembers.length;
            return result;
        });
    };
    const nextSlide = () => {
        setCurrentPerson((oldPerson) => {
            const result = (oldPerson + 1) % groupMembers.length;
            return result;
        });
    };

    return (
        <TestimonialContainer>
            <main id='testimonials'>
                <div className='title'>
                    <h2>testimonials</h2>
                </div>

                <div className='content'>
                    {groupMembers.map((person, personIndex) => {
                        const { id, title, image, name, quote } = person;

                        return (
                            <article
                                key={id}
                                className='slide'
                                style={{
                                    transform: `translateX(${
                                        100 * (personIndex - currentPerson)
                                    }%)`,
                                    opacity:
                                        personIndex === currentPerson ? 1 : 0,
                                    visibility:
                                        personIndex === currentPerson
                                            ? 'visible'
                                            : 'hidden',
                                }}
                            >
                                <Image
                                    src={image}
                                    width={0}
                                    height={0}
                                    alt={name}
                                    className='article-img'
                                />
                                <h4 className='name'>{name}</h4>
                                <p className='article-title'>{title}</p>
                                <p className='quote'>{quote}</p>
                                <FaQuoteRight className='icon' />
                            </article>
                        );
                    })}

                    <button type='button' className='prev' onClick={prevSlide}>
                        <FiChevronLeft />
                    </button>
                    <button type='button' className='next' onClick={nextSlide}>
                        <FiChevronRight />
                    </button>
                </div>
            </main>
        </TestimonialContainer>
    );
};

const TestimonialContainer = styled.div`
    background: var(--white);
    height: 100vh;
    padding-top: 3rem;

    .title {
        position: relative;
        margin-bottom: 3rem;
        width: 80vw;
        margin: 0 auto;

        & h2 {
            text-transform: capitalize;
            letter-spacing: var(--spacing);
            text-align: center;
        }
    }

    .article-img {
        border-radius: 50%;
        margin-bottom: 1rem;
        width: 150px;
        object-fit: contain;
        height: 150px;
        object-fit: cover;
        border: 4px solid hsl(210, 31%, 80%);
        box-shadow: var(--dark-shadow);
    }

    .content {
        margin: 0 auto;
        margin-top: 4rem;
        width: 80vw;

        height: 450px;
        max-width: 800px;

        position: relative;

        overflow: hidden;
    }

    .slide {
        text-align: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: var(--transition);
    }

    .name {
        text-transform: uppercase;
        color: var(--primary-color);
        margin-bottom: 0.75rem;
    }
    .article-title {
        text-transform: capitalize;
        color: var(--text-color); //this color must be different
        margin-bottom: 0.75rem;
    }

    .quote {
        max-width: 25em;
        margin: 0 auto;
        margin-top: 2rem;
        line-height: 2;
        color: var(--text-color); //this color must be different
    }

    .icon {
        font-size: 2rem;
        margin-top: 1rem;
        color: var(--primary-color);
    }

    .prev,
    .next {
        position: absolute;
        top: 200px;
        transform: translateY(-50%);
        background: hsl(210, 22%, 49%);
        color: var(--white);
        width: 1.5rem;
        height: 1.5rem;
        display: grid;
        place-items: center;
        border-color: transparent;
        font-size: 1rem;
        border-radius: var(--radius);
        cursor: pointer;
        transition: var(--transition);
    }

    .prev {
        left: 0;
    }
    .next {
        right: 0;
    }

    .prev:hover,
    .next:hover {
        background: var(--primary-color);
    }

    @media (min-width: 800px) {
        .quote {
            max-width: 45em;
        }

        .prev,
        .next {
            width: 2rem;
            height: 2rem;

            font-size: 1.5rem;
        }

        .title {
            & h2 {
                text-align: left;
            }
            &::after {
                content: '';
                display: block;
                position: absolute;
                top: 20px;
                width: 300px;
                height: 2px;
                left: 200px;
                background-color: var(--primary-color);
            }
        }
    }
`;

export default Testimonials;
