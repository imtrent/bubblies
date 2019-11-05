import React from 'react';
import { ThemeProvider } from 'styled-components';
import TabBar from '../tabBar';
import { Wrapper } from './style';
import Bubble from '../bubble';

const Editor = ({ theme, browserSettings }) => {
    return (
        <ThemeProvider theme={theme}>
            <Wrapper border={browserSettings.border} className="editor">
                {browserSettings.tabBar && (
                    <TabBar border={browserSettings.border} />
                )}
                {Array(10).fill(<Bubble />)}
            </Wrapper>
        </ThemeProvider>
    );
};

export default Editor;
