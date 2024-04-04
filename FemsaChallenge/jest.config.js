module.exports = {
  preset: '@testing-library/react-native',
  setupFiles: ['./jest-setup.js'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation)',
  ],
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  coverageReporters: ['json', 'lcov', 'text', 'clover', 'cobertura'],
};
