import React from 'react';
import {FlatList} from 'react-native';
import {selectCartItems} from '../../state-manager/reducers/checkout.slice';
import {useSelector} from 'react-redux';
import {CartItem} from '../../components/CartItem';

export const ShoppingCart = () => {
  const items = useSelector(selectCartItems);

  return (
    <FlatList
      contentContainerStyle={{backgroundColor: 'white'}}
      data={items}
      keyExtractor={(_, index) => index.toString()}
      numColumns={1}
      renderItem={({item}) => <CartItem cartProduct={item} />}
    />
  );
};
