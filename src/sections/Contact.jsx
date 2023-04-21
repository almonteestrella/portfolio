import React from 'react';
import styled from 'styled-components';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                process.env.SERVICE_ID,
                process.env.TEMPLATE_ID,
                form.current,
                process.env.PUBLIC_KEY
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
                <h1>contact form</h1>
                <div className='flex-box'>
                    <div className='contact-info'></div>
                    <div className='form'>
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
                                    cols='30'
                                    rows='10'
                                />
                            </div>
                            <input type='submit' value='Send' />
                        </form>
                    </div>
                </div>
            </main>
        </Container>
    );
};

const Container = styled.div`
    background: var(--white);
    height: 60vh;
    main {
        width: 80%;
        margin: 0 auto;
    }
`;

export default Contact;
