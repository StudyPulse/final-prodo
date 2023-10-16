import { createContext, useContext, useEffect, useState } from 'react';
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,

 } from 'firebase/auth';
 import { auth, senddata } from '../firebase';
 import { initializeApp } from "firebase/app";
import firebasefile from "../firebase"

const userAuthContext = createContext();



export function UserAuthContextProvider({children}) {
    
    const [user, setUser] = useState("");
  
    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    function logIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }
    function logOut() {
        return signOut(auth);
    }
    function  googleSignIn() {
        const googleAuthProvider = new GoogleAuthProvider();

        try {
           

          } catch (error) {
            console.log(error.message);
          }
        return signInWithPopup(auth, googleAuthProvider);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);

            if (currentUser) {
                // If a user is logged in, you can access their data
                console.log("User signed in:", currentUser);
                // You can access user data properties
                console.log("User UID:", currentUser.uid);
                console.log("User email:", currentUser.email);
                console.log("User display name:", currentUser.displayName);
                console.log("User photo URL:", currentUser.photoURL);

                try {
                    
                    senddata(currentUser)
                } catch (error) {
                    console.log(error);
                }
            } else {
                // If no user is logged in, currentUser will be null
                console.log("User not signed in");
            }
        });
        return () => {
            unsubscribe();

        }
    }, []);

    return <userAuthContext.Provider value={{ user, signUp, logIn, logOut, googleSignIn }}>{children}</userAuthContext.Provider>
}

export function useUserAuth() {
    return useContext(userAuthContext);
}