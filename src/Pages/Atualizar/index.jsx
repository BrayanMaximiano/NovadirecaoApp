import { Att, AttWapper, Button, Container, Input, Title } from "./styles"
import SideNavigation from "../../components/SideNavigation"

const Index = ()=>{
    return(
        <Container>
            <SideNavigation />
            <AttWapper>
                <Att>
                    <Title> Atualização de funcionarios</Title>
                    <Input type="file"/>
                    <Button> Atualizar Funcionários</Button>
                </Att>
            </AttWapper>
        </Container>
    )
}

export default Index