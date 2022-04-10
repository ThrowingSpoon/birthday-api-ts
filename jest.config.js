/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: ['dotenv/config'],
  roots: [
    '<rootDir>/src',
    '<rootDir>/tests',
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};
