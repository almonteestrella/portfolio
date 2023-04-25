import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const TechLogo = ({ image }) => {
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
        </Container>
    );
};

const Container = styled.div`
    .logo {
        background: var(--body-bg-color);
    }

    .logo-img {
        width: 100px;
        height: 100px;
        object-fit: cover;
    }
`;
export default TechLogo;
