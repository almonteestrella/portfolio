import React from 'react';
import Link from 'next/link';

import styled from 'styled-components';
import { socialLinks } from '@/utils';

const SocialIcons = () => {
    return (
        <Wrapper>
            <ul className='ul-list'>
                {socialLinks.map(({ id, icon, link }) => (
                    <li key={id} className='li-item'>
                        <Link href={link} className='link-item' target='_blank'>
                            {icon}
                        </Link>
                    </li>
                ))}
            </ul>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: fixed;
    bottom: 0;
    left: 4rem;

    .ul-list {
        display: none;
    }

    @media (min-width: 992px) {
        .ul-list {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }

        .li-item {
            display: flex;
            justify-content: center;
            align-items: center;
            transition: var(--transition);
        }

        .link-item {
            padding: 10px;
            transition: var(--transition);
            outline: 2px dashed transparent;
            color: var(--text-color);

            &:hover {
                transform: translateY(-4px);
                color: #ffbe62;
            }

            &:last-child {
                margin-bottom: 2rem;
            }
        }

        &::after {
            content: '';
            display: block;
            width: 2px;
            height: 90px;
            margin: 0px auto;
            background: var(--primary-color);
        }
    }
`;

export default SocialIcons;
