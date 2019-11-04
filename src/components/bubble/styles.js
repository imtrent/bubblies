import styled from 'styled-components';

const Block = styled.div`
    width: ${props => props.width}px;
    height: 10px;
    border-radius: 5px;
    background-color: red;
    margin-bottom: 10px;
`;

export default Block;
