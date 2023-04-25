import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import Button from '@/components/Button';

const Hero = () => {
    return (
        <Wrapper>
            <main>
                <div className='hero-content'>
                    <div className='hero-info'>
                        <h4>hi, i am juan almonte</h4>
                        <h1 className='hero-title'>
                            professional web developer
                        </h1>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Repellat corrupti non doloribus esse inventore
                            consequatur aspernatur accusamus quasi aperiam,
                            blanditiis excepturi fugiat provident sed
                            praesentium totam at dolorum perspiciatis
                            voluptatem.
                        </p>

                        <Button text={'contact me'} path={'#contact'} />
                    </div>

                    <Image
                        src={'/hero-img.svg'}
                        width={0}
                        height={0}
                        alt='hero-img'
                        className='hero-img'
                    />
                </div>
            </main>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    margin-bottom: 3rem;

    .hero-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 5rem;
        min-height: calc(100vh - 119px);
    }

    .hero-info {
        width: 500px;
        & h4 {
            text-transform: uppercase;
            color: var(--primary-color);
        }
    }

    .hero-img {
        object-fit: cover;
        border-radius: 20px;
        width: 100%;

        height: auto;
    }

    .hero-title {
        font-weight: 700;
        font-size: 67px;
        line-height: 75px;
        text-transform: capitalize;
        margin-bottom: 36px;
    }
`;

export default Hero;
