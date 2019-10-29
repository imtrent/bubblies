import React, { useState } from 'react';
import Select from 'react-select';
import { themeList } from '../../utils/Themes';

const Controls = ({ changeTheme }) => {
    const [selectedTheme, setSelectedTheme] = useState({
        value: 'ayu',
        label: 'Ayu'
    });

    const handleChange = theme => {
        setSelectedTheme(theme);
        changeTheme(theme);
    };

    return (
        <div>
            <Select
                options={themeList}
                onChange={handleChange}
                value={selectedTheme}
            />
        </div>
    );
};

export default Controls;
