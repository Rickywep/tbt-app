// include this line for mocking react-native-gesture-handler
import 'react-native-gesture-handler/jestSetup';

// include this section and the NativeAnimatedHelper section for mocking react-native-reanimated
jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => { };

  return Reanimated;
});


export default {
  addListener: jest.fn(),
  getCurrentPosition: jest.fn(),
  removeListeners: jest.fn(),
  requestAuthorization: jest.fn(),
  setConfiguration: jest.fn(),
  startObserving: jest.fn(),
  stopObserving: jest.fn()
};

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

global.navigator = {
  geolocation: {
    clearWatch: jest.fn(),
    getCurrentPosition: jest.fn((success, failure, options) => {
      success({
        coords: {
          longitude: 60,
          latitude: 60,
        },
      });
    }),
    stopObserving: jest.fn(),
    watchPosition: jest.fn(),
  },
};