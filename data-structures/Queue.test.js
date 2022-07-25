import { jest } from '@jest/globals';
import Queue from "./Queue";

describe('Queue functionality', () => {
  test('New queue', () => {
    const myQueue = new Queue(1,2,3);
    expect(myQueue.queue).toEqual([1,2,3]);
  });
  test('Enqueue() functionality', () => {
    const myQueue = new Queue(1,2,3);
    expect(myQueue.enqueue(10)).toBe(4);
    expect(myQueue.queue).toEqual([1,2,3,10]);
  });
  test('Dequeue() functionality', () => {
    const myQueue = new Queue(1,2,3);
    expect(myQueue.dequeue()).toBe(1);
    expect(myQueue.queue).toEqual([2,3]);
  });
  test('Peek() functionality', () => {
    const myQueue = new Queue(1,2,3);
    expect(myQueue.peek()).toBe(1);
  });
  test('isEmpty() functionality', () => {
    const myQueue = new Queue(1);
    expect(myQueue.isEmpty()).toBe(false);
    myQueue.dequeue();
    expect(myQueue.isEmpty()).toBe(true);
  });
  test('getLength() functionality', () => {
    const myQueue = new Queue(1,2,3);
    expect(myQueue.getLength()).toBe(3);
  });
})
