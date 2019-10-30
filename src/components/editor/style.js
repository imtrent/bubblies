import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Wrapper = styled.div`
    background-color: ${props => props.theme.background};
    height: 400px;
    border-radius: ${props => props.border};
`;
