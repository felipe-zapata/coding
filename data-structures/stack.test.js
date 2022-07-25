import { jest } from '@jest/globals';
import Stack from "./Stack";

describe('Stack functionality', () => {
  test('New stack', () => {
    const myStack = new Stack(1,2,3);
    expect(myStack.stack).toEqual([1,2,3]);
  });
  test('Pop() functionality', () => {
    const myStack = new Stack(1,2,3);
    expect(myStack.pop()).toBe(3);
    expect(myStack.stack).toEqual([1,2]);
  });
  test('Push() functionality', () => {
    const myStack = new Stack(1,2,3);
    expect(myStack.push(10)).toBe(4);
    expect(myStack.stack).toEqual([1,2,3,10]);
  });
  test('Peek() functionality', () => {
    const myStack = new Stack(1,2,3);
    expect(myStack.peek()).toBe(3);
  });
  test('isEmpty() functionality', () => {
    const myStack = new Stack(1);
    expect(myStack.isEmpty()).toBe(false);
    myStack.pop();
    expect(myStack.isEmpty()).toBe(true);
  });
  test('getLength() functionality', () => {
    const myStack = new Stack(1,2,3);
    expect(myStack.getLength()).toBe(3);
  });
})
