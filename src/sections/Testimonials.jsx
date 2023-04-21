import React from 'react';
import styled from 'styled-components';

const Testimonials = () => {
    return (
        <TestimonialContainer>
            <main>
                <h1>testimonials</h1>
            </main>
        </TestimonialContainer>
    );
};

const TestimonialContainer = styled.div`
    background: var(--white);
    height: 60vh;
    main {
        width: 80%;
        margin: 0 auto;
    }
`;

export default Testimonials;
