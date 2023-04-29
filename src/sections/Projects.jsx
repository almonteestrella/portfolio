import Project from '@/components/Project';
import React from 'react';
import styled from 'styled-components';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Projects = () => {
    return (
        <ProjectsContainer>
            <main>
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
                            details={'front end application'}
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
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    }

    .title h2 {
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        text-align: center;
        margin-bottom: 2rem;
    }
`;

export default Projects;
