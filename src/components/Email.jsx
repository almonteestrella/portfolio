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

    .email {
        display: none;
    }

    @media (min-width: 992px) {
        .email {
            display: block;
            writing-mode: vertical-lr;
            padding: 10px;
        }

        .link {
            letter-spacing: 2px;
            text-transform: uppercase;
            transition: var(--transition);
            color: var(--text-color);
            &:hover {
                color: #ffbe62;
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
    }
    /* color
font-family */
`;

export default Email;
