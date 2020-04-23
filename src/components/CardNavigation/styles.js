import styled from 'styled-components/native';
export const Container  = styled.ScrollView.attrs(() => ({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    decelerationRate: 0,
    snapToInterval:  240,
    snapToAlignment: 'center',
    contentContainerStyle: {
      alignItems: 'center',
      paddingLeft: 10,
    },
  }))`
    background: #eeeff3;
    height: 280px;
  
  `;
  
  export const  Card = styled.TouchableOpacity`
    width: 300px;
    height: 230px;
    margin-right: 16px;
    background:#fff;
    align-items: center;
    border-radius: 10px;
    padding: 16px;
    elevation: 5;
  `;
  
  export const DetailImg = styled.Image``;
  
  export const Label = styled.Text`
    color: #fff;
    font-weight: bold;
    margin-top: 8px;
    font-size: 14px;
  `;
  
  export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    
  `
  
  export const HeaderText = styled.Text`
    flex: 1;
  `
  
  export const Detail = styled.View`
    width:45%;
    height:90%;
    flex-direction:row;
    align-items: center;
    justify-content:center;
  `