import React from 'react';
import {Product} from '../atoms/Product';
import type {Product as ProductType} from '../../services/usePoints';
import {StyleSheet, View} from 'react-native';
interface Props {
  products: ProductType[];
}

export const ProductList = ({products}: Props) => {
  return (
    <View style={styles.productList}>
      {products?.map((product, index) => {
        return <Product key={index} product={product} />;
      })}
    </View>
  );
};

export const styles = StyleSheet.create({
  productList: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    overflow: 'hidden',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
});
