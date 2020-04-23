import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background: #e7e7f1;
  height: 90px;
  flex-direction: row;
  align-items: center;
  padding-left: 15px;
  padding-right:25px;  
  margin: 25px 16px;
  border-radius: 8px;
  padding-bottom: 25px;
  padding-top: 25px;
`;

export const Details = styled.View`
  flex: 1;
  padding-left:26px;
  padding-right:14px;
`;

export const Title = styled.Text`
  color: #6a6c80;
  font-size: 20px;
  font-weight: bold;
  margin-bottom:5px;
`;

export const Description = styled.Text`
  color: #9190a0;
  font-weight:300;
  font-size: 14px;
`;