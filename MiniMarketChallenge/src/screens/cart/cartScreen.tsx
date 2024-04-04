import React from 'react';
import {View} from 'react-native';
import {ProductList} from '../../components/ProductList';
import {products} from './items';

export const CartScreen = () => {
  return (
    <View>
      <ProductList data={products} />
    </View>
  );
};
