import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB7AfNBZAiCEtTrr7lw4P8SEid4FXwyMaQ",
    authDomain: "react-netflix-clone-e7a2b.firebaseapp.com",
    projectId: "react-netflix-clone-e7a2b",
    storageBucket: "react-netflix-clone-e7a2b.firebasestorage.app",
    messagingSenderId: "290899865868",
    appId: "1:290899865868:web:409af8bca614828e7dd929"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

const signUp = async (name,email,password)=>{
    try {
     const res =  await createUserWithEmailAndPassword(auth, email, password);
     const user = res.user;
     await addDoc(collection(db,"user"),{
         uid:user.uid,
         name,
         authProvider:"local",
         email
     })
    } catch (error) {
        console.log(error);
        alert(error)
    }
}

const logIn = async (email,password)=>{
    try {
       await signInWithEmailAndPassword(auth,email,password);
    } catch (error) {
        console.log(error);
        alert(error)
    }
}

const logOut = async ()=>{
    signOut(auth);
}

export {auth,db,signUp,logIn,logOut}