
const fireBase = () => {
    return {
        logIn() {
            var provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider);
        },
        name: "hola",
        singOut()
    }
}





export { fireBase };
