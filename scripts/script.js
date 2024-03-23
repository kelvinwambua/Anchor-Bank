import { user } from "../data/user.js";
const openSendButton = document.getElementById("openSend");
const openWithdrawButton = document.getElementById("openWithdraw");

openSendButton.addEventListener("click", () => {
  const fileUrl = "../src/send.html";

  // Open the file in a new tab or window
  window.open(fileUrl, "_self");
});
openWithdrawButton.addEventListener("click", () => {
  const fileUrl = "../src/withdraw.html";

  window.open(fileUrl, "_self");
});

