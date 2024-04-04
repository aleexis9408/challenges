import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {PointDetail} from '../src/screens/pointDetail/pointDetail';
import {NavigationWrapper} from '../__mocks__/navigation-wrapper';

const product = {
  product: 'Product name',
  image: 'https://example.com/image.png',
  createdAt: new Date('2022-12-09T06:34:25.607Z'),
  points: 100,
};

describe('PointDetail component', () => {
  test('renders correctly', () => {
    const {getByText, getByTestId} = render(
      <NavigationWrapper initialParams={{product}}>
        <PointDetail />
      </NavigationWrapper>,
    );

    expect(getByText(product.product)).toBeTruthy();
    expect(getByText('100 puntos')).toBeTruthy();
    expect(getByText('Comprado el', {exact: false})).toHaveTextContent(
      'Comprado el 09 de December, 2022',
    );
    expect(getByTestId('pointDetailImage')).toHaveProp('source', {
      uri: product.image,
    });
  });

  test('PointDetail should render and accept button should work', () => {
    const {getByText} = render(
      <NavigationWrapper initialParams={{product}}>
        <PointDetail />
      </NavigationWrapper>,
    );

    const acceptButton = getByText('Aceptar');
    fireEvent.press(acceptButton);

    expect(acceptButton).toBeDefined();
  });
});
