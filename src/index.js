import { removeItem } from "./removeItem";

const { addItem } = require("./addItem");
const { displayStorage } = require("./displayStorage");

let userNameElement = document.getElementById("user-name");
let userPicElement = document.getElementById("user-pic");
let signBtn = document.getElementById("log-in");
let outBtn = document.getElementById("log-out");

//logs in
const signIn = () => {
  let provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};
//logs out
const signOut = () => {
  firebase.auth().signOut();
};
//inicia firebase Authenticator and listen for changes
const initFirebaseAuth = () => {
  firebase.auth().onAuthStateChanged(authStateObserver);
};

const getProfilePicUrl = () => {
  return firebase.auth().currentUser.photoURL;
};

const getUserName = () => {
  return firebase.auth().currentUser.displayName;
};

const isUserSignedIn = () => {
  return !!firebase.auth().currentUser;
};

const checkSignedInWithMessage = () => {
  if (isUserSignedIn()) {
    return true;
  }
  alert("You must Log-in");
  return false;
};

//load tasks and listen for new tasks
const loadTasks = () => {
  console.log("loading");
  let query = firebase
    .firestore()
    .collection("task")
    .orderBy("timestamp", "desc");

  //listen for the query
  query.onSnapshot((snapshot) => {
    snapshot.docChanges().forEach((change) => {
      if (change.type === "removed") {
        removeItem(change.doc.id);
        console.log("deleted");
      }
      if (change.type === "added") {
        console.log(change.type);
        let task = change.doc.data();
        displayStorage(task.task, task.quantity, change.doc.id);
      }
    });
  });
};
//figure how to delete item with click

const authStateObserver = (user) => {
  if (user) {
    let profilePicUrl = getProfilePicUrl();
    let userName = getUserName();

    //set user profile pic and username
    userNameElement.textContent = userName;
    userPicElement.setAttribute("src", profilePicUrl);

    userNameElement.removeAttribute("hidden");
    userPicElement.removeAttribute("hidden");
    outBtn.removeAttribute("hidden");

    signBtn.setAttribute("hidden", "true");
  } else {
    userNameElement.setAttribute("hidden", "true");
    userPicElement.setAttribute("hidden", "true");
    outBtn.setAttribute("hidden", "true");

    signBtn.removeAttribute("hidden");
  }
};

initFirebaseAuth();

loadTasks();

signBtn.addEventListener("click", signIn);
outBtn.addEventListener("click", signOut);

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", () => {
  if (checkSignedInWithMessage()) {
    addItem();
    form.reset();
  }
});

export { getUserName, getProfilePicUrl, checkSignedInWithMessage };
