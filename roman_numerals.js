const matrix = [
  ["M", 1000],
  ["CM", 900],
  ["D", 500],
  ["CD", 400],
  ["C", 100],
  ["XC", 90],
  ["L", 50],
  ["XL", 40],
  ["X", 10],
  ["IX", 9],
  ["V", 5],
  ["IV", 4],
  ["I", 1],
];
function convertToRoman(num) {
  let result = "";

  for (let i = 0; i < matrix.length; i++) {
    while (num >= matrix[i][1]) {
      result += matrix[i][0];
      num -= matrix[i][1];
    }
  }
  return result;
}

convertToRoman(36);
