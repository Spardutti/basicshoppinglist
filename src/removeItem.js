function removeItem(e) {
  let p = e.target.parentNode;
  let div = p.parentNode;
  let divContainer = document.querySelector(".display");

  firebase
    .firestore()
    .collection("task")
    .doc(div.id)
    .delete()
    .then(() => {
      divContainer.removeChild(div);
    });
}

export { removeItem };
