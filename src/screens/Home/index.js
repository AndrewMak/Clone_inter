import React from 'react'

import { MaterialCommunityIcons, AntDesign, Entypo, Feather, FontAwesome5 } from '@expo/vector-icons'
import { Text } from 'react-native'
import {
  Wrapper, Container, Header, BalanceContainer, BalanceTitle,
  Balance, Photo, PhotoText, ContainerCard, Card, ImgCard, TextCard, 
  CardCollapse
} from './styles'

export default function Home() {
  return (
    <Wrapper>
      <Container>
        <Header>
          <BalanceContainer>
            <BalanceTitle>Saldo em Conta</BalanceTitle>
            <Balance>R$ 100.000,00</Balance>
          </BalanceContainer>
          <Photo><PhotoText>AC</PhotoText></Photo>
        </Header>
        <ContainerCard>
          <Card><ImgCard><AntDesign name="retweet" size={25} color="#ff500f" /></ImgCard><TextCard>Transferências</TextCard></Card>
          <Card><ImgCard><MaterialCommunityIcons name="barcode-scan" size={25} color="#ff500f" /></ImgCard><TextCard>Pagamentos</TextCard></Card>
          <Card><ImgCard><Entypo name="line-graphs" size={25} color="#ff500f" /></ImgCard><TextCard>Investimentos</TextCard></Card>
          <Card><ImgCard><Feather name="credit-card" size={25} color="#ff500f" /></ImgCard><TextCard>Cartão</TextCard></Card>
          <Card><ImgCard><FontAwesome5 name="handshake" size={25} color="#ff500f" /></ImgCard><TextCard>Empréstimos</TextCard></Card>
          <Card><ImgCard><AntDesign name="gift" size={25} color="#ff500f" /></ImgCard><TextCard>Gift Card</TextCard></Card>
          <CardCollapse><AntDesign name="down" size={25} color="#ff500f" style={{alignItems: 'center',justifyContent: 'center'}} /></CardCollapse>
        </ContainerCard>
      </Container>
    </Wrapper>
  );
}