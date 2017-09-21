import * as firebase from 'firebase';
import * as firebaseUI from 'firebaseui';

const provider = new firebase.auth.GoogleAuthProvider();

firebase.initializeApp({
  apiKey: "AIzaSyCxt6MFyZYnAC7qWyMGkdMNAeL84XYbQV4",
  authDomain: "chamatodoapp.firebaseapp.com",
  databaseURL: "https://chamatodoapp.firebaseio.com",
  projectId: "chamatodoapp",
  storageBucket: "chamatodoapp.appspot.com",
  messagingSenderId: "625707511356"
});

export default firebase;

export const signIn = () => firebase.auth().signInWithPopup(provider);