function telephoneCheck(str) {
  const regex = /([0-9\-\(\)\s])/g;
  const lookAround = /(0-9)([?=\/\(\)]) /g;
  let match;

  if (str.length < 8 || str.length > 16) {
    console.log("false: length");
    return false;
  }

  if (str[0] === "1") {
    if (str[1] !== " " && str[1] !== "(") {
      console.log("false: str[1] invalid");
      return false;
    }
  }

  for (let i = 0; i < str.length; i++) {
    match = str[i].match(regex);
    if (match === null) {
      console.log("false: invalid characters");
      return false;
    }
  }

  console.log("true");
  return true;
}

telephoneCheck("1 (555)555-5555");

// country number must be 1 if included
// area code 3 digits plus possibly paranthesis
// phone number 7 digits plus possibly hyphen
// spaces between country, area code, and phone possible
// hyphens between area code & phone number

// use regex lookahead/lookbehind

// eliminate phone numbers based on characters ahead of them
// positive or negative lookahead?




// for (let i = 0; i < str.length; i++) {
//   if (digits.test(str[i]) === true) {
//     digitsArray.push(Number(str[i]));
//   }
// }

// if (firstDigit.test(str) === false) {
//   console.log("false: first char");
//   return false;
// }

// if (digitsArray.length !== 10 && digitsArray.length !== 11) {
//   console.log("false: length");
//   return false;
// }

// if (digitsArray.length === 11) {
//   if (digitsArray[0] !== 1) {
//     console.log("false: wrong country code");
//     return false;
//   }
// }

// if (str[0] === "1") {
//   if (str[1] !== " " && str[1] !== "(") {
//     console.log("false: str[1] invalid");
//     return false;
//   }
// }

// for (let i = 0; i < str.length; i++) {
//   match = str[i].match(regex);
//   if (match === null) {
//     console.log("false: invalid characters");
//     return false;
//   }
}