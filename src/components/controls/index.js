import React from 'react';
import Select from 'react-select';
import { themeList } from '../../utils/Themes';
import Border from './border';

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
        </div>
    );
};

export default Controls;
