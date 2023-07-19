import {
  BairroResidencial,
  Box1,
  Box2,
  Cep,
  CidadeNascimento,
  CidadeResidencial,
  Complemento,
  Container,
  ContratoWrapper,
  EnderecoResidencial,
  EstadoCivil,
  Nascimento,
  Nome,
  Numero,
  Sexo,
  UF,
  Uf,
} from "./styles";
import SideNavigation from "../../components/SideNavigation";

const Index = () => {
  return (
    <Container>
      <SideNavigation />
      <ContratoWrapper>
        <Box1>
          <Nome placeholder="Nome" />
          <Nascimento placeholder="Nascimento" />
          <CidadeNascimento placeholder="Cidade de Nascimento" />
          <UF placeholder="UF" />
          <Sexo placeholder="Sexo" />
          <EstadoCivil placeholder="Estado Civil" />
        </Box1>

        <Box2>
          <EnderecoResidencial placeholder="Endereço Residencial"/>
          <Numero placeholder="Número"/>
          <Complemento placeholder="Complemento"/>
          <BairroResidencial placeholder="Bairro Residencial"/>
          <CidadeResidencial placeholder="Cidade Residencial"/>
          <Uf placeholder="UF"/>
          <Cep placeholder="CEP"/>
        </Box2>
      </ContratoWrapper>
    </Container>
  );
};

export default Index;
