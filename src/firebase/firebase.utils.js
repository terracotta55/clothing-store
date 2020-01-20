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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
