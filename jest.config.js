module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Mock CSS/SCSS imports
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/__mocks__/fileMock.js', // Mock image and other file imports
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest', // Use ts-jest to transpile TypeScript files
  },
  transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'], // Ensure ES6 modules are transpiled
};
