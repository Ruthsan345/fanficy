import * as firebase from 'firebase'

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
  firebase.firestore()

  export default firebase