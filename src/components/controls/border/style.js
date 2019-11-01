import styled from 'styled-components';

export const ControlBorder = styled.div`
    display: flex;
`;

export const BorderControl = styled.div`
    width: 50px;
    height: 50px;
    background-image: url('${props => props.background}');
    margin-right: 15px;
    cursor: pointer;

    &:last-of-type {
        margin-right: 0;
    }
`;
