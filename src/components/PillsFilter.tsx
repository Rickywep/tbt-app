import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { FilterButton } from './FilterButton';

type Pill = {
  setFilter: () => void;
  text: string;
};

interface Props {
  pills: Pill[];
  title: string;
  filter: {
   
    text: string;
  };
}

export const PillsFilter = ({ pills, title, filter }: Props) => {
  return (
    <>
      <Text style={{ textAlign: 'center', margin: 4, fontSize: 14, fontWeight: 'bold', color: '#18233F' }}>
        {title}
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingVertical: 8,
        }}
      >
        {pills.map((pill, i) => (
          <View key={i}>
            <FilterButton onPress={pill.setFilter} title={pill.text} selected={filter.text === pill.text} />
          </View>
        ))}
      </ScrollView>
    </>
  );
};
