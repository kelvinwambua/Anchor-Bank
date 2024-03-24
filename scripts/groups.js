import { Sacco, Chama } from "../data/groups.js";


localStorage.setItem("sacco", JSON.stringify(Sacco));
localStorage.setItem("chama", JSON.stringify(Chama));

const saccoTable = document.querySelector(".sacco-table");
const chamaTable = document.querySelector(".chama-table");


generateTable(saccoTable, JSON.parse(localStorage.getItem("sacco")));
generateTable(chamaTable, JSON.parse(localStorage.getItem("chama")));


function generateTable(tableElement, data) {
  let tableHTML = "";
  data.forEach((member) => {
    tableHTML += `
      <tr class="text-black">
        <td class="w-4 p-4">
 
        </td>
        <th scope="row" class="px-6">${member.userName}</th>
        <td class="px-6 py-4">${member.balance}</td>
      </tr>
    `;
  });
  tableElement.innerHTML = tableHTML;
}
const addMemberButtons = document.querySelectorAll('button[type="submit"]');
addMemberButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const nameInput = button.parentNode.querySelector("input:nth-of-type(1)");
    const balanceInput = button.parentNode.querySelector(
      "input:nth-of-type(2)"
    );
    const name = nameInput.value.trim();
    const balance = parseFloat(balanceInput.value);

    if (name && !isNaN(balance)) {
      const newMember = {
        id: generateUniqueId(),
        userName: name,
        balance: balance,
      };

      if (index === 0) {
     
        const saccoData = JSON.parse(localStorage.getItem("sacco"));
        saccoData.push(newMember);
        localStorage.setItem("sacco", JSON.stringify(saccoData));
        generateTable(saccoTable, saccoData);
      } else {
   
        const chamaData = JSON.parse(localStorage.getItem("chama"));
        chamaData.push(newMember);
        localStorage.setItem("chama", JSON.stringify(chamaData));
        generateTable(chamaTable, chamaData);
      }

      nameInput.value = "";
      balanceInput.value = "";
    }
  });
});


function generateUniqueId() {
  return Math.random().toString(36).substr(2, 9);
}
