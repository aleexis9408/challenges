import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import App from '../App';

describe('renderRootNavigation', () => {
  let screen: any;
  beforeEach(() => {
    screen = render(<App />);
  });

  it('renders PointWelcome screen by default', () => {
    const {getByText} = screen;
    const title = getByText('Bienvenido de vuelta!');
    expect(title).toBeDefined();
    expect(screen?.toJSON()).toMatchSnapshot();
  });

  it('navigates to PointDetail screen and renders the correct product', async () => {
    const product = {
      product: 'Product Name',
      image: 'https://image-url.com',
      createdAt: '2022-01-01T00:00:00.000Z',
      points: 1000,
    };
    const {getByText, findByText, findAllByTestId} = screen;
    const buttons = await findAllByTestId('handleGoToDetail');
    fireEvent.press(buttons?.[0]);
    const title = getByText('Detalles del producto:');
    expect(title).toBeDefined();
    const productName = findByText(product.product);
    expect(productName).toBeDefined();
    expect(screen?.toJSON()).toMatchSnapshot();
  });
});
