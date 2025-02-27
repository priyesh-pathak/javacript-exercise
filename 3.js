let btn = document.querySelector("#sub");
let h4 = document.querySelector("h4");
let i = document.querySelectorAll("input[type='text'],input[type='email']");
let email = document.querySelector("#email");
function isValidEmail(email) {
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
btn.addEventListener("click", (event) => {
  event.preventDefault();
  let emailInput = email.value;
  if (!isValidEmail(emailInput)) {
    alert("enter valid email address");
    return;
  }
  i.forEach((input) => console.log(input.value));
});
