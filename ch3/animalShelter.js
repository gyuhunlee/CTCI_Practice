// pet shop strictly "first in first out" basis. People must adpot either the "oldest" of all animals OR "oldest" of dog or cat (based on arrival time)
// Create the data structures to maintain this system and implement operations such as enqueue, dequeueAny, dequeueDog, dequeueCat
const linkedList = require('../data_structure/linkedList');

class Shelter {
  constructor() {
    this.cats = new linkedList();
    this.dogs = new linkedList();
    this.any = new linkedList();
  }

  enqueue(animal) {
    if (animal.type === 'dog') {
      this.dogs.append(animal);
    } else {
      this.cats.append(animal);
    }
    this.any.append(animal);
  }

  dequeueAny() {
    if (this.any.head === this.dogs.head) {
      this.dogs.removeHead();
    } else {
      this.cats.removeHead();
    }
    return this.any.removeHead();
  }

}


var test = new Shelter();

test.enqueue({name: 'bob', type: 'dog'})
test.enqueue({name: 'silly', type: 'dog'})
test.enqueue({name: 'bob', type: 'cat'})
test.enqueue({name: 'candy', type: 'dog'})
console.log(test.dequeueAny())
// console.dir(test, {depth: null})