import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  background: #f5f5f5;
  flex: 1;
`;

export const Container = styled.ScrollView``;

export const Header = styled.View`
  height: 130px;
  padding: 16px 24px;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  background: #ff500f;
`;

export const BalanceContainer = styled.View``;

export const BalanceTitle = styled.Text`
  color: #fff;
  font-size: 18px;
  text-align: left;
`;

export const Balance = styled.Text`
  color: rgba(255, 255, 255, 0.8);
  text-align: left;
  font-size: 20px;
`;

export const Photo = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  background: #ccc;
`;
export const PhotoText = styled.Text`
  color: #fff;
  font-size:24px;
`
export const ContainerCard = styled.View`
    align-self: center;
    width: 100%;
    background: transparent;
    border-radius: 5px;
    top: -10%;
    padding-left: 20px;
    padding-bottom: 40px;
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
export const CardCollapse = styled.View`
  flex-direction: row;
  margin-top:5px;
  width: 100%;
  align-items: center;
  justify-content: center;
`