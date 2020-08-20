class Node = {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList = {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    var node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  prepend(value) {
    var node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

  removeHead() {
    var oldHead = this.head;
    if (this.head && this.head.next) {
      this.head = this.head.next;
      oldHead.next = null;
    } else {
      this.head = null;
    }
    return oldHead;
  }

  removeTail() {
    var curr = this.head;

    if (!curr) {
      return null;
    } else if (!curr.next) {
      this.head = null;
      return curr;
    }

    var oldTail = this.tail;
    while (curr.next.next) {
      curr = curr.next;
    }
    this.tail = curr;
    this.tail.next = null;
    return oldTail;
  }

  head() {
    return this.head;
  }
}