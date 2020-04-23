import React from 'react';
import { AntDesign } from '@expo/vector-icons'
import { string } from 'prop-types'
import { Container, Details, Title, Description } from './styles'


export default function BannerSuggestion({ title, description }) {
  return (
    <Container>
      <AntDesign name="shoppingcart" size={35} color="#fc6e06" />
      <Details>
        <Title>{title}</Title>
        <Description>
          {description}
        </Description>
      </Details>
      <AntDesign name="arrowright" size={35} color="#fc6e06" style={{ justifyContent: 'center', alignItems: 'center' }} />
    </Container>
  );
}

BannerSuggestion.propTypes = {
  title: string.isRequired,
  description: string.isRequired
}