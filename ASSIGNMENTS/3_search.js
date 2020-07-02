/**
 * A class Search having to function linearSearch() which perform linear search on a given array
 * and a binarySearch() yo perform binarySearch on given array.
 */
class Search {
  /**
   * Search the index of a value in an array
   * @param array not be of length zero and having distinct element
   * @param elementToBeSearch  element that is searched in the given array
   * @return index  where the array[index]==elementToBeSearch if not found then return 0
   */
  linaerSearch(array, elementToBeSearch) {
    function linaerSearchRec(remainingArray, startIndexOfArray) {
      if (remainingArray.length == 0) {
        //If array length is 0 return -1
        return -1;
      }
      const [head, ...tail] = remainingArray; //This is array destructuring
      if (head === elementToBeSearch) {
        return startIndexOfArray;
      } else linaerSearchRec(tail, startIndexOfArray + 1);
    }
    return linaerSearchRec(array, 0);
  }

  /**
   * Search the index of a value in an array
   * @param array not be of length zero and should be sorted and having distinct element
   * @param elementToBeSearch  element that is searched in the given array
   * @return index where the array[index]==elementToBeSearch if not found then return -1
   */
  binarySearch(array, elementToBeSearch) {
    function binarySearchRec(arr, start, end) {
      if (start > end) {
        return -1;
      }
      let mid = Math.floor((start + end) / 2);
      if (arr[mid] === elementToBeSearch) {
        return mid;
      } else if (arr[mid] > elementToBeSearch) {
        return binarySearchRec(arr, start, mid - 1);
      } else {
        return binarySearchRec(arr, mid + 1, end);
      }
    }
    return binarySearchRec(array, 0, array.length - 1);
  }
}

//**********TEST CASES FOR LINEAR SEARCH************* */
/*linaerSearch([],4) == -1
linaerSearch([4,6,2,5,9],4) == 0
linaerSearch([67,34,56,38,49,12,46,29],29) == 7
linearSearch([23,12,45,67,47,34],45)==2
linearSearch([1,2,3,4,5,6],9)==-1
*/

//**********TEST CASES FOR BINARY SEARCH************* */
/*binarySearch([],4) == -1
binarySearch([2,4,5,6,9],2) == 0
binarySearch([12,29,34,46,67,78],34) == 2
binarySearch([12,29,34,46,67,78],46)==3
binarySearch([21,29,43,64,67,87],87)==5
binarySearch([1,2,3,4,5,6],9)==-1
*/
