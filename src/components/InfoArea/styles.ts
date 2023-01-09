import styled from "styled-components";

export const Container = styled.div`
    background-color: ${props => props.theme.colors.backgroundColor};
    box-shadow: 0px 0px 2px ${props => props.theme.colors.secondary};
    border-radius: 10px;
    padding: 20px;
    margin-top: -40px;
    display: flex;
    align-items: center;
`;

export const MonthArea = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

export const MonthArrow = styled.div`
    width: 40px;
    text-align: center;
    color: ${props => props.theme.colors.arrow};
    font-size: 25px;
    cursor: pointer;
`;

export const MonthTitle = styled.div`
    flex: 1;
    text-align: center;
    color: ${props => props.theme.colors.text};
    font-weight: bold;
`;

export const ResumeArea = styled.div`
    flex: 2;
    display: flex;
`;