import { initializeApp } from "firebase/app";

import {
    getAuth,
    SignInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from "firebase/auth";

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD837aPz2a9pmImldGuKzKzbW2wAdG7zS0",
  authDomain: "crwn-clothing-db-e37f4.firebaseapp.com",
  projectId: "crwn-clothing-db-e37f4",
  storageBucket: "crwn-clothing-db-e37f4.appspot.com",
  messagingSenderId: "1016133242627",
  appId: "1:1016133242627:web:a681503de5bcdb8cce2336"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInWhithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, "users", userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);

    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if (!userSnapshot.exists()){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch(error) {
            console.log("Error creating the user", error.message);
        }
    }

    return userDocRef;
};