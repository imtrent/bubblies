import React from 'react';
import Sharp from '../../../imgs/border-sharp.png';
import Rounded from '../../../imgs/border-rounded.png';
import { ControlBorder, BorderControl } from './style';

const Border = ({ changeBrowserSetting }) => {
    return (
        <ControlBorder>
            <BorderControl
                onClick={() => changeBrowserSetting('border', '0px')}
                background={Sharp}
            />
            <BorderControl
                onClick={() => changeBrowserSetting('border', '5px')}
                background={Rounded}
            />
        </ControlBorder>
    );
};

export default Border;
