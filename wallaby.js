module.exports = function (wallaby) {
  return {
    files: [
      'src/**/*.js',
      '!src/**/*.test.js',
    ],

    tests: [
      'src/**/*.test.js',
    ],

    compilers: {
      '**/*.js': wallaby.compilers.babel(),
    },

    env: {
      type: 'node',
      runner: 'node',
    },

    testFramework: 'jest',

    setup(wallaby) {
      wallaby.testFramework.configure({
        transform: {
          '.*': '<rootDir>/node_modules/babel-jest',
        },
      })
    },
  }
}
