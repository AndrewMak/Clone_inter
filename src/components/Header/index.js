import React, { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Container, Detail, Title, Balance, Eye, Photo, PhotoText } from './styles'
import { View } from 'react-native'
export default function Header() {
    const [iconEye, seticonEye] = useState(false)
    return (
        <Container>
            <Detail>
                <Title>Saldo em Conta</Title>
                <Balance show={iconEye}>R$ 100.000,00</Balance>
            </Detail>
            <Eye><View style={{ width: 15, height: 15 }}></View><MaterialCommunityIcons name={iconEye ? 'eye-outline' : 'eye-off-outline'} size={20} color="#fff" onPress={() => seticonEye(!iconEye)} /></Eye>
            <Photo><PhotoText>AC</PhotoText></Photo>
        </Container>
    )
}