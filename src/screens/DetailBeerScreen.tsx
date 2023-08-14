import React from 'react';
import { Image, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import styled from 'styled-components/native';

import { StartStackParams } from 'src/interfaces/StartStackInterface';

interface Props extends StackScreenProps<StartStackParams, 'DetailBeerScreen'> {}

const Container = styled(View)`
  flex: 1;
  background-color: white;
  align-items: center;
  margin-horizontal: 16px;
`;

const TaglineText = styled(Text)`
  font-size: 16.8px;
  color: #18233f;
  font-weight: bold;
  margin-vertical: 16px;
`;

const DescriptionContainer = styled(View)`
  background-color: #e59e24;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 16px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
`;

const DescriptionText = styled(Text)`
  font-size: 14.8px;
  color: white;
  margin-vertical: 16px;
`;

const BeerImage = styled(Image)`
  width: 90px;
  height: 300px;
  resize-mode: stretch;
  margin-vertical: 5px;
  margin-horizontal: 16px;
`;

const DetailRow = styled(View)`
  flex-direction: row;
  justify-content: space-around;
  margin-horizontal: 16px;
  margin-bottom: 16px;
`;

const DetailText = ({ text }: { text: string }) => {
  return (
    <View
      style={{
        marginHorizontal: 16,
        marginBottom: 16,
      }}
    >
      <Text
        style={{
          fontSize: 14.8,
          color: '#E59E24',
          marginVertical: 16,
        }}
      >
        {text}
      </Text>
    </View>
  );
};

const DetailBeerScreen = ({ route }: Props) => {
  const { image_url, tagline, description, abv, ibu, ebc, ph } = route.params.item;
  return (
    <Container>
      <TaglineText>{tagline}</TaglineText>
      <DescriptionContainer>
        <DescriptionText>{description}</DescriptionText>
      </DescriptionContainer>
      <BeerImage source={{ uri: image_url }} />
      <DetailRow>
        <DetailText text={`abv: ${abv}`} />
        <DetailText text={`ibu: ${ibu}`} />
        <DetailText text={`ebc: ${ebc}`} />
        <DetailText text={`ph: ${ph}`} />
      </DetailRow>
    </Container>
  );
};

export default DetailBeerScreen;