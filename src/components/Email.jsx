import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const Email = () => {
    return (
        <Wrapper>
            <div className='email'>
                <Link
                    href={'mailto:almonteestrella@gmail.com'}
                    className='link'
                >
                    almonteestrella@gmail.com
                </Link>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: fixed;
    bottom: 0;
    right: 4rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    /* color
font-family */
    .email {
        letter-spacing: var(--spacing);
        writing-mode: vertical-lr;
        padding: 10px;
    }

    .link {
        transition: var(--transition);
        color: var(--text-color);
        &:hover {
            color: var(--primary-color);
        }
    }

    &::after {
        content: '';
        display: block;
        width: 2px;
        height: 90px;
        margin: 0px auto;
        background-color: var(--primary-color);
    }
`;

export default Email;
