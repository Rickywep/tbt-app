import React from 'react';
import { Image, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { StartStackParams } from 'src/interfaces/StartStackInterface';

interface Props extends StackScreenProps<StartStackParams, 'DetailBeerScreen'> {}

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
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        marginHorizontal: 16,
      }}
    >
      <Text
        style={{
          fontSize: 16.8,
          color: '#18233F',
          fontWeight: 'bold',
          marginVertical: 16,
        }}
      >
        {tagline}
      </Text>
      <View
        style={{
          backgroundColor: '#E59E24',
          borderRadius: 10,
          padding: 10,
          marginBottom: 16,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}
      >
        <Text
          style={{
            fontSize: 14.8,
            color: 'white',
            marginVertical: 16,
          }}
        >
          {description}
        </Text>
      </View>
      <Image
        source={{ uri: image_url }}
        style={{
          width: 90,
          height: 300,
          resizeMode: 'stretch',
          marginVertical: 5,
          marginHorizontal: 16,
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginHorizontal: 16,
          marginBottom: 16,
        }}
      >
        <DetailText text={`abv: ${abv}`} />
        <DetailText text={`ibu: ${ibu}`} />
        <DetailText text={`ebc: ${ebc}`} />
        <DetailText text={`ph: ${ph}`} />
      </View>
    </View>
  );
};

export default DetailBeerScreen;
