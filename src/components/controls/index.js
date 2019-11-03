import React from 'react';
import Select from 'react-select';
import TabBar from './tabBar';
import Border from './border';
import { themeList } from '../../utils/Themes';

const Controls = ({ handleChangeTheme, handleBrowserSetting }) => {
    const changeBrowserSetting = (property, value) => {
        handleBrowserSetting(property, value);
    };

    return (
        <div>
            <Select
                options={themeList}
                onChange={handleChangeTheme}
                defaultValue={{ label: 'Ayu', value: 'ayu' }}
            />
            <Border changeBrowserSetting={changeBrowserSetting} />
            <TabBar changeBrowserSetting={changeBrowserSetting} />
        </div>
    );
};

export default Controls;
