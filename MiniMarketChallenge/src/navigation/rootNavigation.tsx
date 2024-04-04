import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {CartScreen} from '../screens/cart/cartScreen';
import {ProductDetail} from '../screens/productDetail/productDetail';
import {Product as ProductType} from '../types/types';
import {HeaderCart} from '../components/HeaderCart';
import { ShoppingCart } from '../screens/ShoppingCart/shoppingCartScreen';

export enum RootNavigationRoute {
  cartRoute = 'cartRoute',
  ProductDetailRoute = 'ProductDetailRoute',
  ShoppingCartRoute = 'ShoppingCartRoute',
}

export type RootNavigationProps = {
  [RootNavigationRoute.cartRoute]: undefined;
  [RootNavigationRoute.ShoppingCartRoute]: undefined;
  [RootNavigationRoute.ProductDetailRoute]: {
    product: ProductType;
  };
};

const Stack = createNativeStackNavigator<RootNavigationProps>();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={RootNavigationRoute.cartRoute}>
        <Stack.Screen
          name={RootNavigationRoute.cartRoute}
          component={CartScreen}
          options={{
            headerTitle: 'MINI MARKET',
            headerTitleAlign: 'left',
            headerRight: props => <HeaderCart {...props} />,
          }}
        />
        <Stack.Screen
          name={RootNavigationRoute.ShoppingCartRoute}
          component={ShoppingCart}
          options={{
            headerTitle: 'Shopping Cart',
          }}
        />
        <Stack.Group
          screenOptions={{
            presentation: 'transparentModal',
            animation: 'fade',
            headerShown: false,
          }}>
          <Stack.Screen
            name={RootNavigationRoute.ProductDetailRoute}
            component={ProductDetail}
            options={{
              presentation: 'transparentModal',
              animation: 'slide_from_bottom',
              contentStyle: {backgroundColor: '#40404040'},
              headerTitle: 'Product',
              headerTitleAlign: 'left',
            }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
