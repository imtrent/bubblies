import React from 'react';
import { ThemeProvider } from 'styled-components';
import TabBar from '../tabBar';
import { Wrapper } from './style';

const Editor = ({ settings }) => {
    return (
        <ThemeProvider theme={settings.theme}>
            <Wrapper border={settings.browser.border}>
                {settings.browser.tabBar && (
                    <TabBar border={settings.browser.border} />
                )}
            </Wrapper>
        </ThemeProvider>
    );
};

export default Editor;
