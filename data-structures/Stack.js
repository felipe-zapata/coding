export default class Stack {
  constructor() {
    this.stack = [ ...arguments ];
  }

  pop() {
    return this.stack.pop();
  }

  push(item) {
    return this.stack.push(item);
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  getLength() {
    return this.stack.length;
  }
}