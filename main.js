// Data structure : a named location that can be used to store and organize data e.g. array - a sequence of characters or a collection of elements stored at contiguous memory locations.
// Algorithm : a collection of steps to solve a problem.

// Importance of Learning Data Structures and Algorithms
// a.) Write code that is both time and memory efficient.
// b.) Coding interviews

class Stack {
  constructor() {
    this.items = [];
  }

  add(element) {
    return this.items.push(element);
  }

  remove() {
    if (this.items.length > 0) {
      return this.items.pop();
    }
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length == 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }
}

let stack = new Stack();
stack.add("FIFA23");
stack.add("MKXVI");
stack.add("F1");
stack.add("DREAMS");
stack.add("GTA");
stack.add("NBA");

stack.remove()
console.log(stack.peek());

