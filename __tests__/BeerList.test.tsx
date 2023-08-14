import React from 'react';
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { mockBeers } from '../data/beerMock'; 
import { BeersList } from '../src/components/BeersList';


// Mock the Navigator component for testing
const Stack = createStackNavigator();

describe('BeersList', () => {


  it('renders list of beers when beers array is not empty', () => {
    const { getByTestId, getAllByTestId } = render(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="BeersList" component={() => <BeersList beers={mockBeers} isLoading={false} clearFilters={() => {}} />} />
        </Stack.Navigator>
      </NavigationContainer>
    );

    const flatList = getByTestId('beers-flat-list');
    const beerItems = getAllByTestId('beer-item');

    expect(flatList).toBeDefined();
    expect(beerItems.length).toBe(mockBeers.length);
  });

});
