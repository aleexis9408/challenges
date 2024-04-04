import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View, Image} from 'react-native';
import {CartProduct} from '../types/types';
import {useNavigation} from '@react-navigation/native';
import {RootNavigationRoute} from '../navigation/rootNavigation';
import {moneyFormat} from '../utils/currencyFormat';
import {Badge} from './Badge';

interface Props {
  cartProduct: CartProduct;
}

export const CartItem = ({cartProduct}: Props) => {
  const navigation = useNavigation();
  const handleGoToDetail = () =>
    navigation.navigate(RootNavigationRoute.ProductDetailRoute, {
      product: cartProduct.product,
    });

  return (
    <View style={[styles.cartItem]}>
      <Badge
        value={cartProduct.quantity}
        size={40}
        customStyle={{
          badge: styles.cartItem_badge,
          badge_value: styles.cartItem_badge_text,
        }}
      />
      <TouchableOpacity
        style={styles.cartItem_photo}
        onPress={handleGoToDetail}>
        <Image
          resizeMode="contain"
          style={styles.cartItem_photo_img}
          source={{uri: cartProduct.product.url}}
        />
      </TouchableOpacity>
      <View style={styles.cartItem_contain}>
        <Text style={styles.cartItem_contain_name}>
          {cartProduct?.product?.name}
        </Text>
        <Text style={styles.cartItem_contain_price}>
          {moneyFormat(cartProduct.product.price * cartProduct.quantity)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartItem: {
    borderColor: 'gray',
    borderBottomWidth: 1,
    height: 100,
    marginHorizontal: 20,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  cartItem_photo: {
    height: 90,
    width: 80,
  },
  cartItem_photo_img: {
    width: '100%',
    height: '100%',
  },
  cartItem_contain: {
    paddingHorizontal: 10,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexGrow: 2,
  },
  cartItem_contain_name: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '800',
    color: 'black',
  },
  cartItem_contain_price: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '800',
    color: 'purple',
    paddingVertical: 20,
  },
  cartItem_badge: {
    marginLeft: 10,
    marginRight: 20,
  },
  cartItem_badge_text: {
    fontSize: 16,
  },
});
