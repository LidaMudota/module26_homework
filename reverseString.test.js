// reverseString.test.js
const reverseString = require('./reverseString');

test('reverses a string', () => {
    expect(reverseString('hello')).toBe('olleh');
});

test('reverses an empty string', () => {
    expect(reverseString('')).toBe('');
});

test('reverses a string with spaces', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
});

test('reverses a string with numbers', () => {
    expect(reverseString('12345')).toBe('54321');
});

test('reverses a string with special characters', () => {
    expect(reverseString('!@#$%')).toBe('%$#@!');
});

test('reverses a long string', () => {
    expect(reverseString('abcdefghijklmnopqrstuvwxyz')).toBe('zyxwvutsrqponmlkjihgfedcba');
});

test('throws an error for non-string input', () => {
    expect(() => reverseString(12345)).toThrow('Input must be a string');
});

test.each([
    ['hello', 'olleh'],
    ['world', 'dlrow'],
    ['12345', '54321'],
    ['!@#$', '$#@!'],
])('reverses %s to %s', (input, expected) => {
    expect(reverseString(input)).toBe(expected);
});
