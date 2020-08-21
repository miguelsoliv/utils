import {
  play as lowerIfElseCount,
  dontPlayMe as notFixedIfElseCount,
} from './lowering-if-else-count';
import mapAndFilterArray from './map-and-filter-array';
import {
  problematicAccountNumberAvailabilityCheck,
  problemSolved,
} from './while-async';

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

const whileAsyncWrongExample = async (): Promise<void> => {
  await problematicAccountNumberAvailabilityCheck();
};

const whileAsyncExample = async (): Promise<void> => {
  await new Promise(resolve => problemSolved(resolve));
};

export {
  ifElseLowerExample,
  ifElseNotLowerExample,
  filterArrayExample,
  whileAsyncWrongExample,
  whileAsyncExample,
};
