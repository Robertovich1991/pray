module.exports = {
  root: true,
  plugins: ['@typescript-eslint'],
  extends: ['@react-native-community'],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn'],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
