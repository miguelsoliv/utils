import {
  play as lowerIfElseCount,
  dontPlayMe as notFixedIfElseCount,
} from './lowering-if-else-count';
import mapAndFilterArray from './map-and-filter-array';

const ifElseLowerExample = (): void => {
  const gameResult = lowerIfElseCount({
    firstPlay: 'rock',
    secondPlay: 'scissor',
  });

  console.log(gameResult);
};

const ifElseNotLowerExample = (): void => {
  const gameResult = notFixedIfElseCount({
    firstPlay: 'rock',
    secondPlay: 'scissor',
  });

  console.log(gameResult);
};

const filterArrayExample = (): void => {
  const array = mapAndFilterArray({
    idToDecrement: 3,
  });

  console.table(array);
};

export { ifElseLowerExample, ifElseNotLowerExample, filterArrayExample };
