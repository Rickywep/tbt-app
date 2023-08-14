import React from 'react';
import { View } from 'react-native';
import { BeersList } from '../components/BeersList';
import FloatingButton from '../components/FloatingButton';
import { useNavigation } from '@react-navigation/native';
import { useFilters } from '../hooks/useFilters';
import { Filter } from '../components/Filter';

export const HomeScreen = () => {
  const navigation = useNavigation<any>();
  const { beersQuery, abvItems, abvFilter, ibuItems, ibuFilter, ebcItems, ebcFilter, clearFilters } = useFilters();

  const handleButtonPress = () => {
    navigation.navigate('InfoScreen');
  };

  return (
    <View style={{ marginHorizontal: 16, marginVertical: 16, flex: 1 }}>
      <Filter
        abvItems={abvItems}
        abvFilter={abvFilter}
        ibuItems={ibuItems}
        ibuFilter={ibuFilter}
        ebcItems={ebcItems}
        ebcFilter={ebcFilter}
        clearFilters={clearFilters}
      />
      <BeersList beers={beersQuery.data!} isLoading={beersQuery.isLoading} />
      <FloatingButton onPress={handleButtonPress} title="Info" />
    </View>
  );
};
