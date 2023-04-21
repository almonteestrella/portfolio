import React from 'react';
import styled from 'styled-components';

const Info = ({ number, title, color }) => {
    return (
        <Container color={color}>
            <article className='article'>
                <h4>
                    {number} / {title}
                </h4>
                <p className='text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus, doloribus.
                </p>
            </article>
        </Container>
    );
};

const Container = styled.div`
    .article {
        position: relative;
        margin-bottom: 30px;

        &::after {
            content: '';
            display: block;
            position: absolute;
            top: 120px;
            width: 100%;
            height: 2px;
            text-align: center;
            background-color: ${(props) => props.color};
        }
    }

    .text {
        margin-bottom: 100px;
    }
`;
export default Info;
