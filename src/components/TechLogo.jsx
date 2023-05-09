import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const TechLogo = ({ image, name }) => {
    return (
        <Container>
            <div className='logo'>
                <Image
                    src={image}
                    alt='tech logo'
                    width={0}
                    height={0}
                    className='logo-img'
                />
            </div>
            <h4 className='name'>{name}</h4>
        </Container>
    );
};

const Container = styled.div`
    .logo {
        background: var(--body-bg-color);
        padding: 0.5rem;
        border-radius: 10px;
        margin-bottom: 1rem;
        display: grid;
        place-items: center;
        cursor: pointer;
        transition: var(--transition);
    }

    .logo:hover {
        transform: scale3d(1.1, 0.8, 1.1);
    }

    .logo-img {
        width: 100%;
        border-radius: 50%;
        height: 100%;

        object-fit: cover;
    }

    .name {
        color: var(--text-color);
        opacity: 0.8;
        text-transform: capitalize;
        text-align: center;
    }
`;
export default TechLogo;
