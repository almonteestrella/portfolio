import React from 'react';
import styled from 'styled-components';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Image from 'next/image';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_SERVICE_ID,
                process.env.NEXT_PUBLIC_TEMPLATE_ID,
                form.current,
                process.env.NEXT_PUBLIC_PUBLIC_KEY
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );

        e.target.reset();
    };

    return (
        <Container>
            <main>
                <h1>contact me</h1>

                <div className='content'>
                    <div className='bg-white'>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className='form-control'>
                                <label htmlFor='user_name'>your name</label>
                                <input
                                    type='text'
                                    name='user_name'
                                    id='user_name'
                                    placeholder='enter your name'
                                    required
                                />
                            </div>
                            <div className='form-control'>
                                <label htmlFor='user_email'>your email</label>
                                <input
                                    type='email'
                                    name='user_email'
                                    id='user_email'
                                    placeholder='enter your email'
                                    required
                                />
                            </div>
                            <div className='form-control'>
                                <label htmlFor='message'>your message</label>
                                <textarea
                                    name='message'
                                    id='message'
                                    placeholder='enter your message'
                                />
                            </div>
                            <input
                                type='submit'
                                value='Send'
                                className='contact-btn'
                            />
                        </form>
                        <div className='contact-info'>
                            <Image
                                src={'/handshake.svg'}
                                width={0}
                                height={0}
                                className='contact-img'
                                alt='contact-photo'
                            />
                        </div>
                    </div>
                </div>
            </main>
        </Container>
    );
};

const Container = styled.div`
    background: #99e0ff;
    height: 90vh;
    main {
        width: 80%;
        margin: 0 auto;
    }

    h1 {
        text-transform: capitalize;
        text-align: center;
        padding: 2rem 0;
    }

    .form-control label {
        display: block;
        margin-bottom: 0.2rem;

        letter-spacing: var(--spacing);
        text-transform: capitalize;
    }

    .form-control {
        margin-bottom: 0.5rem;
    }

    .form-control input,
    textarea {
        width: 70%;
        padding: 0.5rem;
        border-radius: 5px;
        border: 1px solid #9d9d9d;
    }

    textarea {
        height: 5rem;
    }

    input[type='text']:focus,
    input[type='email']:focus {
        outline: 1.5px solid var(--text-color);
        border: none;
    }

    input[type='text']::placeholder,
    input[type='email']::placeholder,
    textarea::placeholder {
        text-transform: capitalize;
        letter-spacing: var(--spacing);
    }

    textarea:focus {
        outline: 1.5px solid var(--text-color);
        border: none;
    }

    .bg-white {
        background: var(--white);
        width: 70%;
        border-radius: 10px;
        padding: 1.5rem 2rem;
    }

    .contact-img {
        width: 50%;
        height: auto;
        object-fit: cover;
        position: absolute;
        top: 20%;
        right: 0px;
        border-radius: 10px;
    }

    .content {
        position: relative;
    }

    .contact-btn {
        background: none;
        border: none;
        padding: 0.5rem 1rem;
        cursor: pointer;
        background: var(--primary-color);
        border-radius: var(--radius);
        color: white;
        transition: var(--transition);
        letter-spacing: var(--spacing);
    }

    .contact-btn:hover {
        background: var(--white);
        outline: 2px solid var(--primary-color);
        color: var(--text-color);
        letter-spacing: var(--spacing);
    }
`;

export default Contact;
