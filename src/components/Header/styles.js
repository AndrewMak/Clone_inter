import styled from 'styled-components/native';

export const Container = styled.View`
  height: 130px;
  padding: 16px 24px;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  background: #fc6e06;
`;
export const ContainerBalance = styled.ScrollView.attrs(() => ({
  horizontal: true,
  decelerationRate: 0,
  snapToInterval: 90,
  snapToAlignment: 'center',
  contentContainerStyle: {
    alignItems: 'flex-start',
    paddingLeft: 0,
  },
}))`
  width: 180px;
`;
export const Wrapper = styled.View`
    width: 150px;
    margin-right: 30px;
    align-items: center;
    flex-direction: row;
`;


export const Detail = styled.View``;

export const Title = styled.Text`
  color: #fff;
  font-size: 18px;
  text-align: left;
`;

export const Balance = styled.Text`
  color: rgba(255, 255, 255, 0.8);
  ${({ show }) => !show && `
     color: #ff8a47;      
     background: #ff8a47
  `}
  text-align: left;
  font-size: 20px;
`;
export const Eye = styled.TouchableOpacity`
  width: 25px;
  height: 25px;
  background: transparent;
  flex: 1 0 auto;
  margin-left: 5px;
  margin-right: 10px;

  align-items:center;
  justify-content: center;
`
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