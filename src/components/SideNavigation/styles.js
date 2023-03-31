import styled  from "styled-components";

export const Container = styled.div`
    width: 303px;
    height: 100vh;
    background-color: #5E2129;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
`

export const Title = styled.h1`
    font-size: 24px;
    text-align: center;
    text-decoration: underline;
    color: white;
`

export const NavWrapper = styled.div`
    width: 80%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
    gap: 24px;
    
    a{
        width: 80%;
    }
`

export const NavigationItem = styled.button`
    width: 100%;
    height: 50px;
    font: bold;
    border-radius: 10px;
    border: none;
    font-size:16px;
    transition: all ease 0.5s;
    
    &:hover{
        cursor: pointer;
        background-color: rgba(255, 255, 255, 0.7);
    }

    
`