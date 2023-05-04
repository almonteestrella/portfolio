import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import styled from 'styled-components';

const Project = ({ title, image, imageInfo, icon, color, caseStudy }) => {
    return (
        <ProjectContainer color={color}>
            <article>
                <div className='project-image'>
                    <Image
                        src={image}
                        alt={imageInfo}
                        width={0}
                        height={0}
                        className='project-img'
                    />
                </div>
                <div className='project-info'>
                    <h2>{title}</h2>
                    <div className='project-links'>
                        <Link href={caseStudy} target='_blank' className='link'>
                            case study <span>{icon}</span>
                        </Link>
                    </div>
                </div>
            </article>
        </ProjectContainer>
    );
};

const ProjectContainer = styled.div`
    padding: 1.5rem;
    background: ${(props) => props.color};
    border-radius: 10px;
    transition: var(--transition);
    &:hover {
        box-shadow: var(--dark-shadow);
        transform: scale(1.02);
    }

    .project-img {
        width: 100%;
        height: auto;
        object-fit: contain;
        border-radius: var(--radius);
    }

    .project-info {
        transition: var(--transition);
        opacity: 0;

        &:hover {
            opacity: 1;
        }
    }

    small,
    .project-info h2 {
        color: var(--white);
    }

    .project-links {
        display: flex;
        justify-content: space-between;
        max-width: 300px;
    }

    .project-info h2 {
        margin-bottom: 10px;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
    }

    .link {
        padding: 0.8rem 1rem;
        display: inline-block;
        align-items: center;
        background: none;
        border: none;
        outline: 2px solid var(--white);
        transition: var(--transition);
        border-radius: var(--radius);
        color: var(--white);
        letter-spacing: var(--spacing);
        text-transform: uppercase;
        cursor: pointer;
    }

    .link span {
        display: inline-block;
        align-self: center;
        margin-top: 2px;
        margin-left: 10px;
    }

    .tech-img {
        width: 40px;
        height: auto;
        margin-right: 10px;
    }
`;

export default Project;
