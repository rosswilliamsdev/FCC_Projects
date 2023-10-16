function checkCashRegister(price, cash, cid) {
  let changeDue = cash - price;
  let totalCID = 0;
  let status = "OPEN";
  let result = {};
  for (let i = 0; i < cid.length; i++) {
    totalCID += cid[i][1];
  }

  // index 0 is name, index 1 is value/increment, index 2 is how many are in the cash drawer
  let currency = [
    ["HUNDRED", 100, cid[8][1] / 100],
    ["TWENTY", 20, cid[7][1] / 20],
    ["TEN", 10, cid[6][1] / 10],
    ["FIVE", 5, cid[5][1] / 5],
    ["ONE", 1, cid[4][1] / 1],
    ["QUARTER", 0.25, cid[3][1] / 0.25],
    ["DIME", 0.1, cid[2][1] / 0.1],
    ["NICKEL", 0.05, Math.round(cid[1][1] / 0.05)],
    ["PENNY", 0.01, cid[0][1] / 0.01],
  ];
  // if the register is out of change
  if (changeDue > totalCID) {
    return {
      status: "INSUFFICIENT_FUNDS",
      change: [],
    };
  } else if (changeDue === totalCID) {
    return {
      status: "CLOSED",
      change: [...cid],
    };
  }

  for (let i = 0; i < currency.length; i++) {
    let key = currency[i][0];
    let moneyValue = currency[i][1];
    let moneyQuantity = currency[i][2];

    while (changeDue >= moneyValue) {
      if (moneyQuantity <= 0) {
        break;
      }

      if (result[key]) {
        result[key] += moneyValue;
      } else {
        result[key] = moneyValue;
      }

      moneyQuantity -= 1;
      changeDue -= moneyValue;
      changeDue = Number(changeDue.toFixed(2));
    }
  }
  if (changeDue !== 0) {
    return {
      status: "INSUFFICIENT_FUNDS",
      change: [],
    };
  }

  console.log({ status, change: Object.entries(result) });

  return { status, change: Object.entries(result) };
}

checkCashRegister(19.5, 20, [
  ["PENNY", 0.5],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
]);
