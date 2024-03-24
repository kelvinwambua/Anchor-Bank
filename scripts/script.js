
import { userInfo } from "../data/user.js";
import { generateTransactionTable } from "../data/history.js";

const openSendButton = document.getElementById("openSend");
const openWithdrawButton = document.getElementById("openWithdraw");
let balanceShown;
let transactionTable;

document.addEventListener("DOMContentLoaded", function () {
  balanceShown = document.querySelector(".balance");
  transactionTable = document.querySelector(".transaction-table");
  generateTransactionTable(transactionTable);
  balanceShown.innerHTML = `Ksh. ${userInfo.balance}`;
});

openSendButton.addEventListener("click", () => {
  const fileUrl = "../src/send.html";
  window.open(fileUrl, "_self");
});

openWithdrawButton.addEventListener("click", () => {
  const fileUrl = "../src/withdraw.html";
  window.open(fileUrl, "_self");
});
