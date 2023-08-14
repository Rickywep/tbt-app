import React from 'react';
import styled from 'styled-components/native';
import { Text, TouchableWithoutFeedback } from 'react-native';

const ClearFiltersText = styled(Text)`
  color: #bcbfc4;
`;

export const ClearFilterButton = ({ clearFilters }: { clearFilters: () => void }) => {
  return (
    <TouchableWithoutFeedback onPress={clearFilters}>
      <ClearFiltersText>Limpiar filtros</ClearFiltersText>
    </TouchableWithoutFeedback>
  );
};
