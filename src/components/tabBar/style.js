import styled from 'styled-components';

export const Bar = styled.div`
    background-color: ${props => props.theme.background};
    border-radius: ${props => props.border} ${props => props.border} 0 0;
`;

export const Controls = styled.div`
    display: flex;
    padding: 10px;

    div {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        margin-right: 10px;

        &:first-of-type {
            background-color: #ff554e;
        }

        &:nth-of-type(2) {
            background-color: #fdaf21;
        }

        &:last-of-type {
            background-color: #24c339;
        }
    }
`;
