const Queue = require('.');

describe('Data Structure : Queue', () => {
  it('Should be class', () => {
    expect(typeof Queue.prototype.constructor).toEqual('function');
  });

  describe('Queue API', () => {
    let queue = null;

    beforeEach(() => {
      queue = new Queue();
    });

    it('Should add element to a queue', () => {
      queue.add(5);
      expect(queue.data).toEqual([5]);
    });

    it('Should remove an element from the queue', () => {
      queue.add(2);
      queue.add(3);
      queue.remove();

      expect(queue.data).toEqual([3]);
    });

    it('Should maintain the order of elements', () => {
      // first in first out
      queue.add(2);
      queue.add(1);
      queue.add(4);
      queue.add(3);

      expect(queue.remove()).toEqual(2);
      expect(queue.remove()).toEqual(1);
      expect(queue.remove()).toEqual(4);
      expect(queue.remove()).toEqual(3);
    });
  });
});