// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');
// TODO - Part 2
//Test phone number
test('Test phone number 012-345-6789', () => {
    expect(functions.isPhoneNumber('012-345-6789')).toBe(true);
  });

  test('Test phone number (012)-345-6789', () => {
    expect(functions.isPhoneNumber('(012)-345-6789')).toBe(true);
  });

  test('Test phone number 0123456789', () => {
    expect(functions.isPhoneNumber('0123456789')).toBe(false);
  });

  test('Test phone number (111)-111-aaaa', () => {
    expect(functions.isPhoneNumber('(111)-111-aaaa')).toBe(false);
  });

//Test email
  test('Test email rygoh@ucsd.edu', () => {
    expect(functions.isEmail('rygoh@ucsd.edu')).toBe(true);
  });

  test('Test email randomEmail@gmail.com', () => {
    expect(functions.isEmail('randomEmail@gmail.com')).toBe(true);
  });

  test('Test email notemail@', () => {
    expect(functions.isEmail('notemail@')).toBe(false);
  });

  test('Test email @@@.com', () => {
    expect(functions.isEmail('@@@.com')).toBe(false);
  });

//Test password
  test('Test password weak', () => {
    expect(functions.isStrongPassword('weak')).toBe(true);
  });

  test('Test password maxcharlongpass', () => {
    expect(functions.isStrongPassword('maxcharlongpass')).toBe(true);
  });

  test('Test password dog', () => {
    expect(functions.isStrongPassword('dog')).toBe(false);
  });

  test('Test password waytoolongpassword', () => {
    expect(functions.isStrongPassword('waytoolongpassword')).toBe(false);
  });

//Test Date
  test('Test Date 1/1/1111', () => {
    expect(functions.isDate('1/1/1111')).toBe(true);
  });

  test('Test Date 12/12/1111', () => {
    expect(functions.isDate('12/12/1111')).toBe(true);
  });

  test('Test Date 1-1-1111', () => {
    expect(functions.isDate('1-1-1111')).toBe(false);
  });

  test('Test Date 1/1/11111', () => {
    expect(functions.isDate('1/1/11111')).toBe(false);
  });

//Test HexColor
  test('Test HexColor ffffff', () => {
    expect(functions.isHexColor('ffffff')).toBe(true);
  });

  test('Test HexColor 4b33ab', () => {
    expect(functions.isHexColor('4b33ab')).toBe(true);
  });

  test('Test HexColor *****', () => {
    expect(functions.isHexColor('*****')).toBe(false);
  });

  test('Test HexColor 1', () => {
    expect(functions.isHexColor('1')).toBe(false);
  });