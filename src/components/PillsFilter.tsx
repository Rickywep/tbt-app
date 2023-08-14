import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { FilterButton } from './FilterButton';

type Pill = {
  setFilter: (value: boolean) => void;
  text: string;
};

interface Props {
  pills: Pill[];
  title: string;
  filter: {
    text: string;
  };
}

const StyledText = styled(Text)`
  text-align: center;
  margin: 4px;
  font-size: 14px;
  font-weight: bold;
  color: #18233f;
`;

const StyledScrollView = styled(ScrollView)`
  padding: 8px;
  padding-horizontal: 16px;
`;

export const PillsFilter = ({ pills, title, filter }: Props) => {
  return (
    <>
      <StyledText>{title}</StyledText>

      <StyledScrollView horizontal showsHorizontalScrollIndicator={false}>
        {pills.map((pill, i) => {
          const selected = filter.text === pill.text;

          return (
            <View key={i}>
              <FilterButton onPress={() => pill.setFilter(selected)} title={pill.text} selected={selected} />
            </View>
          );
        })}
      </StyledScrollView>
    </>
  );
};
