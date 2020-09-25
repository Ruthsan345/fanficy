import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCS1gPavSW9l_u3dMZJQqEt8IF0vQnm5Gc",
    authDomain: "react-my-mini-blog-c3427.firebaseapp.com",
    databaseURL: "https://react-my-mini-blog-c3427.firebaseio.com",
    projectId: "react-my-mini-blog-c3427",
    storageBucket: "react-my-mini-blog-c3427.appspot.com",
    messagingSenderId: "62535553341",
    appId: "1:62535553341:web:adee2b6373e1eef91c3554"
  };

  firebase.initializeApp(firebaseConfig)
  firebase.firestore()

  export default firebase