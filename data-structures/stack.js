// Stack = LIFO data structure (Last In First Out)
// A stack stores object into a sort of "vertical tower"
// This is like stacking your books on top of each other. The book that you put at last comes first.

// Uses of stacks?
// a.) used in undo/redo features i.e. text editors
// b.) moving back or forward in browser histories
// c.) implement them in backtracking algorithms (navigating a maze, file directories)
// d.) calling functions ( call stack )

// program to implement a stack data structure
class Stack {
  constructor() {
    this.items = [];
  }

  // add elements to the stack
  add(element) {
    return this.items.push(element);
  }

  // remove elements from the stack
  remove() {
    if (this.items.length > 0) {
      return this.items.pop();
    }
  }

  // view the last element
  peek() {
    return this.items[this.items.length - 1];
  }

  // check if the stack is empty
  isEmpty() {
    return this.items.length == 0;
  }

  // check the size of the stack
  size() {
    return this.items.length;
  }

  // empty the stack
  clear() {
    this.items = [];
  }
  // search items in the stack
  search() {
    this.items = [];
  }
}

let stack = new Stack();
stack.add(1);
stack.add(2);
stack.add(3);
stack.add(4);
stack.add(5);

// console.log(stack.items);

// stack.remove();
// console.log(stack.items);

// stack.add(10);
// console.log(stack.items);

// console.log(stack.peek());

// console.log(stack.isEmpty());

// console.log(stack.size());

// stack.clear();
// console.log(stack.items);


