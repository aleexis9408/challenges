import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {moneyFormat} from '../../utils/currencyFormat';
import {useDispatch, useSelector} from 'react-redux';
import {
  add,
  remove,
  selectCartItems,
} from '../../state-manager/reducers/checkout.slice';
import {CartProduct} from '../../types/types';

export const ProductDetail = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {product} = route?.params;

  const handleClose = () => navigation.goBack();

  const cartItems = useSelector(selectCartItems);

  const handleAdd = () => {
    dispatch(add({product, quantity: 1}));
  };

  const handleRemove = () => {
    dispatch(remove(product.id));
  };

  const cartItem = cartItems?.find(
    (item: CartProduct) => item.product.id === product.id,
  );

  return (
    <View style={styles.productDetail}>
      <View style={styles.productDetail_header}>
        <Text style={styles.productDetail_header_title}>Product</Text>
        <TouchableOpacity
          style={styles.productDetail_header_close}
          onPress={handleClose}>
          <Text style={styles.productDetail_header_close_text}>x</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.productDetail_body}>
        <Image
          resizeMode="contain"
          style={styles.productDetail_body_photo}
          source={{uri: product.url}}
        />
      </View>
      <View style={styles.productDetail_footer}>
        <Text style={styles.productDetail_footer_name}>{product.name}</Text>
        <Text style={styles.productDetail_footer_price}>
          | {moneyFormat(product.price)}
        </Text>
        <TouchableOpacity
          style={styles.productDetail_footer_minus}
          onPress={handleRemove}>
          <Text style={styles.productDetail_footer_minus_text}>-</Text>
        </TouchableOpacity>
        <Text style={styles.productDetail_footer_quantity}>
          {cartItem?.quantity ?? 0}
        </Text>
        <TouchableOpacity
          style={styles.productDetail_footer_plus}
          onPress={handleAdd}>
          <Text style={styles.productDetail_footer_plus_text}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productDetail: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: 'white',
    width: '100%',
    paddingHorizontal: 30,
    paddingBottom: 20,
  },
  productDetail_header: {
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderColor: 'gray',
    justifyContent: 'center',
    width: '100%',
  },
  productDetail_header_title: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '800',
    color: 'purple',
    paddingVertical: 20,
  },
  productDetail_header_close: {
    position: 'absolute',
    right: 0,
    height: 30,
    width: 30,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productDetail_header_close_text: {
    fontSize: 14,
    fontWeight: '800',
    color: 'white',
    paddingHorizontal: 5,
  },
  productDetail_body: {
    width: '100%',
    minHeight: 150,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  productDetail_body_photo: {
    width: '100%',
    height: 150,
  },
  productDetail_footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productDetail_footer_name: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '800',
    color: 'black',
    paddingVertical: 20,
    width: '50%',
  },
  productDetail_footer_price: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '800',
    color: 'purple',
    paddingVertical: 20,
  },
  productDetail_footer_plus: {
    height: 30,
    width: 30,
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productDetail_footer_plus_text: {
    fontSize: 14,
    fontWeight: '800',
    color: 'white',
  },
  productDetail_footer_minus: {
    height: 30,
    width: 30,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productDetail_footer_minus_text: {
    fontSize: 14,
    fontWeight: '800',
    color: 'white',
  },
  productDetail_footer_quantity: {
    fontSize: 14,
    fontWeight: '800',
    color: 'black',
    paddingHorizontal: 5,
  },
});
