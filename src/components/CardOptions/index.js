import React, { useState, useEffect } from 'react'
import { Entypo, MaterialCommunityIcons, AntDesign, Feather, FontAwesome5 } from '@expo/vector-icons'
import { arrayOf, object } from 'prop-types'
import {Wrapper, Container, Card, ImgCard, TextCard, Collapse, ContainerCollapse } from './styles'
import { Animated } from 'react-native'

export default function CardOptions() {
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
    return (
        <Wrapper>
            <Container show={true}>
                <Card><ImgCard><AntDesign name="retweet" size={25} color="#fc6e06" /></ImgCard><TextCard>Transferências</TextCard></Card>
                <Card><ImgCard><MaterialCommunityIcons name="barcode-scan" size={25} color="#fc6e06" /></ImgCard><TextCard>Pagamentos</TextCard></Card>
                <Card><ImgCard><Entypo name="add-to-list" size={25} color="#fc6e06" /></ImgCard><TextCard>Investimentos</TextCard></Card>
                <Collapse show={!isShow}><AntDesign.Button name="down" onPress={() => handleCollapse()} size={25} color="#fc6e06" style={{
                    alignItems: 'center',
                    justifyContent: 'center', backgroundColor: '#faf9fe'
                }} /></Collapse>
            </Container>
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

                <Collapse show={isShow}>
                    <AntDesign.Button name="up" onPress={() => handleCollapse()} size={25} color="#fc6e06" style={{
                        alignItems: 'center',
                        justifyContent: 'center', backgroundColor: '#faf9fe'
                    }} />
                </Collapse>
            </ContainerCollapse>
        </Wrapper>
    );
}

// CardOptions.propTypes = {
//     data: arrayOf(object)
// }
// CardOptions.defaultProps = {
//     data: []
// }