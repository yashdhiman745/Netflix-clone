import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut } from "firebase/auth"
import { getFirestore, addDoc, collection } from "firebase/firestore"
import { toast } from "react-toastify";

const firebaseConfig = {
    apiKey: "AIzaSyCLaJQQHCCO9g8UgRxXxGF_u2Nh4nBa6Fg",
    authDomain: "netflix-cln-fed60.firebaseapp.com",
    projectId: "netflix-cln-fed60",
    storageBucket: "netflix-cln-fed60.appspot.com",
    messagingSenderId: "342643990617",
    appId: "1:342643990617:web:8d6f06ac1dc535a7279148"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const signup = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email
        })
    }
    catch (e) {
        console.log('errror-->', e);
        toast.error(e.code.split('/')[1].split('-').join(" "))
    }
}
const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        console.log('errror-->', error);
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }
}
const logout = () => {
    signOut(auth);
}
export { auth, login, logout, signup, db }