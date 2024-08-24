import { capitalize, reverseString, Calculator, caesarCipher, analyzeArray } from "./exercises";

test('capitalize', () => {
    expect(capitalize('hello')).toBe('Hello');
});

test('reverse string', () => {
    expect(reverseString('hello')).toBe('olleh');
});

test('reverse string (harder)', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
});

const calculator = new Calculator();

test('calculator object add', () => {
    expect(calculator.add(2, 2)).toBe(4);
});

test('calculator object subtract', () => {
    expect(calculator.subtract(2, 2)).toBe(0);
});

test('calculator object divide', () => {
    expect(calculator.divide(2, 2)).toBe(1);
});

test('calculator object multiply', () => {
    expect(calculator.multiply(2, 3)).toBe(6);
});

test('caesar test', () => {
    expect(caesarCipher("defend the east wall of the castle")).toBe("efgfoe uif fbtu xbmm pg uif dbtumf");
});

test('caesar test cases', () => {
    expect(caesarCipher("Defend the East wall of the castle")).toBe("Efgfoe uif Fbtu xbmm pg uif dbtumf");
});

test('caesar test punctuation', () => {
    expect(caesarCipher("defend the east wall of the castle.")).toBe("efgfoe uif fbtu xbmm pg uif dbtumf.");
});

const arrayObj = analyzeArray([1,8,3,4,2,6]);

test('analyze Array average', () => {
    expect(arrayObj.average).toBe(4);
});

test('analyze Array min', () => {
    expect(arrayObj.min).toBe(1);
});

test('analyze Array max', () => {
    expect(arrayObj.max).toBe(8);
});

test('analyze Array length', () => {
    expect(arrayObj.length).toBe(6);
});