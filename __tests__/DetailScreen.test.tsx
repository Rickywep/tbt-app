import React from 'react';
import { render } from '@testing-library/react-native';
import DetailBeerScreen from '../src/screens/DetailBeerScreen';

describe('DetailBeerScreen component', () => {
  const mockRoute = {
    params: {
      item: {
        tagline: 'Mock Tagline',
        description: 'Mock Description',
        abv: 'Mock ABV',
        ibu: 'Mock IBU',
        ebc: 'Mock EBC',
        ph: 'Mock pH',
        image_url: 'mock-image-url',
      },
    },
  };

  it('renders correctly', () => {
    const { getByText } = render(<DetailBeerScreen route={mockRoute} />);

    expect(getByText('Mock Tagline')).toBeDefined();
    expect(getByText('Mock Description')).toBeDefined();
    expect(getByText('abv: Mock ABV')).toBeDefined();
    expect(getByText('ibu: Mock IBU')).toBeDefined();
    expect(getByText('ebc: Mock EBC')).toBeDefined();
    expect(getByText('ph: Mock pH')).toBeDefined();
  });
});
