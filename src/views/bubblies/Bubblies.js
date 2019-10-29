import React, { useState } from 'react';
import Editor from '../../components/editor';
import Controls from '../../components/controls';
import { Themes } from '../../utils/Themes';
import { Container } from './style';

const Bubblies = () => {
    const [settings, setSettings] = useState({
        browser: {
            tabBar: true,
            border: '5px'
        },
        theme: Themes.ayu
    });

    const handleChangeTheme = newTheme => {
        setSettings({ ...settings, theme: Themes[newTheme.value] });
    };

    return (
        <Container>
            <Controls changeTheme={handleChangeTheme} />
            <Editor settings={settings} />
        </Container>
    );
};

export default Bubblies;
