let addBtn = document.querySelector("#add");
let delBtn = document.querySelector("#delete");
let unList = document.querySelector("#list");
let addText = document.querySelector("#addText");
let delText = document.querySelector("#delText");
addBtn.addEventListener("click", () => {
  let text = addText.value.trim();
  if (text) {
    let li = document.createElement("li");
    li.textContent = text;
    unList.appendChild(li);
    addText.value = "";
  }
});

delBtn.addEventListener("click", () => {
  let text = delText.value.trim();
  let items = unList.getElementsByTagName("li");
  for (let item of items) {
    if (item.textContent === text) {
      unList.removeChild(item);
      delText.value = "";
      break;
    }
  }
});
