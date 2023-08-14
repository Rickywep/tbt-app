import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

const Container = styled(View)`
  flex: 1;
  padding: 16px;
  background-color: white;
`;

const Subtitle = styled(Text)`
  font-size: 18px;
  font-weight: bold;
  margin-top: 16px;
  margin-bottom: 8px;
  color: #e59e24;
`;

const InfoText = styled(Text)`
  font-size: 16px;
  color: #18233f;
`;

const InfoScreen = () => {
  return (
    <Container>
      <Subtitle>Categorización por ABV (Alcohol por Volumen)</Subtitle>
      <InfoText>Light Beers: Menos del 4% ABV.</InfoText>
      <InfoText>Session Beers: Entre 4% y 6% ABV.</InfoText>
      <InfoText>Strong Beers: Entre 6% y 8% ABV.</InfoText>
      <InfoText>Very Strong Beers: Más del 8% ABV.</InfoText>

      <Subtitle>Categorización por IBU (Unidades Internacionales de Amargura)</Subtitle>
      <InfoText>Low Bitterness Beers: Menos de 20 IBU.</InfoText>
      <InfoText>Moderate Bitterness Beers: Entre 20 y 40 IBU.</InfoText>
      <InfoText>Medium Bitterness Beers: Entre 40 y 60 IBU.</InfoText>
      <InfoText>High Bitterness Beers: Entre 60 y 80 IBU.</InfoText>
      <InfoText>Very Bitter Beers: Más de 80 IBU.</InfoText>

      <Subtitle>Categorización por EBC (European Brewery Convention)</Subtitle>
      <InfoText>Extra Pale Beers: Menos de 8 EBC.</InfoText>
      <InfoText>Pale Beers: Entre 8 y 17 EBC.</InfoText>
      <InfoText>Amber Beers: Entre 17 y 35 EBC.</InfoText>
      <InfoText>Brown Beers: Entre 35 y 50 EBC.</InfoText>
      <InfoText>Dark Beers: Más de 50 EBC.</InfoText>
    </Container>
  );
};

export default InfoScreen;