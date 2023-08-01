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
import { useState } from "react";

const Index = () => {

 

 const [values,setValues] = useState();

 const HandleChangeValues = (value) => {
  setValues((prevValue)=>({
    ...prevValue,
    [value.target.name]: value.target.value,
  }));
 }

 function ImprimeContrato(){
  console.log(values)
 };
 function ImprimeConferencia(){
  window.alert('Imprimindo conferencia')
 };


  return (
    <Container>
      <SideNavigation />
      <ContratoWrapper>
        <Box1>
          <Nome 
          placeholder="Nome"
          type="text"
          name="Nome"
          onChange={HandleChangeValues} />

          <Nascimento 
          placeholder="Nascimento"
          type="text"
          name="Nascimento"
          onChange={HandleChangeValues} />

          <CidadeNascimento 
          placeholder="Cidade de Nascimento"
          type="text"
          name="Cidade"
          onChange={HandleChangeValues} />

          <UF 
          placeholder="UF"
          type="text"
          name="Uf"
          onChange={HandleChangeValues} />

          <Sexo 
          placeholder="Sexo"
          type="text"
          name="Sexo" 
          onChange={HandleChangeValues}/>

          <EstadoCivil 
          placeholder="Estado Civil"
          type="text"
          name="EstadoCivil"
          onChange={HandleChangeValues} />
        </Box1>

        <Box2>
          <EnderecoResidencial 
          placeholder="Endereço Residencial"
          type="text"
          name="EnderecoResidencial" 
          onChange={HandleChangeValues}/>

          <Numero 
          placeholder="Número" 
          type="text"
          name="NumeroResidencial"
          onChange={HandleChangeValues}/>

          <Complemento 
          placeholder="Complemento"
          type="text"
          name="Complemento"
          onChange={HandleChangeValues} />

          <BairroResidencial 
          placeholder="Bairro Residencial"
          type="text"
          name="BairroResidencial"
          onChange={HandleChangeValues} />

          <CidadeResidencial 
          placeholder="Cidade Residencial"
          name="CidadeResidencial"
          type="text"
          onChange={HandleChangeValues} />

          <Uf 
          placeholder="UF" 
          type="text"
          onChange={HandleChangeValues}
          name="UfNascimento"/>

          <Cep placeholder="CEP" 
          type="text"
          onChange={HandleChangeValues}
          name="CEP"/>
          
        </Box2>
        <Box3>
          <Cpts 
          placeholder="C.P.T.S."
          type="text"
          name="Cpts"
          onChange={HandleChangeValues} />

          <Serie 
          placeholder="Série"
          type="text"
          name="Serie"
          onChange={HandleChangeValues} />

          <UfCpts 
          placeholder="UF"
          type="text"
          name="UfCpts"
          onChange={HandleChangeValues} />

          <DtCpts 
          placeholder="Emissão"
          type="text"
          name="DataCpts"
          onChange={HandleChangeValues} />

          <Rg 
          placeholder="RG"
          type="text"
          name="RG"
          onChange={HandleChangeValues} />

          <UfRg 
          placeholder="UF"
          type="text"
          name="UfRg"
          onChange={HandleChangeValues} />

          <DtRg 
          placeholder="Emissão"
          type="text"
          name="DataRg"
          onChange={HandleChangeValues} />

          <CPF 
          placeholder="C.P.F."
          type="text"
          name="Cpf"
          onChange={HandleChangeValues} />

          <Pis 
          placeholder="P.I.S."
          type="text"
          name="Pis"
          onChange={HandleChangeValues} />

        </Box3>
        <Box4>
          <NomeMae 
          placeholder="Nome da Mãe"
          name="NomeDaMae"
          type="text"
          onChange={HandleChangeValues} />

          <NomePai 
          placeholder="Nome do Pai"
          name="NomeDoPai"
          type="text"
          onChange={HandleChangeValues} />

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
