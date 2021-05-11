import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyB82fEu0aCYvn6WOOgVT07EBrPq1JCWrXw",
    authDomain: "clothing-db-15bd6.firebaseapp.com",
    projectId: "clothing-db-15bd6",
    storageBucket: "clothing-db-15bd6.appspot.com",
    messagingSenderId: "74073358659",
    appId: "1:74073358659:web:4d1c5d1bedadc690ed6ff6",
    measurementId: "G-THTBPPF2X8"
  };

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'})

export const signInWithGoogle = () => {
    auth.signInWithPopup(provider)
}

export default firebase