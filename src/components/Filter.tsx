import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { PillsFilter } from './PillsFilter';
import { FilterProps } from '../interfaces/filterInterface';

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
    <>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text
          style={{
            color: '#18233F',
            fontWeight: 'bold',
            fontSize: 16,
          }}
        >
          Filtrar por:
        </Text>
        <TouchableWithoutFeedback onPress={clearFilters}>
          <Text
            style={{
              color: '#BCBFC4',
            }}
          >
            Limpiar filtros
          </Text>
        </TouchableWithoutFeedback>
      </View>
      <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
        <PillsFilter pills={abvItems} filter={abvFilter} title="ABV" />
        <PillsFilter pills={ibuItems} title="IBU" filter={ibuFilter} />
        <PillsFilter pills={ebcItems} title="EBC" filter={ebcFilter} />
      </View>
    </>
  );
};
