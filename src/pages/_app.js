import { GlobalStyles, darkTheme, lightTheme } from '@/ThemeConfig';

import AppProvider from '@/context/context';
import '@/styles/globals.css';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

export default function App({ Component, pageProps }) {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        theme == 'light' ? setTheme('dark') : setTheme('light');
    };

    return (
        <>
            <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
                <GlobalStyles />
                {/* <button onClick={toggleTheme}>swith mode</button> */}
                <AppProvider>
                    <Component {...pageProps} />
                </AppProvider>
            </ThemeProvider>
        </>
    );
}
