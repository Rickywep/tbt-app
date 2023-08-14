import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';

const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const LoadingIndicator = () => {
  return (
    <Container>
      <ActivityIndicator size="large" color="#E59E24" />
    </Container>
  );
};

export default LoadingIndicator;