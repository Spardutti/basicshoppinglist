function removeItem (arr){
    let p = event.target.parentNode;
    let div = p.parentNode;
    let divContainer = document.querySelector(".display");
    let arrItem = arr[div.id];
    let index = arr.indexOf(arrItem);

    arr.splice(index, 1, 0 );
    localStorage.removeItem("item");
    divContainer.removeChild(div);
}

export { removeItem };