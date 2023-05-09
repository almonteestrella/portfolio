import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';

const Logo = () => {
    return (
        <Wrapper>
            <Link href={'/'}>
                <Image
                    src={'/brand.svg'}
                    width={0}
                    height={0}
                    alt='logo'
                    className='nav-logo'
                />
            </Link>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    .nav-logo {
        width: 50px;
        height: auto;
        border-radius: 20px;
        border: 4px solid var(--primary-color);
    }
`;

export default Logo;
