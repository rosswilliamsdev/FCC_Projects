function telephoneCheck(str) {
  const regex = /([0-9\-\(\)\s])/g;
  let match;

  if (str.length >= 8 && str.length <= 14) {
    return false;
  }

  for (let i = 0; i < str.length; i++) {
    match = str[i].match(regex);
    console.log(match);
    if (match === null) {
      return false;
    }
  }

  return true;
}

telephoneCheck("555-555-5555");
