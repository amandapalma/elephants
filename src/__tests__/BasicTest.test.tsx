test('sumNothing returns 1 when the input is 1', () => {
  const number = 1;
  function sumPlusZero(a: number) {
    return a + 0;
  }

  const result = sumPlusZero(number);

  expect(result).toBe(1);
});
