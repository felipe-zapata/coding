const assert = require('assert');
const lesson1 = require('../lesson1');
const lesson2 = require('../lesson2');
const lesson3 = require('../lesson3');
const lesson4 = require('../lesson4');
const interview = require('../code');
const dcp = require('../dailyCoding');

describe('Lesson1', function() {
  describe('#BinaryGap', function() {
    it('should return the binary gap', function() {
      assert.equal(lesson1.binaryGap(9), 2);
      assert.equal(lesson1.binaryGap(529), 4);
      assert.equal(lesson1.binaryGap(20), 1);
      assert.equal(lesson1.binaryGap(15), 0);
      assert.equal(lesson1.binaryGap(32), 0);
    });
  });
});

describe('Lesson2', function() {
  describe('#OddOcurrencesInArray', function() {
    it('should return the number of odd ocurrences in array', function() {
      assert.equal(lesson2.oddOcurrencesInArray([9, 3, 9, 3, 9, 9, 7]), 7);
      assert.equal(lesson2.oddOcurrencesInArray([9, 3, 9, 3, 9, 9, 9]), 9);
      assert.equal(lesson2.oddOcurrencesInArray([9, 3, 9, 3, 11, 9, 9]), 11);
    });
  });

  describe('#CyclicRotation', function() {
    it('should return the cyclic rotation', function() {
      assert.deepEqual(lesson2.cyclicRotation([3, 8, 9, 7, 6], 3), [9, 7, 6, 3, 8]);
      assert.deepEqual(lesson2.cyclicRotation([0, 0, 0], 1), [0, 0, 0]);
      assert.deepEqual(lesson2.cyclicRotation([1, 2, 3, 4], 4), [1, 2, 3, 4]);
      assert.deepEqual(lesson2.cyclicRotation([], 1), []);
    });
  });  
});

describe('Lesson3', function() {
  describe('#FrogJmp', function() {
    it('should return the number of jumps', function() {
      assert.equal(lesson3.frogJmp(10, 85, 30), 3);
    });
  });
  describe('#PermMissingElem', function() {
    it('should return the missing number', function() {
      assert.equal(lesson3.permMissingElem([2,3,1,5]), 4);
      assert.equal(lesson3.permMissingElem([]), 1);
      assert.equal(lesson3.permMissingElem([2]), 1);
      assert.equal(lesson3.permMissingElem([2,3,4,5]), 1);
      assert.equal(lesson3.permMissingElem([1,2,3,4,5]), 6);
    });
  });

  describe('#TapeEquilibrium', function() {
    it('should return the minimum difference', function() {
      assert.equal(lesson3.tapeEquilibrium([3,1,2,4,3]), 1);
    });
  });
});

describe('Lesson4', function() {
  describe('#PermCheck', function() {
    assert.equal(lesson4.permCheck([4,1,3,2]), 1);
    assert.equal(lesson4.permCheck([4,1,3]), 0);
    assert.equal(lesson4.permCheck([1,4,1]), 0);
    assert.equal(lesson4.permCheck([2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]), 0);
  });

  describe('#MaxCounters', function() {
    assert.deepEqual(lesson4.maxCounters(5, [3,4,4,6,1,4,4]), [3, 2, 2, 4, 2]);
    assert.deepEqual(lesson4.maxCounters(1, [1,2,1]), [2]);
  });
});

describe('Interview', function() {
  assert.deepEqual(interview.resultAges([1,2,5,4,6,8,9,12]), 261);
});

describe('Daily Coding Problem', function() {
  describe('#MultipleArrayMedian', function() {
    assert.deepEqual(dcp.multipleArrayMedian([2,1,5,7,2,0,5]), [2,1.5,2,3.5,2,2,2]);
  });

  describe('#ArrayMedian', function() {
    assert.equal(dcp.arrayMedian([2,1,5,7,2,0,5]), 2);
  });

  describe('#TwoNumbersMean', function() {
    assert.equal(dcp.twoNumbersMean(2,1), 1.5);
    assert.equal(dcp.twoNumbersMean(1,2), 1.5);
    assert.equal(dcp.twoNumbersMean(0,2), 1);
    assert.equal(dcp.twoNumbersMean(2,0), 1);
    assert.equal(dcp.twoNumbersMean(3,0), 1.5);
  });
});