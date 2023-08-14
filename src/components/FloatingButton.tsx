import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components/native';

interface Props {
  onPress: () => void;
  title: string;
}

const StyledFloatingButton = styled(TouchableOpacity)`
  position: absolute;
  bottom: 20px;
  right: 20px;
  background-color: #e59e24;
  border-radius: 30px;
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
`;

const ButtonText = styled(Text)`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

const FloatingButton = ({ onPress, title }: Props) => {
  return (
    <StyledFloatingButton onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </StyledFloatingButton>
  );
};

export default FloatingButton;