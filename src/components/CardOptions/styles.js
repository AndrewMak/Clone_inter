import styled from 'styled-components/native';
import { Animated } from 'react-native'

export const Container = styled.View`
    display: ${props => props.show ? 'flex' : 'none'};
    align-self: center;
    width: 100%;
    background: transparent;
    border-radius: 5px;
    top: -10%;
    padding-left: 20px;
    flex-direction: row;
    flex-wrap: wrap;
`
export const Wrapper = styled.View`
  background:#faf9fe;
  border-radius:5px;
`
export const ContainerCollapse = styled(Animated.View)`
    display: ${props => props.show ? 'flex' : 'none'};
    align-self: center;
    width: 100%;
    background: transparent;
    border-radius: 5px;
    top: -10%;
    padding-left: 20px;
    flex-direction: row;
    flex-wrap: wrap;
`
export const Card = styled.View`
  flex: 0 0 auto;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  elevation: 5;
  height: 100px;
  margin: 10px 15px 0px 0;
  max-height: 180px;
  padding: 0;
  overflow: hidden;
  width: 100px;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px 5px 16px 5px;
`

export const ImgCard = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
`;

export const TextCard = styled.Text`
  color: rgba(0,0,0, 0.8)
  font-size: 12px;
`
export const Collapse = styled.View`
  display: ${props => props.show ? 'flex' : 'none'};
  flex-direction: row;
  margin-top:5px;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-left: -15px;
  background: transparent;
  
`

