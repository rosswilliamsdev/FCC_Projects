function palindrome(str) {
  let regex = /[^A-Za-z0-9]/g;
  str = str.replace(regex, "");
  let strArray = Array.from(str.trim().toLowerCase());
  let reverseStr = strArray.reverse().join("");
  console.log(strArray);
  if (str === reverseStr) {
    return true;
  } else {
    return false;
  }
}

palindrome("eye");
