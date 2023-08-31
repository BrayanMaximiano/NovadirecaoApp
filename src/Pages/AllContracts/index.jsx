import React, { useEffect, useState } from 'react'
import { Container, ContractWrapper } from './styles'
import SideNavigation from '../../components/SideNavigation'
import ContractItem from '../../components/ContractItem'
import axios from 'axios'

const index = () => {
  
 const [listContracts, setListContract] = useState();

 useEffect(()=>{
  axios.get("https://ndserver.onrender.com/getContracts").then((response) => {
    setListContract(response.data);
  })
 })
  return (
    <Container>
        <SideNavigation/>
        <ContractWrapper>
        {
          typeof listContracts !== "undefined" &&
          listContracts.map((value)=> {
            return(
              <ContractItem
              listContracts={listContracts}
              setListContract={setListContract}
              key={value.id}
              id={value.id}
              name={value.nome}
              cpf={value.cpf}/>
            )
          })
        }
        </ContractWrapper>
        
    </Container>
  )
}

export default index
