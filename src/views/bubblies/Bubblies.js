/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Editor from '../../components/editor';
import Controls from '../../components/controls';
import { Themes } from '../../utils/Themes';
import { Container } from './style';

export default class Bubblies extends React.Component {
    constructor() {
        super();

        this.state = {
            browser: {
                tabBar: true,
                border: '5px'
            },
            theme: Themes.ayu
        };
    }

    handleChangeTheme = newTheme => {
        this.setState(() => ({ theme: Themes[newTheme.value] }));
    };

    handleBrowserSetting = (property, value) => {
        this.setState(prevState => ({
            browser: {
                ...prevState.browser,
                [property]: value
            }
        }));
    };

    render() {
        return (
            <Container>
                <Controls
                    handleChangeTheme={this.handleChangeTheme}
                    handleBrowserSetting={this.handleBrowserSetting}
                />
                <Editor
                    theme={this.state.theme}
                    browserSettings={this.state.browser}
                />
            </Container>
        );
    }
}
