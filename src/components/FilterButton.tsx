import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export const FilterButton = ({
  onPress,
  title,
  selected,
}: {
  onPress: () => void;
  title: string;
  selected: boolean;
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 30,
      marginHorizontal: 4,
      backgroundColor: selected ? '#E59E24' : 'white',
      borderColor: !selected ? '#E59E24' : '#E59E24',
        borderWidth: 1,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    }}
  >
    <Text
      style={{
        fontSize: 12,
        lineHeight: 16,
        fontWeight: selected ? 'bold' : 'normal',
        color: selected ? 'white' : '#18233F',
      }}
    >
      {title}
    </Text>
  </TouchableOpacity>
);
