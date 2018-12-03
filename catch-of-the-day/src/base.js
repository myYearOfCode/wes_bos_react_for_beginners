import Rebase from 're-base'; //allows you to mirror state to firebase
import firebase from "firebase"; //allows you to talk to firebase

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB8CkM4NB87nUMopsB2_GS9ZasMkKLtLhY",
    authDomain: "wesbos-myyearofcode.firebaseapp.com",
    databaseURL: "https://wesbos-myyearofcode.firebaseio.com"
  });

const base = Rebase.createClass(firebaseApp.database());

//this is a named export
export { firebaseApp };

//this is a default export
export default base;
