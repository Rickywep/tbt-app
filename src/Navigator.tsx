import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './screens/HomeScreen';
import DetailBeerScreen from './screens/DetailBeerScreen';
import { StartStackParams } from './interfaces/StartStackInterface';
import { Text } from 'react-native';
import InfoScreen from './screens/InfoScreen';
const Stack = createStackNavigator<StartStackParams>();

export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#18233F',
        },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: {
          fontSize: 16.8,
        },
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        options={{
          headerShown: false,
          cardStyle: {
            backgroundColor: 'white',
          },
        }}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Stack.Screen
        options={({ route }) => ({
          headerTitle: () => (
            <Text
              numberOfLines={1}
              style={{
                fontSize: 16.8,
                color: 'white',
              }}
            >{`${route?.params?.item?.name}`}</Text>
          ),
          cardStyle: {
            backgroundColor: 'white',
          },
        })}
        name="DetailBeerScreen"
        component={DetailBeerScreen}
      />
      <Stack.Screen
        options={() => ({
          headerTitle: () => (
            <Text
              numberOfLines={1}
              style={{
                fontSize: 16.8,
                color: 'white',
              }}
            >Beer Categories</Text>
          ),
          cardStyle: {
            backgroundColor: 'white',
          },
        })}
        name="InfoScreen"
        component={InfoScreen}
      />
    </Stack.Navigator>
  );
};
