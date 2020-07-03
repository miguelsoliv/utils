import { colorLuminance } from './src';

const newColor = colorLuminance({
  colorInHex: '#200CCC',
  luminosityPercent: 40,
});

console.log(newColor);
