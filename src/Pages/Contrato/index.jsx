import { Box1, CidadeNascimento, Container, ContratoWrapper, EstadoCivil, Label, Nascimento, Nome, Sexo, UF } from "./styles";
import SideNavigation from "../../components/SideNavigation";

const Index = () => {
  return (
    <Container>
      <SideNavigation/>
      <ContratoWrapper>
        <Box1>
          
          <Nome placeholder="Nome"/>
          <Nascimento placeholder="Nascimento"/>
          <CidadeNascimento placeholder="Cidade de Nascimento"/>
          <UF placeholder="UF"/>
          <Sexo placeholder="Sexo"/>
          <EstadoCivil placeholder="Estado Civil"/>
          
        </Box1>
      </ContratoWrapper>
    </Container>
  );
};

export default Index;
