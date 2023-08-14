import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { BeerItem } from '../src/components/BeerItem'; // Asegúrate de que la ruta sea correcta

// Mock de la función onPress
const mockOnPress = jest.fn();

const mockBeer = {
  id: 1,
  name: 'Mock Beer',
  image_url: 'https://example.com/beer.png',
  abv: 5,
  ibu: 30,
  ebc: 15,
};

describe('BeerItem component', () => {
  it('renders correctly', () => {
    const { getByTestId, getByText } = render(<BeerItem item={mockBeer} onPress={mockOnPress} />);
    
    expect(getByTestId('beer-item')).toBeDefined();
    expect(getByText('Mock Beer')).toBeDefined();
    expect(getByText('abv: 5')).toBeDefined();
    expect(getByText('ibu: 30')).toBeDefined();
    expect(getByText('ebc: 15')).toBeDefined();
  });

  it('calls onPress when pressed', () => {
    const { getByTestId } = render(<BeerItem item={mockBeer} onPress={mockOnPress} />);

    // Simular el press en el componente
    fireEvent.press(getByTestId('beer-item'));

    // Verificar que la función onPress haya sido llamada
    expect(mockOnPress).toHaveBeenCalled();
  });
});
