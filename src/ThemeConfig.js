import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
    color: '#222',
    navBg: '#f3f4f6',
    background: '#ffff',
};
export const darkTheme = { color: '#fff', background: '#222' };

export const GlobalStyles = createGlobalStyle`
  body {
    /* background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif; */
    transition: var(--transition)
  }
`;
