class SparseMatrix {
  constructor(matrix) {
    this.row = matrix.length;
    this.col = matrix[0].length;
    this.sparseMatrix = this.toSparse(matrix);
  }
  //   toSparse(matrix) {
  //       /**
  //        * compactArray is a 2 dimensional array in which first row contains the row
  //        * in original matrix and second row contains the column in original matrix
  //        * and third row contain the value at that row,column pair.
  //        */
  //     let compactMatrix = [[], [], []];
  //     let size = 0;
  //     for (let i = 0; i < this.row; i++) {
  //       for (let j = 0; j < this.col; j++) {
  //         if (matrix[i][j] !== 0) {
  //           compactMatrix[0][size] = i;
  //           compactMatrix[1][size] = j;
  //           compactMatrix[2][size] = matrix[i][j];
  //           size++;
  //         }
  //       }
  //     }
  //     return compactMatrix;
  //   }
  toSparse(matrix) {
    let compactMatrix = [];
    for (let i = 0; i < this.row; i++) {
      for (let j = 0; j < this.col; j++) {
        if (matrix[i][j] !== 0) {
          //   let tempObj = {};
          //   tempObj.row = i;
          //   tempObj.col = j;
          //   tempObj.value = matrix[i][j];
          let tempObj = { row: i, col: j, value: matrix[i][j] };
          compactMatrix.push(tempObj);
        }
      }
    }
    return compactMatrix;
  }

  printSparseMatrix() {
    for (let i = 0; i < this.sparseMatrix.length; i++) {
      console.log(this.sparseMatrix[i]);
    }
  }

  transposeOfMatrix() {
    let transposeMatrix = [];
    this.sparseMatrix.forEach(obj => {
      let tempObj = { row: obj.col, col: obj.row, value: obj.value };
      transposeMatrix.push(tempObj);
    });
    transposeMatrix.sort((a, b) => {
      return a.row - b.row;
    });
    return transposeMatrix;
  }

  isSymmetric() {
    /**
     * Only square matrix can be symmetric so row==col
     * transpose of maytyrix should be equal to original matrix
     */
    if (this.row !== this.col) {
      return false;
    }
    let tempMatrix = this.transposeOfMatrix();
    for (let i = 0; i < tempMatrix.length; i++) {
      if (
        tempMatrix[i].row !== this.sparseMatrix[i].row ||
        tempMatrix[i].col !== this.sparseMatrix[i].col ||
        tempMatrix[i].value !== this.sparseMatrix[i].value
      ) {
        return false;
      }
    }
    return true;
  }
  addition(addendMatrix) {
    // let sumMatrix = new SparseMatrix()
    let sumMatrix = [];
    if (this.row !== addendMatrix.row || this.col !== addendMatrix.col) {
      return "Addition not possible";
    }
    let aPos = 0;
    let bPos = 0;
    while (
      aPos < this.sparseMatrix.length &&
      bPos < addendMatrix.sparseMatrix.length
    ) {
      // console.log("apos", aPos, "bpos", bPos);
      //if row and col of addendMatrix is smaller
      if (this.sparseMatrix[aPos].row > addendMatrix.sparseMatrix[bPos].row) {
        //if row is less
        // console.log("hii there", aPos, bPos);
        sumMatrix.push(addendMatrix.sparseMatrix[bPos]);
        bPos++;
      } else {
        //if row is greater or equal then col should be less
        if (
          this.sparseMatrix[aPos].row == addendMatrix.sparseMatrix[bPos].row &&
          this.sparseMatrix[aPos].col > addendMatrix.sparseMatrix[bPos].col
        ) {
          sumMatrix.push(addendMatrix.sparseMatrix[bPos]);
          bPos++;
        } else {
          //if row and col of calling  matrix is smaller
          if (
            this.sparseMatrix[aPos].row < addendMatrix.sparseMatrix[bPos].row
          ) {
            sumMatrix.push(this.sparseMatrix[aPos]);
            aPos++;
          } else {
            if (
              this.sparseMatrix[aPos].row ==
                addendMatrix.sparseMatrix[bPos].row &&
              this.sparseMatrix[aPos].col < addendMatrix.sparseMatrix[bPos].col
            ) {
              sumMatrix.push(this.sparseMatrix[aPos]);
              aPos++;
            } else {
              // console.log(
              //   "HEllO I am in last else",
              //   this.sparseMatrix,
              //   this.sparseMatrix[aPos].row
              // );
              sumMatrix.push({
                row: this.sparseMatrix[aPos].row,
                col: this.sparseMatrix[aPos].col,
                value:
                  this.sparseMatrix[aPos].value +
                  addendMatrix.sparseMatrix[bPos].value
              });
              aPos++;
              bPos++;
            }
          }
        }
      }
    }

    while (aPos < this.sparseMatrix.length) {
      sumMatrix.push(this.sparseMatrix[aPos++]);
    }
    while (bPos < addendMatrix.sparseMatrix.length) {
      sumMatrix.push(addendMatrix.sparseMatrix[bPos++]);
    }
    return sumMatrix;
  }

  multiplication(multiplicandMatrix) {
    if (this.col !== multiplicandMatrix.row) {
      return "Multiplication can't be possible";
    }
    // transpose b to compare row
    // and col values and to add them at the end
    let multiplicandTranspose = multiplicandMatrix.transposeOfMatrix();
    let apos = 0;
    let bpos = 0;
    console.log(multiplicandTranspose);
    // result matrix of dimension this.row X multiplicandMatrix.col
    // however multiplicandMatrix has been transposed, hence this.row X multiplicandMatrix.row
    let resultMatrix = [];
    // iterate over all elements of A
    for (apos = 0; apos < this.sparseMatrix.length; ) {
      // current row of result matrix
      let r = this.sparseMatrix[apos].row;
      for (bpos = 0; bpos < multiplicandTranspose.length; ) {
        // current column of result matrix
        // data[][0] used as b is transposed
        let c = multiplicandTranspose[bpos].row;
        // temporary pointers created to add all
        // multiplied values to obtain current
        // element of result matrix
        let tempa = apos;
        let tempb = bpos;
        let sum = 0;

        // iterate over all elements with
        // same row and col value
        // to calculate result[r]
        while (
          tempa < this.sparseMatrix.length &&
          this.sparseMatrix[tempa].row == r &&
          tempb < multiplicandTranspose.length &&
          multiplicandTranspose[tempb].row == c
        ) {
          if (this.sparseMatrix[tempa].col < multiplicandTranspose[tempb].col)
            // skip a
            tempa++;
          else if (
            this.sparseMatrix[tempa].col > multiplicandTranspose[tempb].col
          )
            // skip b
            tempb++;
          // same col, so multiply and increment
          else
            sum +=
              this.sparseMatrix[tempa++].value *
              multiplicandTranspose[tempb++].value;
        }
        // insert sum obtained in result[r]
        // if its not equal to 0
        if (sum != 0) {
          resultMatrix.push({ row: r, col: c, value: sum });
        }
        while (
          bpos < multiplicandTranspose.length &&
          multiplicandTranspose[bpos].row == c
        ) {
          // jump to next column
          bpos++;
        }
      }
      while (
        apos < this.sparseMatrix.length &&
        this.sparseMatrix[apos].row == r
      ) {
        // jump to next row
        apos++;
      }
    }
    return resultMatrix;
  }
}

var obj = new SparseMatrix([[1, 0, 0], [0, 2, 0], [0, 0, 3]]);
console.log(obj.sparseMatrix);
console.log(obj.transposeOfMatrix());
console.log(obj.isSymmetric());
// var obj1 = new SparseMatrix([[1, 0, 0], [0, 2, 0], [0, 3, 0]]);
// console.log(obj1.sparseMatrix);
// console.log(obj1.transposeOfMatrix());
// console.log(obj1.isSymmetric());
// var obj = new SparseMatrix([[0, 0, 0], [0, 0, 0], [0, 0, 0]]);
// console.log(obj.sparseMatrix);
// console.log(obj.transposeOfMatrix());
// console.log(obj.isSymmetric());
var obj1 = new SparseMatrix([[1, 2, 3], [4, 0, 0], [0, 0, 0]]);
console.log(obj1.sparseMatrix);
console.log(obj1.transposeOfMatrix());
console.log(obj1.isSymmetric());
console.log("first", obj.sparseMatrix);
// console.log("second", obj1.sparseMatrix);
// console.log("addition is", obj.addition(obj1));
console.log("dfd");
console.log("multiplication is", obj.multiplication(obj1));
