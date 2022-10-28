import React, { createContext, useEffect, useState } from 'react';
import {getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithPopup} from 'firebase/auth';
import { FaAppStore } from 'react-icons/fa';
import app from '../../../firebase/firebase.config';
import { useLoaderData } from 'react-router-dom';


const auth = getAuth(app);
export const AuthContext = createContext()

//////////////////////////////////////////////////

const UserContext = ({children}) => {

    const githubProvider = new GithubAuthProvider();
    const googleProvider = new GoogleAuthProvider();
    

    const [user, setUser] = useState({});
    console.log(user)

    const signInWithGoogle = () =>{
       return signInWithPopup(auth, googleProvider);
    }

    const signInWithGithub = ()=>{
       return signInWithPopup(auth, githubProvider);
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('I am from onAuthStateChange', currentUser);
            setUser(currentUser);
        })
        return () =>{
            unsubscribe();
        }
    },[])

    const authInfo = {user, signInWithGoogle, signInWithGithub}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;