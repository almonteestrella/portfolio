import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const Button = ({ text, path }) => {
    return (
        <Wrapper>
            <Link className='text' href={path}>
                {text}
            </Link>
        </Wrapper>
    );
};

const Wrapper = styled.button`
    text-transform: capitalize;
    background: var(--primary-color);
    padding: 0.8rem 1rem;
    display: inline-block;
    font-weight: 400;
    transition: var(--transition);
    font-size: 0.875rem;
    cursor: pointer;
    box-shadow: var(--light-shadow);
    border-radius: 20px;
    border-color: transparent;
    letter-spacing: var(--spacing);

    .text {
        letter-spacing: var(--spacing);
        color: var(--white);
        &:hover {
            color: var(--text-color);
        }
    }

    &:hover {
        border: var(--primary-color) 2px solid;
        background: var(--white);
    }

    @media (min-width: 992px) {
        text-transform: uppercase;
    }
`;

export default Button;
