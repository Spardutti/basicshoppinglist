import { displayAddedItem } from "./displayAddItem";

function addItem (arr){
    class Item {
        constructor(name, qty){
            this.name = name;
            this.qty = qty;
        }
    }
    
    let itemName = document.querySelector(".item");
    let qty = document.querySelector(".qty");

    let item = new Item(itemName.value, qty.value)
    displayAddedItem(item);

   
}

export { addItem };