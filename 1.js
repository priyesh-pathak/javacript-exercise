let btn = document.querySelector("#b1");
let para = document.querySelector("#para");
btn.addEventListener("click", () => {
  para.textContent = "changed text";
});
