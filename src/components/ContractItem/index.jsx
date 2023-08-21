import React from 'react'
import { Container, CpfWrapper, IdWrapper, MenuWrapper, NameWrapper, } from './styles'
import ContactPageIcon from '@mui/icons-material/ContactPage';

const index = () => {
  return (
    <Container>
        <IdWrapper>2306</IdWrapper>
        <NameWrapper>Brayan Igor Fiola Maximiano</NameWrapper>
        <CpfWrapper>489.703.218-02</CpfWrapper>
        <MenuWrapper><ContactPageIcon /> Ver Contrato</MenuWrapper>
    </Container>

  )
}

export default index
