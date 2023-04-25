import React from 'react';
import styled from 'styled-components';

const Skills = () => {
    return (
        <SkillContainer>
            <main>
                <div className='content'></div>
            </main>
        </SkillContainer>
    );
};

const SkillContainer = styled.div`
    background: var(--white);

    main {
        width: 80vw;
        margin: 0 auto;
    }
`;

export default Skills;
