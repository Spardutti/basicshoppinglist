import { displayAddedItem } from "./displayAddItem";

function addItem(arr) {
  class Item {
    constructor(name, qty) {
      this.name = name;
      this.qty = qty;
    }
  }

  let itemName = document.querySelector(".item");
  let qty = document.querySelector(".qty");

  if(qty.value == ""){
    qty.value = 1
  }
  console.log(qty)
  let item = new Item(itemName.value, qty.value);
  arr.push(item);
  localStorage.setItem("item", JSON.stringify(arr));
  displayAddedItem(item, arr);
}

export { addItem };
