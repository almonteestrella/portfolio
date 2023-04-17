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
                            professional <br />
                            web developer
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
                        width={600}
                        height={500}
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
        display: flex;
        justify-content: center;
        gap: 5rem;
        min-height: calc(100vh - 119px);
    }

    .hero-info {
        width: 400px;
        & h4 {
            text-transform: uppercase;
            color: var(--primary-color);
        }
    }

    .hero-img {
        object-fit: cover;
        border-radius: 20px;
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

// .hero {
//   margin-top: 4rem;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   gap: 1rem;
//   justify-content: center;
//   min-height: 60vh;
//   &-title {
//     color: var(--theme-color);
//     font-size: var(--tsm2);
//     font-family: var(--fira-code);
//   }
//   &-title-large {
//     font-size: var(--tgiant);
//     font-family: var(--raleway);
//     color: var(--light-slate);
//   }
//   &-title-sub {
//     color: var(--lightest-slate);
//   }
//   &-text {
//     color: var(--slate);
//     margin-right: 40%;
//     font-size: var(--tlarge);
//     letter-spacing: 0.07rem;
//     line-height: 1.6rem;
//     font-weight: 600;
//     font-family: var(--raleway);
//   }
//   &-button {
//     margin-top: 2rem;
//     .btn {
//       padding: 1rem 2rem;
//       font-size: var(--tsm1);
//     }
//   }
//   @media screen and (max-width: 768px) {
//     &-text {
//       width: 90%;
//     }
//   }
// }
