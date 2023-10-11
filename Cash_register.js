let changeObject = {
  status: "",
  change: [],
};

function checkCashRegister(price, cash, cid) {
  let changeDue = cash - price;
  let totalCID = 0;

  for (let i = 0; i < cid.length; i++) {
    totalCID += cid[i][1];
  }

  let currency = {
    penny: cid[0][1] / 0.01,
    nickel: Math.round(cid[1][1] / 0.05),
    dime: cid[2][1] / 0.1,
    quarter: cid[3][1] / 0.25,
    one: cid[4][1] / 1,
    five: cid[5][1] / 5,
    ten: cid[6][1] / 10,
    twenty: cid[7][1] / 20,
    hundred: cid[8][1] / 100,
  };

  if (changeDue > totalCID) {
    changeObject.status = "INSUFFICIENT_FUNDS";
    console.log(changeObject);
    return changeObject;
  }

  for (let i = 0; i < cid.length; i++) {}

  // This fits somehow I know it
  for (let i = 0; i < cid.length; i++) {
    while (changeDue >= cid[i][1]) {
      changeDue -= cid[i][1];
    }
  }

  // console.log('Last return:', changeObject)
  return changeObject;
}

checkCashRegister(19.5, 20, [
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
