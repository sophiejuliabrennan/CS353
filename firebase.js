import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { functions } from "firebase";

// For Firebase 
const firebaseConfig = {
  apiKey: "AIzaSyCA1D7oCzzOhoXa42I4_4zpcUg43DpDQpU",
  authDomain: "plant-tracker-a0476.firebaseapp.com",
  databaseURL: "https://plant-tracker-a0476.firebaseio.com",
  projectId: "plant-tracker-a0476",
  storageBucket: "plant-tracker-a0476.appspot.com",
  messagingSenderId: "928097934116",
  appId: "1:928097934116:web:1eb8bd4fdee5bdb6de31b1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};

const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();

    return {
      uid,
      ...userDocument.data()
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};
