import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/auth';        // for authentication
import 'firebase/storage';     // for storage
import 'firebase/database';    // for realtime database
import 'firebase/firestore';   // for cloud firestore



const firebaseConfig = {
  apiKey: "AIzaSyAxWvZMIu2PGnkN6sZUIZpM1j-M0BTvQ3Q",
  authDomain: "react-blog-ac333.firebaseapp.com",
  databaseURL: "https://react-blog-ac333.firebaseio.com",
  projectId: "react-blog-ac333",
  storageBucket: "react-blog-ac333.appspot.com",
  messagingSenderId: "257793304669",
  appId: "1:257793304669:web:a6dead157d09c5ffb4c5b4"
  };

  firebase.initializeApp(firebaseConfig)
  const storage = firebase.storage();
  export {storage};
  export default firebase
