const path = require('path');

module.exports = {
  roots: [path.resolve(__dirname, 'src')],
  testMatch: ['**/*.test.{ts,tsx,js,jsx}'],
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': ['babel-jest', { presets: [['react-app', { runtime: 'automatic' }]] }]
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': '<rootDir>/src/__mocks__/fileMock.js'
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts']
};
