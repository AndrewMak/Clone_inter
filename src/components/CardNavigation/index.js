import React from 'react';
import { Text } from 'react-native'
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons'
import { arrayOf, object } from 'prop-types'
import { Container, Card, Header, HeaderText, Detail, DetailImg } from './styles'

export default function CardNavigation({ data }) { 
    return (
        <Container>
            {data.map((item) => (
                <Card style={{
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.23,
                    shadowRadius: 2.62,
                    elevation: 4,
                }} key={item.key}>
                    <Header>
                        <Entypo name={item.icon} size={25} color="#fc6e06" />
                        <HeaderText>{item.title}</HeaderText>
                        <MaterialCommunityIcons name='eye-off-outline' size={20} color="#fc6e06" />
                    </Header>
                    <Detail>
                        <DetailImg source={item.img}></DetailImg>
                        <Text style={{ color: '#76757d' }}>{item.description}</Text>
                    </Detail>
                </Card>
            ))}
        </Container>
    );
}

CardNavigation.propTypes = {
    data: arrayOf(object)
}
CardNavigation.defaultProps = {
    data: []
  }