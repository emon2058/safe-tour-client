import React, { useEffect, useState } from 'react';
import { getAuth,onAuthStateChanged, GoogleAuthProvider, createUserWithEmailAndPassword ,signInWithPopup,signOut } from "firebase/auth";
import firebaseAuthentication from '../Pages/Login/Firebase/firebase.init';

firebaseAuthentication()
const useFirebase = () => {
    const [user,setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth()

    const registerUser = (name,email,password,history)=>{
        setIsLoading(true);
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
    }

    const signInUsingGoogle = ()=>{
    setIsLoading(true)
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider)
        
    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])
    const logOut=()=>{
        setIsLoading(true)
        signOut(auth).then(() => {
        // Sign-out successful.
        })
        .catch((error) => {
        // An error happened.
        console.log(error.message);
        })
        .finally(()=>setIsLoading(false))
    }
    return {
        user,
        auth,
        registerUser,
        signInUsingGoogle,
        isLoading,
        logOut
    }
};

export default useFirebase;