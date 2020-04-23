import React from 'react';
import { EvilIcons, AntDesign } from '@expo/vector-icons'

import { Container, Details, Title, Description } from './styles';


export default function BannerShopping() {
  return (
    <Container>
      <AntDesign name="shoppingcart" size={35} color="#fc6e06" />
      <Details>
        <Title>Shopping</Title>
        <Description>
          Aproveite todos os produtos
        </Description>
      </Details>
      <AntDesign name="arrowright" size={35} color="#fc6e06" style={{  justifyContent: 'center', alignItems: 'center'}} />
    </Container>
  );
}