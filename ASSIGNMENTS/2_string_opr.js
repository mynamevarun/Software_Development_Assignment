class StringOperations {
  constructor(str1, str2) {
    this.str1 = str1 || "";
    this.str2 = str2 || "";
  }
  /**
   * Compare two strings
   * @param str1 is a string which is to be compared
   * @param str2 is a string with which string is compared
   * @return 1 if both string are equal otherwise return 0
   */
  compare(str1, str2) {
    let flag = 0;
    if (str1.length !== str2.length) {
      return 0;
    } else {
      for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
          flag = 1;
          break;
        }
      }
    }
    if (flag === 0) {
      return 1;
    }
  }
  /**
   * Reverse of a string
   * @param {*} str1 is a string which is to be reversed
   * @returns reverse of str1
   */
  reverseString(str1) {
    let revStr = "";
    for (let i = str1.length - 1; i >= 0; i--) {
      revStr += str1[i];
    }
    return revStr;
  }
  /**
   * Convert the lower case letters of a string to upper case and uppercase to lower case
   * @param str is a string
   */
  reverseCase(str) {
    let revCaseStr = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i] == str[i].toUpperCase()) {
        revCaseStr += str[i].toLowerCase();
      } else {
        revCaseStr += str[i].toUpperCase();
      }
    }
    return revCaseStr;
  }
  /**
   * @param str is a string
   * @return the largest word of the string
   */
  largestWord(str) {
    let word = "";
    let tempObj = {};
    for (let i = 0; i <= str.length; i++) {
      if (str[i] !== " " && i != str.length) {
        word += str[i];
      } else {
        tempObj[word] = word.length;
        word = "";
      }
    }
    let max = -1;
    let longWord = "";
    for (let key of tempObj) {
      if (max <= tempObj[key]) {
        max = tempObj[key];
        longWord = key;
      }
    }
    console.log(max, longWord);
  }
}
