import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const NumberButton = styled.TouchableOpacity`
background-color: #B6B6B6;
border-radius: 100px;
width: 100px;
height: 100px;
align-items: center;
justify-content: center;
`;

const NumberText = styled.Text`
  font-size: 30px;
  color: white;
  bold: true;
`;

const App = () => {
  const buttons = Array.from({ length: 10 }, (_, i) => i);

  return (
    <View style={{ backgroundColor: '#181818', flex: 1 }}>
      <Text>0</Text>
      {buttons.reverse().map((button) => (
        <NumberButton key={button}>
          <NumberText style={{color: 'white'}}>{button}</NumberText>
        </NumberButton>
      ))}
    </View>
  );
};

export default App;