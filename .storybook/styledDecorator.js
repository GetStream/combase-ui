import React from 'react';
import { ThemeProvider } from 'styled-components';
import { light } from '../src/styles/theme';
import GlobalStyles from '../src/styles/global';

const ThemeDecorator = storyFn => (
    <ThemeProvider theme={light}>
        <>
            {storyFn()}
            <GlobalStyles />
        </>
    </ThemeProvider>
);

export default ThemeDecorator;
