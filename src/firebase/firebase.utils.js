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

export const createUserProfileDocument = async (userAuth, data) => {
    if(!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()

    if(!snapShot.exists){
        const {displayName, email} = userAuth
        const createdAt = new Date()
        try{
            await userRef.set({
                displayName,email,createdAt, ...data
            })
        }catch(err){
            console.log('error here:' + err)
        }
    }
    return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'})

export const signInWithGoogle = () => {
    auth.signInWithPopup(provider)
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey)
    const batch = firestore.batch()
    objectsToAdd.forEach( (obj) => {
        const newDocRef = collectionRef.doc()
        batch.set(newDocRef, obj)
    })
    return await batch.commit()
}

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map( (doc) => {
        const {title,items} = doc.data()

        return{
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    })

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection
        return accumulator
    } , {})
}

export default firebase