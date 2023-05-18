/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth"
import app from "./../../firebase/firebase.config";


export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);
    const [loader,setLoader] =useState(true);
    // eslint-disable-next-line no-unused-vars

    const signUpUser = (email,password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth,email,password);
    };
    const signInUser = (email,password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth,email,password);
    };
    
    const logOutUser = () => {
        setLoader(true);
        return signOut(auth);
    }

    useEffect(() => {
       const unsubscribe = onAuthStateChanged (auth, loggedUser => {
            console.log("login Observer for user",loggedUser);
            setUser(loggedUser);
            setLoader(false);
        })
        return () => {
             unsubscribe();
        }
    },[])

    const authInfo ={
        loader,
        user,
        signUpUser,
        signInUser, 
        logOutUser,
        
    };
  
  
  return <AuthContext.Provider value={authInfo}>
    {children}
     </AuthContext.Provider>
};

export default AuthProvider;