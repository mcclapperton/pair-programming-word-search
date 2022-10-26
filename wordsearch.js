const wordSearch = (letters, word) => {
  if (letters.length === 0) {
    return undefined;
  }
  const horizontalJoin = letters.map((ls) => ls.join(""));
  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  // run it again callback the word with rotate

  let rotated = rotate(letters);
  let verticalJoin = rotated.map((ls) => ls.join(""));
  for (l of verticalJoin) {
    if (l.includes(word)) return true;
  }
  return false;
};

const rotate = function (matrix) {
  let arrLength = matrix.length;
  let rowLength = matrix[0].length;
  let emptyArr1 = [];
  let emptyArr2 = [];

  for (let i = 0; i < rowLength; i++) {
    emptyArr2 = [];

    for (let x = 0; x < arrLength; x++) {
      emptyArr2.push(matrix[x][i]);
    }
    emptyArr1.push(emptyArr2);
  }
  //   console.log("rotatedArray:", emptyArr1);
  return emptyArr1;
};
module.exports = wordSearch;
