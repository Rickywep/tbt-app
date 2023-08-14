import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { BeerItem } from './BeerItem';
import { Beer } from '../interfaces/beerInterface';
import { useNavigation } from '@react-navigation/native';
import LoadingIndicator from './LoadingIndicator';
import { ClearFilterButton } from './ClearFilterButton';

interface Props {
  beers: Beer[];
  isLoading: boolean;
  clearFilters: () => void;
}
export const BeersList = ({ beers, isLoading, clearFilters }: Props) => {
  const { navigate } = useNavigation<any>();

  return (
    <View style={{ flex: 1 }}>
      {isLoading ? (
        <LoadingIndicator />
      ) : beers.length === 0 ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>No beers found</Text>
          <ClearFilterButton clearFilters={clearFilters} />
        </View>
      ) : (
        <FlatList
          style={{ flex: 3 }}
          data={beers}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <BeerItem item={item} onPress={() => navigate('DetailBeerScreen', { item })} />}
        />
      )}
    </View>
  );
};
