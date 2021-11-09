import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"


const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyCfTYNV_2nO_oel2ScbM5ik7Tq8GZwWH8c",
    authDomain: "facebook-msn-clone.firebaseapp.com",
    projectId: "facebook-msn-clone",
    storageBucket: "facebook-msn-clone.appspot.com",
    messagingSenderId: "705548254847",
    appId: "1:705548254847:web:60fde4fdc580479188094a",
    measurementId: "G-96Z9N0NT6G"
});

const db=firebaseApp.firestore();

export default db;
