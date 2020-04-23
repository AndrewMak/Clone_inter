import React, { useState, useEffect } from 'react'

import { MaterialCommunityIcons, AntDesign, Entypo, Feather, FontAwesome5 } from '@expo/vector-icons'
import { Text, Animated, View } from 'react-native'
import {
  Wrapper, Container, Header, BalanceContainer, BalanceTitle,
  Balance, Photo, PhotoText, ContainerCard, Card, ImgCard, TextCard, ContainerCollapse, CardNavigationContainer, WrapperCard,
  CardCollapse, CardNavigation, CardNavigationImg, CardNavigationHeader, CardNavigationHeaderText, CardNavigationDetail
} from './styles'
import Banner from '../../components/Banner'
import BannerShopping from '../../components/BannerShopping'
import icone from '../../images/icone.png';

export default function Home() {
  const [isShow, setShow] = useState(false)
  const [opacity, setOpacity] = useState(new Animated.Value(0))

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [opacity,])

  const handleCollapse = () => {
    setOpacity(new Animated.Value(0))
    setShow(!isShow)
  }
  const items = [
    {
      key: String(Math.random()),
      icon: 'text-document',
      title: 'Extrato',
      description: 'As Informações estão ocultas para garantir sua privacidade, para habilitá-las, basta clicar no olho acima',
      img: icone
    },
    {
      key: String(Math.random()),
      icon: 'text-document',
      title: 'Mastercard XXXX',
      description: 'As Informações estão ocultas para garantir sua privacidade, para habilitá-las, basta clicar no olho acima',
      img: icone
    },
    {
      key: String(Math.random()),
      icon: 'text-document',
      title: 'Investimentos',
      description: 'As Informações estão ocultas para garantir sua privacidade, para habilitá-las, basta clicar no olho acima',
      img: icone
    }
  ];
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
        <WrapperCard>
          <ContainerCard show={true}>
            <Card><ImgCard><AntDesign name="retweet" size={25} color="#fc6e06" /></ImgCard><TextCard>Transferências</TextCard></Card>
            <Card><ImgCard><MaterialCommunityIcons name="barcode-scan" size={25} color="#fc6e06" /></ImgCard><TextCard>Pagamentos</TextCard></Card>
            <Card><ImgCard><Entypo name="add-to-list" size={25} color="#fc6e06" /></ImgCard><TextCard>Investimentos</TextCard></Card>
            <CardCollapse show={!isShow}><AntDesign.Button name="down" onPress={() => handleCollapse()} size={25} color="#fc6e06" style={{
              alignItems: 'center',
              justifyContent: 'center', backgroundColor: '#faf9fe'
            }} /></CardCollapse>
          </ContainerCard>
          <ContainerCollapse show={isShow} style={[
            {
              opacity: opacity,
              transform: [
                {
                  scale: opacity.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.85, 1],
                  })
                },
              ],
            }
          ]}>
            <Card><ImgCard><Feather name="credit-card" size={25} color="#fc6e06" /></ImgCard><TextCard>Cartão</TextCard></Card>
            <Card><ImgCard><FontAwesome5 name="handshake" size={25} color="#fc6e06" /></ImgCard><TextCard>Empréstimos</TextCard></Card>
            <Card><ImgCard><AntDesign name="gift" size={25} color="#fc6e06" /></ImgCard><TextCard>Gift Card</TextCard></Card>
            <Card><ImgCard><AntDesign name="retweet" size={25} color="#fc6e06" /></ImgCard><TextCard>Transferências</TextCard></Card>
            <Card><ImgCard><MaterialCommunityIcons name="barcode-scan" size={25} color="#fc6e06" /></ImgCard><TextCard>Pagamentos</TextCard></Card>
            <Card><ImgCard><Entypo name="add-to-list" size={25} color="#fc6e06" /></ImgCard><TextCard>Investimentos</TextCard></Card>
            <Card><ImgCard><AntDesign name="retweet" size={25} color="#fc6e06" /></ImgCard><TextCard>Transferências</TextCard></Card>
            <Card><ImgCard><MaterialCommunityIcons name="barcode-scan" size={25} color="#fc6e06" /></ImgCard><TextCard>Pagamentos</TextCard></Card>
            <Card><ImgCard><Entypo name="add-to-list" size={25} color="#fc6e06" /></ImgCard><TextCard>Investimentos</TextCard></Card>

            <CardCollapse show={isShow}>
              <AntDesign.Button name="up" onPress={() => handleCollapse()} size={25} color="#fc6e06" style={{
                alignItems: 'center',
                justifyContent: 'center', backgroundColor: '#faf9fe'
              }} />
            </CardCollapse>
          </ContainerCollapse>
        </WrapperCard>
        <Banner></Banner>
        <CardNavigationContainer>
          {items.map((item) => (
            <CardNavigation style={{
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.23,
              shadowRadius: 2.62,              
              elevation: 4,
            }} key={item.key}>
              <CardNavigationHeader>
                <Entypo name={item.icon} size={25} color="#fc6e06" />
                <CardNavigationHeaderText style={{ flex: 1 }}>{item.title}</CardNavigationHeaderText>
                <MaterialCommunityIcons name='eye-off-outline' size={20} color="#fc6e06" />
              </CardNavigationHeader>
              <CardNavigationDetail>
                <CardNavigationImg source={item.img}></CardNavigationImg>
                <Text style={{ color: '#76757d' }}>{item.description}</Text>
              </CardNavigationDetail>
            </CardNavigation>
          ))}
        </CardNavigationContainer>
        <BannerShopping></BannerShopping>
      </Container>
    </Wrapper>
  );
}