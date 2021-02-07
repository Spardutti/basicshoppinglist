const { addItem } = require("./addItem");
const { displayStorage } = require("./displayStorage");

let userNameElement = document.getElementById("user-name");
let userPicElement = document.getElementById("user-pic");
let signBtn = document.getElementById("log-in");
let outBtn = document.getElementById("log-out");

const signIn = () => {
  let provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const signOut = () => {
  firebase.auth().signOut();
};

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
}


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

signBtn.addEventListener("click", signIn);
outBtn.addEventListener("click", signOut);

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
      if (checkSignedInWithMessage()) {
        addItem(arr);
        form.reset();
      }
    });
  }
})();

export { getUserName, getProfilePicUrl, checkSignedInWithMessage};
