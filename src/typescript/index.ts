/* eslint-disable no-console */
import { colorLuminance, mockFile } from './src';

const newColor = colorLuminance({
  colorInHex: '#200CCC',
  luminosityPercent: 40,
});

const newMockFile = mockFile({});

console.log(newColor);
console.log(newMockFile);
