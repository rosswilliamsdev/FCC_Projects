let resultObject = {
  status: "",
  change: [],
};

function checkCashRegister(price, cash, cid) {
  let changeDue = cash - price;
  let totalCID = 0;

  for (let i = 0; i < cid.length; i++) {
    totalCID += cid[i][1];
  }

  // index 0 is name, index 1 is value, index 2 is how many are in the cash drawer
  let currency = [
    ["hundred", 100, cid[8][1] / 100],
    ["twenty", 20, cid[7][1] / 20],
    ["ten", 10, cid[6][1] / 10],
    ["five", 5, cid[5][1] / 5],
    ["one", 1, cid[4][1] / 1],
    ["quarter", 0.25, cid[3][1] / 0.25],
    ["dime", 0.1, cid[2][1] / 0.1],
    ["nickel", 0.05, Math.round(cid[1][1] / 0.05)],
    ["penny", 0.01, cid[0][1] / 0.01],
  ];

  if (changeDue > totalCID) {
    resultObject.status = "INSUFFICIENT_FUNDS";
    return resultObject;
  }

  for (let i = 0; i < currency.length; i++) {
    while (changeDue >= currency[i][1]) {
      if (currency[i][2] === 0) {
        i++;
      }
      changeDue -= Number.parseFloat(currency[i][1]).toFixed(2);
      currency[i][2] -= 1;
      resultObject.change.push(currency[i]);
      console.log(currency, changeDue);
    }
  }

  // console.log('Last return:', resultObject)
  return resultObject;
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

// iterate through the change array to see if there is a match for coin/bill name already. If so, += coin/bill value, if not, push the name of the coin/bill and its value to the array
