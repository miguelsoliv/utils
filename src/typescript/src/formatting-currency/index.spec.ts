// eslint-disable-next-line import/no-extraneous-dependencies
import formatCurrency from '.';

describe('Check that the formatted currency is correct.', () => {
  test('using 2 decimals -', async done => {
    expect(formatCurrency(12.55)).toBe('R$ 12,55');

    done();
  });

  test('using 1 decimal -', async done => {
    expect(formatCurrency(12.5)).toBe('R$ 12,50');

    done();
  });

  test('using integer -', async done => {
    expect(formatCurrency(12)).toBe('R$ 12,00');

    done();
  });
});
