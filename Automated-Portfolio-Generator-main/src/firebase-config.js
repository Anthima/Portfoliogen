import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_urJWJtrJmmI5YKilRefpRRfmZn5jCos",
  authDomain: "portfoliogen-7f4da.firebaseapp.com",
  projectId: "portfoliogen-7f4da",
  storageBucket: "portfoliogen-7f4da.appspot.com",
  messagingSenderId: "628931819172",
  appId: "1:628931819172:web:29d026dcbbc09ad76d5831"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const database = app.firestore();
const projectStorage = firebase.storage();

const providerGoogle = new firebase.auth.GoogleAuthProvider()
var providerGitHub = new firebase.auth.GithubAuthProvider();
var providerFacebook = new firebase.auth.FacebookAuthProvider();

export { auth, database, providerGitHub, providerGoogle, providerFacebook, projectStorage }