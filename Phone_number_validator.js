function telephoneCheck(str) {
  let regex = /([\d\-\(\)\s])/g;
  let digits = /\d/;
  let firstDigit = /^\d|^\(/;
  let match;
  let digitsArray = [];
  //   cc = country code is first in the given number
  let ccRegex1 = /1\s\(\d{3}\)\s\d{3}\-\d{4}/;
  let ccRegex2 = /1\s\d{3}\s\d{3}\s\d{4}/;
  let ccRegex3 = /1\s\d{3}\-\d{3}\-\d{4}/;
  let ccRegex4 = /1\(\d{4}\)\d{4}\-\d{4}/;
  //   ac = area code is first in the given number
  let acRegex1 = /\d{3}\-\d{3}\-\d{4}/;
  let acRegex2 = /\(\d{3}\)\d{3}\-\d{4}/;
  let acRegex3 = /\(\d{3}\)\s\d{3}\-\d{4}/;
  let acRegex4 = /\d{3}\s\d{3}\s\d{4}/;
  let acRegex5 = /\d{10}/;

  for (let i = 0; i < str.length; i++) {
    if (digits.test(str[i]) === true) {
      digitsArray.push(Number(str[i]));
    }
  }
  for (let i = 0; i < str.length; i++) {
    match = str[i].match(regex);
    if (match === null) {
      console.log("false: invalid characters");
      return false;
    }
  }

  if (firstDigit.test(str) === false) {
    console.log("false: first char invalid");
    return false;
  }

  if (str[0] === "(" && str[4] !== ")") {
    console.log("false: parantheses left open");
    return false;
  }

  if (digitsArray.length !== 10 && digitsArray.length !== 11) {
    console.log("false: length");
    return false;
  }

  if (digitsArray.length === 11) {
    if (digitsArray[0] !== 1) {
      console.log("false: invalid country code");
      return false;
    }
  }

  if (ccRegex1.test(str)) {
    console.log("cc1");
    return true;
  }
  if (ccRegex2.test(str)) {
    console.log("cc2");
    return true;
  }
  if (ccRegex3.test(str)) {
    console.log("cc3");
    return true;
  }
  if (ccRegex4.test(str)) {
    console.log("cc4");
    return true;
  }
  if (acRegex1.test(str)) {
    console.log("ac1");
    return true;
  }
  if (acRegex2.test(str)) {
    console.log("ac2");
    return true;
  }
  if (acRegex3.test(str)) {
    console.log("ac3");
    return true;
  }
  if (acRegex4.test(str)) {
    console.log("ac4");
    return true;
  }
  if (acRegex5.test(str)) {
    console.log("ac5");
    return true;
  }

  return false;
}

function refactoredTelephoneCheck(str) {
  const regex = /^1?\s?(\d{3}|\(\d{3}\))-?\s?\d{3}-?\s?\d{4}$/
  return regex.test(str);
}

console.log(refactoredTelephoneCheck("(785)-555-5555"));
