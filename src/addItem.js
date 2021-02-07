import { displayAddedItem } from "./displayAddItem";
import { getUserName } from "./index"
import { getProfilePicUrl, checkSignedInWithMessage } from "./index";

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
  
    return firebase.firestore().collection("task").add({
      name: getUserName(),
      task: itemName.value,
      profilePicUrl: getProfilePicUrl(),
      quantity: qty.value,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    }).catch(function (error) {
      console.error("Error writing new task to database", error)
    })
  
 
 /* let item = new Item(itemName.value, qty.value);
  arr.push(item);
  localStorage.setItem("item", JSON.stringify(arr));
  displayAddedItem(item, arr);*/
}

export { addItem };
