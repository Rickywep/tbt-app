import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components/native';

interface Props {
  selected: boolean;
}

const StyledTouchableOpacity = styled(TouchableOpacity)<Props>`
  padding-horizontal: 16px;
  padding-vertical: 8px;
  border-radius: 30px;
  margin-horizontal: 4px;
  background-color: ${({ selected }) => (selected ? '#E59E24' : 'white')};
  border-color: ${({ selected }) => (selected ? 'transparent' : '#E59E24')};
  border-width: 1px;
  shadow-color: #000;
  shadow-offset: 0px 2px; 
  shadow-opacity: 0.25;
  shadow-radius: 3.84px; 
  elevation: 5;
`;

const ButtonText = styled(Text)<Props>`
  font-size: 12px;
  line-height: 16px;
  font-weight: ${({ selected }) => (selected ? 'bold' : 'normal')};
  color: ${({ selected }) => (selected ? 'white' : '#18233F')};
`;

interface FilterButtonProps {
  onPress: () => void;
  title: string;
  selected: boolean;
}

export const FilterButton = ({ onPress, title, selected }: FilterButtonProps) => (
  <StyledTouchableOpacity onPress={onPress} selected={selected}>
    <ButtonText selected={selected}>{title}</ButtonText>
  </StyledTouchableOpacity>
);
