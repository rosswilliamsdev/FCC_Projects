function palindrome(str) {
  let regex = /[^A-Za-z0-9]/g;
  str = str.toLowerCase();
  str = str.replace(regex, "");
  let strArray = Array.from(str.trim().toLowerCase());
  let reverseStr = strArray.reverse().join("");

  if (str === reverseStr) {
    return true;
  } else {
    return false;
  }
}

palindrome("A man, a plan, a canal. Panama");
