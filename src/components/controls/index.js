import React, { useState } from 'react';
import Select from 'react-select';
import { themeList } from '../../utils/Themes';

const Controls = ({ changeTheme }) => {
    const [selectedOption, setSelectedOption] = useState({
        value: 'ayu',
        label: 'Ayu'
    });

    const handleChange = option => {
        setSelectedOption(option);
        changeTheme(option);
    };

    return (
        <div>
            <Select
                options={themeList}
                onChange={handleChange}
                value={selectedOption}
            />
        </div>
    );
};

export default Controls;
