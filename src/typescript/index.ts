/* eslint-disable no-console */
import { colorLuminance, mockFile } from './src';
import { lowerIfElseCount } from './src/clean-codes';

const newColor = colorLuminance({
  colorInHex: '#200CCC',
  luminosityPercent: 40,
});

const newMockFile = mockFile({});

console.log(newColor);
console.log(newMockFile);
console.log('/-------------------------------------/');

const gameResult = lowerIfElseCount({
  firstPlay: 'rock',
  secondPlay: 'scissor',
});

console.log(gameResult);
