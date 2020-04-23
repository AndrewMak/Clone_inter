import styled from 'styled-components/native';
import { Animated, TouchableOpacity } from 'react-native'
export const Wrapper = styled.SafeAreaView`
  background: #f4f5f9;
  flex: 1;
`;

export const Container = styled.ScrollView``;

export const CardContainer = styled.View`
    align-self: center;
    width: 90%;
    background: transparent;
    border-radius: 5px;
    /* padding-left: 20px; */
    flex-direction: row;
    flex-wrap: wrap;
    border-bottom-color: #ccc;
    border-bottom-width: 1;
`

export const Card = styled.TouchableOpacity`
flex-direction:column;
padding: 8px 0 0 5px;
margin:  10px 22px 16px 0;
elevation: 5;
width: 90px;

`

export const CardImg = styled.View`
  background-color: #e7e7f1;
  border-radius: 95px;
  width: 100%;
  height: 85px;
  padding: 0;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  `

export const CardText = styled.Text`
font-size:12px;
width: 100%;
text-align: center;
  `
export const ContainerHelp = styled.View`
  width:100%;
`
