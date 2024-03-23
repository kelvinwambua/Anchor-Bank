let transactionTable = document.querySelector(".transaction-table");
let ids = [
  "q45sZa1",
  "pO9rXb2",
  "mN8uCc3",
  "eK7tYd4",
  "lM6zFe5",
  "jP5wGf6",
  "sQ4vHg7",
  "rN3uIh8",
  "oM2tJi9",
  "wK1sLj0",
];
localStorage.setItem("ids", JSON.stringify(ids));
const storedIds = JSON.parse(localStorage.getItem("ids"));
let transactionHistory = [
  {
    id: "q45sZa1",
    transaction: "credit",
    amount: 1000,
    receiver: "Kelvin",
    Status: "completed",
  },
  {
    id: "pO9rXb2",
    transaction: "debit",
    amount: 500,
    receiver: "Alice",
    Status: "completed",
  },
  {
    id: "mN8uCc3",
    transaction: "credit",
    amount: 750,
    receiver: "Bob",
    Status: "completed",
  },
  {
    id: "eK7tYd4",
    transaction: "debit",
    amount: 300,
    receiver: "Charlie",
    Status: "completed",
  },
  {
    id: "lM6zFe5",
    transaction: "credit",
    amount: 1200,
    receiver: "David",
    Status: "completed",
  },
  {
    id: "jP5wGf6",
    transaction: "debit",
    amount: 900,
    receiver: "Eve",
    Status: "completed",
  },
  {
    id: "sQ4vHg7",
    transaction: "credit",
    amount: 800,
    receiver: "Frank",
    Status: "completed",
  },
  {
    id: "rN3uIh8",
    transaction: "debit",
    amount: 600,
    receiver: "Grace",
    Status: "completed",
  },
  {
    id: "oM2tJi9",
    transaction: "credit",
    amount: 1100,
    receiver: "Hannah",
    Status: "completed",
  },
  {
    id: "wK1sLj0",
    transaction: "debit",
    amount: 200,
    receiver: "Isaac",
    Status: "completed",
  },
];

export function generateRandomTransactionId(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let result = "";
  let isUnique = false;
  do {
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    isUnique = !storedIds.includes(result);
    if (!isUnique) {
      result = "";
    }
  } while (!isUnique);
  storedIds.push(result);
  localStorage.setItem("ids", JSON.stringify(storedIds));
  return result;
}

const transactionHistoryString = JSON.stringify(transactionHistory);
localStorage.setItem("transactionHistory", transactionHistoryString);

export let storedTransactionHistory = JSON.parse(
  localStorage.getItem("transactionHistory")
);

export function generateTransactionTable() {
  let transactionHtml = "";
  storedTransactionHistory.forEach((transaction, index) => {
    transactionHtml =
      
      `
        <tr> 
          <th class="text-center text-black text-xl font-normal font-sitefont" >${transaction.id}</th>
          <th class="text-center text-black text-xl font-normal font-sitefont" >${transaction.transaction}</th>
          <th class="text-center text-black text-xl font-normal font-sitefont" >${transaction.receiver}</th>
          <th class="text-center text-black text-xl font-normal font-sitefont" >${transaction.Status}</th>
          <th class="text-center text-black text-xl font-normal font-sitefont" >${transaction.amount}</th>
        </tr>`+ transactionHtml;
  });
  transactionTable.innerHTML = transactionHtml;
}
