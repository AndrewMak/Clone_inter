import React, { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Container, Detail, Title, Balance, Eye, Photo, PhotoText, ContainerBalance, Wrapper } from './styles'
import { View } from 'react-native'
export default function Header() {
    const [iconEye, seticonEye] = useState(false)
    return (
        <Container>
            <View style={{width: 150, height: 80}}>
            <ContainerBalance>
                <Wrapper>
                    <Detail>
                        <Title>Saldo em Conta</Title>
                        <Balance show={iconEye}>R$ 10.900,80</Balance>
                    </Detail>
                    <Eye><View style={{ width: 15, height: 15 }}></View><MaterialCommunityIcons name={iconEye ? 'eye-outline' : 'eye-off-outline'} size={20} color="#fff" onPress={() => seticonEye(!iconEye)} /></Eye>
                </Wrapper>
                <Wrapper>
                    <Detail>
                        <Title>Investimentos</Title>
                        <Balance show={iconEye}>R$ 900.000,00</Balance>
                    </Detail>
                    <Eye><View style={{ width: 15, height: 15 }}></View><MaterialCommunityIcons name={iconEye ? 'eye-outline' : 'eye-off-outline'} size={20} color="#fff" onPress={() => seticonEye(!iconEye)} /></Eye>
                </Wrapper>
            </ContainerBalance></View>
            <Photo><PhotoText>AC</PhotoText></Photo>
        </Container>
    )
}