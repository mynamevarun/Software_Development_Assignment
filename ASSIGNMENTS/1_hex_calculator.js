class HexCalc {
  constructor(hex1, hex2, radix) {
    this.hex1 = hex1;
    this.hex2 = hex2;
    this.radix = radix;
  }
  add() {
    let sum = this.hexToDec(this.hex1) + this.hexToDec(this.hex2);
    return sum.toString(this.radix);
  }
  subtract() {
    let diff = this.hexToDec(this.hex1) - this.hexToDec(this.hex2);
    return diff.toString(this.radix);
  }
  multiply() {
    let prod = this.hexToDec(this.hex1) * this.hexToDec(this.hex2);
    return prod.toString(this.radix);
  }
  divide() {
    let div = this.hexToDec(this.hex1) + this.hexToDec(this.hex2);
    return div.toString(this.radix);
  }
  hexToDec(num) {
    return parseInt(num, this.radix);
  }
  decToHex(num) {
    return num.toString(this.radix);
  }
}

/** 
 This is a generalise class to perform arithmatic on any base type
 @param num1 and num2 are two numbers of string type
 @param radix is a integer variable
*/
class BaseArithmaticCalculation {
  constructor(num1, num2, radix) {
    this.num1 = parseInt(num1, radix);
    this.num2 = parseInt(num2, radix);
    this.radix = radix;
  }
  /** @return a string value*/
  add() {
    let sum = this.num1 + this.num2;
    return sum.toString(this.radix);
  }
  /** @return a string value*/
  subtract() {
    let diff = this.num1 - this.num2;
    return diff.toString(this.radix);
  }
  /** @return a string value*/
  multiply() {
    let prod = this.num1 * this.num2;
    return prod.toString(this.radix);
  }
  /** @return a string value*/
  divide() {
    let div = this.num1 / this.num2;
    return div.toString(this.radix);
  }
  /** @return a string value*/
  givenBaseToDec(num, radix) {
    return parseInt(num, radix);
  }
  /** @return a string value*/
  decToGivenBase(num, radix) {
    return num.toString(radix);
  }
}
