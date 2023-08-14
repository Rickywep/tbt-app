import React from 'react';
import { TouchableOpacity, View, Text, Image, TouchableHighlight } from 'react-native';
import { Beer } from '../interfaces/beerInterface';
import styled from 'styled-components/native';

const Container = styled(View)`
  border-radius: 10px;
  margin-vertical: 8px;
  padding: 16px;
  background-color: white;
  border-color: #bcbfc4;
  border-width: 1px;
  shadow-color: #000;
  shadow-offset: 2px 3px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 6;
`;

const NameText = styled(Text)`
  color: #18233f;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
`;

const StyledImage = styled(Image)`
  width: 30px;
  height: 100px;
  resize-mode: stretch;
  margin-vertical: 5px;
  margin-horizontal: 16px;
`;

const InfoText = styled(Text)`
  color: #e59e24;
  font-weight: bold;
`;

export const BeerItem = ({ item, onPress }: { item: Beer; onPress: () => void }) => {
  return (
    <TouchableHighlight onPress={onPress} underlayColor={'white'} testID='beer-item'
    >
      <Container>
        <NameText>{item.name}</NameText>
        <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center' }}>
          {item.image_url ? <StyledImage source={{ uri: item.image_url }} /> : <InfoText>No image</InfoText>}
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'space-around',
              marginHorizontal: 16,
              marginBottom: 16,
            }}
          >
            <InfoText>abv: {item.abv}</InfoText>
            <InfoText>ibu: {item.ibu}</InfoText>
            <InfoText>ebc: {item.ebc}</InfoText>
          </View>
        </View>
      </Container>
    </TouchableHighlight>
  );
};
