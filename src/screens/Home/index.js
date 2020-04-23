import React from 'react'
import { Wrapper, Container } from './styles'
import Banner from '../../components/Banner'
import BannerSuggestion from '../../components/BannerSuggestion'
import CardNavigation from '../../components/CardNavigation'
import CardOptions from '../../components/CardOptions'
import Header from '../../components/Header'


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
      </Container>
    </Wrapper>
  );
}