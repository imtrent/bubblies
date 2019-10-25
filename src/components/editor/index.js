import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Wrapper } from './style';

const Editor = () => {
    const [settings, setSettings] = useState({
        window: {
            border: '5px'
        }
    });
    return (
        <ThemeProvider theme={}>
            <Wrapper border={settings.window.border}>
                <p>test</p>
            </Wrapper>
        </ThemeProvider>
    );
};

export default Editor;
