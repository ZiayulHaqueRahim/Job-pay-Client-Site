import React, { useEffect, useState } from 'react';

import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { AuthContext } from './AuthContext';
import { auth } from '../../firebase/firebase.init';
import axios from 'axios';

const  AuthProvider = ({children}) => {
        const [loading, setLoading] = useState(true);
        const [user,setUser] = useState(null);

        const googleProvider = new GoogleAuthProvider


        const registerUser = (email,password) => {
            setLoading(true)
            return createUserWithEmailAndPassword(auth,email,password);
            
        }

        const signinUser = (email,password) =>{
            setLoading(true)
            return signInWithEmailAndPassword(auth,email,password)
        }

        const signOutUser = () => {
            setLoading(true);
            return signOut(auth);
        }

        const signInwithGoogle = () =>{
            setLoading(false);
            return signInWithPopup(auth, googleProvider);
        }


        useEffect(()=>{
            const unsubscribe = onAuthStateChanged(auth, currentUser =>{
                setUser(currentUser);
                setLoading(false);
                    //grenerating token for backend
                if(currentUser?.email){
                    const userData = { email: currentUser.email};
                    axios.post('http://localhost:3000/jwt',userData,{withCredentials: true} )
                    .then(res =>{
                        console.log('token after jwt',res.data);
                        const token = res.data.token;
                        
                        // local storage set:
                        // localStorage.setItem('token', token);

                    }).catch(error => console.log(error));
                }
                console.log('user logged in'); 
            })

            return () =>{
                unsubscribe();
            }

        },[])


        const authInfo = {
            user,
            loading,
            registerUser,
            signinUser,
            signOutUser,
            signInwithGoogle,
        }

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider