import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${props => props.theme.colors.backgroundColor};
    box-shadow: 0px 0px 5px ${props => props.theme.colors.secondary};
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px;
    display: flex;
    align-items: center;
`;
export const InputLabel = styled.label`
    flex: 1;
    margin: 10px;
`;
export const InputTitle = styled.div`
    font-weight: bold;
    margin-bottom: 5px;
`;
export const Input = styled.input`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid ${props => props.theme.colors.primary};
    border-radius: 5px;
`;
export const Select = styled.select`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid ${props => props.theme.colors.primary};
    border-radius: 5px;
`;
export const Button = styled.button`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid ${props => props.theme.colors.primary};
    border-radius: 5px;
    background-color: ${props => props.theme.colors.primary};
    color: #ede9fe;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
        filter: brightness(0.8)
    }
`;