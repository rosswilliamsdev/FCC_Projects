const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function rot13(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (alphabet.includes(str[i])) {
      let strIndex = alphabet.indexOf(str[i]);
      let alphaIndex = strIndex - 13;

      if (alphaIndex < 0) {
        alphaIndex += 26;
      }
      result += alphabet[alphaIndex];
    } else {
      result += str[i];
    }
  }
  return result;
}

rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
