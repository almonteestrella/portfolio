import TechLogo from '@/components/TechLogo';
import React from 'react';
import styled from 'styled-components';

const Skills = () => {
    return (
        <SkillContainer>
            <main id='technologies'>
                <div className='title'>
                    <h2>technologies I implement</h2>
                </div>
                <div className='grid-content'>
                    <TechLogo image={'/express.svg'} name={'express'} />
                    <TechLogo image={'/js.svg'} name={'javascript'} />
                    <TechLogo image={'/materialui.svg'} name={'materia ui'} />
                    <TechLogo image={'/mern.svg'} name={'mern'} />
                    <TechLogo image={'/mongo.svg'} name={'mongoDB'} />
                    <TechLogo image={'/motion.svg'} name={'framer motion'} />
                    <TechLogo image={'/next.svg'} name={'next'} />
                    <TechLogo image={'/node.svg'} name={'node'} />
                    <TechLogo image={'/react.svg'} name={'react'} />
                    <TechLogo image={'/rtk.svg'} name={'RTK'} />
                    <TechLogo image={'/html&css.svg'} name={'html & css'} />
                    <TechLogo image={'/figma.svg'} name={'figma'} />
                    <TechLogo
                        image={'/styledcomponent.svg'}
                        name={'styled components'}
                    />
                    <TechLogo image={'/tailwind.svg'} name={'tailwind'} />
                </div>
            </main>
        </SkillContainer>
    );
};

const SkillContainer = styled.div`
    background: var(--white);
    padding-bottom: 3rem;

    main {
        width: 80vw;
        margin: 0 auto;
    }

    .title {
        text-align: center;
        position: relative;
        margin-bottom: 3rem;

        & h2 {
            text-transform: capitalize;
            letter-spacing: var(--spacing);
        }
    }

    .grid-content {
        display: grid;
        gap: 2rem;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }

    @media (min-width: 992px) {
        .title {
            text-align: left;
            &::after {
                content: '';
                display: block;
                position: absolute;
                top: 20px;
                width: 300px;
                height: 2px;
                left: 350px;
                background-color: var(--primary-color);
            }
        }
    }
`;

export default Skills;
