const { addItem } = require("./addItem");
const { displayStorage } = require("./displayStorage");

(function cart() {
  if (localStorage.getItem("item") != null) {
    let arr = JSON.parse(localStorage.getItem("item"));
    displayStorage(arr);
    let form = document.getElementById("form");
    let addBtn = document.getElementById("addBtn");
    addBtn.addEventListener("click", () => {
      addItem(arr);
      form.reset();
    });
  } else {
    let arr = [];
    let form = document.getElementById("form");
    let addBtn = document.getElementById("addBtn");
    addBtn.addEventListener("click", () => {
      addItem(arr);
      form.reset();
    });
  }
})();
