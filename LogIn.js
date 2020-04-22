import React from 'react';
import { NavLink } from 'react-router-dom'
import './LogIn.css'
const LogIn = ()=>{
    return(
        <div>
                <h2>
                    You have logged in Successfully
                </h2>
                <NavLink to='/'
                activeClassName='button'>LogOut</NavLink>
        </div>
    )

}

export default LogIn;