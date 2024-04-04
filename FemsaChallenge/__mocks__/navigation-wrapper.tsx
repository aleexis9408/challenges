import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

jest.useFakeTimers();

const Stack = createNativeStackNavigator();

export const NavigationWrapper = ({children, initialParams}: any) => {
  const SomeComponentWrapper = () => children;
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="default"
          component={SomeComponentWrapper}
          initialParams={initialParams}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
