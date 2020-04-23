import React from 'react';
import { EvilIcons, SimpleLineIcons } from '@expo/vector-icons'

import { Container, Details, Title, Description } from './styles'


export default function Banner() {
  return (
    <Container>
      <SimpleLineIcons name="social-youtube" size={25} color="#fc6e06" />
      <Details>
        <Title>Uber Eats com cashback =P</Title>
        <Description>
          Compre Gift Cards de Uber Easts aqui e ganhe 4% de cashback. Vem!
        </Description>
      </Details>
      <EvilIcons name="close" size={35} color="#000" style={{ justifyContent: 'center', alignItems: 'center' }} />
    </Container>
  )
}