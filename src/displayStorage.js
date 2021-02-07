import { removeItem } from "./removeItem";

function displayStorage(task, quantity, id) {
  let itemName = document.createElement("p");
  let itemQty = document.createElement("p");
  let delBtn = document.createElement("p");
  let divContainer = document.querySelector(".display");
  let itemDiv = document.createElement("div");
  itemDiv.setAttribute("class", "displayItem");
  itemDiv.setAttribute("id", id);

  itemName.innerHTML = task;
  itemQty.innerHTML = quantity;
  delBtn.innerHTML = `<i class="fas fa-minus-circle"></i>`;
  delBtn.addEventListener("click", removeItem)

  if (task != "") {
    itemDiv.append(itemName, itemQty, delBtn);
    divContainer.appendChild(itemDiv);
  }
}

export { displayStorage };
