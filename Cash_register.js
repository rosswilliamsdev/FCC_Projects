function checkCashRegister(price, cash, cid) {
  let changeDue = cash - price;
  let totalCID = 0;
  let status = "OPEN";
  let moneyCount = {};
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
  console.log(changeDue, totalCID);
  if (changeDue > totalCID) {
    return {
      status: "INSUFFICIENT_FUNDS",
      change: [],
    };
  } else if (changeDue === totalCID) {
    status = "CLOSED";
  }

  // iterate through currency matrix from largest bill to smallest coin
  for (let i = 0; i < currency.length; i++) {
    // while change due > a given bill/coin
    while (changeDue >= currency[i][1]) {
      // if no more bills/coins move on

      // change decrements based on bill/coin value
      // number of coins/bills available decrements by 1
      currency[i][2] -= 1;
      let key = currency[i][0];
      if (moneyCount[key]) {
        moneyCount[key] += currency[i][1];
      } else {
        moneyCount[key] = currency[i][1];
      }
      changeDue -= currency[i][1];
      changeDue = Number(changeDue.toFixed(2));
      console.log("changeDue", changeDue.toFixed(2));
      if (currency[i][2] === 0) {
        i++;
      }
    }
  }
  console.log(moneyCount);
  console.log({ status, change: Object.entries(moneyCount) });

  return { status, change: Object.entries(moneyCount) };
}
