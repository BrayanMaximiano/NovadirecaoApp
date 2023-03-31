import { Link } from "react-router-dom";
import { Container, NavigationItem, NavWrapper, Title } from "./styles"

const Index = ()=>{
    return(
       <Container>
            <Title>Nova Direção Recursos Humanos</Title>
            <NavWrapper>
                <Link to={"/"}><NavigationItem>Home</NavigationItem></Link>
                <Link to={"/atualizar"}><NavigationItem>Atualizar</NavigationItem></Link>
                <Link to={"/form"}><NavigationItem>Contrato</NavigationItem></Link>
                
            </NavWrapper>
       </Container> 
    )
}

export default Index;