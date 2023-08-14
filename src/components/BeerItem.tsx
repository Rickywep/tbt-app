import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import { Beer } from '../interfaces/beerInterface';
export const BeerItem = ({ item, onPress }: { item: Beer; onPress: () => void }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          borderRadius: 10,
          marginVertical: 8,
          padding: 16,
          backgroundColor: 'white',
          borderColor: '#BCBFC4',
          borderWidth: 1,
          shadowColor: '#000',
          shadowOffset: {
            width: 2,
            height: 3,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 6,
        }}
      >
        <Text style={{ color: '#18233F', fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>{item.name}</Text>
        <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center' }}>
          {item.image_url ? (
            <Image
              source={{ uri: item.image_url }}
              style={{
                width: 30,
                height: 100,
                resizeMode: 'stretch',
                marginVertical: 5,
                marginHorizontal: 16,
              }}
            />
          ) : (
            <Text>No image</Text>
          )}
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'space-around',
              marginHorizontal: 16,
              marginBottom: 16,
            }}
          >
            <Text
              style={{
                color: '#E59E24',
                fontWeight: 'bold',
              }}
            >
              abv: {item.abv}
            </Text>
            <Text
              style={{
                color: '#E59E24',
                fontWeight: 'bold',
              }}
            >
              ibu: {item.ibu}
            </Text>
            <Text
              style={{
                color: '#E59E24',
                fontWeight: 'bold',
              }}
            >
              ebc: {item.ebc}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
