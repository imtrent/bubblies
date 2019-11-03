import React, { useState } from 'react';

const TabBar = ({ changeBrowserSetting }) => {
    const [checked, setChecked] = useState(false);

    const handleCheckbox = () => {
        setChecked(!checked);
        changeBrowserSetting('tabBar', checked);
    };

    return (
        <div>
            <label htmlFor="tab-bar">
                <input
                    type="checkbox"
                    name="tab-bar"
                    id="tab-bar"
                    checked={checked}
                    onChange={handleCheckbox}
                />
                Window Controls
            </label>
        </div>
    );
};

export default TabBar;
