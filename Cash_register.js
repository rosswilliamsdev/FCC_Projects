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

  if (changeDue > totalCID) {
    changeObject.status = "INSUFFICIENT_FUNDS";
    console.log(changeObject);
    return changeObject;
  }

  console.log("Last return:", changeObject);
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
