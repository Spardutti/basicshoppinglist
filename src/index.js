const { addItem } = require("./addItem");

(function cart(){
let items = [];
let form = document.getElementById("form");
let addBtn = document.getElementById("addBtn")
addBtn.addEventListener("click",() => {
    addItem(items);
    form.reset()
})
})()