import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import { PillsFilter } from './PillsFilter';
import { FilterProps } from '../interfaces/filterInterface';
import { ClearFilterButton } from './ClearFilterButton';

const Container = styled(View)`
  flex-direction: column;
  justify-content: space-between;
`;

const Header = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const HeaderText = styled(Text)`
  color: #18233f;
  font-weight: bold;
  font-size: 16px;
`;

export const Filter = ({
  abvItems,
  abvFilter,
  ibuItems,
  ibuFilter,
  ebcItems,
  ebcFilter,
  clearFilters,
}: FilterProps) => {
  return (
    <Container>
      <Header>
        <HeaderText>Filter by:</HeaderText>
        <ClearFilterButton clearFilters={clearFilters} />
      </Header>
      <PillsFilter pills={abvItems} filter={abvFilter} title="ABV" />
      <PillsFilter pills={ibuItems} title="IBU" filter={ibuFilter} />
      <PillsFilter pills={ebcItems} title="EBC" filter={ebcFilter} />
    </Container>
  );
};

export default Filter;
