import {
  generateTransactionTable,
  generateRandomTransactionId,
  addTransaction,
} from "../data/history.js";

let transactionTable = document.querySelector(".transaction-table");
let userInfo = JSON.parse(localStorage.getItem("userInfo"));
let balanceShown = document.querySelector(".balance");
let amountInput = document.querySelector(".amount-input");
let withdrawButton = document.querySelector(".withdraw-button");

balanceShown.innerHTML = `Ksh. ${userInfo.balance}`;
withdrawButton.addEventListener("click", () => {
  withdrawMoney();
});

generateTransactionTable(transactionTable);

function withdrawMoney() {
  let amount = parseFloat(amountInput.value);
  if (
    !isNaN(amount) &&
    amount > 0 &&
    userInfo.balance !== undefined &&
    amount <= userInfo.balance
  ) {
    const newTransaction = {
      id: generateRandomTransactionId(6),
      transaction: "withdrawl",
      amount: amount,
      receiver: "Self",
      Status: "completed",
    };
    addTransaction(newTransaction);
    generateTransactionTable(transactionTable);
    userInfo.balance -= amount;
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    balanceShown.innerHTML = `Ksh. ${userInfo.balance}`;
  } else {
    alert(`Kindly enter a valid amount between 0 and ${userInfo.balance}`);
  }
}
