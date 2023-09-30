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
    result = oneDigit(num);
  }

  if (digits === 2) {
    result = twoDigits(num);
  }

  console.log(result);
  return result;
}

convertToRoman(70);

function oneDigit(num) {
  let result = "";

  if (num === 0) return result;

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

function twoDigits(num) {
  let result = "";
  const stringNum = num.toString();
  let numArray = [];

  for (let i = 0; i < stringNum.length; i++) {
    numArray.push(Number(stringNum[i]));
  }

  if (num >= 10 && num < 40) {
    for (let i = 0; i < numArray[0]; i++) {
      result += numerals[10];
    }
    if (numArray[1] !== 0) {
      result += oneDigit(numArray[1]);
    }
  } else if (num >= 40 && num < 100) {
    if (numArray[0] === 4) {
      result = numerals[40] + oneDigit(numArray[1]);
    } else if (numArray[0] === 5) {
      result = numerals[50] + oneDigit(numArray[1]);
    } else if (numArray[0] > 5 && numArray[0] < 9) {
      result += numerals[50];
      for (let i = 5; i < numArray[0]; i++) {
        result += numerals[10];
      }
      if (numArray[1] !== 0) {
        result += oneDigit(numArray[1]);
      }
    } else if (numArray[0] === 9) {
      result = numerals[90] + oneDigit(numArray[1]);
    }
  }
  return result;
}

function threeDigits(num) {
  let result = "";
  const stringNum = num.toString();
  let numArray = [];

  for (let i = 0; i < stringNum.length; i++) {
    numArray.push(Number(stringNum[i]));
  }

  if (num >= 100 && num < 400) {
    for (let i = 0; i < numArray[0]; i++) {
      result += numerals[100];
    }
    if (numArray[1] === 0) {
      result += oneDigit(numArray[2]);
    } else {
      numArray.shift();
      let newNum = Number(numArray.join(""));
      result += twoDigits(newNum);
    }
  }
  return result;
}
