import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {PointWelcome} from '../screens/pointWelcome/pointWelcome';
import {PointDetail} from '../screens/pointDetail/pointDetail';
import type {Product as ProductType} from '../services/usePoints';

export enum RootNavigationRoute {
  pointWelcomeRoute = 'pointWelcome',
  PointDetailRoute = 'PointDetail',
}

export type RootNavigationProps = {
  [RootNavigationRoute.pointWelcomeRoute]: undefined;
  [RootNavigationRoute.PointDetailRoute]: {
    product: ProductType;
  };
};

const Stack = createNativeStackNavigator<RootNavigationProps>();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={RootNavigationRoute.pointWelcomeRoute}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name={RootNavigationRoute.pointWelcomeRoute}
          component={PointWelcome}
        />
        <Stack.Screen
          name={RootNavigationRoute.PointDetailRoute}
          component={PointDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
