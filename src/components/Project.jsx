import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import styled from 'styled-components';

const Project = ({ url, details, title, image, imageInfo, icon, color }) => {
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
                    <small>{details}</small>
                </div>
                <div className='project-info'>
                    <h2>{title}</h2>
                    <div className='project-links'>
                        <Link href={url} target='_blank' className='link'>
                            live preview <span>{icon}</span>
                        </Link>
                        <button className='link'>
                            case study <span>{icon}</span>
                        </button>
                    </div>
                </div>
                {/* <footer>
                    <Image
                        src={'/next.svg'}
                        className='tech-img'
                        width={0}
                        height={0}
                    />
                    <Image
                        src={'/tailwind.svg'}
                        className='tech-img'
                        width={0}
                        height={0}
                    />
                </footer> */}
            </article>
        </ProjectContainer>
    );
};

const ProjectContainer = styled.div`
    padding: 1.5rem;
    background: ${(props) => props.color};
    border-radius: 10px;
    .project-img {
        width: 100%;
        height: auto;
        object-fit: contain;
        border-radius: var(--radius);
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
        display: flex;
        padding: 0.5rem 0.8rem;
        justify-content: space-between;
        align-items: center;

        background: none;
        border: none;
        outline: 2px solid var(--white);
        transition: var(--transition);
        border-radius: var(--radius);
        color: var(--white);
        letter-spacing: var(--spacing);
        text-transform: capitalize;
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
