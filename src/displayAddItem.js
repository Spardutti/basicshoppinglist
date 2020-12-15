import { removeItem } from "./removeItem";

function displayAddedItem(item, arr) {
  let itemName = document.createElement("p");
  let itemQty = document.createElement("p");
  let delBtn = document.createElement("p");
  let divContainer = document.querySelector(".display");
  let itemDiv = document.createElement("div");
  itemDiv.setAttribute("class", "displayItem");
  itemDiv.setAttribute("id", arr.indexOf(item));

  itemName.innerHTML = item.name;
  itemQty.innerHTML = item.qty;
  delBtn.innerHTML = `<i class="fas fa-minus-circle"></i>`;
  delBtn.addEventListener("click", () => {
    removeItem(arr);
})
  if (item.name != "" && item.qty != "") {
    itemDiv.append(itemName, itemQty, delBtn);
    divContainer.appendChild(itemDiv);
  }
}

export { displayAddedItem };
