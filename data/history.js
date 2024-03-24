
let storedIds = JSON.parse(localStorage.getItem("ids")) || [];
let transactionHistory =
  JSON.parse(localStorage.getItem("transactionHistory")) || [];

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

export function generateTransactionTable(transactionTable) {
  let transactionHtml = "";
  transactionHistory.forEach((transaction) => {
    transactionHtml =
      `
      <tr>
        <th class="text-center text-black text-xl font-normal font-sitefont">${transaction.id}</th>
        <th class="text-center text-black text-xl font-normal font-sitefont">${transaction.transaction}</th>
        <th class="text-center text-black text-xl font-normal font-sitefont">${transaction.receiver}</th>
        <th class="text-center text-black text-xl font-normal font-sitefont">${transaction.Status}</th>
        <th class="text-center text-black text-xl font-normal font-sitefont">${transaction.amount}</th>
      </tr> 
    ` + transactionHtml;
  });
  transactionTable.innerHTML = transactionHtml;
}

export function addTransaction(transaction) {
  transactionHistory.push(transaction);
  localStorage.setItem(
    "transactionHistory",
    JSON.stringify(transactionHistory)
  );
}
