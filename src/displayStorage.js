import { removeItem } from "./removeItem";

function displayStorage(arr) {
  
  arr.forEach((e) => {
    let itemName = document.createElement("p");
    let itemQty = document.createElement("p");
    let delBtn = document.createElement("p");
    let divContainer = document.querySelector(".display");
    let itemDiv = document.createElement("div");
    itemDiv.setAttribute("class", "displayItem");
    itemDiv.setAttribute("id", arr.indexOf(e))

    itemName.innerHTML = e.name;
    itemQty.innerHTML = e.qty;
    delBtn.innerHTML = `<i class="fas fa-minus-circle"></i>`;
    delBtn.addEventListener("click", () => {
        removeItem(arr);
    })
    if (e.name != "" && e.qty != "") {
      itemDiv.append(itemName, itemQty, delBtn);
      divContainer.appendChild(itemDiv);
    }
  });
}

export { displayStorage };
