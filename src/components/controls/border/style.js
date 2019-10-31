import styled from 'styled-components';

export const ControlBorder = styled.div`
    /* width: 100px;
    height: 100px; */
    display: flex;
`;

export const BorderControl = styled.div`
    width: 50px;
    height: 50px;
    background-color: red;
    margin-right: 15px;

    &:last-of-type {
        margin-right: 0;
        background-color: green;
    }
`;
