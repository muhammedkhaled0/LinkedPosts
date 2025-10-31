import React, { useContext } from 'react'
import {Navbar as MyNav, NavbarBrand, NavbarContent, NavbarItem, Button} from "@heroui/react";
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';

export default function Navbar() {
  const {isloggedIn,setIsloggedIn}=useContext(AuthContext)
  const navigate =useNavigate()
  function logOut(){
    localStorage.removeItem('token',null);
    setIsloggedIn(null);
    navigate('/login')
  }
  return (
    <>
     <MyNav>
      <NavbarBrand>
        <p className="font-bold text-inherit"><NavLink to={'/'}>LinkedPostes</NavLink></p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={NavLink} color="primary" href="#" variant="flat" onClick={logOut}>
            Log Out
          </Button>
        </NavbarItem>
        <NavbarItem>
          <NavLink  color="primary" to={'/profile'}>
             Profile
          </NavLink>
        </NavbarItem>
      </NavbarContent>
    </MyNav>
    </>
  )
}
