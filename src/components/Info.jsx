import React from 'react';
import styled from 'styled-components';

const Info = ({ number, title, color, description }) => {
    return (
        <Container color={color}>
            <article className='article card'>
                <h4>
                    {number} / <span>{title}</span>
                </h4>
                <p className='text'>{description}</p>
            </article>
        </Container>
    );
};

const Container = styled.div`
    .article {
        position: relative;

        & span {
            letter-spacing: var(--spacing);
        }

        h4 {
            letter-spacing: var(--spacing);
            text-transform: capitalize;
        }
    }

    .text {
        margin-bottom: 50px;
        letter-spacing: var(--spacing);
    }

    .card {
        background: var(--body-bg-color);
        border-radius: 10px;
        padding: 1rem 1.2rem;
        margin-bottom: 1rem;

        & p {
            line-height: 25px;
        }

        & h4 {
            margin-bottom: 1rem;
        }
    }

    @media (min-width: 992px) {
        .text {
            margin-bottom: 100px;
        }
        .article {
            margin-bottom: 30px;
            &::after {
                content: '';
                display: block;
                position: absolute;
                top: 70%;
                width: 80%;
                left: 48px;
                height: 2px;

                background-color: ${(props) => props.color};
            }
        }
    }
`;
export default Info;
