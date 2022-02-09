import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyB1kJky3mldQ2jJVVFfHQx0zU0tn_nWgVY",
  authDomain: "discord-clone-d067d.firebaseapp.com",
  projectId: "discord-clone-d067d",
  storageBucket: "discord-clone-d067d.appspot.com",
  messagingSenderId: "260110022771",
  appId: "1:260110022771:web:e138a25a1597715b359206",
  measurementId: "G-NH8Z57LP3M"
};




const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth= firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;