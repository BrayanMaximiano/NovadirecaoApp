import styled from "styled-components";

export const Container = styled.div`
    height: 46px;
    width: 800px;
    display: flex;
    align-items: center;
    justify-content: center;
    

`
export const IdWrapper = styled.div`
height: 100%;
width: 84px;
border: 1px solid black;
display: flex;
align-items: center;
justify-content: center;
`

export const Id = styled.p`

`

export const NameWrapper = styled.div`
height: 100%;
width: 368px;
border: 1px solid black;
display: flex;
align-items: center;
justify-content: center;
`

export const Name = styled.p`
`

export const CpfWrapper = styled.div`
height: 100%;
width: 173px;
border: 1px solid black;
display: flex;
align-items: center;
justify-content: center;
`

export const Cpf = styled.p`
`

export const MenuWrapper = styled.div`
height: 100%;
width: 175px;
border: 1px solid black;
display: flex;
align-items: center;
justify-content: center ;
transition: all ease 0.5s;
&:hover{
    cursor: pointer;
    background-color: rgba(157, 38, 54, 0.2);
}

svg{
    font-size: 30px;
    margin-right: 5px;
}
`
