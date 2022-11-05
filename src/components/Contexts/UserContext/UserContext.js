import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { FaAppStore } from 'react-icons/fa';
import app from '../../../firebase/firebase.config';
import { useLoaderData } from 'react-router-dom';


const auth = getAuth(app);
export const AuthContext = createContext()

//////////////////////////////////////////////////

const UserContext = ({ children }) => {

    const githubProvider = new GithubAuthProvider();
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();


    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    // console.log(user)

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const signInWithFacebook = () => {
        setLoading(true);
        return signInWithPopup(auth, facebookProvider);
    }

    const signInWithGithub = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }

    const createInWithEmailAndPassword = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (name, photoURL) => {
        setLoading(true);
        return updateProfile(auth.currentUser, { displayName: name, photoURL: photoURL })
    }

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('I am from onAuthStateChange', currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = { user, signInWithGoogle, signInWithGithub, signInWithFacebook, createInWithEmailAndPassword, updateUserProfile, signOutUser, loginUser, loading }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;