import AppProvider, { AppContext } from '@/context/context';
import '@/styles/globals.css';
import { useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';

const lightTheme = {
    color: '#222',
    navBg: '#f3f4f6',
    background: '#ffff',
};
const darkTheme = {
    color: '#fff',
    background: '#222',
};

export default function App({ Component, pageProps }) {
    const [theme, setTheme] = useState('light');
    const isDarkTheme = theme === 'dark';

    const toggleTheme = () => {
        setTheme(isDarkTheme ? 'light' : 'dark');
    };

    return (
        <>
            <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
                <AppProvider>
                    <Component {...pageProps} />
                </AppProvider>
            </ThemeProvider>
        </>
    );
}
