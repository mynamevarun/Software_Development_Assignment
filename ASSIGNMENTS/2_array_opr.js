/**
 * A class which perform two operations on an array first is maxMirror() which return the length of
 */
class ArrayOperations {
  maxMirror(arr) {
    try {
      if (!arr.length) {
        throw new Error("Length must not be zero");
      }
    } catch (error) {
      //   console.log(error);
      return error;
    }
    let len = arr.length;
    let count = 0;
    let max = 0;
    for (let i = 0; i < len; i++) {
      count = 0;
      for (let j = len - 1; i + count < len && j > -1; j--) {
        if (arr[i + count] == arr[j]) {
          count++;
        } else {
          if (count > 0) {
            max = Math.max(count, max);
            count = 0;
          }
        }
      }
      max = Math.max(count, max);
    }
    return max;
  }

  countClumps(arr) {
    try {
      if (!arr.length) {
        throw new Error("Length must not be zero");
      }
    } catch (error) {
      //   console.log(error);
      return error;
    }
    let match = false;
    let numberOfClumps = 0;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] == arr[i + 1] && !match) {
        match = true;
        numberOfClumps++;
      } else if (arr[i] != arr[i + 1]) {
        match = false;
      }
    }
    return numberOfClumps;
  }
}

// const ob = new ArrayOperations();
// let b = ob.maxMirror([1, 2, 1, 4]);
// console.log(b);
// const ob = new ArrayOperations();
// let b = ob.maxMirror([]);
// console.log(b);
// const ob = new ArrayOperations();
// let b = ob.maxMirror([1, 4, 5, 3, 5, 4, 1]);
// console.log(b);
const ob = new ArrayOperations();
let b = ob.maxMirror([1, 2, 3, 4, 4, 3, 2, 1, 3, 2, 1]);
console.log(b);
