import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA0afyC_lVaXG_P5TzWYMMC9QB7adCRtDw",
  authDomain: "clothes-store-db.firebaseapp.com",
  databaseURL: "https://clothes-store-db.firebaseio.com",
  projectId: "clothes-store-db",
  storageBucket: "clothes-store-db.appspot.com",
  messagingSenderId: "755885655676",
  appId: "1:755885655676:web:2f78ad54e9964044ac2bf9"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
