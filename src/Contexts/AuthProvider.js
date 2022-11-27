import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../Firebase/Firebase.Config';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    
    const [loading, setLoading] = useState(true);


    const LoginWithGoogle = (googleProvider) => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
      };

    // Create user 
    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
// Login With Email
    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
// update user
    const updateUser = (userInfo) =>{
        return updateProfile(auth.currentUser, userInfo);
    }

    // LogOut 
    const logOut = () =>{
        setLoading(true);
        localStorage.removeItem('accessToken');
        return signOut(auth);
    }

    // Auth  observer
    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
           
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, [])

    const authInfo = {
        LoginWithGoogle,
        createUser,
        signIn,
        updateUser,
        logOut,
        user,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
