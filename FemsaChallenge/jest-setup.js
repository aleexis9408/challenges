// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('./src/services/usePoints', () => ({
  usePoins: () => [
    jest.fn(),
    {
      data: [
        {
          createdAt: '2022-12-09T06:34:25.607Z',
          product: 'Handmade Metal Shoes',
          points: 16434,
          image: 'https://loremflickr.com/640/480/transport',
          is_redemption: false,
          id: '1',
        },
        {
          createdAt: '',
          product: 'Recycled Plastic Tuna',
          points: 92984,
          image: 'https://loremflickr.com/640/480/technics',
          is_redemption: true,
          id: '2',
        },
      ],
      isLoading: false,
      isError: false,
    },
  ],
}));
