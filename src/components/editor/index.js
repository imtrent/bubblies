import React from 'react';
import { ThemeProvider } from 'styled-components';
import TabBar from '../tabBar';
import { Wrapper } from './style';

const Editor = ({ theme, browserSettings }) => {
    return (
        <ThemeProvider theme={theme}>
            <Wrapper border={browserSettings.border}>
                {browserSettings.tabBar && (
                    <TabBar border={browserSettings.border} />
                )}
            </Wrapper>
        </ThemeProvider>
    );
};

export default Editor;
