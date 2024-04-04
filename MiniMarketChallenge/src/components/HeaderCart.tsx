import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RootNavigationRoute} from '../navigation/rootNavigation';
import {HeaderButtonProps} from '@react-navigation/native-stack/lib/typescript/src/types';

export const HeaderCart = (props: HeaderButtonProps) => {
  const navigation = useNavigation();
  const handleGoToCart = () =>
    navigation.navigate(RootNavigationRoute.ShoppingCartRoute);

  return (
    <TouchableOpacity style={[styles.productItem]} onPress={handleGoToCart}>
      <Text>Cart</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  productItem: {
    borderColor: 'gray',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
  },
});
