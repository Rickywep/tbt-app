import React from 'react';
import { render } from '@testing-library/react-native';
import InfoScreen from '../src/screens/InfoScreen';

describe('InfoScreen component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<InfoScreen />);
    
    // Verificar que los elementos renderizados sean correctos
    expect(getByText('Categorización por ABV (Alcohol por Volumen)')).toBeDefined();
    expect(getByText('Light Beers: Menos del 4% ABV.')).toBeDefined();
    expect(getByText('Session Beers: Entre 4% y 6% ABV.')).toBeDefined();
    expect(getByText('Strong Beers: Entre 6% y 8% ABV.')).toBeDefined();
    expect(getByText('Very Strong Beers: Más del 8% ABV.')).toBeDefined();

    expect(getByText('Categorización por IBU (Unidades Internacionales de Amargura)')).toBeDefined();
    expect(getByText('Low Bitterness Beers: Menos de 20 IBU.')).toBeDefined();
    expect(getByText('Moderate Bitterness Beers: Entre 20 y 40 IBU.')).toBeDefined();
    expect(getByText('Medium Bitterness Beers: Entre 40 y 60 IBU.')).toBeDefined();
    expect(getByText('High Bitterness Beers: Entre 60 y 80 IBU.')).toBeDefined();
    expect(getByText('Very Bitter Beers: Más de 80 IBU.')).toBeDefined();

    expect(getByText('Categorización por EBC (European Brewery Convention)')).toBeDefined();
    expect(getByText('Extra Pale Beers: Menos de 8 EBC.')).toBeDefined();
    expect(getByText('Pale Beers: Entre 8 y 17 EBC.')).toBeDefined();
    expect(getByText('Amber Beers: Entre 17 y 35 EBC.')).toBeDefined();
    expect(getByText('Brown Beers: Entre 35 y 50 EBC.')).toBeDefined();
    expect(getByText('Dark Beers: Más de 50 EBC.')).toBeDefined();
  });
});
