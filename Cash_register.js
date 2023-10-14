let result = {
  status: "",
  array: [
    ["HUNDRED", 0],
    ["TWENTY", 0],
    ["TEN", 0],
    ["FIVE", 0],
    ["ONE", 0],
    ["QUARTER", 0],
    ["DIME", 0],
    ["NICKEL", 0],
    ["PENNY", 0],
  ],
  change: [],
};

function checkCashRegister(price, cash, cid) {
  let changeDue = cash - price;
  let totalCID = 0;

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
  // What about if you cannot return exact change?
  if (changeDue > totalCID) {
    result.status = "INSUFFICIENT_FUNDS";
    return result;
  }

  // iterate through currency matrix from largest bill to smallest coin
  for (let i = 0; i < currency.length; i++) {
    // while change due > a given bill/coin
    while (changeDue > currency[i][1]) {
      // if no more bills/coins move on
      if (currency[i][2] === 0) {
        i++;
      }
      // change decrements based on bill/coin value
      changeDue -= Number.parseFloat(currency[i][1]).toFixed(2);
      // number of coins/bills available decrements by 1
      currency[i][2] -= 1;

      // iterate through the result array to see if there is a match for coin/bill name. If so, += coin/bill value, if not, push the name of the coin/bill and its value to the array
      // change the status of the drawer to open or closed
      if (result.array[i].includes(currency[i][0])) {
        result.array[i][1] += currency[i][1];
        currency[i][2] -= 1;

        // console.log('if:', result)
      } else {
        result.array.push(currency[i][i]);
        result.array[i][1] += currency[i][1];
        currency[i][2] -= 1;
        // console.log('else:',result)
      }
    }
  }

  if (Math.round(changeDue) !== 0) {
    result.status = "INSUFFICIENT_FUNDS";
    return result;
  }

  for (let i = 0; i < result.array.length; i++) {
    if (result.array[i][1] > 0) {
      result.change.push(result.array[i]);
    }
  }

  return result;
}

checkCashRegister(3.26, 100, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);
