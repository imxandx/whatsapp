import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { Theme } from './Theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <App />
    </ThemeProvider>
);