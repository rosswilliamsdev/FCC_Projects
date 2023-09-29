const numerals = {
  1: "I",
  2: "II",
  3: "III",
  4: "IV",
  5: "V",
  9: "IX",
  10: "X",
  40: "XL",
  50: "L",
  90: "XC",
  100: "C",
  400: "CD",
  500: "D",
  900: "CM",
  1000: "M",
};

function convertToRoman(num) {
  const stringNum = num.toString();
  const digits = stringNum.length;
  let numArray = [];
  let result = "";

  for (let i = 0; i < stringNum.length; i++) {
    numArray.push(Number(stringNum[i]));
  }

  if (digits === 1) {
    result += lessThanTen(num);
    console.log(result);
  }

  if (digits === 2) {
    if (num >= 10 || num < 40) {
      for (let i = 0; i < numArray[0]; i++) {
        result += numerals[10];
      }
      if (numArray[1] !== 0) {
        result += lessThanTen(numArray[1]);
      }
      console.log(result);
    }
  }

  return result;
}

convertToRoman(9);

function lessThanTen(num) {
  let result = "";

  let counter = 0;
  if (num > 0 && num < 4) {
    while (counter < num) {
      result += numerals[1];
      counter++;
    }
  } else if (num === 4) {
    result += numerals[4];
  } else if (num === 5) {
    result += numerals[5];
  } else if (num > 5 && num < 9) {
    result += numerals[5];
    for (let i = 5; i < num; i++) {
      result += numerals[1];
    }
  } else {
    result += numerals[9];
  }
  return result;
}

// do different logic based on the number of digits in the num
