import React from 'react'
import { Wrapper, Container, CardContainer, Card, CardImg, CardText } from './styles'
import Banner from '../../components/Banner'
import BannerSuggestion from '../../components/BannerSuggestion'
import CardNavigation from '../../components/CardNavigation'
import CardOptions from '../../components/CardOptions'
import Header from '../../components/Header'
import { Entypo, MaterialCommunityIcons, FontAwesome, Feather, MaterialIcons, Ionicons } from '@expo/vector-icons'
import { Text } from 'react-native'

import icone from '../../images/icone.png';

export default function Home() {
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
        <Header></Header>
        <CardOptions></CardOptions>
        <Banner></Banner>
        <CardNavigation data={items}></CardNavigation>
        <BannerSuggestion title='Shopping' description='Aproveite todos os produtos'></BannerSuggestion>
        <CardContainer>
          <Card>
            <CardImg>
              <Ionicons name="ios-home" size={60} color="#fc6e06" />
            </CardImg>
            <CardText>Casa</CardText>
          </Card>
          <Card>
            <CardImg>
              <MaterialIcons name="movie-filter" size={60} color="#fc6e06" />
            </CardImg>
            <CardText>Entreterimento</CardText>
          </Card>
          <Card>
            <CardImg>
              <MaterialCommunityIcons name="cellphone" size={60} color="#fc6e06" />
            </CardImg>
            <CardText>Tecnologia</CardText>
          </Card>  

          <Card>
            <CardImg>
              <MaterialCommunityIcons name="bus-school" size={60} color="#fc6e06" />
            </CardImg>
            <CardText>Transporte</CardText>
          </Card>    

          <Card>
            <CardImg>
              <MaterialCommunityIcons name="basketball" size={60} color="#fc6e06" />
            </CardImg>
            <CardText>Esporte</CardText>
          </Card>   

          <Card>
            <CardImg>
              <MaterialCommunityIcons name="airplane-takeoff" size={60} color="#fc6e06" />
            </CardImg>
            <CardText>Viagem</CardText>
          </Card>    
          <Card>
            <CardImg>
              <FontAwesome name="heartbeat" size={60} color="#fc6e06" />
            </CardImg>
            <CardText>Saúde</CardText>
          </Card>    
          <Card>
            <CardImg>
              <MaterialCommunityIcons name="text-short" size={60} color="#fc6e06" />
            </CardImg>
            <CardText>Beleza</CardText>
          </Card>    
          <Card>
            <CardImg>
              <Ionicons name="ios-shirt" size={60} color="#fc6e06" />
            </CardImg>
            <CardText>Moda</CardText>
          </Card>           
        </CardContainer>
      </Container>
    </Wrapper>
  );
}