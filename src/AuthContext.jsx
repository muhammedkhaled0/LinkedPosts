import { createContext, useEffect, useState } from "react";
import { getUserDataAPI } from "./services/PostServices";
export const AuthContext=createContext();
export function AuthContextProvider({children}){
    const [userData,setUserData]=useState(null);
    const [isLoggedIn,setIsLoggedIn]=useState(localStorage.getItem('token')!=null);
    async function getUserData(){
      const res=  await getUserDataAPI();
      if(res.message){
        setUserData(res.user);
      }
    }
    useEffect(()=>{
        if(isLoggedIn){
        getUserData();
        }
    },[isLoggedIn])
    return <AuthContext.Provider value={{isLoggedIn,setIsLoggedIn,setUserData,userData}}>
        {children}
    </AuthContext.Provider>
}