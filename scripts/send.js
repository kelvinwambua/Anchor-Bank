import { contacts } from "../data/contacts.js";
import {
  generateTransactionTable,
  generateRandomTransactionId,
  addTransaction,
} from "../data/history.js";

let balanceShown = document.querySelector(".balance");
let contactsTable = document.querySelector(".user-table");
let userInfo = JSON.parse(localStorage.getItem("userInfo"));
let amountInput = document.querySelector(".amount-input");

balanceShown.innerHTML = `Ksh. ${userInfo.balance}`;

function generateContactsTable() {
  let contactsHtml = "";
  contacts.forEach((contact) => {
    contactsHtml += `
      <tr class="text-black">
        <td class="w-4 p-4">
          <div class="flex items-center">
            <input class="checkbox" id="checkbox-${contact.userName}" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" data-username="${contact.userName}" data-balance="${contact.balance}">
            <label for="checkbox-${contact.userName}" class="sr-only">checkbox</label>
          </div>
        </td>
        <th scope="row" class="px-6">${contact.userName}</th>
        <td class="px-6 py-4">${contact.balance}</td>
      </tr>
    `;
  });
  contactsTable.innerHTML = contactsHtml;
}

generateContactsTable();

let selectedUsers = [];
const checkboxes = document.querySelectorAll(".checkbox");
const sendMoneyButton = document.querySelector(".send-money");

function checkCheckboxes() {
  selectedUsers = [];
  const checkedCheckboxes = document.querySelectorAll(".checkbox:checked");
  checkedCheckboxes.forEach((checkbox) => {
    const username = checkbox.dataset.username;
    const balance = parseInt(checkbox.dataset.balance, 10);
    selectedUsers.push({ username, balance });
  });
  console.log("Selected users:", selectedUsers);
}

sendMoneyButton.addEventListener("click", () => {
  checkCheckboxes();
  withdrawMoney();
});

function withdrawMoney() {
  if (selectedUsers.length === 0) {
    alert("Kindly Select a Contact");
  } else {
    let amount = parseFloat(amountInput.value);
    if (
      !isNaN(amount) &&
      amount > 0 &&
      userInfo.balance !== undefined &&
      amount <= userInfo.balance
    ) {
      const newTransaction = {
        id: generateRandomTransactionId(6),
        transaction: "credit",
        amount: amount,
        receiver: selectedUsers.map((user) => user.username).join(", "),
        Status: "completed",
      };
      addTransaction(newTransaction);

      selectedUsers.forEach((user) => {
        const updatedUser = contacts.find(
          (contact) => contact.userName === user.username
        );
        updatedUser.balance += amount;
      });

      userInfo.balance -= amount * selectedUsers.length;
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      localStorage.setItem("contacts", JSON.stringify(contacts));
      balanceShown.innerHTML = `Ksh. ${userInfo.balance}`;
      generateContactsTable();
    } else {
      alert(`Kindly enter a valid amount between 0 and ${userInfo.balance}`);
    }
  }
}
