import Project from '@/components/Project';
import React from 'react';
import styled from 'styled-components';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Projects = () => {
    return (
        <ProjectsContainer>
            <main id='projects'>
                <div className='title'>
                    <h2>featured projects</h2>
                </div>
                <div className='projects-container'>
                    <article>
                        <Project
                            image={'/jobit.svg'}
                            icon={<HiArrowNarrowRight />}
                            imageInfo={'job search'}
                            title={'jobit application'}
                            color={'#0BAB7C'}
                            caseStudy={'/jobit'}
                        />
                    </article>
                    <article>
                        <Project
                            image={'/morent.svg'}
                            icon={<HiArrowNarrowRight />}
                            url={'https://morerent.vercel.app/'}
                            imageInfo={'car rent search'}
                            title={'morent car rental'}
                            details={'MERN application'}
                            color={'#3563E9'}
                            caseStudy={'/morent'}
                        />
                    </article>
                </div>
            </main>
        </ProjectsContainer>
    );
};

const ProjectsContainer = styled.div`
    background: var(--white);

    main {
        width: 80vw;
        margin: 0 auto;
    }

    .projects-container {
        display: grid;
        gap: 2rem;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }

    .title {
        text-align: center;
        position: relative;
        margin-bottom: 3rem;
    }

    .title h2 {
        text-transform: capitalize;
        letter-spacing: var(--spacing);

        margin-bottom: 2rem;
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
                left: 250px;
                background-color: var(--primary-color);
            }
        }
        .projects-container {
            grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
        }
    }
`;

export default Projects;
