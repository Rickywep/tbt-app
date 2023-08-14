import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { BeerItem } from './BeerItem';
import { Beer } from '../interfaces/beerInterface';
import { useNavigation } from '@react-navigation/native';
import LoadingIndicator from './LoadingIndicator';

interface Props {
  beers: Beer[];
  isLoading: boolean;
}
export const BeersList = ({ beers, isLoading }: Props) => {
  const { navigate } = useNavigation<any>();


  return (
    <View style={{ flex: 1 }}>

      {
        isLoading ? <LoadingIndicator /> :
        <FlatList
        style={{ flex: 3 }}
        data={beers}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <BeerItem item={item} onPress={() => navigate('DetailBeerScreen', { item })} />}
        />
      }
    </View>
  );
};
