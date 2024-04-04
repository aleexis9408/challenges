import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {PointWelcome} from '../src/screens/pointWelcome/pointWelcome';
import {NavigationWrapper} from '../__mocks__/navigation-wrapper';

describe('PointWelcome', () => {
  test('renders correctly', () => {
    const {getByText} = render(<PointWelcome />, {wrapper: NavigationWrapper});
    const welcomeText = getByText('Bienvenido de vuelta!');
    expect(welcomeText).toBeDefined();
  });

  test('should render the skeleton when isLoading is true', () => {
    jest
      .spyOn(require('../src/services/usePoints'), 'usePoins')
      .mockReturnValueOnce([
        jest.fn(),
        {
          data: [],
          isLoading: true,
          isError: false,
        },
      ]);

    const {getByTestId} = render(<PointWelcome />, {
      wrapper: NavigationWrapper,
    });
    const skeleton = getByTestId('skeleton');
    expect(skeleton).toBeDefined();
  });

  test('calls setTypePoint on button press', () => {
    const {getByText} = render(<PointWelcome />, {
      wrapper: NavigationWrapper,
    });
    const ganadosButton = getByText('Ganados');
    fireEvent.press(ganadosButton);
    const ganadosTodos = getByText('Todos');
    fireEvent.press(ganadosTodos);
    const ganadosCanjeados = getByText('Canjeados');
    fireEvent.press(ganadosCanjeados);
  });
});
