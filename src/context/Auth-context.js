import { createContext, useContext } from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut, onAuthStateChanged} from "firebase/auth"
import { auth } from "../firbase";
import { useEffect, useState } from "react";
const UserContext = createContext()

export const AuthContextProvider = ({children})=>{
    const [user, setUser] = useState({})
    const createUser =(email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logout = () =>{
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe =onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        })
        return () =>{
            unsubscribe()
        }
    },[])
    
    return(
        <UserContext.Provider value={{createUser, user, logout}}>
            {children}
        </UserContext.Provider>
    )
} 

export const UserAuth = () =>{
   return useContext(UserContext)
}

