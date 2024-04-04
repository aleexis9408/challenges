import React from 'react';
import {Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {Product as ProductType} from '../types/types';
import {useNavigation} from '@react-navigation/native';
import {RootNavigationRoute} from '../navigation/rootNavigation';
import {Badge} from './Badge';
import {selectCartItems} from '../state-manager/reducers/checkout.slice';
import {useSelector} from 'react-redux';

interface Props {
  product: ProductType;
}

export const ProductItem = ({product}: Props) => {
  const navigation = useNavigation();
  const handleGoToDetail = () =>
    navigation.navigate(RootNavigationRoute.ProductDetailRoute, {product});

  const cartItems = useSelector(selectCartItems);
  const cartItem = cartItems?.find(
    (item: CartProduct) => item.product.id === product.id,
  );

  let heights = [120, 150];
  let randomIndex = Math.floor(Math.random() * heights.length);
  let height = heights[randomIndex];

  return (
    <TouchableOpacity
      style={[styles.productItem, {height}]}
      onPress={handleGoToDetail}>
      <Image source={{uri: product.url}} style={styles.productItem_img} />
      {cartItem?.quantity && (
        <Badge
          value={cartItem?.quantity}
          size={22}
          customStyle={{
            badge: styles.badge,
          }}
        />
      )}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  productItem: {
    borderColor: 'gray',
    borderWidth: 1,
    height: 100,
    width: 100,
    marginHorizontal: 5,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
  },
  productItem_img: {
    height: '100%',
    width: '100%',
  },
  badge: {
    position: 'absolute',
    left: 5,
    top: 5,
  },
});
