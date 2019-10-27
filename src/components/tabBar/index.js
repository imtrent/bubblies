import React from 'react';
import { Bar, Controls } from './style';

const TabBar = props => {
    const { border } = props;
    return (
        <Bar border={border}>
            <Controls>
                <div />
                <div />
                <div />
            </Controls>
        </Bar>
    );
};

export default TabBar;
