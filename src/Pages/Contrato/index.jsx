import {
  BairroResidencial,
  Box1,
  Box2,
  Box3,
  Box4,
  Box5,
  Button,
  CPF,
  Cep,
  CidadeNascimento,
  CidadeResidencial,
  Complemento,
  Container,
  ContratoWrapper,
  Cpts,
  DtCpts,
  DtRg,
  EnderecoResidencial,
  EstadoCivil,
  Nascimento,
  Nome,
  NomeMae,
  NomePai,
  Numero,
  Pis,
  Rg,
  Serie,
  Sexo,
  UF,
  Uf,
  UfCpts,
  UfRg,
} from "./styles";
import SideNavigation from "../../components/SideNavigation";

const Index = () => {

 function ImprimeContrato(){
  window.alert('Imprimindo contrato')
 };
 function ImprimeConferencia(){
  window.alert('Imprimindo conferencia')
 };
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
          <EnderecoResidencial placeholder="Endereço Residencial" />
          <Numero placeholder="Número" />
          <Complemento placeholder="Complemento" />
          <BairroResidencial placeholder="Bairro Residencial" />
          <CidadeResidencial placeholder="Cidade Residencial" />
          <Uf placeholder="UF" />
          <Cep placeholder="CEP" />
        </Box2>
        <Box3>
          <Cpts placeholder="C.P.T.S." />
          <Serie placeholder="Série" />
          <UfCpts placeholder="UF" />
          <DtCpts placeholder="Emissão" />
          <Rg placeholder="RG" />
          <UfRg placeholder="UF" />
          <DtRg placeholder="Emissão" />
          <CPF placeholder="C.P.F." />
          <Pis placeholder="P.I.S." />
        </Box3>
        <Box4>
          <NomeMae placeholder="Nome da Mãe" />
          <NomePai placeholder="Nome do Pai" />
        </Box4>
        <Box5>
          <Button onClick={ImprimeContrato}>Imprimir Contrato</Button>
          <Button onClick={ImprimeConferencia}>Imprimir Conferencia</Button>
        </Box5>
      </ContratoWrapper>
    </Container>
  );
};

export default Index;
