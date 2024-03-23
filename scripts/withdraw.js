import {
  generateTransactionTable,
  generateRandomTransactionId,
  storedTransactionHistory,
} from "../data/history.js";
let userInfo = JSON.parse(localStorage.getItem("userInfo"));

console.log(storedTransactionHistory);
let balanceShown = document.querySelector(".balance");
let amountInput = document.querySelector(".amount-input");
let withdrawButton = document.querySelector(".withdraw-button");

balanceShown.innerHTML = `Ksh. ${userInfo.balance}`;

withdrawButton.addEventListener("click", () => {
  withdrawMoney();
});
generateTransactionTable();

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
    storedTransactionHistory.push(newTransaction);
    localStorage.setItem(
      "transactionHistory",
      JSON.stringify(storedTransactionHistory)
    );
    generateTransactionTable();
    console.log(storedTransactionHistory);

    userInfo.balance -= amount;
    localStorage.setItem("userInfo", JSON.stringify(userInfo)); // Update localStorage with the modified userInfo object
    balanceShown.innerHTML = `Ksh. ${userInfo.balance}`;
  } else {
    alert(`Kindly enter a valid amount between 0 and ${userInfo.balance}`);
  }
}
