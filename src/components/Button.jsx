import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const Button = ({ text, path }) => {
    return <Link href={path}>{text}</Link>;
};

const Wrapper = styled.button``;

export default Button;
