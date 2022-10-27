import React, { createContext, useState } from 'react';
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import { FaAppStore } from 'react-icons/fa';
import app from '../../../firebase/firebase.config';
import { useLoaderData } from 'react-router-dom';


const auth = getAuth(app);
export const AuthContext = createContext()

//////////////////////////////////////////////////

const UserContext = ({children}) => {
    const googleProvider = new GoogleAuthProvider();
    

    const [user, setUser] = useState();

    const signInWithGoogle = () =>{
        signInWithPopup(auth, googleProvider);
    }


    const authInfo = {user, signInWithGoogle}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;