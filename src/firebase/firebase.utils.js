import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyCev6eo5qTp01jzrApk2R_LwiCYWbkNHpc",
    authDomain: "crwn-db-11911.firebaseapp.com",
    projectId: "crwn-db-11911",
    storageBucket: "crwn-db-11911.appspot.com",
    messagingSenderId: "553362542875",
    appId: "1:553362542875:web:eb98e278cf547e7b2683be",
    measurementId: "G-BPNJ9B6NKP"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;