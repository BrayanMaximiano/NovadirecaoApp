import React from 'react'
import { Container } from './styles'
import SideNavigation from '../../components/SideNavigation'
import ContractItem from '../../components/ContractItem'

const index = () => {
  return (
    <Container>
        <SideNavigation/>
        <ContractItem />
    </Container>
  )
}

export default index
