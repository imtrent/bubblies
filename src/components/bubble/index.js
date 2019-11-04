import React, { useEffect, useState } from 'react';
import Block from './styles';

const Bubble = () => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const editor = document.querySelector('.editor').offsetWidth;
        setWidth(Math.floor(Math.random() * (editor - 40)) + 1);
    }, []);

    return <Block width={width} />;
};

export default Bubble;
