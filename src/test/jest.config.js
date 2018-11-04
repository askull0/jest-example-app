'use strict';

module.exports = {
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
  },
  setupTestFrameworkScriptFile: '<rootDir>/src/test/SetupTests.js',
  testMatch: ['<rootDir>/src/test/**/*.test.js?(x)'],
  testPathIgnorePatterns: ['/src/main/', 'node_modules'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/test/__mocks__/FileMocks.js',
  },
};
