export default class Queue {
  constructor() {
    this.queue = [ ...arguments ];
  }

  enqueue(item) {
    return this.queue.push(item);
  }

  dequeue() {
    return this.queue.shift();
  }

  peek() {
    return this.queue[0];
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  getLength() {
    return this.queue.length;
  }
}