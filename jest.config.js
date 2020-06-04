module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: ["./test/setup_tests.ts"],
  collectCoverageFrom: [
    '**/*.ts',
    '!**/index.ts',
  ]
};
