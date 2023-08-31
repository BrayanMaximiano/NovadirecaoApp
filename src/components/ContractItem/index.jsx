import React from 'react'
import { Container, CpfWrapper, IdWrapper, MenuWrapper, NameWrapper, } from './styles'
import ContactPageIcon from '@mui/icons-material/ContactPage';

const index = (props) => {

  function MenuShow(){
    window.alert("It's working !!!")
  }
  return (
    <Container>
        <IdWrapper>{props.id}</IdWrapper>
        <NameWrapper>{props.name}</NameWrapper>
        <CpfWrapper>{props.cpf}</CpfWrapper>
        <MenuWrapper onClick={MenuShow}><ContactPageIcon /> Ver Contrato</MenuWrapper>
    </Container>

  )
}

export default index
