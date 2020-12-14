function displayAddedItem(item){
    let itemName = document.createElement("p");
    let itemQty = document.createElement("p");
    let delBtn = document.createElement("p");
    let div = document.querySelector(".display");

    itemName.innerHTML = item.name;
    itemQty.innerHTML = item.qty;
    delBtn.innerHTML = `<i class="fas fa-minus-circle"></i>`;

    div.append(itemName, itemQty, delBtn);

}

export { displayAddedItem }