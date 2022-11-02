import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import { FaAppStore } from 'react-icons/fa';
import app from '../../../firebase/firebase.config';
import { useLoaderData } from 'react-router-dom';


const auth = getAuth(app);
export const AuthContext = createContext()

//////////////////////////////////////////////////

const UserContext = ({children}) => {

    const githubProvider = new GithubAuthProvider();
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    

    const [user, setUser] = useState({});
    // console.log(user)

    const signInWithGoogle = () =>{
       return signInWithPopup(auth, googleProvider);
    }

    const signInWithFacebook = () =>{
        return signInWithPopup(auth, facebookProvider);
    }

    const signInWithGithub = ()=>{
       return signInWithPopup(auth, githubProvider);
    }

    const signInWithEmailAndPassword = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (name, photoURL) =>{
        updateProfile(auth.currentUser, {displayName: name, photoURL: photoURL})
    }

    const signOutUser = () =>{
        signOut(auth)
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

    const authInfo = {user, signInWithGoogle, signInWithGithub, signInWithFacebook, signInWithEmailAndPassword, updateUserProfile, signOutUser}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;