const user = {
  id: "sduhdhjna",
  userName: "Andrew",
  phoneNumber: "example",
  pin: "example",
  balance: 100000,
};
let userInfo = JSON.parse(localStorage.getItem("userInfo"));
if (!userInfo) {
  localStorage.setItem("userInfo", JSON.stringify(user));
}
export { userInfo };
