import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const InfoScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Categorización por ABV (Alcohol por Volumen)</Text>
      <Text style={styles.text}>Light Beers: Menos del 4% ABV.</Text>
      <Text style={styles.text}>Session Beers: Entre 4% y 6% ABV.</Text>
      <Text style={styles.text}>Strong Beers: Entre 6% y 8% ABV.</Text>
      <Text style={styles.text}>Very Strong Beers: Más del 8% ABV.</Text>

      <Text style={styles.subtitle}>Categorización por IBU (Unidades Internacionales de Amargura)</Text>
      <Text style={styles.text}>Low Bitterness Beers: Menos de 20 IBU.</Text>
      <Text style={styles.text}>Moderate Bitterness Beers: Entre 20 y 40 IBU.</Text>
      <Text style={styles.text}>Medium Bitterness Beers: Entre 40 y 60 IBU.</Text>
      <Text style={styles.text}>High Bitterness Beers: Entre 60 y 80 IBU.</Text>
      <Text style={styles.text}>Very Bitter Beers: Más de 80 IBU.</Text>

      <Text style={styles.subtitle}>Categorización por EBC (European Brewery Convention)</Text>
      <Text style={styles.text}>Extra Pale Beers: Menos de 8 EBC.</Text>
      <Text style={styles.text}>Pale Beers: Entre 8 y 17 EBC.</Text>
      <Text style={styles.text}>Amber Beers: Entre 17 y 35 EBC.</Text>
      <Text style={styles.text}>Brown Beers: Entre 35 y 50 EBC.</Text>
      <Text style={styles.text}>Dark Beers: Más de 50 EBC.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },

  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
    color: '#E59E24',
  },
  text: {
    fontSize: 16,
    color: '#18233F',
  }
});

export default InfoScreen;
