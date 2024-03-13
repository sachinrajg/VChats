import React, { useContext } from 'react'
import {signOut} from "firebase/auth"
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'
<<<<<<< HEAD
=======
import {  Link } from "react-router-dom";

>>>>>>> 4807392904389cdac07cfdc7a319e0ce3f4e560e

const Navbar = () => {
  const {currentUser} = useContext(AuthContext)

  return (
<<<<<<< HEAD
    <div className='navbar'>
      <span className="logo">VChats</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
=======

    <div className='navbar'>
      <span className="logo">VChat</span>
      <div className="user">
      <Link to="/account">
        <img src={currentUser.photoURL} alt="" />
      </Link>
>>>>>>> 4807392904389cdac07cfdc7a319e0ce3f4e560e
        <span>{currentUser.displayName}</span>
        <button onClick={()=>signOut(auth)}>logout</button>
      </div>
    </div>
  )
}

export default Navbar