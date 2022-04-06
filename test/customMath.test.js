const {
  add, subtract, multiply, divide, square, cube, power,
} = require('../src/customMath');

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('subtracts 4 - 2 to equal 2', () => {
  expect(subtract(4, 2)).toBe(2);
});

test('multiplies 2 * 2 to equal 4', () => {
  expect(multiply(2, 2)).toBe(4);
});

test('divides 4 / 2 to equal 2', () => {
  expect(divide(4, 2)).toBe(2);
});

test('squares 2 to equal 4', () => {
  expect(square(2)).toBe(4);
});

test('cubes 2 to equal 8', () => {
  expect(cube(2)).toBe(8);
});

test('raises 2 to the power of 3 to equal 8', () => {
  expect(power(2, 3)).toBe(8);
});
