import styled from "styled-components";

export const Container = styled.div`
 height: 100vh;
 width: 100vw;
 display: flex;
 align-items: center;
 justify-content: space-between;
`

export const AttWapper = styled.div`
    width: 857px;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Att = styled.div`
    height: 288px;
    width: 462px;
    background-color: #5E2129;
    border: none;
    border-radius: 10px;
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    padding: 20px;
`
export const Title = styled.h2`
    color: white;
    font-size: 26px;
`

export const Button = styled.button`
height: 56px;
padding: 10px;
border: none;
border-radius: 10px;
cursor: pointer;
transition: all ease 0.5s;

&:hover{
    background-color: rgba(255,255,255, 0.7);
}

`

export const Input = styled.input`
    color: white;
    cursor: pointer;
    border: none;
    
`