import styled from "styled-components";

export const Container = styled.div`
background-color: #fff;
box-shadow: 0 0 5px #CCC;
padding: 20px 10px;
margin-top: 20px;
display: flex;
align-items: center;
`;

export const Input = styled.input`
width: 100%;
height: 30px;
padding: 5px 5px;
border: 1px solid lightblue;
border-radius: 2px;
`;
export const InputLabel = styled.label`
    flex: 1;
    margin: 10px;
    justify-content: space-around;
`;
export const InputTitle = styled.div`
font-weight: bold;
margin-bottom: 5px;
`;

export const Select = styled.select`
width: 100%;
height: 42px;
border: 1px solid lightblue;
`;

export const Button = styled.button`
width: 100%;
padding: 13px 5px;
border: 1px solid lightblue;
background-color: lightblue;
color: black;
cursor: pointer;
&:hover {
    background-color: blue;
    color: white;
}`;